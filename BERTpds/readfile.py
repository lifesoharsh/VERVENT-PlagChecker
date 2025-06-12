import re
import csv
import textract
from os import path
import json

from sentence_transformers import SentenceTransformer
from sentence_similarity import SentenceSimilarity
from dataset import Dataset
import chardet

doc_name = "paper2"
model_save_path = 'output/training_stsbenchmark_distilbert-base-uncased-2021-03-21_15-22-27'
model = SentenceTransformer(model_save_path)
# refdocpath = 
f = open('data/paper2.txt', 'r+')
my_file_data = f.read()
f.close()

referencedLines = re.findall(r"[^.]*\]\.", my_file_data)
references = re.findall(r"[^\[]*\](?!\.).*", my_file_data)

joinReferences = '\n'.join(references)

row_list = []
json_data = []
doc_pds = 0
for sentence in referencedLines:
	elements = []
	json_ele = {}
	ref = re.split(r"\[(.*?)\]", sentence)
	if(len(ref) >= 2):
		text = ref[0]
		refID = ref[1]

		refLinkTxt = re.findall(r"[^"+refID+"]\].*$", joinReferences)
		findList = [x for x in references if x.startswith(refID+']')]
		if len(findList):
			elements.append(refID)
			json_ele['ref_id'] = refID
			elements.append(f'''{text}''')
			json_ele['text'] = f'''{text}'''
			elements.append(f'''{findList[0]}''')
			json_ele['ref_tile'] = f'''{findList[0]}'''
			file_name = ''
			if path.isfile(f'''data/ref_docs/paper2/ref_{refID}.pdf'''):
				file_name = f'''data/ref_docs/paper2/ref_{refID}.pdf''' 
			if path.isfile(f'''data/ref_docs/paper2/ref_{refID}.ps'''):
				file_name = f'''data/ref_docs/paper2/ref_{refID}.ps''' 
			if path.isfile(f'''data/ref_docs/paper2/ref_{refID}.html'''):
				file_name = f'''data/ref_docs/paper2/ref_{refID}.html'''
			if file_name != '': 
				print(f'-------------------- Processing {file_name} ----------------')
				# guessed_encoding = chardet.detect(file_name)
				guessed_encoding = 'utf-8'
				ref_text = textract.process(file_name, input_encoding=None, output_encoding=guessed_encoding)
				f = open("data/ref_docs/paper2/temp.txt", "w")
				f.write(ref_text.decode("utf-8"))
				f.close()
				data = Dataset("data/ref_docs/paper2/temp.txt")
				sentence_sim = SentenceSimilarity(dataset=data, model=model)
				most_similar, dist = sentence_sim.get_most_similar(text)
				dist_num = [round(d[2],3) for d in dist]
				ref_pds = sum(dist_num) / len(dist_num)
				doc_pds = doc_pds + ref_pds
				string_dist = [str(round(d[2],3)) for d in dist]
				print(string_dist)
				elements.append(ref_pds)
				json_ele['ref_pds'] = ref_pds
				elements.append("\n".join(most_similar))
				json_ele['most_similar'] = "\n".join(most_similar)
				elements.append("\n".join(string_dist))
				json_ele['each_dist'] = "\n".join(string_dist)

			row_list.append(elements)
			json_data.append(json_ele)

with open("data/data.csv", "w", newline='') as csv_file:
	writer = csv.writer(csv_file, delimiter=',')
	writer.writerows(row_list)

with open("data/data.json", 'w') as f:
  json.dump(json_data, f, ensure_ascii=False)

doc_pds_count = ( doc_pds / len(references) ) * 10  
print(doc_pds_count)

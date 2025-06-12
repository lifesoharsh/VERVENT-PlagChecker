
import pandas as pd

# Step 1: Define Positive and Negative Samples
positive_samples = [
    ("Plagiarism is copying text without credit.", "Copying others’ work without attribution is plagiarism.", 1),
    ("Machine learning models improve over time.", "Over time, machine learning models adapt and enhance.", 1),
    ("Artificial intelligence is transforming industries.", "AI is reshaping the way industries operate.", 1),
]

negative_samples = [
    ("Plagiarism is copying text without credit.", "Artificial intelligence is transforming industries.", 0),
    ("Machine learning models improve over time.", "The sun rises in the east and sets in the west.", 0),
    ("Artificial intelligence is transforming industries.", "Quantum computing is a fast-emerging field.", 0),
]

# Step 2: Combine Positive and Negative Samples
all_samples = positive_samples + negative_samples

# Step 3: Create a Pandas DataFrame
df = pd.DataFrame(all_samples, columns=["Sentence1", "Sentence2", "Label"])

# Step 4: Shuffle the Dataset
df = df.sample(frac=1, random_state=42).reset_index(drop=True)

# Step 5: Save the Dataset to CSV
df.to_csv("plagiarism_dataset.csv", index=False)

print("Dataset saved to 'plagiarism_dataset.csv'. Here's a preview:")
print(df.head())

from transformers import BertTokenizer

# Initialize the tokenizer
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

# Sample sentences (pairs for comparison)
sentence1 = "Plagiarism is the act of copying someone else's work."
sentence2 = "Copying others' work without credit is plagiarism."

# Tokenize the input sentences
encoded_input = tokenizer(
    sentence1,
    sentence2,
    padding='max_length',       # Pads sequences to the max length
    truncation=True,            # Truncates longer sequences
    max_length=128,             # Maximum token length for BERT
    return_tensors='pt'         # Outputs tensors (PyTorch format)
)

# Inspect the tokenized outputs
input_ids = encoded_input['input_ids']       # Token IDs
attention_mask = encoded_input['attention_mask'] # Attention mask

print("Input IDs:", input_ids)
print("Attention Mask:", attention_mask)

# Optional: Decode tokens back to human-readable form
decoded_tokens = tokenizer.convert_ids_to_tokens(input_ids[0])
print("Decoded Tokens:", decoded_tokens)
from transformers import BertTokenizer, BertModel
import torch

# Initialize BERT tokenizer and model
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained('bert-base-uncased')

# Example sentences
sentences = ["Plagiarism is copying text without credit.",
             "Copying others’ work without attribution is plagiarism."]

# Tokenize the sentences
inputs = tokenizer(sentences, padding=True, truncation=True, return_tensors='pt')

# Get BERT embeddings
with torch.no_grad():
    outputs = model(**inputs)

# The embeddings are in the last hidden state
sentence_embeddings = outputs.last_hidden_state.mean(dim=1)  # Mean pooling to get sentence-level embeddings

print("Sentence Embeddings:", sentence_embeddings)


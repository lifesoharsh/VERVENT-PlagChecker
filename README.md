Here's a **copyable version** of the `README.md` for **Vervent**, now with BERT-based similarity mentioned:

---

````markdown
# Vervent

**Vervent** is a document comparison tool that analyzes the similarity between multiple files and
generates visual, interactive HTML reports. It supports classic difflib-based comparison as well as
future integration with advanced models like **BERT** for semantic similarity detection.

## ✨ Features

- 📄 Supports `.txt`, `.pdf`, `.docx`, and `.odt` formats.
- 🧠 Uses **difflib** to detect similar text blocks.
- 🧬 Optional support for **BERT**-based semantic comparison (planned extension).
- 🎨 Highlights matching blocks in individual HTML comparison files.
- 📊 Summary HTML table with clickable links to individual comparisons.
- 🚫 Gracefully handles unsupported file formats and invalid input.

## 📦 Installation

Install Python dependencies:

```bash
pip install pdfminer.six odfpy tqdm beautifulsoup4 tabulate
````

> Python 3.8+ recommended

## ▶️ Usage

```bash
python main.py --in_dir <input_directory> --out_dir <output_directory> --block_size <int>
```

* `--in_dir`: Required. Path to folder containing files to compare.
* `--out_dir`: Optional. Path where output HTML files will be saved.
* `--block_size`: Optional. Minimum matching block size for highlighting.

If `--out_dir` is not provided, a timestamped folder will be auto-created.

## 📁 Output

* HTML files for each pairwise file comparison with highlighted similar segments.
* A summary `_results.html` file that:

  * Shows all pairwise similarity scores.
  * Links to the corresponding HTML comparison.


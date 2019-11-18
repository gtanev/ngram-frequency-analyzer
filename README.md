# N-Gram Frequency Analyzer

This is a web application written in JavaScript (ES6) 
which implements algorithms for detecting character-level and word-level n-grams in any given text. 
N-gram frequencies are visualized in tabular and histogram form.

Text can be inserted either by dragging and dropping a text file, or writing/pasting directly, into the main text area.

The frequency analyzer has two basic modes of operation, a character-level and a word-level mode. 
The desired mode can be selected by pressing the "Characters" or "Words" radio button, respectively.

The following options can be enabled or disabled by checking the corresponding checkbox flags:
* **Case sensitive** (default: true) - treats input text in a case sensitive manner
* **Ignore whitespace** (default: true) - ignores all whitespace characters 
* **Letters only** (default: false) - ignores all non-alphabetic characters 
* **Presort by count** (default: false) - sorts the resulting n-grams by count (when disabled, preserves the natural order of the n-grams)
    
The following settings can be adjusted by entering a positive integer value:
* **n** (default: 1) - n-gram length (_n_ can be either number of characters or number of words, depending on the selected analyzer mode)
* **max** (default: 100) - maximum number of results to be shown in the visualization area

The **Reset** button clears the input and reverts all settings to their defaults.
The **Analyze** button runs the frequency analyzer algorithm and visualizes the obtained n-gram frequency map.

The integer counter in the upper left corner of the text area shows the number of character (if analyzer is in character-level mode) or words (if analyzer is in word-level mode).
The integer counter in the upper right corner of the visualization area shows the total number of n-grams detected in the input text.


#### Main frameworks and libraries

- React
- Bootstrap
- Recharts
- Zondicons

---
A deployed release of this application is available at [http://ngram-analyzer.s3-website.eu-west-2.amazonaws.com/](http://ngram-analyzer.s3-website.eu-west-2.amazonaws.com/)
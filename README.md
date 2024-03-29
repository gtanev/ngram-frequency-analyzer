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


![screenshot](https://lh3.googleusercontent.com/P2NwwNOQUF2rT2V6CRqaAqoHRdt6owcUzsxq3jxYasYGn1O5IrFLbojHsBSLUWcJM-Wa6uiwldU0NbSIURpw9U8CCcmUlpDXY34-El8h-FKhrRdqHz4YaojN19Pt0SqxXFHHTooVEiOE1V6s0yZCVbg3OL-DfzaIHBc_lIi12_NBBNImU-p_MVPHxS6ieSv-9L8MnvluY8WurK5js9a23_CNzdFCZm3-uceP8NJn7Gn01JpQ2fS8vIh7wYc1KHKjee3J2Aoe-9wc_dq_FQqODtDctRiVbC74G49R84zjCxoJECOQIEE5EnHQE1vuBNI9KR2cUbzWFd7dRqcmdy96PmGNHT-JZ34wkxKUyf_POvyw4rfESwnZlRFETxD6v_ZKamzwAIy9j3qt8Kl4uex9qYxMz-SFUhivd7UUASdxLAX-uBv3u--NK2LApmbuXIRTDq5ktuPBdeONwIOy4jLmdZLdzX_8jEF91urxuRsoEBVopNcbY9BBDT88lNyeZ6uBCKi4cRVBFf4rGpq9ucDB2dFHKx2GWCE7X3P-jknaozKujGK5lKJvPNaqYLxhxkOyd85ewguNaZECDhqHOeEFhB8WCKUWrng08AH3ToOI8v5AUyeDeQEKMoR_IVKziC9eWa7F3XSHnfzLEsG2-yZsWkbzd8oC-TPpDB4u_ZtVPFCtc-I0k25RMJEeU-Xyv1nEtkG7PLehzJswC8QW42Rsu3ZQwudhUm9UAFGhSwqAVFvgxS8-=w1484-h835-no)


#### Main frameworks and libraries

- React
- Bootstrap
- Recharts
- Zondicons

---
A deployed release of this application is available at [http://ngram-analyzer.s3-website.eu-west-2.amazonaws.com/](http://ngram-analyzer.s3-website.eu-west-2.amazonaws.com/)

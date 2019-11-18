import stringUtils from "./stringUtils";

export const getCharNGramFrequencies = params => getNGramFrequencies(params, getCharNGrams);

export const getWordNGramFrequencies = params => getNGramFrequencies(params, getWordNGrams);

const getNGramFrequencies = (params, getNGramsMap) => {
  let { text, caseSensitive = true, lettersOnly = false, sort = false } = params;

  return new Promise((resolve, reject) => {
    if (!text) reject(new Error("Invalid data! Text is missing."));

    if (!caseSensitive) text = text.toUpperCase();

    if (lettersOnly) text = stringUtils.extractAllLetters(text);

    try {
      const nGrams = getNGramsMap({ ...params, text });
      resolve(formatNGrams(sort ? sortNGrams([...nGrams.entries()]) : [...nGrams.entries()]));
    } catch (e) {
      reject(e);
    }
  });
};

const getCharNGrams = params => {
  let { text, n = 1, trim = true, limit } = params;

  if (trim) text = stringUtils.trimAllWhitespace(text);

  if (n > text.length) throw new Error("Invalid data! N-gram length exceeds text length.");

  const nGrams = new Map();

  for (let i = 0; i <= text.length - n; i++) {
    if (limit === nGrams.size) break;
    const str = text.substring(i, i + n);
    nGrams.set(str, nGrams.has(str) ? nGrams.get(str) + 1 : 1);
  }

  return nGrams;
};

const getWordNGrams = params => {
  let { text, n, limit } = params;

  const words = stringUtils.splitIntoWords(text);

  if (n > words.length) throw new Error("Invalid data! N-gram length exceeds total number of words.");

  const nGrams = new Map();

  for (let i = 0; i <= words.length - n; i++) {
    if (limit === nGrams.size) break;
    const wordSequence = words.slice(i, i + n).toString();
    nGrams.set(wordSequence, nGrams.has(wordSequence) ? nGrams.get(wordSequence) + 1 : 1);
  }

  return nGrams;
};

const sortNGrams = array => {
  return array
    .map((ngram, index) => ([...ngram, index]))
    .sort((x, y) => y[1] - x[1] || x[2] - y[2]);
};

const formatNGrams = array => {
  return array.map(([k, v]) => ({ 'n-gram': k, 'count': v }));
};

export default {
  trimAllWhitespace: (text) => {
    return text.replace(/\s/g, '');
  },

  splitIntoWords: (text) => {
    return text.match(/((\b[^\s—]+\b)((?<=\.\w).)?)/g) || [];
  },

  extractAllLetters: (text) => {
    return text.replace(/[^\p{L}\s]+/gu, '');
  }
};
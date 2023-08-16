function topThreeWords(text) {
    // Remove non-alphanumeric characters except for apostrophes
    const cleanString = text.replace(/[^A-Za-z']/g, ' ');
  
    // Convert to lowercase and split into words
    const words = cleanString.toLowerCase().split(/\s+/);
  
    const wordCountMap = new Map();
  
    // Count occurrences of each word
    for (const word of words) {
      if (word.length > 0 && word !== '\'') {
        if (wordCountMap.has(word)) {
          wordCountMap.set(word, wordCountMap.get(word) + 1);
        } else {
          wordCountMap.set(word, 1);
        }
      }
    }
  
    // Sort words by their occurrence count
    const sortedWords = [...wordCountMap.entries()].sort((a, b) => b[1] - a[1]);
  
    // Get the top three words
    const topThreeWords = sortedWords.slice(0, 3).map(entry => entry[0]);
  
    return topThreeWords;
  }

let str =`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`;
 
console.log(topThreeWords(str));


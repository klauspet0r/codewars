function generateHashtag (str) {
  if (str. trim() === '') {
    return false; // Return false for empty strings
  }

  // Split camel case string into individual words
  const words = str.split(/(?=[A-Z])/);

  // Remove special characters and join words with camel case
  const cleanedWords = words.map(word => word.replace(/[^a-zA-Z0-9]/g, ''));
  
  const hashtag = '#' + cleanedWords[0].toUpperCase() + cleanedWords.slice(1).join('');
  
  return hashtag;
}


console.log(generateHashtag("Do We have A Hashtag") == "#DoWeHaveAHashtag" ? 'Passed':'Failed');
function generateHashtag (str) {
  if (str.trim() === '') {
    return false; // Return false for empty strings
  }

  // Split input string into individual words
  const words = str.split(/\s+/);

  // Remove special characters and join words with camel case
  const cleanedWords = words.map(word => word.replace(/[^a-zA-Z0-9]/g, ''));

  // Prepend '#' and join the cleaned words with camel case structure
  const hashtag = '#' + cleanedWords.map((word, index) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');

  if (hashtag.length > 140) {
    return false; // Return false if hashtag is too long
  }

  return hashtag;
}


console.log(generateHashtag("Do We have A Hashtag") == "#DoWeHaveAHashtag" ? 'Passed':'Failed');
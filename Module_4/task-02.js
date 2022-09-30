//Instructions 
//Given an array of strings, words, return a string that has all the words concatenated together
// - spaces are needed in between words
//
//ex. ['how', 'are', 'you'] -> 'how are you'

function wordsToSentence(words) {
    //your code here
    let str = '';
    for(let i = 0; i < words.length; i++) {
      str += words[i] + ' ';
    }
    return str.trim();
  }
  
  //console log results
  console.log('results', wordsToSentence(['hi', 'all', 'yo']));

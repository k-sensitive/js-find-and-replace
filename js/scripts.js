var replace = function(string, original, replacement){
  var wordArray = string.split(" ");

  for(var i = 0; i < wordArray.length; ++i){
    if(wordArray[i] === original){
      wordArray[i] = replacement;
    }
  }

  return wordArray.join(" ");
};
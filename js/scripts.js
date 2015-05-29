var findAndReplace = function(string, original, replacement){
  var wordArray = string.split(" ");

  for(var i = 0; i < wordArray.length; ++i){
    if(wordArray[i] === original){
      wordArray[i] = replacement;
    }
  }

  return wordArray.join(" ");
};

$(document).ready(function(){
  $("form#inputForm").submit(function(event){
  var inputString = $("input#string").val();
  var inputOriginal = $("input#original").val();
  var inputReplacement = $("input#replacement").val();
  var result = findAndReplace(inputString, inputOriginal, inputReplacement);
  
  $("#final").text(result);
  $("#result").show();
  event.preventDefault();
  });
});
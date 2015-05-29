var findAndReplace = function(string, original, replacement){
  return string.split(original).join(replacement);
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
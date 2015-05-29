var replace = function(string, original, replacement){
  if(string === original){
    string = replacement;
  }
  return string;
};
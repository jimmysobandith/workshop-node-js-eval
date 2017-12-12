exports.run = function(input) {
	var arraySplit = input.split("");
	var tmpFinal = "";
  
  for(var i = 0; i<arraySplit.length; i++)
  {
	if(arraySplit[i] < 6)
	{
		tmpFinal = tmpFinal + arraySplit[i].toString();
	}
  }
  
  return tmpFinal;
};

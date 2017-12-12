exports.run = function(input) {

	var tmpResult = 0;
	
	for(var i = 0; i<input.length; i++)
	{
		if(input[i].operator == "add")
		{
			tmpResult = tmpResult + input[i].value;
		}
		else
		{
			tmpResult = tmpResult - input[i].value;
		}
	}
	
	return tmpResult;
};

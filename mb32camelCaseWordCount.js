
function countWords(str)
{
	let count = 1;      //    kyu ki capital letter se count karega is liye  1 se count karege

	for (let i = 0; i < str.length ; i++) {
		if (str[i]>= 'A' && str[i]<= 'Z')
			count++;
	}

	return count;
}
	
	console.log( countWords('geeksForGeeks'));
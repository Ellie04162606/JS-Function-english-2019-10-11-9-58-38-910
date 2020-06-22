function countWords(message){
	var a = message.split("");
	var status = 0;
	var a = a + ' ';
	var count = 0;
	for(var i = 0;i < a.length;i++){
		if(a[i]!= ' '){
			status = 1;
		} else{
			count += 1;
			status = 0;
		}
	}
	return count;
}
console.log(countWords('Good morning, I love JavaScript.'));

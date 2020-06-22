function palindrome(message){
	var a = message.split("");
	var y=true;
	for (var i=0;i<a.length;i++){
		if(a[i]==a[a.length-1-i]){
			return y;
		} else{
			return y = false;
			break;
		}
	}
}
console.log(palindrome('hello'));
console.log(palindrome('abcba'));
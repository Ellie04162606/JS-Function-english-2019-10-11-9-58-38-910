function palindrome(message){
	var a = message.split("");
	return a.sort().join("");
}
console.log(palindrome('hello'));
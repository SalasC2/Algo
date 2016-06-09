function palindrome(string) {
	//iterators i until it is less than string.length
	for (var i = 0; i < string.length; i++){ 
		//if statement for palindrome
		if (string[i] == string[(string.length - 1) - i]) { 
			console.log(string +" is Reversable!!");
			return true;
			
		} else { 
			console.log(string + " is not the same!");
			return false;
	    }
	}
}

//subtracting i is included because without subtracting from //it, string.length - 1 will remain 4 due nothing affecting the actual operation
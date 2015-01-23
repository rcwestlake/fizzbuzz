$(document).ready(function() {
	for (var num = 1; num <= 100; num++) {
	if (num % 3 == 0) {
		return ('fizz');
	}
	else if (num % 5 == 0) {
		return ('buzz');
	}
	else if (num % 3&&num % 5) {
		return ('fizzbuzz');
	}
	else {
		return num;
	}
	$(body).append(num)
}	

}); //$(document).ready(function) end line
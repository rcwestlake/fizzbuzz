$(document).ready(function() {
	for (var num = 1; num <= 100; num++) {
		if (num % 3 == 0 && num % 5 == 0) {
			$('#fizzylist ul').append("<li> 'FIZZBUZZ' </li>");
		}	
		else if (num % 3 == 0) {
			$('#fizzylist ul').append("<li> 'fizz' </li>");
		}
		else if (num % 5 == 0) {
			$('#fizzylist ul').append("<li> 'buzz' </li>");
		}
		else {
			$('#fizzylist ul').append("<li> + num + </li>");
		}
	}	

}); //$(document).ready(function) end line
$(document).ready(function() {
	for (var num = 1; num <= 100; num++) {
	if (num % 3 == 0) {
		$('.fizzylist').append('fizz');
	}
	else if (num % 5 == 0) {
		$('.fizzylist').append('buzz');
	}
	else if (num % 3&&num % 5) {
		$('.fizzylist').append('fizzbuzz');
	}
	else {
		$('.fizzylist').append(num);
	}
	$('.fizzylist').append(num)
}	

}); //$(document).ready(function) end line
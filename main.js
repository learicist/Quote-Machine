$(document).ready(function() {
	$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
		function(json) {
         	$("#quote").html(json.quoteText);
			$("#author").html(json.quoteAuthor);
		}
	);

	function colorChange() {
		var colors = [
			{
				text: "#55c9a4",
				main: "#557ac9",
				body: "#68c955"
			},
			{
				text: "#fab187",
				main: "#a287fa",
				body: "#87fabd"
			},
			{
				text: "#d2db4e",
				main: "#db4e8b",
				body: "#9e4edb",
			},
		];

		var colorRandom = Math.floor(Math.random()*colors.length);

		console.log(colorRandom);

		$('.main').css('background-color', colors[colorRandom].main);
		$('body').css('background-color', colors[colorRandom].body);
		$('.textbox').css('color', colors[colorRandom].text);

	}


	$("#generate").on("click", function(json) {

		$('body').fadeOut(1);
		//set timeOut() before fadeIn or they'll happen together
		$('body').fadeIn(1100);

		$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
			function(json) {
         		$("#quote").html(json.quoteText);
				$("#author").html(json.quoteAuthor);
			});

		colorChange();

		});

	$("#tweet").on("click", function(){
		var quote = $("#quote").text();
		var author = $("#author").text();
		var currentQuote = (quote + " - " + author);

		if (currentQuote.length > 140) {

			var arrQuote = quote.split("");
			var tweetQuote = arrQuote.slice(0, 112).join("");
			currentQuote = (tweetQuote + "... - " + author);
		}

		window.open("https://twitter.com/intent/tweet?text=" + currentQuote);
	});

});

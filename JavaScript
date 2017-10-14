$(document).ready(function() {
	$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", 
		function(json) {
        	$("#quote").html(json.quoteText);
			$("#author").html(json.quoteAuthor);
		});
	function colorChange() {
		var colors = [
			{
				text: "#ffcc00", 
				main: "#9900ff", 
				body: "#ff4d00"
			},
			{
				text: "#bf1948",
				main: "#9bbf19",
				body: "#19bf61",
			},
			{
				text: "#8ac443",
				main: "#7d43c4",
				body: "#c45f43",
			},
			{
				text: "#b33016",
				main: "#4a16b3",
				body: "#7fb316",
			},
			{
				text: "#b86518",
				main: "#6318b8",
				body: "#18b8ad",
			},
		];
		var colorRandom = Math.floor(Math.random()*colors.length);
		$('.main').css('background-color', colors[colorRandom].main);
		$('body').css('background-color', colors[colorRandom].body);
		$('.textbox').css('color', colors[colorRandom].text);
	}
	$("#generate").on("click", function(json){
		$('body').fadeOut(1);
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
		var currentQuote = (quote + " -" + author);
		if (currentQuote.length > 140) {
			var arrQuote = quote.split("");
			var tweetQuote = arrQuote.slice(0, 112).join("");
			currentQuote = (tweetQuote + "... -" + author);
		}
		window.open("https://twitter.com/intent/tweet?text=" + currentQuote);
	});
	
});

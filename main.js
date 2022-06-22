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
				text: "#65abd1", 
				main: "#d1a465", 
				body: "#d16e65"
			},
			{
				text: "#8730ba",
				main: "#a8ba30",
				body: "#ba7e30",
			},
			{
				text: "#d41b9f",
				main: "#43d41b",
				body: "#d4361b",
			},
			{
				text: "#23d63e",
				main: "#d68323",
				body: "#d623ca",
			},
			{
				text: "#d2db4e",
				main: "#db534e",
				body: "#584edb",
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

$(document).ready(function () {
// LEVEL 1
//	$("h2");
//	$("span").text("$100");
//	$(".vacation h2").text("Gdansk, Poland"); // 1.11
//	$("#vacations .america");                 // 1.13

// LEVEL 3
//	$("#tours > li");       // 2.4
//	$(".asia, .sale");      // 2.5
//	$("#tours li:first");   // 2.6
//	$("#tours > li:even");  // 2.7
//	$("#vacations").find(".america");   // 2.9
//	$("#vacations li").first();         // 2.10
//	$("#vacations li").last();          // 2.11
//	$("#vacations li").last().prev();   // 2.12
//	$("#tours .featured").parent();     // 2.13
//	$("#tours").children("li");         // 2.14

// LEVEL 3
	$(document).ready(function() {
		$('.tour').on('click', 'button', function() {
			var tour = $(this).closest('.tour');
			var discount = tour.data('discount');
			var message = $('<span>Call 1-555-jquery-air for a $' + discount + ' discount.</span>');
			tour.append(message);
			$(this).remove();
		});
	});

});

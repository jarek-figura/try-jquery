$(document).ready(function () {
// LEVEL 1
//	$("h2");
//	$("span").text("$100");
//	$(".vacation h2").text("Gdansk, Poland"); // 1.11
//	$("#vacations .america");                 // 1.13

// LEVEL 2
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
//	$(document).ready(function() {
//		$('#filters').on('click', '.on-sale', function () {
//			$('.highlight').removeClass('highlight');
//			$('.tour').filter('.on-sale').addClass('highlight');
//		});
//		$('#filters').on('click', '.featured', function() {
//			$('.highlight').removeClass('highlight');
//			$('.tour').filter('.featured').addClass('highlight');
//		});
//	});

// LEVEL 4
//	$('.see-photos').on('click', function (event) {
//		event.stopPropagation();
//		event.preventDefault();
//		$(this).closest('.tour').find('.photos').slideToggle();
//	});
//	$('.tour').on('click', function() {
//		alert('This event handler should not be called.');
//	});

// LEVEL 5
	var tour = $('.tour');
	tour.on('mouseenter', function() {
		$(this).addClass('highlight');
		$(this).find('.photos').show();
		$(this).find('.per-night').animate({'opacity': '1', 'top': '-14px'}, 'fast');
	});
	tour.on('mouseleave', function() {
		$(this).removeClass('highlight');
		$(this).find('.per-night').animate({'top': '0px', 'opacity': '0'}, 'fast');
		$(this).find('.photos').hide();
	});

});

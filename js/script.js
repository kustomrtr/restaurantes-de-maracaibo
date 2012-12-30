window.addEventListener("load",function() {
  // Set a timeout...
  setTimeout(function(){
    // Hide the address bar!
    window.scrollTo(0, 1);
  }, 0);
});

function scrollToElement(selector, time, verticalOffset) {
    time = typeof(time) != 'undefined' ? time : 1000;
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $(selector);
    offset = element.offset();
    offsetTop = offset.top + verticalOffset;
    $('html, body').animate({
        scrollTop: offsetTop
    }, time);
}
	
jQuery(document).ready(function($) {
    
    // Contact Form
    $('#contactform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
		$('#message').hide();

 		$('#submit')
			.before('<img src="images/ajax-loader.gif" class="loader" />')
			.attr('disabled','disabled');

		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			phone: $('#phone').val(),
			subject: $('#subject').val(),
			comments: $('#comments').val(),
			verify: $('#verify').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform').slideUp('slow');

			}
		);

		});

		return false;

	});

	//if mobile phone else - Desktop 
	if ("ontouchstart" in document.documentElement) {
		$('.hover').bind('touchstart touchend', function(e) {
			$(this).toggleClass('hover-effect');
		});
		
		$('.pagination a').bind('touchstart touchend', function(e) {
			$(this).toggleClass('hover-effect');
		});
		
		$('#menu li a').bind('touchstart touchend', function(e) {
			$(this).toggleClass('hover-effect');
		});
		
		$('.button').bind('touchstart touchend', function(e) {
			$(this).toggleClass('hover-effect');
		});
		
		$('#menu-trigger').bind('touchstart touchon', function(e) {
			e.preventDefault();
			$('#menu').slideToggle(500);
		});			
		
		$('#map-overlay').bind('click', function(e) {
			e.preventDefault();
			scrollToElement('#map-overlay', 500);
			$(this).toggleClass('hover-effect');
			$('#contact-map iframe').toggleClass('hover-effect');
			$('#map-overlay-close').css({opacity : 1});
		});
		
		$('#map-overlay-close').bind('touchstart touchon', function(e) {
			e.preventDefault();
			$('#map-overlay').toggleClass('hover-effect');
			$('#contact-map iframe').toggleClass('hover-effect');
			$(this).css({opacity : 0});			
		});	
	} else {
		$('.hover').bind('hover', function(e) {
			$(this).toggleClass('hover-effect');
		});
		
		$('#menu-trigger').bind('click', function(e) {
			e.preventDefault();
			$('#menu').slideToggle(500);
		});
		
		$('.pagination a').bind('hover', function(e) {
			$(this).toggleClass('hover-effect');
		});
		
		$('.button').bind('hover', function(e) {
			$(this).toggleClass('hover-effect');
		});
		
		$('#menu li a').bind('hover', function(e) {
			$(this).toggleClass('hover-effect');
		});
		
		$('#map-overlay').bind('click', function(e) {
			e.preventDefault();
			scrollToElement('#map-overlay', 500);
			$(this).toggleClass('hover-effect');
			$('#contact-map iframe').toggleClass('hover-effect');
			$('#map-overlay-close').css({opacity : 1});
		});
		
		$('#map-overlay-close').bind('click', function(e) {
			e.preventDefault();
			$('#map-overlay').toggleClass('hover-effect');
			$('#contact-map iframe').toggleClass('hover-effect');
			$(this).css({opacity : 0});		
		});
	}
	
	$('.gallery').flexslider({
        animation: "slide", // Set "fade" or "slide" for your desire effect
        directionNav: false,
        animationLoop: true,
        controlNav: false,
        smoothHeight: true,
        slideshow: true,
        slideshowSpeed: 4000,
        animationDuration: 600,
    });
    
    $('.photoSwipe a').photoSwipe({
	    captionAndToolbarOpacity: 1
    });
});
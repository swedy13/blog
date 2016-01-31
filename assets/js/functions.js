$('document').ready(function() {	
	$('li').children('div').eq(0).addClass('current-nav'); // See "window.scroll" for more

	(function navHover() {
		$('.nav-links').find('li').mouseenter(function() {
			$('.nav-link').css('visibility','visible');
			$(this).find('.nav-link').addClass('link-highlight');
			$(this).find('.nav-color').addClass('nav-highlight');
		});
		$('.nav-links').find('li').mouseleave(function() {
			$('.nav-link').css('visibility','hidden');
			$(this).find('.nav-link').removeClass('link-highlight');
			$(this).find('.nav-color').removeClass('nav-highlight');
		});		
	})();
});


/* $(window).resize(function() {
	 var width = $('.slider').width();
	 var cardNum = $('.slider').children().length;
	 
	 console.log(cardNum);
	 if (width < 550) {
	 console.log('mobile');
	 }
	 else if (width < 780) {
	 console.log('two');
	 }
	 else if (width < 1038) {
	 console.log('three');
	 }
	 else {
	 console.log('four');
	 }
	 console.log(width);
	 }); */


$(window).scroll(function() {
	var windowPosition	= $(window).scrollTop();

	(function navHighlight() {
		var aboutHeight = $('.about').height();
		var portfolioHeight = aboutHeight + $('.portfolio').height();
		var articlesHeight = portfolioHeight + $('.articles').height();
		var nav = $('li').children('div');
		
		if (windowPosition > aboutHeight) {
			nav.removeClass('current-nav');
			nav.eq(0).addClass('current-nav');
		}
		if (windowPosition > aboutHeight - 1) {
			nav.removeClass('current-nav');
			nav.eq(1).addClass('current-nav');
		}
		/* if (windowPosition > aboutHeight) {
			 nav.removeClass('current-nav');
			 nav.eq(2).addClass('current-nav');
			 }
			 if (windowPosition > aboutHeight) {
			 nav.removeClass('current-nav');
			 nav.eq(3).addClass('current-nav');
			 } */
	})();

	(function parallax() {
		var parallaxWidth		= $('.color-overlay').width();
		var parallaxHeight	= $('.parallax').height();
		var viewedParallax	= windowPosition / parallaxHeight;
		
		if (viewedParallax < 1) {
			var parallaxFilters = 'grayscale(' + viewedParallax + ') brightness(' + (1 - viewedParallax / 2) + ')';
			var parallaxScale = 1 + (viewedParallax * .25);
			var parallaxOffset = -parallaxScale*50;
			/* console.log(parallaxOffset); */
			$('.color-overlay').css({'opacity':(viewedParallax / 2)});
			$('.parallax.about').css({WebkitFilter: parallaxFilters});
			$('.moon').css('right', -51);
		}		
	})();
	
	(function showCards() {
		if ($('#portfolio').offset().top - ($(window).height() / 1.25) < windowPosition) {
			$('.card').each(function(i) {
				setTimeout(function() {
					$('.card').eq(i).animate({opacity: '1.0', right: '0px'}, 450);
				}, 100 * i);
			});
		}		
	})();

	(function portfolioGrid() {
	})();

	(function socialHover() {
		$('.social-row .link').hover(function() {
			if ($(this).hasClass('linkedin')) {
				console.log('LinkedIn');
			}
			if ($(this).hasClass('skype')) {
				console.log('Skype');
			}
			if ($(this).hasClass('email')) {
				console.log('Email');
			}
		});
	})();
});

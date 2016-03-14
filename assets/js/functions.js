$('document').ready(function() {	
  (function navHover() {
    // Show the nav menu links when header is hovered
		$('header').mouseenter(function() {
		  $('.main-nav').find('.nav-link').css('visibility','visible');
		});
		$('header').mouseleave(function() {
		  $('.main-nav').find('.nav-link').css('visibility','hidden');
		});

    // Highlight the link header background when hovered
		$('.nav-links').find('li').mouseenter(function() {
		  $(this).find('.nav-color').addClass('nav-highlight');
		});
		$('.nav-links').find('li').mouseleave(function() {
		  $(this).find('.nav-color').removeClass('nav-highlight');
		});
	})();

  // Highlights the current anchor link.
  // See "window.scroll" for more
  $('li').children('div').eq(0).addClass('current-nav');

  // Shows the home page company logo caption on hover.
  $('.logo-thumb').hover(
    function() {
      $(this).find('.caption').show().css('opacity', 0).animate({opacity: 1}, 300);
    },
    function() {
      $(this).find('.caption').hide();
    });
});


$(window).scroll(function() {
	var windowPosition	= $(window).scrollTop();

  // Highlights the nav anchor link based on home page screen position
	/* (function navHighlight() {
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
	   })(); */

  // Dims the parallax image based on scroll position
	(function parallax() {
		var parallaxWidth		= $('.color-overlay').width();
		var parallaxHeight	= $('.parallax').height();
		var viewedParallax	= windowPosition / parallaxHeight;
		
		if (viewedParallax < 1) {
			var parallaxFilters = 'grayscale(' + viewedParallax + ') brightness(' + (1 - viewedParallax / 2) + ')';
			var parallaxScale = 1 + (viewedParallax * .25);
			var parallaxOffset = -parallaxScale*50;
			$('.color-overlay').css({'opacity':(viewedParallax / 2)});
			$('.parallax.about').css({WebkitFilter: parallaxFilters});
			$('.moon').css('right', -51);
		}		
	})();

  /* var currentHeight = windowPosition / $(window).height();
     console.log(currentHeight); */

  // Displays company logos with a pop-up effect for each logo
	(function showLogos() {
		if ($('#companies').offset().top - ($(window).height() / 1.1) < windowPosition) {
      $('.title').show().addClass('animated fadeInLeft');
			$('.logo-thumb').each(function(i) {
				setTimeout(function() {
					$('.logo-thumb').eq(i)
             .css('visibility', 'visible')
             .addClass('animated bounceInUp');
				}, 150 * i);
      });
		}		
	})();
  
	// Displays portfolio cards with a slide-in effect for each card
	(function showCards() {
		if ($('#portfolio').offset().top - ($(window).height() / 1.6) < windowPosition) {
      $('.portfolio-title').show().addClass('animated zoomIn');

      setTimeout(function() {
		    $('.card').each(function(i) {
				  setTimeout(function() {
					  $('.card').eq(i)
               .css('visibility', 'visible')
               .addClass('animated flipInY');
				  }, 200 * i);
        });
        setTimeout(function() {
          $('.portfolio-link')
             .css('visibility', 'visible')
             .addClass('animated flipInY');
        }, 1400);
      }, 300);      
		}
	})();

  // Displays articles with a zoom-in effect for each card
	(function showArticles() {
		if ($('#articles').offset().top - ($(window).height() / 1.8) < windowPosition) {
      $('.articles-title').show().addClass('animated slideInDown');
      setTimeout(function() {
			  $('.article').each(function(i) {
				  setTimeout(function() {
					  $('.article').eq(i)
               .css('visibility', 'visible')
               .addClass('animated fadeIn');
				  }, 400 * i);
        });
      }, 300);
		}
	})();

	/* (function portfolioGrid() {
	   })(); */

	/* (function socialHover() {
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
	   })(); */
});

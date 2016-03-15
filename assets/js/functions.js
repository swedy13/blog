// ------------------------------------------------------
// *********************  METHODS  **********************
// ------------------------------------------------------
// Portfolio flip-in animation
function portfolioCardFlip(flipSpeed) {
  $('.portfolio-title').show().addClass('animated zoomIn');
  setTimeout(function() {
		$('.portfolio-card').each(function(i) {
			setTimeout(function() {
				$('.portfolio-card').eq(i)
           .css('visibility', 'visible')
           .addClass('animated flipInY');
			}, flipSpeed * i);
    });
  }, 300);
};


// ------------------------------------------------------
// ****************  DOCUMENT METHODS  ******************
// ------------------------------------------------------
$('document').ready(function() {
  // ------------------------------------------------------
  //                   GLOBAL FUNCTIONS
  // ------------------------------------------------------
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


  // ------------------------------------------------------
  //                  HOME PAGE FUNCTIONS
  // ------------------------------------------------------
  // Shows the home page company logo caption on hover.
  $('.logo-thumb').hover(
    function() {
      $(this).find('.caption').show().css('opacity', 0).animate({opacity: 1}, 300);
    },
    function() {
      $(this).find('.caption').hide();
    });


  // ------------------------------------------------------
  //     ARTICLES / CASE STUDIES / PORTFOLIO FUNCTIONS
  // ------------------------------------------------------
  // Fades in the blog posts
  (function blogContentLoad() {
    setTimeout(function() {
      $('.blog-header').css('visibility', 'visible').addClass('animated fadeIn');
    }, 150);
    setTimeout(function() {
      $('.blog-post').each(function(i) {
        setTimeout(function() {
          $('.blog-post').eq(i)
             .css('visibility', 'visible')
             .addClass('animated fadeInUp');
        }, 150 * i);
      });
    }, 750);
  })();

  // Portfolio page card flip
  if ($('div').hasClass('portfolio-page')) {
    portfolioCardFlip(125);
  }
});


$(window).scroll(function() {
	var windowPosition	= $(window).scrollTop();

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
      portfolioCardFlip(150);
      setTimeout(function() {
        $('.portfolio-more')
           .css('visibility', 'visible')
           .addClass('animated flipInY');
      }, 1400);
		}
	})();

  // Displays articles with a zoom-in effect for each card
	(function showArticles() {
		if ($('#home-articles').offset().top - ($(window).height() / 1.8) < windowPosition) {
      $('.home-articles-title').show().addClass('animated slideInDown');
      setTimeout(function() {
			  $('.home-article').each(function(i) {
				  setTimeout(function() {
					  $('.home-article').eq(i)
               .css('visibility', 'visible')
               .addClass('animated fadeIn');
				  }, 400 * i);
        });
      }, 300);
		}
	})();
});

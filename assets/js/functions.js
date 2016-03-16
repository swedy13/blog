// ------------------------------------------------------
// *********************  METHODS  **********************
// ------------------------------------------------------
// Runs an animation to display the page title
function pageTitleReveal(selectorName, animationType) {
  var selector = $("." + selectorName);
  var animation = 'animated ' + animationType;

  selector.show().css('visibility', 'visible').addClass(animation);
};

// Runs an animation
function animationEffect(selectorName, animationType, animationSpeed) {
  var selector = $("." + selectorName);
  var animation = 'animated ' + animationType;

  selector.each(function(i) {
	  setTimeout(function() {
		  selector.eq(i)
         .css('visibility', 'visible')
         .addClass(animation);
	  }, animationSpeed * i);
  });
};

// Portfolio flip-in animation
function portfolioCardFlip(flipSpeed) {
  setTimeout(function() {
    animationEffect('portfolio-card', 'flipInY', flipSpeed)
  }, 300);
};

// Home page company logos pop-up effect
// ----- I don't know how to turn this thing off...
function showLogos(windowPosition) {
	if ($('#home-companies').offset().top - ($(window).height() / 1.1) < windowPosition) {
    pageTitleReveal('home-companies-title', 'fadeInLeft');
    animationEffect('home-companies-logo-thumb', 'bounceInUp', 150);
	}
};


// ------------------------------------------------------
// ****************  DOCUMENT METHODS  ******************
// ------------------------------------------------------
$('document').ready(function() {
  // ------------------------------------------------------
  //                   ON-LOAD FUNCTIONS
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
  $('.home-companies-logo-thumb').hover(
    function() {
      $(this).find('.home-companies-caption').show().css('opacity', 0).animate({opacity: 1}, 300);
    },
    function() {
      $(this).find('.home-companies-caption').hide();
    });


  // ------------------------------------------------------
  //     ARTICLES / CASE STUDIES / PORTFOLIO FUNCTIONS
  // ------------------------------------------------------
  // Fades in the blog posts
  if ($('div').hasClass('blog')) {
    (function blogContentLoad() {
      setTimeout(function() {
        pageTitleReveal('blog-header', 'zoomIn');
      }, 150);
      setTimeout(function() {
        animationEffect('blog-post', 'fadeInUp', 150);
      }, 750);
    })();  }

  // Companies page functions (title animation, display animation, slider animation)
  if ($('div').hasClass('companies-page')) {
    pageTitleReveal('companies-title', 'zoomIn');
  }

  // Portfolio page (title animation, display animation, card flip animation)
  if ($('div').hasClass('portfolio-page')) {
    pageTitleReveal('portfolio-title', 'zoomIn');
    portfolioCardFlip(125);
  }

  // See the page-scroll methods section below for more information
  if ($('section').hasClass('home-companies')) {
    onScroll();
  }
});


// ------------------------------------------------------
//                   PAGE-SCROLL METHODS
// ------------------------------------------------------ 
function onScroll() {
  $(window).scroll(function() {
	  var windowPosition	= $(window).scrollTop();

    // Activates an event at a particular position on the page
    function scrollEvent(selectorName, divisor) {
      var windowOffset = $(selectorName).offset().top;
      var windowHeight = $(window).height();
      
      if (windowOffset - (windowHeight / divisor) < windowPosition) {
        var fireEvent = true;
        return fireEvent;
      }
    }

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

    if (showCards() == true) {
      pageTitleReveal('portfolio-title', 'zoomIn');
      portfolioCardFlip(150);
      setTimeout(function() {
        $('.portfolio-more')
           .css('visibility', 'visible')
           .addClass('animated flipInY');
      }, 1400);
    }
    
	  // Displays portfolio cards with a slide-in effect for each card
	  function showCards() {
      return scrollEvent('#portfolio', 1.6);
	  };

    // Displays logos on the home page (see above for function information)
    showLogos(windowPosition);

    // Displays articles with a zoom-in effect for each card
	  (function showArticles() {
		  if ($('#home-articles').offset().top - ($(window).height() / 1.8) < windowPosition) {
        pageTitleReveal('home-articles-title', 'slideInDown');
        setTimeout(function() {
          animationEffect('home-article', 'fadeIn', 400);
        }, 300);
		  }
	  })();
  });
};

// ------------------------------------------------------
// *********************  GLOBAL METHODS  **********************
// ------------------------------------------------------
// PAGE IDENTIFIER
// This function runs the rest of the methods on this page
$('document').ready(function() {
  navHover();
  
  if ($('div').hasClass('home')) {
    homeMethods();
    navHighlight(0);
  }
  else if ($('div').hasClass('companies-page')) {
    companiesMethods();
    navHighlight(1);
  }
  else if ($('div').hasClass('portfolio-page')) {
    portfolioMethods();
    navHighlight(2);
  }
  else if ($('div').hasClass('blog')) {
    articlesMethods();
    navHighlight(3);
  }
  else {
    console.log('Page identifier error');
  }
});

// PAGE TITLE LOAD ANIMATION
function pageTitleReveal(selectorName, animationType) {
  var selector = $("." + selectorName);
  var animation = 'animated ' + animationType;

  selector.show().css('visibility', 'visible').addClass(animation);
};

// CSS ANIMATION
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

// NAV HOVER EFFECTS
function navHover() {
  // Displays the full nav menu on hover
	$('header').mouseenter(function() {
		$('.main-nav').find('.nav-link').css('visibility','visible');
	});
	$('header').mouseleave(function() {
		$('.main-nav').find('.nav-link').css('visibility','hidden');
	});

  // Highlights the currently hovered link
	$('.nav-links').find('li').mouseenter(function() {
		$(this).find('.nav-color').addClass('nav-highlight');
	});
	$('.nav-links').find('li').mouseleave(function() {
		$(this).find('.nav-color').removeClass('nav-highlight');
	});
};

// NAV HIGHLIGHT
function navHighlight(linkNum) {
  $('li').children('div').eq(linkNum).addClass('current-nav');
}


// ------------------------------------------------------
// ****************  HOME PAGE METHODS  ******************
// ------------------------------------------------------
function homeMethods() {
  
  $(window).scroll(function() {
    // WINDOW POSITION
	  var windowPosition	= $(window).scrollTop();

    // SCROLL EVENT METHOD
    function scrollEvent(selectorName, divisor) {
      var windowOffset = $(selectorName).offset().top;
      var windowHeight = $(window).height();
      
      if (windowOffset - (windowHeight / divisor) < windowPosition) {
        var fireEvent = true;
        return fireEvent;
      }
    }

    // PARALLAX
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

    // PORTFOLIO
	  /* function showHomePortfolio() {
       return scrollEvent('#portfolio', 1.6);
	     };

       if (showHomePortfolio() == true) { */
    if (scrollEvent('#home-portfolio', 1.6)) {
      pageTitleReveal('portfolio-title', 'zoomIn');
      setTimeout(function() {
        animationEffect('portfolio-card', 'flipInY', 150)
      }, 300);
      /* setTimeout(function() {
         $('.portfolio-more')
         .css('visibility', 'visible')
         .addClass('animated flipInY');
         }, 1400); */
    }

    // COMPANIES
	  if ($('#home-companies').offset().top - ($(window).height() / 1.1) < windowPosition) {
      pageTitleReveal('home-companies-title', 'fadeInLeft');
      animationEffect('home-companies-logo-thumb', 'bounceInUp', 150);
	  }

    // ARTICLES
		if ($('#home-articles').offset().top - ($(window).height() / 1.8) < windowPosition) {
      pageTitleReveal('home-articles-title', 'slideInDown');
      setTimeout(function() {
        animationEffect('home-article', 'fadeIn', 400);
      }, 300);
		}
  });
}


// ------------------------------------------------------
// *************  COMPANIES PAGE METHODS  ***************
// ------------------------------------------------------
function companiesMethods() {
  // Companies page functions (title animation, display animation, slider animation)
  pageTitleReveal('companies-title', 'zoomIn');
  setTimeout(function() {
    animationEffect('companies-container', 'fadeInRight', 200)
  }, 450);
}


// ------------------------------------------------------
// *************  PORTFOLIO PAGE METHODS  ***************
// ------------------------------------------------------
function portfolioMethods() {
  // Portfolio page (title animation, display animation, card flip animation)
  $('document').ready(function() {
    pageTitleReveal('portfolio-title', 'zoomIn');
    setTimeout(function() {
      animationEffect('portfolio-card', 'flipInY', 125)
    }, 300);
  });
}


// ------------------------------------------------------
// **************  ARTICLES PAGE METHODS  ***************
// ------------------------------------------------------
function articlesMethods() {
  // Fades in the blog posts
  setTimeout(function() {
    pageTitleReveal('blog-header', 'zoomIn');
  }, 150);
  setTimeout(function() {
    animationEffect('blog-post', 'fadeInUp', 150);
  }, 750);
}

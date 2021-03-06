// ------------------------------------------------------
// *********************  GLOBAL METHODS  **********************
// ------------------------------------------------------
// PAGE IDENTIFIER
// This function runs the rest of the methods on this page
$('document').ready(function() {
				navScroll();
				navHover();

				// HOME PAGE
				if ($('div').hasClass('home')) {
								homeMethods();
								navHighlight(0);
				}

				// COMPANY FEED
				else if ($('div').hasClass('companies-page')) {
								companiesMethods();
								navHighlight(1);
				}

				// COMPANY PAGE
				else if ($('div').hasClass('company')) {
								slideLoad();
								companySlider();
								slideAnimation();
								toggleImage();

								if ($('div.company').attr('id') == 'case_studies') {
												navHighlight(1);
								}
								else {
												navHighlight(2);
								}
				}

				// PORTFOLIO FEED
				else if ($('div').hasClass('portfolio-page')) {
								portfolioMethods();
								navHighlight(2);
				}

				// ARTICLE FEED
				else if ($('div').hasClass('articles-page')) {
								articlesMethods();
								navHighlight(3);
				}
});

// NAV HIGHLIGHT
function navHighlight(linkNum) {
				$('li').children('div').eq(linkNum).addClass('current-nav');
}

// NAV HOVER EFFECTS
function navHover() {
				// Highlights link
				$('.nav-links').find('li').mouseenter(function() {
								$(this).find('.nav-color').addClass('nav-highlight');
				});
				$('.nav-links').find('li').mouseleave(function() {
								$(this).find('.nav-color').removeClass('nav-highlight');
				});
};

// NAV SCROLL
function navScroll() {
				$(window).scroll(function() {
								var windowPosition	= $(window).scrollTop();
								var header = $('.site-header');

								if (windowPosition > 5) {
												header.addClass('invisible');
								}

								if (windowPosition < 5) {
												header.removeClass('invisible');
								}
				});
}

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


// ------------------------------------------------------
// ****************  HOME PAGE METHODS  ******************
// ------------------------------------------------------
function homeMethods() {

				$(window).scroll(function() {
								var windowPosition	= $(window).scrollTop();

								// Fires events on scroll
								function scrollEvent(selectorName, divisor) {
												var windowOffset = $(selectorName).offset().top;
												var windowHeight = $(window).height();

												if (windowOffset - (windowHeight / divisor) < windowPosition) {
																var fireEvent = true;
																return fireEvent;
												}
								}

								// Parallax
								var parallaxWidth		= $('.color-overlay').width();
								var parallaxHeight	= $('.home-parallax').height();
								var viewedParallax	= windowPosition / parallaxHeight;

								if (viewedParallax < 1) {
												var parallaxFilters = 'grayscale(' + viewedParallax + ') brightness(' + (1 - viewedParallax / 2) + ')';
												var parallaxScale = 1 + (viewedParallax * .25);
												var parallaxOffset = -parallaxScale*50;
												$('.home-parallax-color-overlay').css({'opacity':(viewedParallax / 2)});
												$('.home-parallax').css({WebkitFilter: parallaxFilters});
								}

								// Companies
								if ($('#home-companies').offset().top - ($(window).height() / 1.1) < windowPosition) {
												pageTitleReveal('home-companies-title', 'fadeInLeft');
												animationEffect('home-companies-logo-thumb', 'bounceInUp', 150);
								}

								// Skills
								if (scrollEvent('#skills', 1.6)) {
												/*pageTitleReveal('skills-title', 'zoomIn');*/
												setTimeout(function() {
																animationEffect('card', 'flipInY', 150)
												}, 300);
												setTimeout(function() {
																$('.card-more')
																			.css('visibility', 'visible')
																			.addClass('animated fadeIn');
												}, 1400);
								}

								// Articles
								/*if ($('#home-articles').offset().top - ($(window).height() / 1.8) < windowPosition) {
											pageTitleReveal('home-articles-title', 'slideInDown');
											setTimeout(function() {
											animationEffect('home-article', 'fadeIn', 400);
											}, 300);
											}*/
				});
}


// ------------------------------------------------------
// *************  COMPANIES FEED METHODS  ***************
// ------------------------------------------------------
function companiesMethods() {
				// On-load animations
				pageTitleReveal('companies-title', 'zoomIn');
				setTimeout(function() {
								animationEffect('companies-container', 'fadeInRight', 200)
				}, 450);
}


// ------------------------------------------------------
// *************  COMPANIES FEED METHODS  ***************
// ------------------------------------------------------
function slideLoad() {
				$('.company-hero').css('opacity', '0').animate({opacity: 1}, 1500);
				setTimeout(function() {
								$('.company-content').slideDown(150).css('display', 'flex');
				}, 2000);
}

function companySlider() {
				var slides = $('.slide');
				var position = 1;
				changeSlide(position);

				$('.backward').click(function() {
								changeSlide(position -= 1);
								slideAnimation('fadeInLeft');
				});
				$('.forward').click(function() {
								changeSlide(position += 1);
								slideAnimation('fadeInRight');
				});

				$('body').keydown(function(e) {
								if (e.keyCode == 37) {
												changeSlide(position -= 1);
												slideAnimation('fadeInLeft');
								}
								else if (e.keyCode == 39) {
												changeSlide(position += 1);
												slideAnimation('fadeInRight');
								}
				});

				function changeSlide(currentPosition) {
								if (currentPosition > slides.length) {position = 1}
								if (currentPosition < 1) {position = slides.length}

								for (var i = 0; i < slides.length; i++) {
												slides[i].classList.remove('visible');
								}

								var adjustedSlide = slides[position-1];
								adjustedSlide.classList.add('visible');

								$('.slider-position').html(position + ' / ' + slides.length);
				}
}

function slideAnimation(animation) {
				var image = $('.visible').find('.company-hero');
				image.removeClass('fadeInLeft fadeInRight');
				image.addClass(animation);
}

function toggleImage() {
				$('.company-hero').click(function() {
								$('.slide').toggleClass('zoom');
								$('.iterator').toggleClass('zoom');
				});
				$('body').keydown(function(e) {
								if (e.keyCode == 27) {
												$('.slide').removeClass('zoom');
												$('.iterator').removeClass('zoom');
								}
				});
				$('.exit-view').click(function(e) {
								e.stopPropagation();
								$('.slide').removeClass('zoom');
								$('.iterator').removeClass('zoom');
				});
}


// ------------------------------------------------------
// *************  PORTFOLIO FEED METHODS  ***************
// ------------------------------------------------------
function portfolioMethods() {
				// On-load animations
				pageTitleReveal('portfolio-title', 'zoomIn');
				setTimeout(function() {
								animationEffect('portfolio-card', 'flipInY', 125)
				}, 300);
}


// ------------------------------------------------------
// **************  ARTICLES FEED METHODS  ***************
// ------------------------------------------------------
function articlesMethods() {
				// On-load animations
				setTimeout(function() {
								pageTitleReveal('articles-title', 'zoomIn');
				}, 150);
				setTimeout(function() {
								animationEffect('post', 'fadeInUp', 350);
				}, 750);
}

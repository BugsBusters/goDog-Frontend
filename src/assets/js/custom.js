// custom js file

    // Created on   : 11/08/2017.
    // Theme Name   : myPat.
    // Description  : myPat - Responsive html5 template.
    // Version      : 1.0.
    // Author       : @Unifytheme.
    // Developed by : @Unifytheme.

"use strict";

// Prealoder
 function prealoader () {
   if ($('#loader').length) {
     $('#loader').fadeOut(); // will first fade out the loading animation
     $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
     $('body').delay(350).css({'overflow':'visible'});
  };
 }

// placeholder remove
function removePlaceholder () {
  if ($("input,textarea").length) {
    $("input,textarea").each(
        function(){
            $(this).data('holder',$(this).attr('placeholder'));
            $(this).on('focusin', function() {
                $(this).attr('placeholder','');
            });
            $(this).on('focusout', function() {
                $(this).attr('placeholder',$(this).data('holder'));
            });
            
    });
  }
}

// scroll header
function stickyHeader () {
  var sticky = $('.theme-main-menu'),
      scroll = $(window).scrollTop();

  if (sticky.length) {
    if (scroll >= 190) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
    
  };
}

// toggle menu for mobile
function mobileDropdown () {
  if($('.main-menu').length) {
    $('.main-menu nav ul li.dropdown-holder').append(function () {
      return '<i class="fa fa-align-justify" aria-hidden="true"></i>';
    });
    $('.main-menu nav ul li.dropdown-holder .fa').on('click', function () {
      $(this).parent('li').children('ul').slideToggle();
    }); 
  }
}

// Theme Search Box 
function searchBox () {
  var search = $("#search-button"),
      mainSearch = $("#searchWrapper"),
      close = $("#close-button");
  if(search.length) {
    search.on('click', function(){
      mainSearch.addClass('show-box');
    });
    close.on('click', function() {
      mainSearch.removeClass('show-box');
    });
  }
}

// Scroll to top
function scrollToTop () {
  if ($('.scroll-top').length) {

    //Check to see if the window is top if not then display button
    $(window).on('scroll', function (){
      if ($(this).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
    
    //Click event to scroll to top
    $('.scroll-top').on('click', function() {
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });
  }
}


// Theme-banner slider 
function BannerSlider () {
  var banner = $("#theme-main-banner");
  if (banner.length) {
      banner.camera({ //here I declared some settings, the height and the presence of the thumbnails 
        height: '51%',
        pagination: true,
        thumbnails: false,
        playPause: false,
        autoplay:true,
        pauseOnClick: false,
        hover: false,
        overlayer: true,
        loader: 'none',
        time: 9000,
        minHeight: '600px',
      });
  };
}


// isoptop Project Gallery
function masanory () {
  if ($("#isotop-gallery-wrapper").length) {
    var $grid = $('#isotop-gallery-wrapper').isotope({
      // options
      itemSelector: '.isotop-item',
      percentPosition: true,
      masonry: {
        // use element for option
        columnWidth: '.grid-sizer'
      }

    });

    // filter items on button click
    $('.isotop-menu-wrapper').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

     // change is-checked class on buttons
      $('.isotop-menu-wrapper').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'li', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $( this ).addClass('is-checked');
        });
      });
  };
}


// Counter function
function CounterNumberChanger () {
  var timer = $('.timer');
  if(timer.length) {
    timer.appear(function () {
      timer.countTo();
    })
  }
}


// W-l- Home client-review-slider
function clientReviewSlider ()  {
	var carouselOne = $("#client-review-slider");
	if(carouselOne.length) {
		carouselOne.owlCarousel({
			items:2,
			margin:30,
			loop:true,
			nav:false,
			dotsEach:1,
			autoplay:true,
			autoplayTimeout:3000,
			autoplaySpeed:2000,
			dragEndSpeed:1000,
			smartSpeed:1000,
			responsiveClass:true,
			responsive:{
				0:{
          items:1
        },
        600:{
          items:1
        },
        992:{
          items:2
        }
			}
		});
	}
}


// W-l Home partner-logo
function partnerLogo ()  {
  var carouselOne = $("#partner-logo");
  if(carouselOne.length) {
    carouselOne.owlCarousel({
      items:4,
      margin:30,
      loop:true,
      nav:false,
      dotsEach:1,
      autoplay:true,
      autoplayTimeout:4000,
      autoplaySpeed:2000,
      dragEndSpeed:1000,
      smartSpeed:1000,
      responsiveClass:true,
      responsive:{
        0:{
          items:2,
          margin:15,
        },
        501:{
          items:3,
        },
        992:{
          items:4
        }
        
      }
    });
  }
}


// shop price ranger
function priceRanger () {
  if ($('.price-ranger').length) {
    $( '.price-ranger #slider-range' ).slider({
      range: true,
      min: 0,
      max: 350,
      values: [ 25, 250 ],
      slide: function( event, ui ) {
        $( '.price-ranger .ranger-min-max-block .min' ).val( '$' + ui.values[ 0 ] );
        $( '.price-ranger .ranger-min-max-block .max' ).val( '$' + ui.values[ 1 ] );
      }
    });
      $( '.price-ranger .ranger-min-max-block .min' ).val( '$' + $( '.price-ranger #slider-range' ).slider( 'values', 0 ) );
    $( '.price-ranger .ranger-min-max-block .max' ).val( '$' + $( '.price-ranger #slider-range' ).slider( 'values', 1 ) );        
  };  
}


// Product Slider
function productSlider () {
  var carouselOne = $("#related-product-slider-carousel");
  if(carouselOne.length) {
		carouselOne.owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText: ["",""],
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:1300,
        lazyLoad:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
  }
}


// WOW animation 
function wowAnimation () {
  if($('.wow').length) {
    var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       50,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();
  }
}


// Fancybox 
function FancypopUp () {
  if ($(".fancybox").length) {
    $(".fancybox").fancybox({
      openEffect  : 'elastic',
        closeEffect : 'elastic',
         helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(0, 0, 0, 0.6)',
                    'z-index' : '99999999'
                }
            }
        }
    });
  };
}


//Contact Form Validation
function contactFormValidation () {
  var activeform = $(".form-validation");
  if(activeform.length){
      activeform.validate({ // initialize the plugin
        rules: {
          name: {
            required: true
          },
          email: {
            required: true,
            email: true
          },
          sub: {
            required: true
          },
          message: {
            required: true
          }
        },
      submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        activeform.fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#alert-success').fadeIn();
                        });
                    },
                    error: function() {
                        activeform.fadeTo( "slow", 1, function() {
                            $('#alert-error').fadeIn();
                        });
                    }
                });
            }
        });
  }
}


// Close suddess Alret
function closeSuccessAlert () {
  var closeButton = $ (".closeAlert");
  if(closeButton.length) {
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      });
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      })
  }
}


// Accordion panel
function themeAccrodion () {
  if ($('.theme-accordion > .panel').length) {
    $('.theme-accordion > .panel').on('show.bs.collapse', function (e) {
          var heading = $(this).find('.panel-heading');
          heading.addClass("active-panel");

    });

    $('.theme-accordion > .panel').on('hidden.bs.collapse', function (e) {
        var heading = $(this).find('.panel-heading');
          heading.removeClass("active-panel");
          //setProgressBar(heading.get(0).id);
    });

    $('.panel-heading a').on('click',function(e){
        if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
            e.stopPropagation();
        }
    });

  };
}


// RoundCircle Progress
function roundCircleProgress () {
  var rounderContainer = $('.piechart');
  if (rounderContainer.length) {
    rounderContainer.each(function () {
      var Self = $(this);
      var value = Self.data('value');
      var size = Self.parent().width();
      var color = Self.data('border-color');

      Self.find('span').each(function () {
        var expertCount = $(this);
        expertCount.appear(function () {
          expertCount.countTo({
            from: 1,
            to: value*100,
            speed: 2000
          });
        });

      });
      Self.appear(function () {         
        Self.circleProgress({
          value: value,
          size: 266,
          thickness: 5,
          emptyFill: 'rgba(243,243,243,1)',
          animation: {
            duration: 2000
          },
          fill: {
            color: color
          }
        });
      });
    });
  };
}


// Product value
function productValue () {
  var inputVal = $("#product-value");
  if(inputVal.length) {
    $('#value-decrease').on('click', function() {
        inputVal.html(function(i, val) { return val*1-1 });
    });
    $('#value-increase').on('click', function() {
        inputVal.html(function(i, val) { return val*1+1 });
    });
  }
}



// DOM ready function
jQuery(document).on('ready', function(){
	(function($){
		mobileDropdown ();
    removePlaceholder ();
    searchBox ();
		BannerSlider ();
		clientReviewSlider ();
    partnerLogo ();
		CounterNumberChanger ();
		wowAnimation ();
		priceRanger ();
		productSlider ();
		FancypopUp ();
		scrollToTop ();
		contactFormValidation ();
    themeAccrodion ();
    productValue ();
		closeSuccessAlert ()
	})(jQuery);
});

// Window scroll function
jQuery(window).on('scroll', function(){
	(function($){
		stickyHeader ();
	})(jQuery);
});

// Window on load function
jQuery(window).on('load', function(){
	(function($){
		prealoader ();
		masanory ();
    roundCircleProgress ();
	})(jQuery);
});
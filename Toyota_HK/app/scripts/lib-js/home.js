'use strict';
jQuery(document).ready(function($) {
  var supportAnimation = $('html').hasClass('csstransitions');
    var $window = $(window);
    //wheel control class
      window.WheelControl = (function($){
        var module = {};
        var carousel = $('#master-banner-carousel');
        var view = $('#master-banner-wrapper');
        var wheelControl = $('#wheel-control');
        var bannerSample = $('.wheel-banner-item--sample');
        var owlOpts = {
          items: 1,
          nav: true,
          loop: true,
          dots: false,
          autoplay:true,
          autoplayTimeout:5000,
          autoplayHoverPause:true
        };
        var isWheelAnimating = false;

        module.init = function() {
          
          carousel.owlCarousel(owlOpts);

          carousel.on('change.owl.carousel', function(e) {
            var currentOwlItem = view.find('.master-banner-item').eq(e.item.index);
            if (currentOwlItem.hasClass('master-banner-item--promotion') ) {
              wheelControl.addClass('hide');
              if(!bannerSample.hasClass('wheel-banner-item--active')){
                module.compactWheel();
              }
            } else {
              wheelControl.removeClass('hide');
            }
          });

          //wheel control
          
          module.activateWheel();
          wheelControl.on('click', function(e) {
            if(wheelControl.hasClass('wheel-control--compact')){
              module.activateWheel();
            }
            e.stopPropagation();
          });

          $(document).on('click', function(e) {
            if(!$('.wheel-banner-item--sample').hasClass('wheel-banner-item--active')){
              module.compactWheel();
              $('.wheel-banner-item--active').addClass('show-text show-img').removeClass('center-detail');
            }else{
              $('.wheel-banner-item.hovering').removeClass('show-text hovering');
              $('.wheel-banner-item--sample').addClass('show-text center-detail');
            }
          });

          $('.hover-state').on('click', function(){
            $(this).siblings('.active').removeClass('active').end().addClass('active');
            view.removeClass('show-characters');
            $("#"+$(this).attr('data-state')).removeClass('hide').siblings('.group-characters').addClass('hide');
            setTimeout(function(){
              view.addClass('show-characters');
            },0);
            wheelControl.removeClass('group-characrers__action group-characrers__thinking group-characrers__feeling').addClass( $(this).attr('data-state') );
          })
          // wheel control when active
          $('.wheel-control__item').each(function(){
            this.relatedBanner = $('.wheel-banner-item[data-id="' + $(this).attr('data-slide-id') + '"]');
          });
          $('.wheel-control__item')
            .hover(function() {
                if(isWheelAnimating){
                  return;
                }
                this.relatedBanner.addClass('hovering show-text center-detail')
                    .siblings('.wheel-banner-item').removeClass('show-text hovering').addClass('center-detail');
              }
            )
            .on('click', function(e) {
              // wheel banner
              isWheelAnimating = true;
              this.relatedBanner.addClass('wheel-banner-item--active show-text show-img').removeClass('hovering center-detail')
                  .siblings(".wheel-banner-item").removeClass('wheel-banner-item--active hovering show-text show-img').addClass('center-detail');
              setTimeout(function () {
                isWheelAnimating = false;
              }, 1000);
              // wheel control
              module.selectCharacter();
              wheelControl.find('.small-control span').html($(this).html());
              return false;
            });
        };
        module.selectCharacter =  function() {
          if(supportAnimation){
            wheelControl.addClass('wheel-transitioning').one('transitionend webkitTransitionEnd oTransitionEnd', function(){
              $(this).addClass('wheel-control--compact').removeClass('wheel-transitioning');
            });
          }else{
            wheelControl.addClass('wheel-control--compact');
          }
          view.removeClass('master-banner-wrapper--on-wheel');
        };
        module.compactWheel =  function() {
          $('.wheel-banner-item').not('.wheel-banner-item--active').removeClass('show-text');
          wheelControl.addClass('wheel-control--compact');
          view.removeClass('master-banner-wrapper--on-wheel');
        };
        module.activateWheel = function() {
          if(supportAnimation){
            wheelControl.addClass('wheel-transitioning').one('transitionend webkitTransitionEnd oTransitionEnd', function(){
              $(this).removeClass('wheel-transitioning wheel-control--compact');
            });
          }else{
            wheelControl.removeClass('wheel-control--compact');
          }
          // wheel banner
          $(".wheel-banner-item--active").addClass('center-detail show-text show-img');
          view.addClass('master-banner-wrapper--on-wheel');
        };
        module.toggleWheel = function(bool) {
          return bool ? wheelControl.show() : wheelControl.hide();
        };

        return module.init();

      })(jQuery);

    //posts list masonry
    var postsList = $('.posts-list');
    if ( typeof Masonry !== "undefined" && postsList.length > 0 ) {
      postsList.imagesLoaded(function() {
        postsList.masonry({
          // options
          // columnWidth: 400,
          // itemSelector: '.post-item',
          // gutter: 60
          columnWidth:  '.grid-sizer',
          itemSelector: '.post-item',
          gutter:       '.gutter-sizer'
        });
      });
      if($('.post-item').length < 2) {
        $('.bg-gray.col-2').hide();
      }
    }  
    // if ( Modernizr.mq('screen and (min-width: 991px)') ) {
      
    // }

    //sticky helpful links list
      // var helpfulLinksList = $('.helpful-link-list');
      // if ( helpfulLinksList.length > 0 ) {
      //   var helpfulLinksListOffset = helpfulLinksList.offset();
      //   $window.on('scroll', function(e) {
      //     helpfulLinksList.toggleClass( 'fix-to-bottom', $window.scrollTop() >= helpfulLinksListOffset.top );
      //   });
      // }

    //our family carousel
      // add behavior to 'Toyota Our Family' section after data loaded and render to HTML
      var carsListCarousel_Back = $('#cars-list-carousel-back');
      carsListCarousel_Back.find('.cars-quick-view-item')
        .clone(true).appendTo( carsListCarousel_Back )
        .clone(true).appendTo( carsListCarousel_Back );
      var carsListCarousel_Front = $('#cars-list-carousel-front');
      carsListCarousel_Front.find('.cars-quick-view-item')
        .clone(true).appendTo( carsListCarousel_Front )
        .clone(true).appendTo( carsListCarousel_Front );
      var carouselOpts = {
          // transitions: Modernizr.csstransitions ? {
          //     transforms: Modernizr.csstransforms,
          //     transforms3d: Modernizr.csstransforms3d,
          //     easing: 'ease'
          // } : false,
          animation: {
            duration: 1000
          }
      }
      
      //init backward and front carousel
      var carsListCarousel_Back_Carousel = carsListCarousel_Back.parent()
        .on('jcarousel:reload jcarousel:create', function () {
          var carousel = $(this),
              width = carousel.innerWidth();

          if ( width <= 480 ) {
              width = width / 4;
          }
          else if ( width <= 990 ) {
              width = width / 9;
          }
          else {
              width = width / 13;
          }

          carousel.jcarousel('items').css({width: Math.ceil(width) + 'px'});
        })
        .jcarousel(
          $.extend(true, {}, carouselOpts, {
          })
        );
      var carsListCarousel_Front_Carousel = carsListCarousel_Front.parent()
        .on('jcarousel:reload jcarousel:create', function () {
          var carousel = $(this),
              width = carousel.innerWidth();

          if ( width <= 480 ) {
              width = width / 2;
          }
          else if ( width <= 990 ) {
              width = width / 4;
          }
          else {
              width = width / 7;
          }

          carousel.jcarousel('items').css({width: Math.ceil(width) + 'px'});
        })
        .jcarousel(
          $.extend(true, {}, carouselOpts, {
              center: true
          })
        );


      var totalItems = carsListCarousel_Front_Carousel.jcarousel('items').length/3;

      //handling backward-line carousel
      carsListCarousel_Back_Carousel.jcarousel( 'scroll', carsListCarousel_Front_Carousel.jcarousel( 'visible' ).length, false );
      carsListCarousel_Back_Carousel.on('click', '.cars-quick-view-item:not(".cars-filter-off")', function(e) {
        if ( carsListCarousel_Back_Carousel.data('jcarousel').animating ) { return false; }

        carsListCarousel_Front.find('.cars-quick-view-item[data-index="' + $(this).attr('data-index') + '"]').eq(0).trigger('click');
        return false;
      });
      carsListCarousel_Back_Carousel.on('jcarousel:animateend', function(e, carousel) {
        var $element = $(carousel._element);
        if ( $element.offset().left + $element.width() <= $(carousel._items[totalItems-1]).offset().left ) {
          $( carousel._items.slice(0, totalItems) ).appendTo( carsListCarousel_Back );
          carousel._reload();
        } 
      });

      //handling front-line carousel
      var currFrontItem = carsListCarousel_Front_Carousel.jcarousel('first').addClass('cars-quick-view-item--active');
      carsListCarousel_Front.on('click', '.cars-quick-view-item:not(".cars-filter-off")', function(e) {
        if ( carsListCarousel_Front_Carousel.data('jcarousel').animating ) { return false; }
        var $this = $(this);
        if ( $this.hasClass('cars-quick-view-item--active') ) { return true; }
        
        currFrontItem.removeClass('cars-quick-view-item--active');

        var currFrontIndex = currFrontItem.prevAll().length;
        var index = $(this).prevAll().length;
        var offset = index - currFrontIndex;
        if ( offset < 0 ) {
          offset += totalItems;
          currFrontItem = carsListCarousel_Front_Carousel.jcarousel('items').eq( index + totalItems );
        }
        else {
          currFrontItem = $this;
        }
        carsListCarousel_Front_Carousel.jcarousel( 'scroll', currFrontItem );
        carsListCarousel_Back_Carousel.jcarousel( 'scroll', '+=' + offset );
        return false;
      });
      carsListCarousel_Front_Carousel.on('jcarousel:animateend', function(e, carousel) {
        if ( carsListCarousel_Front.position().left + $(carousel._items[totalItems-1]).width()*totalItems <= 0 ) {
          $( carousel._items.slice(0, totalItems) ).appendTo( carsListCarousel_Front );
          carousel._reload();
        } 
        currFrontItem.addClass('cars-quick-view-item--active');
      });

      //off link when car is filter off
      $('.jcarousel').on('click', '.cars-filter-off > a', function(e) {
        return false;
      });

      // nav for carousel car
      $('.jcarousel.jcarousel--center').append('<div class="carslistcarousel_front_nav"><span class="prev">&nbsp;</span><span class="next">&nbsp;</span></div>');
      $('.carslistcarousel_front_nav .prev').on('click',function(e){
        e.preventDefault();
        if(carsListCarousel_Front.find('.cars-quick-view-item--active').eq(0).prev().length){
          carsListCarousel_Front.find('.cars-quick-view-item--active').eq(0).prev().trigger('click');          
        }else{
          carsListCarousel_Front.find('.cars-quick-view-item').last().trigger('click');  
        }
      });
      $('.carslistcarousel_front_nav .next').on('click',function(e){
        e.preventDefault();
        if(carsListCarousel_Front.find('.cars-quick-view-item--active').eq(0).next().length){
          carsListCarousel_Front.find('.cars-quick-view-item--active').eq(0).next().trigger('click');          
        }
      });

      //filter Toyota cars 
      // edit by huypham
      if ($(window).width() > 1024) {
        $('#cars-family-filter-list').on('mouseenter', function(e) {
          $(this).addClass('open');
        }).on('mouseleave', function(e) {
          $(this).removeClass('open');
        });
      }
      $('#cars-family-filter-list a').on('click', function(e) {
        $('.cars-quick-view-item').addClass('cars-filter-off');
        $('.cars-filter-selected').removeClass('cars-filter-selected');
        var $this = $(this).addClass('cars-filter-selected');
        var type = $this.data('type');
        if ( type == 'all' ) {
          $('.cars-quick-view-item').removeClass('cars-filter-off');
        }
        else {
          $('.cars-quick-view-item[data-type="' + type + '"]').removeClass('cars-filter-off')
          carsListCarousel_Front.find('.cars-quick-view-item[data-type="' + type + '"]').eq(0).trigger('click');
        }
        // edit by huypham
        if ($(window).width() > 1024) {
          $('#cars-family-filter-list').removeClass('open');
        }
        return false;
      });

      //show the cars
      $('#cars-list-carousel-wrapper').removeClass('cars-family-filter-wrapper--loading');

});

//Facebook social widgets
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3&appId=584394941662737";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

var quickLinks = {
  handleMobileQuicklink: function() {
    $('#helpful-link-list-mobile-trigger').on('click', function(e) {
      $($(this).attr('href') ).toggleClass('helpful-link-list--opened');
      $(this).toggleClass('mobile-trigger-btn-open');
      // $('html, body').animate({ scrollTop: 0 }, 'slow');
      return false;
    });
  },
  handleHeightHelpfulLinkList: function() {
    if($(window).width() < 768) {
      $('.helpful-link-list').css({
        'height': $(document).height()
      });
    }
    else {
      $('.helpful-link-list').css({
        'height': 'auto'
      });
    }
  }
};

// Window Load
$(window).load(function(){
  quickLinks.handleMobileQuicklink();
  quickLinks.handleHeightHelpfulLinkList();  
});

// Window Resize
var width = $(window).width();
var resize = 0;
$(window).resize(function() {
    var _self = $(this);
    resize++;
    setTimeout(function() {
        resize--;
        if (resize === 0) {
            // Done resize ...
            if (_self.width() !== width) {
              width = _self.width();
              // Done resize width ...
              quickLinks.handleHeightHelpfulLinkList(); 
            }
        }
    }, 200);
});
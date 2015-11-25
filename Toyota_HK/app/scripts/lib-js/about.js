
'use strict';

jQuery(document).ready(function() {
  (function($) {
    //mini-image-carousel for content
      $('.block-content-mini-slider').owlCarousel({
        items: 1,
        dots: true
      });

    //tabs responsive
      (function() {
        var navResponsive = $('.nav-responsive');
        if ( navResponsive.length > 0 ) {
          var navItems = navResponsive.find('li');
          var navResponsiveCarousel = navResponsive.parent();
          navResponsiveCarousel
            .on('jcarousel:reload jcarousel:create', function () {
              var carousel = $(this),
                  width = carousel.innerWidth();

              if ( width <= 480 ) {
                  width = width / 2.5;
              }
              else if ( width <= 990 ) {
                  width = width / 3.5;
              }
              else {
                  width = width / 5;
              }

              carousel.jcarousel('items').css({width: Math.ceil(width) + 'px'});
            })
            .jcarousel({
              transitions: Modernizr.csstransitions ? {
                  transforms: Modernizr.csstransforms,
                  transforms3d: Modernizr.csstransforms3d,
                  easing: 'ease'
              } : false,
              animation: {
                duration: 500
              }
            });
          navResponsive.on('click', 'li', function(e) {
            navResponsiveCarousel.jcarousel('scrollIntoView', this, true, function() {});
          });
          navResponsive.on('mousedown', 'li a', function(e) {
            e.preventDefault();
          });
          navResponsive.on('swipe', function(e) {
            var _offset = e.swipestart.coords[0] - e.swipestop.coords[0];
            navResponsiveCarousel.jcarousel('scrollIntoView', (_offset < 0 ? '-=' : '+=') + Math.ceil( Math.abs(_offset) / navResponsiveCarousel.jcarousel('items').eq(0).width() ), true, function() {});
          });
        }
      })();
      

    //carousel for car gallery
      (function() {
        var carGalleryCarousel = $('#car-gallery-carousel');
        if ( carGalleryCarousel.length > 0 ) {
          var displayItems = 5;
          var setDisplayItems = function() {
            if ( Modernizr.mq('screen and (max-width: 320px)') ) {
              displayItems = 1;
            }
            else if ( Modernizr.mq('screen and (min-width: 320px) and (max-width: 640px)') ) {
              displayItems = 2;
            }
            else if ( Modernizr.mq('screen and (min-width: 640px) and (max-width: 768px)') ) {
              displayItems = 3;
            }
            else if ( Modernizr.mq('screen and (min-width: 768px) and (max-width: 1200px)') ) {
              displayItems = 4;
            }
            else {
              displayItems = 5;
            }
          }
          setDisplayItems();
          var mainImg = $('#main-image');
          var carGalleryItems = $('.car-gallery-carousel__item');
          var carGalleryCurrent = $('#car-gallery-current').text(1);
          var downloadBtn = $('#car-gallery-download-btn');
          carGalleryCarousel.owlCarousel({
            nav: true,
            dots: false,
            responsive : {
                0 : {
                    items: 3,
                    margin: 20
                },
                480 : {
                    items: 3,
                    margin: 20
                },
                640 : {
                    items: 3,
                    margin: 20
                },
                768 : {
                    items: 4,
                    margin: 20
                },
                1200 : {
                    items: 5
                }
            }
          });
          var carGalleryCarouselPrev = carGalleryCarousel.find('.owl-prev').hide();
          var carGalleryCarouselNext = carGalleryCarousel.find('.owl-next');
          var setControlStatus = function() {
            setDisplayItems();
            if ( carGalleryItems.length <= displayItems ) {
              carGalleryCarouselPrev.hide();
              carGalleryCarouselNext.hide();
            }
            var _owlCarousel = carGalleryCarousel.data('owlCarousel');
            if ( _owlCarousel._current == 0 ) {
              carGalleryCarouselPrev.hide();
            }
            else if ( _owlCarousel._current + displayItems == carGalleryItems.length ) {
              carGalleryCarouselNext.hide();
            }
          }
          setControlStatus();
          $('#car-gallery-sum').text( carGalleryItems.length );
          carGalleryItems.on('click', function() {
            var $this = $(this);
            carGalleryCurrent.text( $this.parent().prevAll().length + 1 );
            carGalleryCarousel.find('.car-gallery-carousel__item--active').removeClass('car-gallery-carousel__item--active');
            mainImg.fadeOut('fast').attr( 'src', $this.addClass('car-gallery-carousel__item--active').data('src') ).fadeIn('fast');
            // downloadBtn.attr( 'href', $this.data('download') );
            // change text remask
            if($(this).attr('data-remask') == '1'){
              $('.carousel-with-thumbnail .main-image .remask').show();
            }else{
              $('.carousel-with-thumbnail .main-image .remask').hide();
            }
            return false;
          });
          carGalleryCarousel.on('changed.owl.carousel', function(e) {
            if ( e.item.index == 0 ) {
              carGalleryCarouselPrev.hide();
            }
            else if ( e.item.index + displayItems == carGalleryItems.length ) {
              carGalleryCarouselNext.hide();
            }
            else {
              carGalleryCarouselPrev.show();
              carGalleryCarouselNext.show();
            }
          });
          carGalleryCarousel.on('resized.owl.carousel', function(e) {
            setControlStatus();
          });

          // change text remask
          if($(carGalleryItems[0]).attr('data-remask') == '1'){
            $('.carousel-with-thumbnail .main-image .remask').show();
          }else{
            $('.carousel-with-thumbnail .main-image .remask').hide();
          }

        }
      })();
  })(jQuery);
});
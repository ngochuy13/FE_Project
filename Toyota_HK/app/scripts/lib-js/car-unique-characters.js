jQuery(function($) {
  window.Toyota.carUniqueCharacter = (function() {
    var view = $('.car-detail');
    if (view.length === 0) {
      return;
    }

    var module = {};

    // Camry ==========================================
    module.initSliderAuto = function(element) {
      var $element = $(element);
      if ($element.length === 0) {
        return false;
      }
      if ($element.find('.section-slider-auto').length === 0) {
        return false;
      }

      var carAutoCarousel = $element.find('.section-slider-auto .owl-carousel-car-auto');
      var autoAnimatingHandler = function(e) {
        $(this).find(".item").each(function(i, element) {
          var delay = $(this).attr("data-delay");
          var duration = $(this).attr("data-duration");
          if (!delay || !duration) {
            return;
          }
          $(this).delay(parseInt(delay)).fadeOut(parseInt(duration));
        });
      };
      $element.find('.section-slider-auto:not(:first)').appear();
      $element.find('.section-slider-auto:first').each(autoAnimatingHandler);
      $(document.body).on('appear', '.section-slider-auto', autoAnimatingHandler);
    };

    module.initLightCar = function(element) {
      var $element = $(element);
      if ($element.length === 0) {
        return false;
      }
      var $lightCar = $element.find('.section-light-in-car');
      if ($lightCar.length === 0 || $lightCar.find('.images-container .item').length <= 1) {
        return false;
      }

      $lightCar.find('.images-container .item').css('opacity', 1);
      var lightCarFunc = function ($lightCar){
        var dP = 100 / ($lightCar.find('.images-container .item').length - 1);
        $lightCar.find('input[type="range"]').css({
          'position': 'absolute',
          'top': 0
        }).rangeslider({
          polyfill: false,
          onSlide: function(position, value) {
            this.$range.removeClass("step-1 step-2 step-3").addClass('step-' + (Math.ceil(value / 50) + 1));

            var ind = Math.ceil((100 - value) / dP);
            var $imagesContainer = $lightCar.find('.images-container');
            $imagesContainer
              .find('.item:gt(' + ind + ')').css('opacity', 0).end()
              .find('.item:eq(' + ind + ')').css('opacity', 1 - ((value) % dP) / dP);

            var title = $imagesContainer.find('.item').eq(ind).attr('data-title');
            $lightCar.find('.block-caption .note-text').html(title);
          }
        });
      };

      if($lightCar.length == 1){
        lightCarFunc($lightCar);
      }else{
        $lightCar.each(function(index, el) {
          lightCarFunc($(this));
        });
      }
      
    };

    // Ractis, Sienta ==========================================
    module.initBannerSwitcher = function(element) {
      var $element = $(element);
      if ($element.length === 0) {
        return false;
      }
      var carViewCarousel = $element.find('.owl-carousel-car-view');
      var carViewCarouselNav = $element.find('.owl-carousel-car-view-nav');
      if( $(window).width() < 1024 ){
        setTimeout(function(){
          carViewCarouselNav.css('top', carViewCarousel.find('img:first').height() - 70 );
        },1000)
      }
      var resizeTimeout;
      $(window).on('resize', function(){
        if(resizeTimeout){
          clearTimeout(resizeTimeout);
        }
        resizeTimeout = setTimeout(function(){
          if( $(window).width() < 1024 ){
            carViewCarouselNav.css('top', carViewCarousel.find('img:first').height() - 70 );
          }else{
            carViewCarouselNav.removeAttr('style');
          }
        }, 300);
      });
      var viewAnimating = false;
      carViewCarousel.owlCarousel({
        center: true,
        items: 1,
        loop: false,
        dots: true,
        nav: false,
        mouseDrag: false,
        touchDrag: false,
        margin: 0,
        speed: 200,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        URLhashListener: false
      });
      $element.on('to.owl.carousel', function() {
        viewAnimating = true;
      }).on('changed.owl.carousel', function() {
        viewAnimating = false;
      });
      carViewCarouselNav.find('.nav').data('current-idx', 0).on('click', function(e) {
        e.preventDefault();
        var curInd = $(this).data('current-idx');
        nextInd = curInd == 1 ? 0 : 1;
        $(this).toggleClass('right', nextInd == 1);
        $(this).data('current-idx', nextInd);
        carViewCarousel.data('owlCarousel').to(nextInd);
        $(this).parent().find('a').attr('style', '');

        // change item for block-drag-item
        // TODO: move this block to intCarDrag
        if($('.section-car-drag .block-drag-item, .section-car-drag .block-car-mobile img').length){
          $('.section-car-drag .block-drag-item, .section-car-drag .block-car-mobile img').removeClass('show');
          $('.section-car-drag .block-drag-item img').removeClass('can-drop');
          $('.section-car-drag .dropzone').removeClass('done');
          if (!nextInd) {
            $('.section-car-drag .block-drag-item.item-picnic, .section-car-drag .block-car-mobile .img-picnic').addClass('show');
          } else {
            $('.section-car-drag .block-drag-item.item-beach, .section-car-drag .block-car-mobile .img-beach').addClass('show');
          }
        }
      });
    };

    // Sienta ==========================================
    module.initWideLong = function(element) {
      var $element = $(element);
      if ($element.length === 0) {
        return false;
      }
      $element.find('.block-wide-long-img .item').each(function(index, el) {
        if(!$(this).hasClass('img-size')){
          $(this).hide();
        }
      });
      $element.find('.block-wide-long-control .item').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        var itemID = $(this).data('id');
        $(this).prevAll().addClass('active');
        $(this).addClass('active');
        $(this).nextAll().removeClass('active');
        console.log(itemID);        
        $element.find('.block-wide-long-img .item').each(function(index, el) {
          if(!$(this).hasClass('img-size')){
            if($(this).data('id-item') == itemID){
              $(this).fadeIn(300);
            }else{
              $(this).fadeOut(300);              
            }
          }
        });
      });
    };

    module.initSientaCar = function(element) {
      var $element = $(element);
      if ($element.length === 0) {
        return false;
      }
      var firstSlide = true;
      $(window).scroll(function() {
        if (($(window).scrollTop() >= ($element.offset().top - 200)) && firstSlide) {
          $element.find('.block-content').addClass('active');
          $element.find('.block-ow-caption').addClass('active');
          $element.find('.block-content .block-wheel').addClass('active');
        }
      });
      $element.find('.icon-click').on('click', function() {
        $(this).parent().addClass('active');
        $('.section-car-run-sienta .block-arrow').addClass('active');
      });

    };

    // Ractis ==========================================
    module.ractisRoof = function(element) {
      var $element = $(element);
      if ($element.length === 0) {
        return false;
      }
      var blockSky = $element.find('.block-sky');
      if (blockSky.length) {
        var owlBlockSky = blockSky.owlCarousel({
          center: true,
          items: 1,
          loop: true,
          dots: false,
          nav: false,
          autoplay: true,
          autoplayTimeout: 5000,
          speed: 200,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          margin: 0,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              loop: true
            },
            600: {
              items: 1,
              loop: true
            },
            1000: {
              items: 1,
              loop: true
            }
          }
        });
      }
      var blockCloudy = $element.find('.block-cloudy');
      if (blockCloudy.length) {
        var owlBlockCloudy = blockCloudy.bxSlider({
          auto: true,
          autoControls: false,
          pause: 0,
          autoDelay: 0,
          speed: 50000,
          controls: false,
          pager: false,
          responsive: false,
          slideMargin: 0,
          mode: 'vertical'
        });
      }
    };

    module.initCarDrag = function() {

      var $element = $('.section-car-drag');
      if ($element.length === 0) {
        return false;
      }
      if ($(window).width() < 1056) {
        var draggableElement = $('.block-drag-item img');
        $.each(draggableElement, function() {
          if ($(this).attr('data-img-drop') != '') {
            $(this).attr('src', $(this).attr('data-img-drop'));
          }
        });

        return;
      }
      var carDrag = $('.section-car-drag');

      var onDragMoveHandler = function(event) {
        var target = event.target,
          x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
          y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        $(target).css({
          'left': x + 'px',
          'top': y + 'px'
        });

        // update the posiion attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);

        carDrag.find('.dropzone').addClass('drop-target');
      };

      var onDragEndHandler = function(event) {
        var target = event.target;
        if (!$(target).hasClass('dropped')) {
          //move to previous position
          // target.style.webkitTransform
          //   = target.style.transform
          //   = 'translate(0px, 0px)';
          $(target).removeAttr('style');

          target.setAttribute('data-x', target.getAttribute('data-dx'));
          target.setAttribute('data-y', target.getAttribute('data-dy'));
        }
        carDrag.find('.dropzone').removeClass('drop-target');
      };

      var onDragCheckHandler = function(event) {
        var flagCheck = true;
        carDrag.find('.block-drag-item.show img').each(function() {
          if (!$(this).hasClass('can-drop')) {
            flagCheck = false;
            return;
          }
        });
        if (flagCheck) {
          carDrag.find('.block-drag-container').addClass('done');
        }
      };

      var onDropHandler = function(event) {
        var draggableElement = $(event.relatedTarget);
        var dropzoneElement = $(event.target);
        // feedback the possibility of a drop
        draggableElement.addClass('can-drop');

        if (draggableElement.attr('data-img-drop')) {
          draggableElement.attr('src', draggableElement.attr('data-img-drop'));
        }

        onDragCheckHandler();
      }

      interact('.section-car-drag .draggable').draggable({
        inertia: true,
        onmove: onDragMoveHandler,
        onend: onDragEndHandler
      });

      interact('.section-car-drag .dropzone').dropzone({
        accept: '.section-car-drag .block-drag-item img',
        overlap: 0.35,
        ondrop: onDropHandler
      });
    };

    module.initSliderNavDrag = function() {

      var $element = $('.owl-carousel-car-view-nav');
      if ($element.length === 0) {
        return false;
      }
      var eleNav = $element.find('a');

      var onDragMoveHandler = function(event) {
        var target = event.target,
          x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        if(x > 43 || x < 0 ){
          x = target.getAttribute('data-x');
        }
        $(target).css({
          'left': x + 'px'
        });

        // update the posiion attributes
        target.setAttribute('data-x', x);
      };

      var onDragEndHandler = function(event) {
        var target = event.target,
          nextInd = 0,
          x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        if(x > 21.5){
          x = 43;
          nextInd = 1;
        }else{
          x = 0;
        }
        $(target).css({
          'left': x + 'px'
        });
        target.setAttribute('data-x', x);

        var curInd = $element.find('.nav').data('current-idx');
        if(curInd != nextInd){
          $element.find('.nav').toggleClass('right', nextInd == 1);
          $element.find('.nav').data('current-idx', nextInd);
          $('.owl-carousel-car-view').data('owlCarousel').to(nextInd);

          // change item for block-drag-item
          // TODO: move this block to intCarDrag
          if($('.section-car-drag .block-drag-item, .section-car-drag .block-car-mobile img').length){
            $('.section-car-drag .block-drag-item, .section-car-drag .block-car-mobile img').removeClass('show');
            $('.section-car-drag .block-drag-item img').removeClass('can-drop');
            $('.section-car-drag .dropzone').removeClass('done');
            if (!nextInd) {
              $('.section-car-drag .block-drag-item.item-picnic, .section-car-drag .block-car-mobile .img-picnic').addClass('show');
            } else {
              $('.section-car-drag .block-drag-item.item-beach, .section-car-drag .block-car-mobile .img-beach').addClass('show');
            }
          }
        }
      };
      
      // $element.find('.nav a').on('click', function(e){
      //   e.preventDefault();
      //   var curInd = $(this).parent.data('current-idx');
      //   var nextInd = curInd == 1 ? 0 : 1;
      //   $(this).parent.toggleClass('right', nextInd == 1);
      //   $(this).parent.data('current-idx', nextInd);
      //   $('.owl-carousel-car-view').data('owlCarousel').to(nextInd);
      //   $(this).attr('style', '');

      //   // change item for block-drag-item
      //   // TODO: move this block to intCarDrag
      //   if($('.section-car-drag .block-drag-item, .section-car-drag .block-car-mobile img').length){
      //     $('.section-car-drag .block-drag-item, .section-car-drag .block-car-mobile img').removeClass('show');
      //     $('.section-car-drag .block-drag-item img').removeClass('can-drop');
      //     $('.section-car-drag .dropzone').removeClass('done');
      //     if (!nextInd) {
      //       $('.section-car-drag .block-drag-item.item-picnic, .section-car-drag .block-car-mobile .img-picnic').addClass('show');
      //     } else {
      //       $('.section-car-drag .block-drag-item.item-beach, .section-car-drag .block-car-mobile .img-beach').addClass('show');
      //     }
      //   }
      // });

      interact('.owl-carousel-car-view-nav a').draggable({
        inertia: true,
        onmove: onDragMoveHandler,
        onend: onDragEndHandler
      });

    }

    // Prius C ==========================================
    module.initAsyncBanner = function(element) {
      var $element = $(element);
      if ($element.length === 0) {
        return false;
      }
      var asyncBanner = $element.find(".section-prius-c-banner");
      if (asyncBanner.length <= 0) {
        return false;
      }
      asyncBanner.find('.owl-carousel-bg-car').owlCarousel({
          center: true,
          items: 1,
          dots: true,
          nav: false,
          margin: 0,
          mouseDrag: false,
          touchDrag: false,
          animateOut: 'fadeOutDelay',
          animateIn: 'fadeInDelay',
          responsive: {
            1023: {
              mouseDrag: true,
              touchDrag: true
            },
            1920: {
              mouseDrag: false,
              touchDrag: false
            }
          }
        })
        .on('changed.owl.carousel', function(slider) {
          asyncBanner
            .find('.owl-carousel-car .item').eq(slider.page.index).addClass('active')
            .siblings().removeClass('active');
        });
    };

    // Noah ==========================================
    module.initFurnitureCar = function(element) {
      var $element = $(element);
      if ($element.length === 0) {
        return false;
      }
      if ($element.find('.section-furniture-car').length == 0) {
        return;
      }
      var furniture = $element.find('.section-furniture-car');
      var owlFurniture = furniture.find('.owl-carousel-furniture-car');
      owlFurniture.owlCarousel({
        center: true,
        items: 1,
        loop: false,
        dots: false,
        nav: false,
        margin: 0,
        mouseDrag: false,
        touchDrag: false
      });
      furniture.find('.carousel-furniture-car-navigation span').on('click', function() {
        owlFurniture.trigger($(this).hasClass('next') ? 'next.owl.carousel' : 'prev.owl.carousel');
        var current = owlFurniture.data('owlCarousel')._current + 1;
        var title = furniture.find('.owl-carousel-furniture-car .owl-item:nth-child(' + current + ') .item-furniture-car').attr('data-title');
        var classSlideActive = furniture.find('.owl-carousel-furniture-car .owl-item:nth-child(' + current + ') .item-furniture-car').attr('data-class');
        furniture.find('.carousel-furniture-car-navigation').attr('class', 'carousel-furniture-car-navigation active').addClass(classSlideActive);
        furniture.find('.carousel-furniture-car-navigation .slide-title .change').html(title);

        if ($(window).width() > 1024) {
          var door, arrow, tooltip;
          if (current == 2) {
            door = setTimeout(function() {
              furniture.find('.slide-2 .door').addClass('active move');
              arrow = setTimeout(function() {
                furniture.find('.slide-2 .block-arrow').addClass('active move');
                tooltip = setTimeout(function() {
                  furniture.find('.slide-2 .block-tooltip').removeClass('hidden');
                  furniture.find('.block-balloon').addClass('active');
                }, 2000);
              }, 2000);
            }, 500);
          } else {
            clearTimeout(door);
            clearTimeout(arrow);
            clearTimeout(tooltip);
            furniture.find('.slide-2 .door').removeClass('active move');
            furniture.find('.slide-2 .block-arrow').removeClass('active move');
            furniture.find('.slide-2 .block-tooltip').addClass('hidden');
            furniture.find('.block-balloon').removeClass('active');
          }
        } else {
          var tooltipActive = furniture.find('.owl-carousel-furniture-car .owl-item:nth-child(' + current + ') .item-furniture-car').attr('data-tooltip');
          $element.find('.car-noah-detail .block-popup > div').removeClass('active');
          $element.find('.car-noah-detail .block-popup .' + tooltipActive).addClass('active');
        }

      });
      furniture.find('.owl-carousel-furniture-car .icon-tooltip').on('click', function() {
        furniture.find('.carousel-furniture-car-navigation').removeClass('active');
      });
      furniture.find('.block-popup .close-btn a').on('click', function() {
        furniture.find('.carousel-furniture-car-navigation').addClass('active');
      });
    };

    module.initSlideNoah = function(element) {
      var $element = $(element);
      if ($element.length === 0) {
        return false;
      }
      var slideNoah = $element.find('.section-slide-noah');
      if (slideNoah.length == 0 || $(window).width() <= 1024) {
        return;
      }
      var animating = false;
      slideNoah.find('.icon').on('click', function(e) {
        e.preventDefault();
        if (animating) {
          return;
        }
        animating = true;

        $(this).parent().toggleClass('active');
        slideNoah.find('.car-move').toggleClass('active');
        slideNoah.find('.block-ow-caption').toggleClass('active');

        var scrollTop = ($(window).height() - $element.find('.section-slide-noah').height()) / 2
        if (scrollTop < 0) {
          scrollTop = 0
        }

        setTimeout(function() {
          $('html, body').animate({
            scrollTop: $element.find('.section-slide-noah').height() - scrollTop
          }, 1000);
        }, 3000);
        setTimeout(function() {
          slideNoah.find('.car-move').toggleClass('active');
          slideNoah.find('.block-control .nav').toggleClass('active');
          slideNoah.find('.block-ow-caption').toggleClass('active');
          animating = false;
        }, 4000);
      });
    };

    module.initBabySeats = function(element) {
      var $element = $(element);
      if ($element.length === 0) {
        return false;
      }
      var controlItem = $element.find('.block-tab-car-control');
      if (controlItem.length === 0) {
        return;
      }
      if ($(window).width() > 1024) {
        controlItem.find('.block-control a').on('click', function(e) {
          e.preventDefault();
          var dataID = $(this).attr('data-id');
          $(this).addClass('active').siblings().removeClass('active');
          $element.find('.block-tab-car-content .block-img[data-id="' + dataID + '"]').addClass('active').siblings().removeClass('active');
        });
      } else {
        controlItem.find('.block-control-nav-mobile span').on('click', function() {
          var itemActive;
          if ($(this).hasClass('next')) {
            itemActive = controlItem.find('.block-control a.active').next();
          } else {
            itemActive = controlItem.find('.block-control a.active').prev();
          }
          if (itemActive) {
            itemActive.addClass('active').siblings().removeClass('active');
            var current = itemActive.attr('data-id');
            $element.find('.block-tab-car-content .block-img[data-id="' + current + '"]').addClass('active').siblings().removeClass('active')
          }
        });

      }
    };

    module.init = function(element) {
      module.initSliderAuto('.car-camry-detail');

      module.initLightCar('.car-camry-detail');

      module.initBannerSwitcher('.car-ractis-detail .section-slider-view, .car-sienta-detail .section-slider-view');

      module.ractisRoof('.car-ractis-detail');

      module.initAsyncBanner('.car-prius-c-detail');

      module.initFurnitureCar('.car-noah-detail');

      module.initSlideNoah('.car-noah-detail');

      module.initBabySeats('.car-noah-detail');

      module.initSientaCar('.section-car-run-sienta');

      module.initCarDrag();
      // $(window).load(function() {
      //   module.initCarDrag('.car-detail');
      // });

      module.initSliderNavDrag();

      module.initWideLong('.section-wide-long')

      return module;
    };

    return module.init();

  })(jQuery);
});

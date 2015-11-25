window.Toyota = window.Toyota || {};

jQuery(function($){

  window.Toyota.GeneralUI = {
    // initIMGMiddle: function() {
    //   $('.img-middle > img, .img-middle > picture > img').each(function(index, el) {
    //     var imgHeight = $(el).height();
    //     var blockHeight = $(el).parent().parent().height();

    //     if ($(el).parent().is('picture')) {
    //       blockHeight = $(el).parent().parent().parent().height();
    //       if (imgHeight > blockHeight) {
    //         var mt = (imgHeight - blockHeight) / 2;
    //         $(el).parent().parent().css('top', '-' + mt + 'px');
    //       }
    //     } else {
    //       if (imgHeight > blockHeight) {
    //         var mt = (imgHeight - blockHeight) / 2;
    //         $(el).parent().css('top', '-' + mt + 'px');
    //       }
    //     }

    //   });
    // },
    IEPolyfill: function() {
      if ($('html.ie8').length) {
        var view = $('.car-detail');
        view.find('.image-vertical-middle img').each(function(index, el) {
          var imgWidth = window.Toyota.utils.getNatural(el).width;
          var windownWidth = $(window).width();
          if (imgWidth > windownWidth) {
            var ml = (imgWidth - windownWidth) / 2;
            if ($(el).parents('.section-super-wide-content').length) {
              $(el).css('left', '-' + ml + 'px');
            } else {
              $(el).parent().css('left', '-' + ml + 'px');
            }
          }
        });
      }
    },
    initListOfInterest: function() {
      if ($('.block-lists-interest').length) {
        var interest = $('.block-lists-interest');
        interest.owlCarousel({
          center: true,
          items: 3,
          loop: true,
          dots: false,
          nav: false,
          margin: 0,
          responsive: {
            0: {
              items: 1.5,
              center: true,
              merge: true
            },
            767: {
              items: 1.5,
              center: true,
              merge: true
            },
            1366: {
              items: 3,
              center: true,
              merge: false
            },
            1920: {
              items: 3,
              center: true,
              merge: false
            }
          }
        });
      }
    },
    initImgDrag: function() {
      var imgDragView = $(".image-drag");
      /* if (imgDragView.length === 0 || ($(window).width() < 1280 && $(window).width() >= 1024)) { */
      if (imgDragView.length === 0 || ( $(window).width() < 1025) ) {
        return false;
      }

      interact('.image-drag').draggable({
        // enable inertial throwing
        inertia: true,
        onmove: function(event) {
          var target = event.target,
            targetIMG = $(target).find('img'),
            // keep the dragged position in the data-x/data-y attributes
            x = (parseFloat(targetIMG.attr('data-x')) || 0) + event.dx,
            y = (parseFloat(targetIMG.attr('data-y')) || 0) + event.dy,
            imgW = $(targetIMG).width(),
            imgH = $(targetIMG).height(),
            parentW = $(target).parent().width(),
            parentH = $(target).parent().height();
          // console.log(parentW, parentH);

          if (-(x) >= (imgW - parentW) || (imgW - parentW) == 0 || x > 0) {
            x = parseFloat(targetIMG.attr('data-x'));
          }
          if (-(y) >= (imgH - parentH) || (imgH - parentH) == 0 || y > 0) {
            y = parseFloat(targetIMG.attr('data-y'));
          }
          $(target).css({
            'position': 'relative',
            'left': x + 'px',
            'top': y + 'px',
          });

          // update the posiion attributes
          targetIMG.attr('data-x', x);
          targetIMG.attr('data-y', y);
        },
        onend: function(event) {
          var target = event.target;

        }

      });
    }
  }
  $(window).load(function() {
    window.Toyota.GeneralUI.initImgDrag();
  });
});
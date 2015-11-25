jQuery(function($) {

  window.changeColorCar = (function($){
    var view = $(".section-change-color-car-content");
    if (view.length === 0) {
      return;
    }

    // Private var
    var module = {};
    var maskView = view.find("#mask-view");
    var maskedImage = view.find("#masked-image");
    var carContainer = view.find('.block-lists-car');
    var animating = false;
    var dataColor = 'light-blue';
    var newHeight = maskView.height();
    var ratio = parseInt(maskView.attr('height')) / parseInt(maskView.attr('width'));

    var bloodAnimation = false;

    // Private methods
    var imageSwaphandler = function() {
      carContainer.find('.car').filter('.' + dataColor).addClass('active').siblings().removeClass('active');
    };

    var onMoveHandler = function(event) {
      var target = event.target;
      var colorInfoEle = $(target).parent().parent();
      if (animating || dataColor == colorInfoEle.attr('data-color')) {
        return;
      }
      var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
      $(target).css({
        'position': 'relative',
        'left': x + 'px',
        'top': y + 'px',
        'z-index': 3
      });

      // update the posiion attributes
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    };

    var onEndHandler = function(event) {
      var target = event.target;
      $(target).fadeOut(300, function() {
        $(this).removeAttr('data-x').removeAttr('data-y').removeAttr('style');
      });
    };

    var onDropHandler = function(event) {
      var target = event.relatedTarget;
      var colorInfoEle = $(target).parent().parent();
      if (animating || dataColor == colorInfoEle.attr('data-color')) {
        return;
      }

      dataColor = colorInfoEle.attr('data-color');
      animating = true;

      colorInfoEle
        .addClass('active')
        .siblings('.active').removeClass('active');

      var carActive = carContainer.find('.car').filter('.' + dataColor);

      var imageLink = carActive.find('img').attr('src');

      $("#walt-embed").attr("r", 1);
      maskView.attr('class', 'mask active');
      maskedImage.attr('xlink:href', imageLink);
      var radius = maskView.width() / 2;
      var i = 0;
      var tt = setInterval(function() {
        if (i >= 120) {
          animating = false;
          maskView.attr('class', 'mask');
          imageSwaphandler();
          clearInterval(tt);
        }
        i += 8;
        var realtimeR = Math.floor(radius * i / 100);
        $("#walt-embed").attr("r", realtimeR);
      }, 30);
    };

    module.init = function(){
      imageSwaphandler();

      $("#walt-embed").attr({
        "cx": maskView.width() / 2,
        "cy": (newHeight) / 2,
      });
      
      var winW = $(window).width();

      // For recalculate mask dimension
      if (winW < 1010) {
        newHeight = parseInt(maskView.width()) * ratio;
        maskView.height(newHeight);
      }

      // For init Drag and drop behavior on desktop
      if(winW > 1024){
        interact('.block-lists-color .color-item img').draggable({
          // enable inertial throwing
          inertia: true,
          onmove: onMoveHandler,
          onend: onEndHandler
        });
        interact('.block-lists-car').dropzone({
          accept: '.block-lists-color .color-item img',
          overlap: 1,
          ondrop: onDropHandler
        });
      }else{

        $('.block-lists-color .color-item img').on('click', function(){
          var colorInfoEle = $(this).parent().parent();
          dataColor = colorInfoEle.attr('data-color');
          colorInfoEle
            .addClass('active')
            .siblings('.active').removeClass('active');
          var carActive = carContainer.find('.car').filter('.' + dataColor)
            .addClass('active')
            .siblings('.active').removeClass('active');
        });
      }

      $(window).resize(function() {
        newHeight = parseInt(maskView.width()) * ratio;
        maskView.height(newHeight);
      });

      return module;
    };

    return module.init();
  })(jQuery);

  window.MaskSlide = (function() {
    var view = $(".section-change-color-car-slider");
    if (view.length === 0) {
      return;
    }

    var module = {},
      maskWidth = 980,
      maskHeight = 799,
      stagePadding = Math.round((view.width() - maskWidth) / 2),
      start = stagePadding - (maskWidth * 3),
      stageWidth = view.width(),
      handles = view.find(".handles"),
      masks = view.find(".mask"),
      refreshRate = 200;
    resizeTimeout = 0;

    var resizeHandler = function(e) {
      resizeTimeout && clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function() {
        var winW = $(this).width();
        if (winW >= 1024) {
          maskWidth = 980;
          maskHeight = 799;
          stagePadding = Math.round((view.width() - maskWidth) / 2);
          start = stagePadding - (maskWidth * 3);
          stageWidth = view.width();
          view.find(".handle").each(function(i) {
            $(this).css('left', start + maskWidth * i);
          });
          imgPositioning();
          var x = parseInt(view.find('.handles').attr('data-x'));
          if (isNaN(x)) {
            x = 0;
          }
          updateSlide(x);
        } else if (winW >= 768) {
          maskWidth = winW;
          maskHeight = 650;
          stagePadding = Math.round((view.width() - maskWidth) / 2);
          start = stagePadding - (maskWidth * 3);
          stageWidth = view.width();
          view.find(".handle").each(function(i) {
            $(this).css('left', start + maskWidth * i);
          });
          imgPositioning();
          var x = parseInt(view.find('.handles').attr('data-x'));
          if (isNaN(x)) {
            x = 0;
          }
          updateSlide(x);
        } else {
          //Switch mode
        }
      }, refreshRate);
    };

    var animateHandler = function(x, dxx, flag, target, flagChangeSlide) {
      var tmpX = parseInt(x-dxx) < 0 ? parseInt(x-dxx)*(-1) : parseInt(x-dxx);
      var stepX = (parseInt(tmpX/200) + 7);
      // console.log(x,dxx , stepX);
      bloodAnimation = true;
      $('.car-prius-c-detail .section-change-color-car-slider .block-lists-color').toggleClass('disabled' , bloodAnimation);

      var timeID = setInterval(function() {
        if (flag) {
          if (x <= dxx) {
            clearTimeout(timeID);
            $(target).css('left', dxx).attr('data-x', dxx).attr('data-dx', dxx);
            updateSlide(dxx);
            if (flagChangeSlide) {
              if (dxx == -(maskWidth * 11)) {
                // console.log('a');
                var dxx_new = -(1 * maskWidth);
                $(target).css('left', dxx_new).attr('data-x', dxx_new).attr('data-dx', dxx_new);
                updateSlide(dxx_new);
              }
              if (dxx == (maskWidth * 2)) {
                // console.log('b');
                var dxx_new = -(8 * maskWidth);
                $(target).css('left', dxx_new).attr('data-x', dxx_new).attr('data-dx', dxx_new);
                updateSlide(dxx_new);
              }
            }
            bloodAnimation = false;
            $('.car-prius-c-detail .section-change-color-car-slider .block-lists-color').toggleClass('disabled' , bloodAnimation);
            return;
          }
          x = x - stepX;
          $(target).css('left', x);
          updateSlide(x);
        } else {
          if (x >= dxx) {
            clearTimeout(timeID);
            $(target).css('left', dxx).attr('data-x', dxx).attr('data-dx', dxx);
            updateSlide(dxx);
            if (flagChangeSlide) {
              if (dxx == -(maskWidth * 11)) {
                // console.log('a');
                var dxx_new = -(1 * maskWidth);
                $(target).css('left', dxx_new).attr('data-x', dxx_new).attr('data-dx', dxx_new);
                updateSlide(dxx_new);
              }
              if (dxx == (maskWidth * 2)) {
                // console.log('b');
                var dxx_new = -(8 * maskWidth);
                $(target).css('left', dxx_new).attr('data-x', dxx_new).attr('data-dx', dxx_new);
                updateSlide(dxx_new);
              }
            } 
            bloodAnimation = false;
            $('.car-prius-c-detail .section-change-color-car-slider .block-lists-color').toggleClass('disabled' , bloodAnimation);
            return;
          }
          x = x + stepX;
          $(target).css('left', x);
          updateSlide(x);
        }
      }, 10);
    };

    var updateActiveNav = function(sliderColorActive, sliderTitleActive) {
      var dataColor = sliderColorActive;
      var listColor = view.find('.block-lists-color');
      listColor.find('.color-item[data-color=' + dataColor + ']').addClass('active').siblings('.active').removeClass('active');
      view.find('.block-ow-caption .title-small').html(sliderTitleActive);
    };

    var onStartHandler = function(event) {
      var target = event.target,
        x = (parseInt(target.getAttribute('data-x')) || 0) + event.dx;
      $(target).attr('data-dx', x);
    };

    var onEndHandler = function(event) {
      var target = event.target,
        x = (parseInt(target.getAttribute('data-x')) || 0),
        dx = (parseInt(target.getAttribute('data-dx')) || 0);
      var da = parseInt(Math.abs(x - dx) / (maskWidth) * 100);
      // console.log(da);
      if (Math.abs(da) > 50) {
        var dxx;
        if (dx > x) {
          dxx = dx - maskWidth;
        }
        if (dx < x) {
          dxx = dx + maskWidth;
        }
        //flag chi co tac dung cho viec animate
        animateHandler(x, dxx, ((dxx <= x) ? true : false), $(target), true);
        // $(target).css('left', dxx).attr('data-x', dxx).attr('data-dx', dxx);
        // updateSlide(dxx);
      } else {
        animateHandler(x, dx, ((dx <= x) ? true : false), $(target), false);
        // $(target).css('left', dx).attr('data-x', dx).attr('data-dx', dx);
        // updateSlide(dx);
      }
    };

    var onDragHandler = function(event) {
      var target = event.target,
        x = (parseInt(target.getAttribute('data-x')) || 0) + event.dx,
        dx = (parseInt(target.getAttribute('data-dx')) || 0);
      $(target).css('left', x).attr('data-x', x);
      updateSlide(x);
    };

    var updateSlide = function(x) {
      var opacity;
      view.find(".mask").each(function(i) {
        var x1 = (start + maskWidth * i + x);
        var x2 = (start + maskWidth * (i + 1) + x);
        $(this).attr('style', 'clip: rect(0px,' + x2 + 'px, ' + maskHeight + 'px, ' + x1 + 'px);');

        var xMask = stagePadding;
        var xslide = (start + maskWidth * (i + 1) + x);
        if (xslide > xMask) {
          side = -1
        } else {
          side = 1;
        }
        delta = side * (xslide - xMask) + maskWidth;
        var opacity = 1 - Math.abs(delta / maskWidth);
        if (opacity < 0 || opacity > 1) {
          opacity = 0;
        }
        opacity = parseInt(opacity * 10) / 10;
        $(this).find('.bg-car').css({
          'opacity': opacity
        });

        if (xslide == (xMask + maskWidth)) {
          var sliderColorActive = $(this).attr('data-color');
          var sliderTitleActive = $(this).attr('data-title');
          updateActiveNav(sliderColorActive, sliderTitleActive);
        }
      });
    }

    var slideCloning = function() {
      var first2Items = masks.filter(":lt(3)");
      var last2Items = $(".mask:gt(" + (masks.length - 4) + ")");
      first2Items.clone().appendTo(".mask-wrap");
      last2Items.clone().prependTo(".mask-wrap");
      masks = view.find('.mask');

      var handlesString = "";
      for (var i = 0; i < masks.length; i++) {
        handlesString += '<a href="#" class="handle"></a>';
      }
      handles.append($(handlesString));
      view.find(".handle").each(function(i) {
        $(this).attr('data-id', i).css('left', start + maskWidth * i);
      });
      view.find(".handle").on('mousedown', function() {
        var dataID = $(this).attr('data-id');
        $(this).addClass('active').parent().attr('data-id', dataID);
      }).on('mouseup', function() {
        $(this).removeClass('active');
      });
    };

    var imgPositioning = function(x) {
      view.find('.handles').attr('data-x', x).attr('data-dx', x);
    };

    var initColorIndicator = function (argument) {
      view.find(".block-lists-color .color-item").on('click', function(){
        if($(window).width() < 1024){
          var index = parseInt( $(this).data('index') );
          updateSlide(-(index-1)*maskWidth);
        }else{
          return;
        }
      });
    }

    module.init = function() {
      slideCloning();
      resizeHandler();
      imgPositioning(-(maskWidth*4));
      updateSlide(-(maskWidth*4));
      initColorIndicator();
      view.data('init', true);


      $('.handles').on('click', '.handle', function(e) {
        e.preventDefault();
      });

      var firstSlide = true;
      var autoSliderFunc = function(indexStart, indexEnd){
        bloodAnimation = true;
        $('.car-prius-c-detail .section-change-color-car-slider .block-lists-color').toggleClass('disabled' , bloodAnimation);
        var target = $('.handles'),
            x = indexStart,    // star with color black
            dxx = indexEnd; // end with color red
        firstSlide = false;

        var timeID = setInterval(function() {
          if (x <= dxx) {
            clearTimeout(timeID);
            $(target).css('left', dxx).attr('data-x', dxx).attr('data-dx', dxx);
            updateSlide(dxx);
            bloodAnimation = false;
            $('.car-prius-c-detail .section-change-color-car-slider .block-lists-color').toggleClass('disabled' , bloodAnimation);
            return;
          }
          x = x - 10;
          $(target).css('left', x);
          updateSlide(x);
        }, 10);
      }
      $(window).scroll(function(){
        if(($(window).scrollTop() >= ($('.section-change-color-car-slider').offset().top - 200)) && firstSlide ){
          autoSliderFunc(-(maskWidth*4),-(maskWidth*5));
        }
      });

      if($(window).width() >= 1024){
        $('.block-lists-color .color-item img').on('click', function(){
          if(bloodAnimation){
            return ;
          }
          var colorInfoEle = $(this).parent().parent();
          dataColor = colorInfoEle.attr('data-color');
          var indexColor = $($('.mask-wrap div[data-color="'+dataColor+'"]').get(0)).index();
          if(indexColor < 3 || indexColor > 11){
            indexColor = $($('.mask-wrap div[data-color="'+dataColor+'"]').get(1)).index();
          }

          // imgPositioning(-(maskWidth*(indexColor-3)));
          // updateSlide(-(maskWidth*(indexColor-3)));
          var indexStart = parseInt($('.car-prius-c-detail .handles').attr('data-x'));
          var indexEnd = -(maskWidth*(indexColor-3));
          // console.log(indexColor,indexStart,indexEnd);
          animateHandler(indexStart, indexEnd, ((indexEnd <= indexStart) ? true : false), $('.handles'), true);
        });
      }

      $(window).resize(resizeHandler);
      //Init handles behavior
      interact('.handles')
        .draggable({
          inertia: true,
          // call this function on every start event
          onstart: onStartHandler,
          // call this function on every dragmove event
          onmove: onDragHandler,
          // call this function on every dragend event
          onend: onEndHandler
        });
      return module;
    };

    return module.init();
  })(jQuery);

  // changeColorAnimation for ie8
  if($('.section-change-color-car').length && $(window).width() > 1024){
    $('.section-change-color-car .color-item').eq(1).find('.icon').append('<span class="animation"></span>');
    $('.section-change-color-car .icon').hover(function(){
      $('.section-change-color-car .animation').remove();
    });
    if($('.ie9').length){
      function loop() {
        $('.section-change-color-car .animation').height(22);
        $('.section-change-color-car .animation').animate({height: '+=54'},1500, 'linear', function(){
            loop();
        });
      }
      loop();
    }
  }

});

function mobilecheck() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}
function isPortrait(){
  var winW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var winH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  return winH > winW;
}
function windowWidth(){
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}
function releaseContainerShrink(){
  $(".wrapper").removeAttr("style").css('width', 1024);
  $("body").css("zoom", 1);
}
function resizeContainer(){
  var wH = $(window).height();
  var wW = $(window).width();
  var hProportion = (wH/750);
  var wProportion = (wW/1024);
  var proportion =  wProportion < hProportion ? wProportion : hProportion;
  if(proportion < 1){
    var proportion = proportion < 0.8 ? 0.8 : proportion;
    $(".wrapper").removeAttr("style").css("height", 750*proportion);
    $("body").css("zoom", proportion);
  }else{
    releaseContainerShrink();
  }
}
var resizeBreakpoint = (function ($) {
  var breakpoint = ['320', '480', '768', '800', '960', '1024'];
  var currentBPoint = 99999;
  var prevBP = 99999;
  var timeout;

  var module = {};
  module.init = function () {
    $(window).on('resize', function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        var winW = windowWidth();
        var flagFinish = true;
        for (var i = 0; i < breakpoint.length; i++) {
          if (winW < breakpoint[i]) {
            if (i == 0) {
              currentBPoint = breakpoint[i];
            } else {
              currentBPoint = breakpoint[i - 1];
            }
            flagFinish = false;
            break;
          }
        }
        if (flagFinish) {
          currentBPoint = breakpoint[breakpoint.length - 1];
        }
        if (currentBPoint !== prevBP) {
          prevBP = currentBPoint;
          ODFC.Events.trigger('resizeWindow', {BP: parseInt(currentBPoint)});
          console.log(currentBPoint);
        }
      }, 100);
    });
    return module;
  };
  return module.init();
})(jQuery);

window.SYM = window.SYM || {};

SYM.Loading = (function($){
  var module = {};
  var view = $("body");
  var loadingLayer = $('.loading-layer');
  
  module.init = function(afterLoading){
    view.imagePreload({
      onImageCompleteLoading: function(percentage) {
        loadingLayer.find('strong').html('100%');
        loadingLayer.find('.inner-progress').css({'width' : '100%'});
        loadingLayer.fadeOut(500);
        setTimeout(function(){
          view.removeClass('loading');
          if(typeof afterLoading === 'function'){
            afterLoading();
          }
        }, 600);
      },
      onEachCompleteLoading: function(percentage) {
        loadingLayer.find('strong').html(percentage +'%');
        loadingLayer.find('.inner-progress').css({'width' : percentage +'%'});
      },
      onBeforeLoading: function() {
        loadingLayer.find('strong').html('0%');
        loadingLayer.find('.inner-progress').css({'width' : '0%'});
      }
    });
  };

  return module;
})(jQuery)

SYM.UI = {
  infoNavigation: function(){
    var nav = $(".navigation");
    if(nav.length){ 
      $(".navigation li a").on('click', function(e){
        if( $(this).attr("href").indexOf("#") >= 0 ){
          e.preventDefault();
          $(this).addClass('active').parent().siblings().find('a').removeClass('active');
          $( $(this).attr("href") ).addClass('active').siblings(".section").removeClass('active');
          if($(this).attr("href") == '#photo-gallery' && $('#photo-gallery .center-img').find('iframe').length == 0){
            $('#photo-gallery .center-img').html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/BC_zOgyKR7k?loop=1&autoplay=1&list=PLdZeSuvIyZABmb_IXO_BDc1PFmMKA6VU7" frameborder="0" id="center-img"></iframe>');
          }
        }
      });
    }
  },
  color: function(){   
    $('.owl-carousel','#color').owlCarousel(
      {
        items: 1, 
        loop: true, 
        nav: true, 
        dots: false,
        navText: ['&nbsp;','&nbsp;']  
      });
    $('.btn-switcher', '#color').off('click').on('click', function(){
        var wrapper = $(this).attr('wrapper');
        console.log(wrapper);
        $('.motor-decor-carousel', '#color').removeClass('active');
        $('.' + wrapper).fadeOut();
        $('.' + wrapper).addClass('active');
        return false;
    });
  },
  initLibrary: function(){
    
    $('.owl-carousel','#photo-gallery').owlCarousel(
      {
        items: 6, 
        loop: true, 
        nav: true, 
        dots: false,
        navText: ['&nbsp;','&nbsp;']  
      });
      $('.img-select','#photo-gallery').off('click').on('click', function(){
        $('#center-img', '#photo-gallery').attr('src', $(this).attr('src'));
        
      });
  },
  featureSlider: function(){
    var slides = $(".slick-slider");
    if(slides.length){
      slides.each(function(){
        var sectionID = $(this).closest(".section").attr("id");
        $(this).slick({
          speed: 400,
          fade: true,
          cssEase: 'linear',
          prevArrow: $("#" + sectionID + " .prev"),
          nextArrow: $("#" + sectionID + " .next")
        });
      });
    }
  }
};

/* Document Ready */
$(document).ready(function () {
  SYM.Loading.init(function(){
    SYM.UI.infoNavigation();
    //init color page
    SYM.UI.color();
    //init library page
    SYM.UI.initLibrary();

    SYM.UI.featureSlider();
    if(window.Puzzle){
      Puzzle.init();
    }
    if(window.secondStage){
      secondStage.init();
    }

    $(window).trigger('resize');
  });

  var headerTabLink = $('.header-tab').not(".reload").find("li a");
  if(headerTabLink.length){
    headerTabLink.click(function(event) {
      event.preventDefault();
      $('.header-tab li a, .drak-popup-wrapper').removeClass('active');
      $(this).addClass('active');
      var id = $(this).attr('href');
      $(id).addClass('active')
    });
  }
});

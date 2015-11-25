'use strict';

window.ODFC = window.ODFC || {};
window.ODFC.Events = window.ODFC.Events || {};
window.Toyota = window.Toyota || {};
window.Toyota.utils = window.Toyota.utils || {};

window.Toyota.utils = {
  getNatural: function(DOMelement) {
    var img = new Image();
    img.src = DOMelement.src;
    return {
      width: img.width,
      height: img.height
    };
  }
};

// fix for server slow 
if(jQuery('header + div').hasClass('home')){
  jQuery('header').addClass('home');
}

window.Toyota.UI = {
  initSelect: function() {
    $('.navigation-top-container select').selectpicker();
  },

  animationHeaderHome: function(){
    if(!$('header + div').hasClass('home')){
      return false;
    }
    // $('header').addClass('home');
    setTimeout(function(){
      $(".home .navigation-container").removeClass('overflow');
    },2000);
    setTimeout(function(){
      $(".navigation-container .wsmenu-list > li > a").each(function(i,e){
        var valDelay = i * 0.13;
        $(this).css({
          '-webkit-transition-delay': valDelay + 's', 
          '-moz-transition-delay': valDelay + 's',
          '-ms-transition-delay': valDelay + 's',
          '-o-transition-delay': valDelay + 's',
          'transition-delay': valDelay + 's'
        })
      });
      $(".navigation-container").addClass('animation');
    }, 300);
  },

  fixFilterListRWD: function(){
    if($('.cars-family-filter-list').length < 0 || $(window).width() > 1025){
      return false;
    }
    var filterList = $('.cars-family-filter-list');
    $(filterList).find('li:first-child a').addClass('disable-link');
    $(filterList).find('li a').on('click',function(){
      if($(this).hasClass('disable-link')){
        $(this).removeClass('disable-link');
        return false;
      }
    });
  }
};

window.Toyota.home = (function() {
  var viewHome;
  var module = {};

  module.initUI = function() {
    return false;
  };

  module.init = function(element) {
    viewHome = jQuery(element);

    if (viewHome.length < 0) {
      return false;
    }

    module.initUI();

    return module;
  };
  return module;

})(jQuery);





/* Document Ready */
jQuery(document).ready(function($) {
  var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);
  if (iOS) {
    $('html').addClass('iOS');
  }

  if (!Modernizr.touch) { //added by KhoaNT
    $('body').addClass('no-touch');
  }
  if (Modernizr.touch) { //added by KhoaNT
    $('body').addClass('touch-device');
  }

  // middle helpful-link-list screem
  if ($('.helpful-link-list').length && $(window).width() > 1030) {
    var topHelpful = (parseInt($(window).height()) - parseInt($('.helpful-link-list').height()) ) / 2;
    $('.helpful-link-list').css('top', topHelpful);
  }
  
  var funcAll = function(){
    if ($(window).width() > 1030) {
      $('.submenu-link > .link-default').matchHeight();
    }else{
      $('.submenu-link > .link-default').attr('style','');
    }
      
    if ($(window).width() > 767) {
      if (!($('body').hasClass('DesignMode') || $('body').hasClass('EditMode'))) {
        $(".navigation-container").sticky({
          topSpacing: 0
        });
      }     
    } else {
      $("#header").sticky({
        topSpacing: 0
      });
      // change menu href for mobile
      $('#header .navigation > ul > li > a').each(function() {
        if ($(this).attr('data-href-mobile')) {
          $(this).attr('href', $(this).attr('data-href-mobile'));
        }
      });

      // middle helpful-link-list screem
      if ($('.helpful-link-list').length) {
        var heightUl = $(document).height();
        $('.helpful-link-list').height(heightUl);
      }
    }
    $('.price-list .cars-list .cars-list__item').matchHeight();    
  };
  funcAll();

  $(window).on('resize', function() {
    funcAll();
  });

  // update price of car
  if(typeof priceCar !== 'undefined' && priceCar !== '0' ){
    $('.owl-caption .title .price, .block-ow-caption .title .price, .master-banner-detail .master-banner-item__price').html(priceCar);
    // if($('body').hasClass('en-US')){
    //   $('.owl-caption .title .price, .block-ow-caption .title .price').html('$'+priceCar+' up');
    // }else{
    //   $('.owl-caption .title .price, .block-ow-caption .title .price').html('$'+priceCar+' 起');
    // }
  }

  if ($(window).width() <= 1024) {
    $('#cars-family-filter-list a').on('click', function(e) {
      e.preventDefault();
      $(this).closest('ul').toggleClass('open');
    });
  }

  // init fancybox

  $(".various").fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    padding: 0,
    closeBtn: false,
    helpers: {
      overlay: {
        locked: false
      }
    }
  });
  $(".various").on('click', function(e){
    e.preventDefault();
  });

});




/* Window load */
jQuery(window).load(function() {
  /* home script */
  window.Toyota.home.init('.home');

  window.Toyota.UI.initSelect();

  window.Toyota.UI.animationHeaderHome(); 

  window.Toyota.UI.fixFilterListRWD();  

  setTimeout(function(){
    $("body").removeClass('loading');
  },300);

  var bumpIt = function() {
    $('body').css('margin-bottom', -$('#footer').height());
  },
  didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if(didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

});





/* Window resize */
jQuery(window).on('resize', function() {
  // window.Toyota.carDetail.init('.car-detail');
});

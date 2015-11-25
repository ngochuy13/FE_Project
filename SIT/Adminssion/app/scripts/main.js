// 'use strict';

window.ODFC = window.ODFC || {};
window.ODFC.Events = window.ODFC.Events || {};
window.SIT = window.SIT || {};
window.SIT.utils = window.SIT.utils || {};

function is_touch_device() {
  return !!('ontouchstart' in window);
}
jQuery(function($) {
  $('html').toggleClass('no-touch', !is_touch_device());
  $('.imagefill-section').each(function() {
    if ($(window).width() > 1023) {
      $(this).find('img.mobile-img').hide();
      $(this).css('backgroundImage', 'url(' + $(this).find('img.main-img').attr('src') + ')');
    } else {
      $(this).find('img.main-img').hide();
      $(this).css('backgroundImage', 'url(' + $(this).find('img.mobile-img').attr('src') + ')')
      .css('background-size', 'contain');
    }
  });
});

jQuery(window).on('load', function() {
  $('.selectpicker').selectpicker();
  window.SIT.flexView = (function($) {
    var module = {};
    var itemsView = $(".home-grid");
    var gridOrder = null;

    if ($(window).width() < 991) {
      gridOrder = {
        order: '[data-grid-order] parseInt'
      };
    }

    var masonryInit = function() {
      var $grid = itemsView.isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        getSortData: gridOrder,
        sortBy: 'order',
        masonry: {
          gutter: 0,
          columnWidth: '.grid-sizer'
        }
      });
      $grid.isotope('layout');
    };

    var gallSliderInit = function() {
      $('.gallery-slider').on('initialized.owl.carousel', function(event) {
        var count = 0;
        var currentItem = parseInt($(this).find('.owl-item.active .gallery-item').attr('data-order')) + 1;
        $(this).find('.owl-stage .owl-item').each(function() {
          if (!$(this).hasClass('cloned'))
            count++
          else
            $(this).find('.gallery-item').attr('rel', '');
        });
        $(this).siblings('.gallery-counter').find('span.current').html(currentItem);
        $(this).siblings('.gallery-counter').find('span.total').html(count);
        if(count == 1)
        {
          $(this).find('.gallery-item').attr('rel', 'prettyPhoto');
        }
      });

      $('.gallery-slider').each(function(event){
        if($(this).find('.gallery-item').length <= 1)
        {
          $(this).owlCarousel({
            items: 1,
            loop: false,
            lazyLoad: false,
            margin: 0,
            mouseDrag: false,
            nav: true,
            dots: false
          });
        }
        else
        {
          $(this).owlCarousel({
            items: 1,
            loop: true,
            lazyLoad: false,
            margin: 0,
            mouseDrag: false,
            nav: true,
            dots: false
          });
        }
      });  
      // $('.gallery-slider').owlCarousel({
      //       items: 1,
      //       loop: true,
      //       lazyLoad: true,
      //       margin: 0,
      //       mouseDrag: false,
      //       nav: true,
      //       dots: false
      //     });


if ($(window).width() >= 992) {
  $("a[rel^='prettyPhoto']").prettyPhoto({
    ie6_fallback: true,
    social_tools: false,
    theme: 'facebook'
  });
} 
else {
  $("a[rel^='prettyPhoto']").click(function(event) {
    event.preventDefault();
  });
}

$('.gallery-slider').on('translated.owl.carousel', function() {
  var currentItem = parseInt($(this).find('.owl-item.active .gallery-item').attr('data-order')) + 1;
  $(this).siblings('.gallery-counter').find('span.current').html(currentItem);
});
      // $('.gallery-info-wrapper .gallery-desc').matchHeight();
    };
    module.init = function() {
      masonryInit();
      gallSliderInit();
      return module;
    }

    return module.init();
  })(jQuery);
});
//- add class active for accordion panel heading when collapse in
$(function() {
  $('.accordion-wrapper .panel-heading a').click(function() {
    if ($(this).closest('.panel-heading').hasClass('active')) {
      $(this).closest('.panel-heading').removeClass('active');
    } else {
      $('.accordion-wrapper .panel-heading').removeClass('active');
      $(this).closest('.panel-heading').addClass('active');
    }
  });
});
jQuery(document).ready(function($) {

  $('.why-sit-container .row:nth-child(even)').addClass('even');
  $('.campus-address-info').matchHeight();
  $('.criteria-box .criteria').matchHeight();
  //- colorBox
  $(".popup-video").colorbox({
    iframe: true,
    innerWidth: 640,
    innerHeight: 390
  });
  $('.imagefill').imagefill({
    runOnce: true
  });
  $('.course-list-group .course-item a').on('click', function(event) {
    event.preventDefault();
    $(this).parent().toggleClass('active').siblings().removeClass('active');
  });
  //testimonial-carousel
  $('.testimonial-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    mouseDrag: false,
    touchDrag: false
  });
  //resp-slider
  $('.T4_responsive_carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    mouseDrag: false,
    responsive:
    {
      768:
      {
        loop: false,
        items: 2,
        stagePadding: 20
      },
      994:
      {
        loop: false,
        items: 3,
      }
    }
  })
  //whysitslider
    $owlContainer = $('.sit-glance-slider');
    $owlSlides    = $owlContainer.children();
    owlAutoPlay   = $owlSlides.length > 1;
    $('.sit-glance-slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: owlAutoPlay,
      autoplayTimeout: 4000,
      dots: true,
      mouseDrag: owlAutoPlay
    });

  //resp-tab
  $('.module-tab').easyResponsiveTabs({
    type: 'vertical',
    fit: true
  });

});



$(window).on('resize', function(){
  // change banner for mobile
  var viewBanner = $('.section-banner-list , .course-detail-banner');
  if(viewBanner.length){
    var ori_bg = viewBanner.find('img.bg-img').attr('src');
    var sm_bg = viewBanner.attr('data-sm-bg');
    
    if($(window).width()<993)
    {
      viewBanner.css('background-image',sm_bg);
    }
    else
    {
      viewBanner.css('background-image',"url("+ori_bg+")");
    }
  }  

  if($(window).width()<993)
  {
    // $('.proccess-timeline').data('owl.Carousel').destroy();
    $('.proccess-timeline').removeClass('owl-carousel');
    if($($('.proccess-timeline')).data('owl.carousel')){
      $($('.proccess-timeline')).data('owl.carousel').destroy();
    }
  }
  else
  {
    $('.proccess-timeline').addClass('owl-carousel');
    $('.proccess-timeline').owlCarousel({
      items: 3,
      loop: false,
      mouseDrag: false,
      nav: true
    });
  }

}).trigger('resize');
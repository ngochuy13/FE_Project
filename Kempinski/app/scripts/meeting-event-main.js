jQuery(function($){
  var sportExpMasonry = (function() {
    'use strict';

    var view = $(".masonry-sport-experience");
  
    var sportExpMasonry = {
      init: function (argument) {
        view.find('.image-wrapper').imagefill({
          runOnce: true
        });
        view.isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
          // getSortData: {
          //   order: '[data-grid-order] parseInt'
          // },
          // sortBy: 'order',
          masonry: {
            gutter: 0,
            columnWidth: '.grid-sizer'
          }
        });
        view.isotope('on', 'layoutComplete', function() {
          view.find('.image-wrapper').imagefill({
            runOnce: true
          });
        });
      }
    };
  
    return sportExpMasonry;
  }());
  $(window).on('load', function(){
    sportExpMasonry.init();
  })
})
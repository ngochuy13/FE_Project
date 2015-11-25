
window.MP = window.MP || {};

//==============================================================================//
//--------------================ Gallery Masonry =================--------------//
//==============================================================================//
MP.GalleryMasonry = (function ($){
  // Private Variable
  var viewGalleryList;
  var viewGallery;
  var module = {};



  // Public Methods
  module.removemasonry = function (){
    $('.masonry-container').masonry('destroy').find('.item').remove();
  };
  
  module.render = function(data){
      var source   = $(".masonry-gallery-item-template").html();
      var template = Handlebars.compile(source);
      var htmlItem = '';      
      $('.masonry-container').html('<div class="grid-sizer"></div>');
      $(data.item).each(function(i,itemdata){
        htmlItem = template(itemdata);
        var item = [$(htmlItem).get(0)];
        $('.masonry-container').append( item );
      });
  };

  module.loading = function(afterLoading){
    viewGallery.imagePreload({
      onImageCompleteLoading: function(percentage) {
        // console.log(percentage);
        viewGallery.find('.room-list').show();
        viewGallery.removeClass('section-loading');
        console.log(typeof afterLoading);
        if(typeof afterLoading === 'function'){
          afterLoading();
        }
      },
      onEachCompleteLoading: function(percentage) {
        viewGallery.find('.loading h1').html(percentage +'%');
        viewGallery.find('.loading .progress-bar').css({'width' : percentage +'%'});
      },
      onBeforeLoading: function() {
        viewGallery.find('.loading h1').html('0%');
        viewGallery.find('.loading .progress-bar').css({'width' : '0%'});
      viewGallery.find('.room-list').hide();
        viewGallery.addClass('section-loading');
      }
    });
  };

  module.initUI = function(){
    viewGallery.find('.masonry-container').masonry({
      columnWidth: ".grid-sizer",
      gutter: 0,
      itemSelector: '.item'
    });
  };

  module.init = function (o){
    if(galeryMasonryData.length){

      viewGallery = $(o.gallery);
      viewGalleryList = $(o.list);

      module.initUI();
      viewGalleryList.find('.item a').on('click.changegarelly' , function(e){
          e.preventDefault();
          module.removemasonry();
          var garellyID = $(this).attr('data-id');
          module.render($(galeryMasonryData).get(garellyID));
          module.loading(function(){
              module.initUI();
          });
          return false;
      });
    }
    return module;
  };

  return module;

})(jQuery);


$(window).load(function () {
  MP.GalleryMasonry.init({
    "list": ".section-garelly-list",
    "gallery": ".section-masonry-garelly"
  });
});
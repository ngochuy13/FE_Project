// Assume we have global json var: dtInter
// TODO: define function to retrieve json data

window.MP = window.MP || {};

window.interiorData = {};

//==============================================================================//
//-------------------================ Unit =================--------------------//
//==============================================================================//
MP.Units = (function ($){
  var view;
  var module = {};
  var selected = "";
  var unitTemplate;

  module.getSelectedUnit = function(){
    return selected;
  };

  module.extractData = function(){
    var data = [];

    $.each(interiorData.Units, function(k, v){
      data.push({
        "id": k,
        "title": v.title,
        "thumb": v.thumb
      });
    });

    return data;
  };

  module.render = function (data) {
    view.find(".unit-section").html( unitTemplate( {"units": data} ) );
  };

  module.initUI = function (){
    // Unit list selection
    view.on('click', ".unit-section a", function (e){
      e.preventDefault();
      $('.unit-section a').removeClass('active');
      $(this).addClass('active');
      var unitID = $(this).closest('li').attr('data-item');
      selected = unitID;
      ODFC.Events.trigger('onchange.unit', {"unit": selected});
      if($(window).width() > 1024) {
        $('html, body').animate({
          scrollTop: $('.floor-list').offset().top - 106
        }, 500);
      }
      else {
        $('html, body').animate({
          scrollTop: $('.floor-list').offset().top
        }, 500);
      }
    });
  };

  module.init = function (v){
    view = $(v);
    module.initUI();

    var unitSource   = $('.unit-list-template').html();
    unitTemplate = Handlebars.compile(unitSource);

    module.render( module.extractData() );

    return module;
  };

  return module;

})(jQuery);




//==============================================================================//
//-------------------================ Floor ================--------------------//
//==============================================================================//
MP.Floors = (function ($){
  // Private vars
  var view;
  var module = {};
  var isChosen = false;
  var selected = "";
  var selectedDrawingTemplate;
  var selectedInfoTemplate;
  var drawingListTemplate;

  // Private methods
  // render methods runs with global json data requested right after document ready
  module.render = function(data) {
    // TODO: replace class name
    view.find(".selected-drawing").html( selectedDrawingTemplate({"drawings": data, "roomcoords": data.roomcoords}) );
    view.find(".selected-drawing").find('ul li').first().addClass('active');
    view.find(".info-list").html( selectedInfoTemplate({"info": data}) );
    view.find(".info-list").find('.info-block').first().addClass('active');
    view.find(".drawing-list").html( drawingListTemplate({"drawings": data}) );
    view.find(".drawing-list").find('ul li').first().addClass('inactive');
  };

  module.extractData = function(unitID){
    var unit = interiorData.Units[unitID];
    var floorData = [];
    $.each(unit.floors, function(i, v) {
      floorData.push({
        'id': v.id,
        'title': v.title ,
        'description': v.description,
        'price' : v.price,
        'planText': v.planText,
        'planLink': v.planLink,
        'priceText': v.priceText,
        'priceLink': v.priceLink,
        'thumb': v.thumb,
        'img': v.img,
        'width': v.width,
        'height': v.height,
        'roomcoords': v.roomcoords,
        'name': v.name
      });
    });
    return floorData;
  };

  var showSelectedFloorInfo = function(elm){
    // hide all item in the list except selected
    view.on('click', ".drawing-list a", function(e) {
      e.preventDefault();
      $('.drawing-list li').removeClass('inactive');
      $(this).closest('li').addClass('inactive');
      var floorID = $(this).closest('li').attr('data-item');
      $('.selected-drawing li').removeClass('active');
      $('.selected-drawing li[data-item='+ floorID +']').addClass('active');
      $('.info-list .info-block').removeClass('active');
      $('.info-list .info-block[data-item='+ floorID +']').addClass('active');
      $(window).trigger('resize');      
    });
  };

  var updateFloorList = function(elm){
    // show all item in the list except selected

  };

  // Public methods
  module.loading = function(){
    view.imagePreload({
      onImageCompleteLoading: function(percentage) {
        // console.log(percentage);
        view.find('.room-list').show();
        view.removeClass('section-loading');
      },
      onEachCompleteLoading: function(percentage) {
        view.find('.loading h1').html(percentage +'%');
        view.find('.loading .progress-bar').css({'width' : percentage +'%'});
      },
      onBeforeLoading: function() {
        view.find('.loading h1').html('0%');
        view.find('.loading .progress-bar').css({'width' : '0%'});
        view.find('.room-list').hide();
        view.addClass('section-loading');
      }
    });
  };

  module.getSelectedFloor = function(){
    return selected;
  };

  module.hide = function() {
    view.addClass('hide');
  };

  module.show = function() {
    view.removeClass('hide');
  };

  module.initUI = function (){
    // Unit floor list selection
    showSelectedFloorInfo();

    // view.on('click', ".selected-drawing a", function (e){
    //   e.preventDefault();
    //   var floorID = $(this).closest('li').attr('data-item');
    //   selected = floorID;
    //   ODFC.Events.trigger('onchange.floor', {"unit": MP.Units.getSelectedUnit() ,"floor": selected});
    // });

    view.on('click', "area", function (e){
      e.preventDefault();
      var roomID = $(this).data('id-room');
      var floorID = $(this).closest('li').attr('data-item');
      selected = floorID;
      ODFC.Events.trigger('onchange.floor', {"unit": MP.Units.getSelectedUnit() ,"floor": selected, "roomselected": roomID});
      ODFC.Events.trigger('onchange.room', {
        "unit": MP.Units.getSelectedUnit(),
        "floor": selected,
        "room": roomID
      });
      if($(window).width() > 1024) {
        $('html, body').animate({
          scrollTop: $('.room-gallery').offset().top - 106
        }, 500);
      }
      else {
        $('html, body').animate({
          scrollTop: $('.room-gallery').offset().top
        }, 500);
      }
    });
  };

  module.init = function (v){
    view = $(v);
    module.initUI();

    var selectedDrawingSource = $('.selected-drawing-template').html();
    var selectedInfoSource = $('.selected-info-template').html();
    var drawingListSource = $('.drawing-list-template').html();
    selectedDrawingTemplate = Handlebars.compile(selectedDrawingSource);
    selectedInfoTemplate = Handlebars.compile(selectedInfoSource);
    drawingListTemplate = Handlebars.compile(drawingListSource);

    ODFC.Events.on('onchange.unit', function(data){
      module.render( module.extractData(data.unit) );
      module.show();
      // module.initUI();
      module.loading();
      $(window).trigger('resize');      
    });

    return module;
  };

  return module;

})(jQuery);



//==============================================================================//
//-------------------================ Room =================--------------------//
//==============================================================================//
MP.Rooms = (function ($){
  // Private vars
  var view;
  var template_room_class = '.room-list-item-template';
  var template_room_description_class = '.room-description-template';
  var template_gallery_list_class = '.gallery-list-template';
  var template_room;
  var template_room_description;
  var template_gallery_list;
  var module = {};
  var isChosen = false;
  var selected = "";

  // Private methods
  // render methods runs with global json data requested right after document ready
  module.render = function(data) {
    view.find(".room-list").html(template_room({'roomlist': data}));
    view.find(".room-description").html(template_room_description({'desc': data}));
    view.find(".gallery-list").html(template_gallery_list({'gallerylist': data, imglist: data.imglist}));
  };

  module.extractData = function(){
    var rooms = interiorData.Rooms;
    var roomArr = [];
    $.each(rooms, function(i, v) {
      roomArr.push({
        'title': v.title ,
        'thumb': v.thumb ,
        'dataID': v.id,
        'img': v.img,
        'description': v.description,
        'imglist': v.imglist
      });
    });
    return roomArr;
  };

  // Public methods
  module.loading = function(){
    view.imagePreload({
      onImageCompleteLoading: function(percentage) {
        // console.log(percentage);
        view.find('.room-list').show();
        view.removeClass('section-loading');
      },
      onEachCompleteLoading: function(percentage) {
        view.find('.loading h1').html(percentage +'%');
        view.find('.loading .progress-bar').css({'width' : percentage +'%'});
      },
      onBeforeLoading: function() {
        view.find('.loading h1').html('0%');
        view.find('.loading .progress-bar').css({'width' : '0%'});
        view.find('.room-list').hide();
        view.addClass('section-loading');
      }
    });
  };

  module.getSelectedRoom = function(){
    return selected;
  };


  module.hide = function() {
    view.addClass('hide');
  };

  module.show = function() {
    view.removeClass('hide');
  };

  module.initUI = function (){

    // Unit floor list selection
    view.on('click', ".room-list a", function (e){
      e.preventDefault();
      view.find('li').removeClass('active');
      $(this).parent().addClass('active');
      var roomID = $(this).attr('data-id');
      selected = roomID;

      var galleryList = $('.gallery-list'),
          roomDes = $('.room-description');
      $('.gallery-item', galleryList).removeClass('active');
      $('.gallery-item[data-id='+ roomID +']', galleryList).addClass('active');
      $('.info-block', roomDes).removeClass('active');
      $('.info-block[data-id='+ roomID +']', roomDes).addClass('active');

      ODFC.Events.trigger('onchange.room', {
        "room": selected
      });
    });

  };

  module.init = function (v){
    view = $(v);
    module.initUI();

    template_room = Handlebars.compile( $(template_room_class).html() );
    template_room_description = Handlebars.compile( $(template_room_description_class).html() );
    template_gallery_list = Handlebars.compile( $(template_gallery_list_class).html() );

    module.render( module.extractData() );

    ODFC.Events.on('onchange.unit', function(data) {
      // Incase of hide elements when upper section is changed
      //module.hide();
    });

    ODFC.Events.on('onchange.floor', function(data){
      module.show();
      module.loading();

      if(data.roomselected != ''){
        view.find('.room-list li').removeClass('active');
        view.find('.room-list li a[data-id="'+data.roomselected+'"]').parent().addClass('active');
        view.find('.room-description .info-block').removeClass('active');
        view.find('.room-description .info-block[data-id="'+data.roomselected+'"]').addClass('active');
        view.find('.gallery-list .gallery-item').removeClass('active');
        view.find('.gallery-list .gallery-item[data-id="'+data.roomselected+'"]').addClass('active');
        selected = data.roomselected;
        setTimeout(function() {
          $('.gallery-list .slider-wrapper').slick({
            infinite: false
          });

          // if($(window).width() > 767) {
          //   var roomList = new Swiper('.room-list .swiper-container', {
          //     slidesPerView: 2
          //   });
          // }
          // else {
          //   var roomListMobile = new Swiper('.room-list .swiper-container', {
          //     slidesPerView: 4
          //   });
          // }
        }, 500);
      }
      $(window).trigger('resize');
    });

    return module;
  };

  return module;

})(jQuery);




//==============================================================================//
//------------------================ Gallery =================------------------//
//==============================================================================//
//MP.Gallery = (function ($){
//  // Private vars
//  var view = '.section-room-gallery';
//  var asNavForClass = '.room-info .room-detail .thumb-list ul li';
//  var template_room_description_class = '.room-info-room-description-template';
//  var template_thumb_list_class = '.room-info-thumb-list-template';
//  var template_gallery_list_class = '.gallery-list-template';
//  var template_room_description;
//  var template_thumb_list;
//  var template_gallery_list;
//  var module = {};
//  var isChosen = false;
//
//  // Private methods
//  // render methods runs with global json data requested right after document ready
//  var render = function(data) {
//    // TODO: replace class name
//    // set Title
//    view.find('.gallery-block .room-info .room-detail .title').html(data.title);
//    var desc = [], gallerylist = [];
//    $.each(data.gallery, function(i ,v){
//      desc.push({'description': data.description});
//      gallerylist.push(v);
//    });
//    // set thumb list
//    view.find('.thumb-list').html(template_thumb_list({'thumblist': gallerylist}));
//    // set gallery list
//    view.find('.gallery-list').html(template_gallery_list({'gallerylist': gallerylist}));
//    // set description list
//    view.find('.room-description').html(template_room_description({'desc': desc}));
//    view.find('.room-description .info-block').first().addClass('active');
//  };
//
//  var extractData = function(roomID){
//
//    var rooms = interiorData.Rooms;
//    var room;
//    $.each(rooms, function(i, v) {
//      if(v.id===roomID){
//        room = v;
//        return false;
//      }
//    });
//    return room;
//  };
//
//  var destroySlider = function() {
//    view.find('.room-gallery .gallery-list ul').unslick();
//  };
//
//  // Public methods
//  module.loading = function(){
//    view.imagePreload({
//      onImageCompleteLoading: function(percentage) {
//        // console.log(percentage);
//        view.find('.room-gallery').show();
//        view.removeClass('section-loading');
//      },
//      onEachCompleteLoading: function(percentage) {
//        view.find('.loading h1').html(percentage +'%');
//        view.find('.loading .progress-bar').css({'width' : percentage +'%'});
//      },
//      onBeforeLoading: function() {
//        view.find('.loading h1').html('0%');
//        view.find('.loading .progress-bar').css({'width' : '0%'});
//        view.find('.room-gallery').hide();
//        view.addClass('section-loading');
//      }
//    });
//  };
//
//
//  module.hide = function() {
//    view.addClass('hide');
//  };
//
//  module.show = function() {
//    view.removeClass('hide');
//  };
//
//  module.initUI = function (){
//    // Init slider here
//    var slider = view.find('.room-gallery .gallery-list ul');
//      slider.slick({
//        speed: 500,
//        fade: true,
//        arrows: false,
//        slide: 'li'
//      });
//      view.on('click','.thumb-list a', function(e){
//        e.preventDefault();
//        var slideIndex = $(this).parent().index();
//        slider.slickGoTo(parseInt(slideIndex));
//      });
//      view.on('click','.scroll-down-cta, .scroll-down-cta + img', function(e){
//        e.preventDefault();
//        $('html, body').getNiceScroll(0).doScrollTop(view.find('.gallery-block').offset().top);
//        // $('html, body').animate({
//        //   scrollTop: view.find('.gallery-block').offset().top
//        // }, 1000);
//      });
//  };
//
//  module.init = function (v){
//    view = $(v);
//    template_room_description = Handlebars.compile( $(template_room_description_class).html() );
//    template_thumb_list = Handlebars.compile( $(template_thumb_list_class).html() );
//    template_gallery_list = Handlebars.compile( $(template_gallery_list_class).html() );
//
//    module.initUI();
//
//    ODFC.Events.on('onchange.unit, onchange.floor', function(data) {
//      // Incase of hide elements when upper section is changed
//      module.hide();
//    });
//
//    ODFC.Events.on('onchange.room', function(data){
//      destroySlider();
//      render( extractData(data.room) );
//      module.show();
//      module.initUI();
//      module.loading();
//    });
//
//    return module;
//  };
//
//  return module;
//
//})(jQuery);

MP.Default = (function ($){
  // Private vars
  var module = {};

  module.init = function (){
    var unitID;
    var roomID;

    unitID = $('.units li').first().attr('data-item');
    MP.Floors.render( MP.Floors.extractData(unitID) );
    MP.Rooms.render( MP.Rooms.extractData() );
    setTimeout(function() {
      roomID = $('.floor-section area').first().attr('data-id-room');
      if(roomID != ''){
        $('.room-list li').removeClass('active');
        $('.room-list li a[data-id="'+roomID+'"]').parent().addClass('active');
        $('.room-description .info-block').removeClass('active');
        $('.room-description .info-block[data-id="'+roomID+'"]').addClass('active');
        $('.gallery-list .gallery-item').removeClass('active');
        $('.gallery-list .gallery-item[data-id="'+roomID+'"]').addClass('active');
      }
    }, 1000);

    setTimeout(function() {
      $('.gallery-list .slider-wrapper').slick({
        infinite: false
      });

      // if($(window).width() > 767) {
      //   var roomList = new Swiper('.room-list .swiper-container', {
      //     slidesPerView: 8
      //   });
      // }
      // else {
      //   var roomListMobile = new Swiper('.room-list .swiper-container', {
      //     slidesPerView: 4
      //   });
      // }
    }, 1500);

    return module;
  };

  return module;

})(jQuery);

/* Document Ready */
$(document).ready(function () {
  
  interiorData = $.extend(true , interiorData , data_lang , data_img);
  // console.log(interiorData);

  // Unit
  MP.Units.init('.section-unit-list');
  // Floor
  MP.Floors.init('.section-floor-list');
  // Room
  MP.Rooms.init('.section-room-gallery');
  // Gallery
  //MP.Gallery.init('.section-room-gallery').hide();


  $(window).resize(function () {
    rwdImageMap('img[usemap]');
  }).trigger('resize');
});

/* Window loaded */
$(window).load(function() {
  // Default value
  MP.Default.init();
});
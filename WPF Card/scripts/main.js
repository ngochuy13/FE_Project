/* $(document).ready(function() { */
$(window).on('load' , function () {
  function initCarousel (argument) {
    var owl = $(".owlcarousel");
    if(owl.length){
      owl.owlCarousel({
          // autoPlay: 3000, //Set AutoPlay to 3 seconds 
          loop:true,
          items : 3, 
          responsive : {
            1024 : {
                items : 3, 
            },
            768: {
                items : 2, 
            },
            320: {
                items : 1, 
            }
          },
          dotsEach: true,
          nav:true,
          navText: ['<i class="icon-owl-left"></i>','<i class="icon-owl-right"></i>']
      });
      $(".card-nav-prev").on('click', function(){
        owl.data('owlCarousel').prev();
      });
      $(".card-nav-next").on('click', function(){
        owl.data('owlCarousel').next();
      });
    }
  }


  function resizeElement(){
    var sectionWidth = $(".section-detail-card").width();
    
    if(sectionWidth < 836){
      $('#flipbook').find(".card-right-content").css("font-size",20*($('#flipbook').width()/836)+"px");
    }else{
      $('#flipbook').find(".card-right-content").removeAttr('style');
    }

    if( sectionWidth>836 ){
      sectionWidth = 836;
    }

    var flipbook = $("#flipbook");
    flipbook.get(0).style.width = '';
    flipbook.get(0).style.height = '';
    flipbook.turn("size", sectionWidth, sectionWidth/1.43);
  }

  
  if($('select').length){
    $('select').selectUI({
      autoTemplate: true
    });
  }

  if($("#flipbook").length){
    $(window).resize(function(event) {
      resizeElement();
    });
  }
  
  if($(".section-header-text").length){
    var headerText = $(".section-header-text");
    headerText.find(".text-green").fitText(0.771);
    headerText.find(".text-big").fitText(0.44);
    headerText.find(".text").fitText(2.6);
  }

  $.ajax({
    url: 'data/data.json',
    dataType: 'json',
  })
  .done(function(data) {

    if($('.section-owlcarousel').length){
      var source   = $("#carousel_item").html();
      var template = Handlebars.compile(source);
      var htmlItem = template({'data_images': data.data_images});
      $('.owlcarousel').append($(htmlItem.split("\n").join("")));
      setTimeout( function () { 
        initCarousel(); 
      } , 150 );
      if(navigator.userAgent.indexOf("iPad") >= 0 || navigator.userAgent.indexOf("iPhone") >= 0 || (navigator.userAgent.indexOf("Safari") >= 0 && navigator.userAgent.indexOf("Chrome") < 0) ){
        $('.section-owlcarousel').addClass('ios_devies');
      }
    }

    if($('.section-detail-card').length){
      var idCard = (window.location.hash).substring(5);
      var source   = $("#card_item").html();
      var template = Handlebars.compile(source);
      var htmlItem = '';
      var subject ='';
      $.each(data.data_images, function(index, val) {
         if(index == 0){
            htmlItem = template(val);
            subject = val.title;
         }
         if(val.id == idCard){
            htmlItem = template(val);
            subject = val.title;
         }
      });
      $('#flipbook').html(htmlItem);
      setTimeout( function () {
        var sectionWidth = $(".section-detail-card").width();
        $('.flipbook').turn({
          width: sectionWidth,
          height: sectionWidth/1.43,
          gradients: true,
          duration: 720
        });
        $('#flipbook').turn('disable', true);
        resizeElement();
      } , 150 );
      setTimeout( function () {
        $('#flipbook').turn('disable', false).turn('next').turn('disable', true);
      } , 1500 );
      $('#bb-nav-next').on('click', function(event) {
        $('#flipbook').turn('disable', false).turn('next').turn('disable', true);
      });
      $('#bb-nav-prev').on('click', function(event) {
        $('#flipbook').turn('disable', false).turn('previous').turn('disable', true);
      });

      $("#flipbook").bind("turning", function(event, page, view) {
        if(page == 1 || page == 6){
          $('#bb-nav-prev').attr('class','first');
          $('#bb-nav-next').attr('class','last');
        }else{
          $('#bb-nav-prev').attr('class','');          
          $('#bb-nav-next').attr('class','');          
        }
      });

      var url_share = window.location.origin + window.location.pathname;
      $('.social-link .fb').attr('href','http://www.facebook.com/sharer.php?u='+url_share);
      $('.social-link .in').attr('href','https://www.linkedin.com/shareArticle?mini=true&url='+url_share);
      $('.social-link .tw').attr('href','http://twitter.com/share?url='+url_share);
      $('.social-link .mail').attr('href','mailto:?subject='+subject+'&body='+url_share);
    }
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

});

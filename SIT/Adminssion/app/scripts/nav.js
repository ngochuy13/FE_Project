jQuery(document).ready(function($) {
  //get parent title  
  $('ul.main-menu li.parent-title a').each(function(){
    var p_title = $(this).closest('ul').siblings('a').text();
    $(this).text(p_title);
  });
  // //read cookie to extract state
  // if ($.cookie('main_menu_state') != 'undefined')
  // {
  //   $('.main-menu li.main-menu-item.has-sub').eq($.cookie('main_menu_state')).addClass('active');
  //   if ($.cookie('sub_menu_state') != 'undefined')
  //   {
  //     $('li.main-menu-item.has-sub.active ul.sub-menu li.sub-menu-item').each(function(){
  //       if($(this).hasClass('has-sub'))
  //         if($(this).index() == $.cookie('sub_menu_state'))
  //           $(this).addClass('active');
  //     });
  //   }
  // }

  //-menu open

  $('.main-menu li.has-sub > a').click(function(event){
    event.preventDefault();
    $(this).closest('.has-sub').addClass('active');
    // if($(this).closest('.has-sub').hasClass('main-menu-item'))
    //   $.cookie('main_menu_state',$(this).parent().index());
    // if($(this).closest('.has-sub').hasClass('sub-menu-item'))
    //   $.cookie('sub_menu_state',$(this).parent().index());
  });
  //-menu close
  $('.main-menu li.has-sub li.back-button a').off('click').on('click', function(event) {
    event.preventDefault();
    $(this).closest('.has-sub').removeClass('active');
    // if($(this).closest('.has-sub').hasClass('main-menu-item'))
    //   $.cookie('main_menu_state','undefined');
    // if($(this).closest('.has-sub').hasClass('sub-menu-item'))
    //   $.cookie('sub_menu_state','undefined');
  });
  //- show the side bar
  $('#side-menu-btn').off('click').on('click',function(){
    $(this).toggleClass('active');
    $('header.header-left').toggleClass('show');
    $('#container').toggleClass('show');
    $('.sticky-wrapper').toggleClass('show');
  });
  //-sticky nav
  $('.header-bar').sticky();
});


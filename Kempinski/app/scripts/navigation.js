'use strict';

window.ODFC = window.ODFC || {};
window.ODFC.Events = window.ODFC.Events || {};
window.IPs = window.IPs || {};

jQuery(function($){

  window.IPs.navigation = (function(){

    var view = $(".navigation");
    var btnBurger = $(".btn-burger");
    var module = {};
    var yscroll = 0;

    function windowWidth(){
      return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }

    var calculateNavPadding = function(){
      var windowInnerWidth = windowWidth();
      var containerWidth = $("#header .container").width();
      if(windowInnerWidth >= 1024){
        view.find(".sub-level").css({"padding-left": (windowInnerWidth - containerWidth)/2 + "px", "padding-right": (windowInnerWidth - containerWidth)/2 + "px"});
      }else{
        view.find(".sub-level").css("padding", 0);
      }
    };

    module.open = function(){
      view.slideDown();
      if(view.length > 0) {
        var subMenuActive = view.find('.sub-level > li.active'),
            menuItem = subMenuActive.closest('.has-sub');
        menuItem.addClass("expand");
        var height = 0;
        var subMenu = menuItem.find(">ul");
        subMenu.find("li").each(function(){
          height += $(this).height();
        });
        subMenu.height(height);
      }
    };

    module.close = function(callback){
      if(window.innerWidth < 1024){
        view.slideUp(function(){
          var bottom = $(window).height() - (btnBurger.offset().top - window.scrollY) - btnBurger.height();
          btnBurger.css({
            'top': 'auto',
            'bottom': bottom
          }).removeClass('menu-on');
          setTimeout(function(){
            btnBurger.removeAttr('style');
          },100);
        });
      }
    };

    module.initHoverTouchTablet = function(){
      view.find("ul>li>a").on('click touchstart touchmove', function(e){
        var ww = windowWidth();
        if(ww>800 || ww<1025){
          //var subMenu = $(this).siblings("ul");
          //if(subMenu.length){
            if(!$(this).parent().hasClass('show-sub')){
              //e.preventDefault();
              $(this).parent().addClass('show-sub').siblings().removeClass('show-sub');
            }
          //}
        }
      });
    };

    module.init  = function(){
      
      if(view.find('> ul .mega-menu').length){
        view.find('> ul > li').each(function(){
          if($(this).find('.mega-menu').length){
            $('<span class="toggler visible-xs visible-sm"><span class="fa fa-angle-down"></span><span class="fa fa-angle-up"></span></span>').insertAfter($(this).find(' > a'));
          }
        }); 
      }
      
      ODFC.Events.on('resizeWindow', function(data){
        if(data.BP<1025){
          $("#header").unstick();
        }else{
          $("#header").unstick().sticky();
          view.removeAttr('style');
        }
      });

      if(windowWidth()>1024){
        $("#header").sticky({ topSpacing: 0 });
      }
      // calculate navigation padding
      calculateNavPadding();
      // because we have to calculate over and over again for sublevel menu padding so we won't use breakpoint notification
      $(window).resize(function(){
        calculateNavPadding();
      });

      btnBurger.on('click', function () {
        if($(this).hasClass('menu-on')){
          module.close();
        }else{
          $(this).addClass('menu-moving').one('transitionend webkitTransitionEnd oTransitionEnd', function(){
            var top = btnBurger.offset().top;
            view.css('top', top + (btnBurger.height() / 2));
            btnBurger.addClass('menu-on').removeClass('menu-moving').css({
              'top': top
            });
            module.open();
          });
        }
      });

      $(window).on('scroll', function(){
        if(yscroll < window.scrollY){
          if(!btnBurger.hasClass('menu-open')){
            btnBurger.addClass('sneaking');
          }
        }else{ 
          btnBurger.removeClass('sneaking');
        }
        yscroll = window.scrollY;
      });

      if($('html').hasClass("touch")){
        module.initHoverTouchTablet();
      }

      $('body').on('click', function(e) {
        if(windowWidth() > 1024){
          return;
        }
        var navCollapsed = $('.btn-burger, .navigation');
        if (!navCollapsed.is(e.target) && navCollapsed.has(e.target).length === 0) {
          module.close();
        }
      });

      view.find("li").each(function(){
        if($(this).find(">ul").length){
          $(this).addClass("has-sub")
                 .find("ul").addClass("sub-level").end()
                 .find(">a").after('<span class="toggle"></span>');
        }
      });

      view.find(".has-sub > .toggle").on('click', function(){
        var menuItem = $(this).closest("li");
        if(menuItem.hasClass('expand')){
          menuItem.removeClass("expand");
          menuItem.find("ul").height(0);
        }else{
          menuItem.addClass("expand");
          var height = 0;
          var subMenu = menuItem.find(">ul");
          subMenu.find("li").each(function(){
            height += $(this).height();
          });
          subMenu.height(height);
        }

      });



      view.find('> ul > li > .toggler').on('click',function(e) {
        if ($(window).width() <= 1023) {
          e.preventDefault();
          if ($(this).parent().hasClass("hover")) {
              view.find("li.hover").removeClass("hover");
          } else {
              view.find("li.hover").removeClass("hover");
              $(this).parent().addClass("hover");
          }
        }
      });

      var nav_hover = false, active_cursor_hover = false;
      view.find("li").hover(function() {
          if ($(window).width() > 1023) {
              $(this).addClass("hover").siblings().removeClass('hover');
              nav_hover = true;
              var cur = $(".active-cursor");
              cur.css("left", $(this).offset().left + $(this).width() / 2);
          }
      }, function() {
          if ($(window).width() > 1023) {
              nav_hover = false;
              setTimeout(function() {
                  if (!nav_hover && !active_cursor_hover) {
                      view.find("li").removeClass("hover");
                      var cur = $(".active-cursor"),
                          cur_nav = view.find("li.active");
                      cur.css("left", cur_nav.offset().left + cur_nav.width() / 2);
                  }
              }, 300)
          }
      })
      if ($(window).width() > 1023) {

          var cur = $(".active-cursor"),
              cur_nav = view.find("li.active");
          cur.css("left", cur_nav.offset().left + cur_nav.width() / 2).show();
      }
      
      $(".active-cursor").hover(function() {
          active_cursor_hover = true;
      }, function() {
          active_cursor_hover = false;
      })
      $(window).resize(function() {
          if ($(window).width() > 1023) {
              
              // Replace this block by a line below for calculating column border
              // var sub_wrap_height = 0;
              // $(".sub-wrap").each(function() {
              //     if ($(this).height() > sub_wrap_height) sub_wrap_height = $(this).height();
              // })
              $(".sub-wrap").parent().matchHeight();

              var cur = $(".active-cursor"),
                  cur_nav = view.find("li.active");
              cur.css("left", cur_nav.offset().left + cur_nav.width() / 2).show();
              view.find(".active-cursor").show();

          } else {
              view.find(".active-cursor").hide();
              view.find(".sub-wrap").attr("style", "");
          }
      }).resize();



      return module;
    };

    return module.init();
  })();
  
  window.IPs.searchPanel = (function(){  
    var view          = $('.search-form-popup');
    var showBtn     = $('#search');
    var closeBtn      = view.find('.btn-close');

    var module = {};

    module.init = function(){
      view.find(".nav-tabs li a").click(function() {
        view.find(".search-target").addClass("hide");
        view.find(".search-target" + $(this).data("result-target")).removeClass("hide");
      });
      showBtn.on('click', function(){
        view.removeClass('hide');
        $("#header").addClass('show-search');
      });
      closeBtn.on('click', function(){
        view.addClass('hide');
        $("#header").removeClass('show-search');
      });
      return module;
    }

    return module.init();
  })();
});


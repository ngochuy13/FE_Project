'use strict';

window.ODFC = window.ODFC || {};
window.ODFC.Events = window.ODFC.Events || {};
window.iCog = window.iCog || {};
window.iCog.utils = window.iCog.utils || {};

window.iCog.utils.windowWidth = function (){
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
};

jQuery(function($){

  window.iCog.navigation = (function(){

    var view = $('.navigation');
    var module = {};

    var windowWidth = window.iCog.utils.windowWidth;

    module.open = function(){
      window.ODFC.Events.trigger('closeSearch');
      $('.nav-collapsed').addClass('active');
      view.slideDown();
      if(view.length > 0) {
        var subMenuActive = view.find('.sub-level > li.active'),
            menuItem = subMenuActive.closest('.has-sub');
        menuItem.addClass('expand');
        var height = 0;
        var subMenu = menuItem.find('>ul');
        subMenu.find('li').each(function(){
          height += $(this).height();
        });
        subMenu.height(height);
      }
    };

    module.close = function(){
      if(window.innerWidth < 1024){
        $('.nav-collapsed').removeClass('active');
        view.slideUp(function(){
          view.removeAttr('style');
        });
      }
    };

    module.initHoverTouchTablet = function(){
      view.find('ul>li>a').on('click touchstart touchmove', function(e){
        var ww = windowWidth();
        if(ww>800 || ww<1025){
          var subMenu = $(this).siblings('ul');
          if(subMenu.length){
            if(!$(this).parent().hasClass('show-sub')){
              e.preventDefault();
              $(this).parent().addClass('show-sub').siblings().removeClass('show-sub');
            }
          }
        }
      });
    };

    module.init  = function(){
      // window.ODFC.Events.on('resizeWindow', function(){
        
      // });
      
      if($('html').hasClass('touch')){
        module.initHoverTouchTablet();
      }

      $('.nav-collapsed').on('click', function(){
        if($(this).hasClass('active')){
          module.close();
        }else{
          module.open();
        }
      });

      $('body').on('click', function(e) {
        if(windowWidth() >= 800){
          return;
        }
        var navCollapsed = $('.nav-collapsed, .navigation');
        if (!navCollapsed.is(e.target) && navCollapsed.has(e.target).length === 0) {
          module.close();
        }
      });

      view.find('li').each(function(){
        if($(this).find('>ul').length){
          $(this).addClass('has-sub')
                 .find('ul').addClass('sub-level').end()
                 .find('>a').after('<span class="toggle"></span>');
        }
      });

      // view.find('.has-sub > .toggle').on('click', function(){
      //   var menuItem = $(this).closest('li');
      //   if(menuItem.hasClass('expand')){
      //     menuItem.removeClass('expand');
      //     menuItem.find('ul').height(0);
      //   }else{
      //     menuItem.addClass('expand');
      //     var height = 0;
      //     var subMenu = menuItem.find('>ul');
      //     subMenu.find('li').each(function(){
      //       height += $(this).height();
      //     });
      //     subMenu.height(height);
      //   }
      // });
      // up function multil level
      view.find('.has-sub > .toggle').on('click', function(){
        var menuItem = $(this).closest('li');
        var subMenu = menuItem.find('>ul');        
        var height , menuParent;
        if(menuItem.hasClass('expand')){
          menuItem.removeClass('expand');
          height = menuItem.find('ul').height();
          menuItem.find('ul').height(0);  

          if(subMenu.parents('ul.sub-level').length){
            menuParent = subMenu.parents('ul.sub-level');
            menuParent.height(menuParent.height() - height);
          }
        }else{
          menuItem.addClass('expand');
          height = 0;
          subMenu.find('>li').each(function(){
            height += $(this).height();
          });
          subMenu.height(height);
          if(subMenu.parents('ul.sub-level').length){
            menuParent = subMenu.parents('ul.sub-level');
            menuParent.height(menuParent.height() + height);
          }
        }
      });


      return module;
    };

    return module.init();
  })();

});
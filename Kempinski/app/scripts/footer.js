'use strict';

window.ODFC = window.ODFC || {};
window.ODFC.Events = window.ODFC.Events || {};
window.IPs = window.IPs || {};
window.IPs.utils = window.IPs.utils || {};

jQuery(function($){
  
  (function($){
    var view = $("#footer");

    view.find(".related-links .title a").addClass('collapsed');
    ODFC.Events.on('resizeWindow', function(data){
      setTimeout(function(){
        if(data.BP >= 992){
          view.find(".collapse").collapse('show');
        }else{
          view.find(".collapse").collapse('hide');
        }
      },300);
    });
    if(window.IPs.utils.windowWidth() <= 1024){
      view.find(".collapse").collapse('hide');
    }else{
      view.find(".collapse").collapse('show');
    }

  })(jQuery);

});
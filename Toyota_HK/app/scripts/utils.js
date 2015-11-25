'use strict';

window.ODFC = window.ODFC || {};
window.ODFC.Events = window.ODFC.Events || {};
window.iCog = window.iCog || {};

window.iCog.utils.windowWidth = function(){
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
};

window.iCog.utils.resizeBreakpoint = (function ($) {
  var breakpoint = ['320', '480', '768', '800', '960', '1024'];
  var currentBPoint = 99999;
  var prevBP = 99999;
  var timeout;

  var module = {};
  module.init = function () {
    $(window).on('resize', function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        var winW = window.iCog.utils.windowWidth();
        var flagFinish = true;
        for (var i = 0; i < breakpoint.length; i++) { 
          if (winW < breakpoint[i]) {
            if (i === 0) {
              currentBPoint = breakpoint[i];
            } else {
              currentBPoint = breakpoint[i - 1];
            }
            flagFinish = false;
            break;
          }
        }
        if (flagFinish) {
          currentBPoint = breakpoint[breakpoint.length - 1];
        }
        if (currentBPoint !== prevBP) {
          prevBP = currentBPoint;
          window.ODFC.Events.trigger('resizeWindow', {BP: parseInt(currentBPoint)});
        }
      }, 100);
    });
    return module;
  };
  return module.init();
})(jQuery);
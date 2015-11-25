/* CONTENTS
* 1. Prototypes
* 1.1 - siteMethods() generic functions
* 1.2 - window width
* 1.3 - responsive tables
* 1.4 - desktop functions
* 1.5 - mobile functions
* 1.6 - Document Ready Gogogo
*/

// 1. PROTOTYPES BEGIN

// 1.1 siteMethods() 
// Site wide/global non specific methods



var siteMethods = {
   init: function() {

      // Determine to run desktop functions or mobile functions
      windowMethods.init();
      var window__width = getWindow();

      if(window__width <= 480 ){
         mobileMethods.init();
      }
      else{
         // Initialise desktop methods
         desktopMethods.init();
      }

      // Run News Widget
      // if($('.ticker__widget')[0]){
      //     newsWidget.init();
      // }

      if($('.internal')[0]){
         // Toggles Mobile Menu Button

         if($('.product__table')[0]){
         	tableMethods.init();
         }
      } // internal init end

   }, // siteMethods init end
   setNavActive: function(navPosition){
      // Sets Current Triangle Marker for Global Main Navigation
      $(".root > li").removeClass("active-current");
      $( ".root > li" ).each(function( index ) {
         if(index==navPosition){
            $(this).addClass("active-current");
            return;
         }
      });
   }
}
// Site Methods End

// 1.2 Window Width Function()
// Intilise Window Width detection function
var windowMethods = {
	init: function () {
		var window__width = this.getWindowWidth();
		//console.log("windowWidth: "+window__width);
		this.getWindowWidth();
	},
	getWindowWidth: function() {
	   // Returns width of browser viewport
	   return $( window ).width();
	}
}

// 1.3 ResponsiveTables()
// Intilise Responsive Tables for Desktop & Mobile
var tableMethods = {
   init: function () {
      console.log("table methods");
      this.tableSetup();
   },

   tableSetup: function(){
      if($('.product__table')[0]){
         var columnText = [],
             columnCount = 0,
             columnIndex = 0;

         // Loop through each table to detect number of columns
         $('.product__table table').each(function(e) {
            columnText = [],
            columnCount = 0,
            columnIndex = 0;

            // Get the first table row, and push to an array!
            $(this).find("tr:first-child td").each(function(e){
               // PUSHHH!!!
               //console.log('test: '+$(this).text());
               columnText.push($(this).text());
            });

            // How many is inside this array? lets check!
            columnCount = columnText.length;
            //console.log(columnCount);

            // Loop through every rows TD except first!
            $(this).find("tr:not(:first-child) td").each(function(e){

               // the columnIndex represents the current TD
               // If the column index is greater than the column count?
               //    - Means that you have hit the end of the row
               // ColumnText Array = the column index, it should be the exact same array position
               // as the first row.
               //   CURRENT         5 <--
               if(columnIndex < columnCount){
                  if(columnIndex != -1){
                     
                     $(this).prepend("<span>"+columnText[columnIndex]+":</span>");
                     //console.log("columnIndex: "+columnIndex);
                  }

                  columnIndex++;

                  if(columnIndex >= columnCount){
                     columnIndex = 0;
                  }
               }
            });
         });
      }
   }
} 
// Responsive Table End

// 1.5 News Ticker Widget()
var newsWidget = {
   init: function () {
      console.log("News Widget");
      this.newsSetup();
   },

   newsSetup: function() {
      var newsli = $('.news__blk.inner__left ul > li');
      var now = 0; // currently shown div
      newsli.hide().first().show();
      $(".right__ticker--btn").click(function (e) {
          newsli.eq(now).hide();
          now = (now + 1 < newsli.length) ? now + 1 : 0;
          newsli.eq(now).show(); // show next
      });
      $(".left__ticker--btn").click(function (e) {
          newsli.eq(now).hide();
          now = (now > 0) ? now - 1 : newsli.length - 1;
          newsli.eq(now).show(); // or .css('display','block');
          //console.log(divs.length, now);
      });
   }
}

// 1.7 DesktopMethods()
// Intilise Desktop Browser Functions
var desktopMethods = {
   init: function(){
      this.mobilemenuSetup();
      this.widgetBacktoTop();
      this.activeLink();

      if($('.home')[0]){
         this.setupDefaultPage();
      }

      if($('.internal')[0]){
         this.setupInternalPage();
         if($('.down__btn')[0]){
           this.anchorSetup();
         }
      }

      if($('.three__col--grid.clear')[0]){
         this.responsive3divSetup();
      }

      // if($('.two__col--grid')[0]){
      //    this.responsive2divSetup();
      // }

      if($('.widget__accordion')[0]){
         // this.widgetAccordionSetup();
         this.widgetAccordionClick();
      }

      if($('.video__wrapper')[0]){
         this.youtubeSetup();
      }

      if($('.training__content')[0]){
         this.trainingSetup();
      }

      if($('.testimonial-slider-wrap')[0]){
         this.buildTestimonialSlider();
      }

      if($('.gallery__block')[0]){
         this.newsGallerySetup();
      }

      // console.log("in desktop methods");

   },
   setupDefaultPage: function(){
      this.newsWidget();
      this.anchorSetup();
      this.buildMainSlider();
      this.animationSetup();
      // this.removeSetup();
      // this.lightboxOn();
      // this.lightboxOff();
   },
   setupInternalPage: function(){
      // Internal Page Functions
   },
   buildMainSlider: function() {   
      $('.main-slider').flexslider({
       maxItems: 5,
       minItems: 1,
       directionNav: true,
       controlNav: false,
       pauseOnAction: true, // default setting
        after: function(slider) {
          /* auto-restart player if paused after action */
          if (!slider.playing) {
            slider.play();
          }
        }
      });
   },
   buildverticalImgAlign: function() {   
      setTimeout(function() { 
        $('img.v_align').each(function(i, obj) {
          var parent_height = $(this).parent().height(),
              img_height = $(this).height(),
              margin_top = (parent_height - img_height)/2;
              // console.log(img_height)
          $(this).css("margin-top", margin_top + "px");
        });
      }, 500);
   },
   responsive3divSetup: function(){
      if($('.three__col--grid.clear')[0]){
        var window__width = getWindow();

        if(window__width > 610 ){
          var divCount = 0,
              divMax = 3;

          $('.three__col--grid.clear').children().each(function(e) {
            divCount++;
            // console.log(divCount);
            if(divCount === 1) {
               $(this).css({
                  'clear': 'both',
               });
            }
            if(divCount >= divMax) {
               divCount = 0;
            }
          });
        }
        if(window__width <= 610 ){
          var divCount = 0,
              divMax = 2;

          $('.three__col--grid.clear').children().each(function(e) {
            divCount++;
            // console.log(divCount);
            if(divCount === 1) {
               $(this).css({
                  'clear': 'both',
               });
            }
            if(divCount >= divMax) {
               divCount = 0;
            }
          });
        }   
      }
   },
   responsive2divSetup: function(){
      if($('.two__col--grid')[0]){
        var window__width = getWindow();

        if(window__width > 980 ){
          var divCount = 0,
              divMax = 2;

          $('.two__col--grid > div').each(function(e) {
            divCount++;
            //console.log(divCount);
            if(divCount === 1) {
               $(this).css({
                  'clear': 'both',
               });
            }
            if(divCount >= divMax) {
               divCount = 0;
            }
          });
        }
        if(window__width <= 480 ){
          var divCount = 0,
              divMax = 0;

          $('.two__col--grid > div').each(function(e) {
            divCount++;
            //console.log(divCount);
            if(divCount === 1) {
               $(this).css({
                  'clear': 'both',
               });
            }
            if(divCount >= divMax) {
               divCount = 0;
            }
          });
        }   
      }
   },
   mobilemenuSetup: function(){
      // Mobile Menu init
      // $('#dl-menu').dlmenu();
      $('.dl-trigger').click(function(e){
        if ( $('.dl-trigger').hasClass('dl-active') ) {
          $(this).removeClass('dl-active');
          $(this).next().removeClass('dl-menuopen');
          $(this).next().removeClass('dl-menu-toggle');
        }
        else {
          $(this).addClass('dl-active');
          $(this).next().addClass('dl-menuopen');
          $(this).next().addClass('dl-menu-toggle');
        }
      });
   },
   picturefillSetup: function(){
      document.createElement( "picture" );
   },
   widgetAccordionSetup: function(){
      $('.widget__accordion:first > .accordion--link').addClass('active');
      $('.widget__accordion:first > .accordion__content--wrap').addClass('active');
   },
   widgetAccordionClick: function(){
      $('.accordion__content--wrap > h4').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
      });
   },
   anchorSetup: function(){
      $('.down__btn a').click(function(e){
         e.preventDefault();
         scrollToID($(this));
      });
   },
   widgetBacktoTop: function(){
      var duration = 500;
      $('.mobile__top').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
      });
   },
   activeLink: function(){
      var linkwidth = $('.active__current').innerWidth();
      var lefthalf = linkwidth / 2;
      $(".active__current").append("<span></span>")
      $(".active__current > span").css("left", lefthalf - 7);
      // console.log("link width: "+linkwidth);
   },
   newsWidget: function(){
      $("#slideshow").cycle({
        timeout: 1, // no autoplay
        fx: 'fade', //
        next: '.right__ticker--btn',
        prev: '.left__ticker--btn'
      });
   },
   lightboxOn: function(){
      $('.roles__inner').click(function(e) {
        var target = "#" + $(this).data("target");
        $(".lightbox__container").removeClass("active");
        $(target).removeClass("active");
        $(".lightbox__container > .lightbox__overlay").removeClass("active");
        $(".lightbox__container").addClass("active");
        $(target).addClass("active");
        $(".lightbox__container > .lightbox__overlay").addClass("active");
      });
   },
   lightboxOff: function(){
      $('.lightbox__close--btn').click(function(e) {
        $(".lightbox__container").removeClass("active");
        $(".lightbox__content--block").removeClass("active");
        $(".lightbox__overlay").removeClass("active");
        $("iframe").each(function() { 
          var src= $(this).attr('src');
          $(this).attr('src',src);  
        });
      });
   },
   youtubeSetup: function() {
      $('.video__wrapper--inner').fitVids();
      $('.lazyYT').lazyYT();
   },
   trainingSetup: function() {
      $('.trigger').click(function(e) {
        e.preventDefault();
        var target = "#" + $(this).data("target");
        $(".trigger").removeClass("active");
        $(".training__block").removeClass("active");
        $(this).addClass("active");
        $(target).addClass("active");
      });
   },
   buildTestimonialSlider: function() {   
      $('.testimonial-slider').flexslider({
       maxItems: 5,
       minItems: 1,
       directionNav: true,
       controlNav: false,
       pauseOnAction: true, // default setting
        after: function(slider) {
          /* auto-restart player if paused after action */
          if (!slider.playing) {
            slider.play();
          }
        }
      });
   },
   newsGallerySetup: function() {
      $('.gallery__link').magnificPopup({ 
        type: 'image',
        gallery: {
          // options for gallery
          enabled: true
        },
        image: {
          // options for image content type
          titleSrc: 'title'
        },
        callbacks: {
          lazyLoad: function(item) {
            preload: [1,3]
          }
        }
      });
   },
   animationSetup: function() {
      var window__width = getWindow();

      $(".banner__img").delay(800).queue(function(next) {
        $(this).addClass("slideDown");
        next();
      });
      
      $(window).scroll(function() {
        $('.quote').each(function(){
          var imagePos = $(this).offset().top;
          
          var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
              $(this).addClass("hatch");
            }
        });

        $('.icon__block').each(function(){
          var imagePos = $(this).offset().top;
          
          var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
              $(this).addClass("slideExpandUp");
            }
        });

        $('.triangle__img').each(function(){
          var imagePos = $(this).offset().top;
          
          var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
              $(this).addClass("pullDown");
            }
        });

        if(window__width > 768 ){
          $('.flipWrapper').each(function(){
            var imagePos = $('.role__shields').offset().top;
            var divs = $('.card');
            
            var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+400) {
                var interval = setInterval(function () {
                  divs.removeClass('flipped');
                  // divs.eq(Math.floor(Math.random() * divs.length)).removeClass('flipped');
                  if (divs.length == 1) {
                      clearInterval(interval);
                  }
                }, 500);
              }
              else {
                divs.addClass("flipped");
                // $('.card').addClass("flipped");
              }
          });
        }

        $('.media__content--wrapper').each(function(){
          var imagePos = $(this).offset().top;
          
          var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
              $(this).addClass("fadeIn");
            }
        });
      });
   },
   removeSetup: function() {
      $(window).scroll(function() {
        $('.flipWrapper').each(function(){
          var imagePos = $('.role__shields').offset().top;
          
          var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+1000) {
              $('.card').removeClass("flipped");
          }
        });
      });
   }





}
// Desktop Method End 

// 1.6 MobileMethods()
// Intilise Mobile Functions
var mobileMethods = {
   init: function(){
      // console.log("in mobile methods");

      desktopMethods.mobilemenuSetup();
      desktopMethods.widgetBacktoTop();

      if($('.home')[0]){
        desktopMethods.anchorSetup();
        desktopMethods.newsWidget();
        // desktopMethods.lightboxOn();
        // desktopMethods.lightboxOff();
      }

      if($('.internal')[0]){
        if($('.down__btn')[0]){
          desktopMethods.anchorSetup();
        }
      }

      if($('.grids__block')[0]){
         desktopMethods.buildverticalImgAlign();
      }

      if($('.widget__accordion')[0]){
         desktopMethods.widgetAccordionSetup();
         desktopMethods.widgetAccordionClick();
      }

      if($('.video__wrapper')[0]){
         desktopMethods.youtubeSetup();
      }

      if($('.training__content')[0]){
         desktopMethods.trainingSetup();
      }

      if($('.testimonial-slider-wrap')[0]){
         desktopMethods.buildTestimonialSlider();
      }
   }
}

// 1.7 Document Ready
// Intilise Super Kamehameha
$(function() {
   // Initialise siteMethods
   siteMethods.init();
});

// IE 8 Testing Fuction
function less_IE8() {
   if (/msie [1-8]{1}[^0-9]/.test(navigator.userAgent.toLowerCase())) {
       return true;
   }
}

function getWindow(){
  // Returns width of browser viewport
  return $( window ).width();
}

function scrollToID(){
   $('a[href^="#"]').on('click',function (e) {
       e.preventDefault();

       var target = this.hash;
       $target = $(target);

       $('html, body').stop().animate({
           'scrollTop': $target.offset().top
       }, 900, 'swing')
   });
}

function getGridSize() {
  return (window.innerWidth < 360) ? 1 :
         (window.innerWidth < 740) ? 1 :
         (window.innerWidth < 960) ? 3 :
         (window.innerWidth < 1200) ? 4 : 5;
}

// Sets Current Triangle Marker for Global Main Navigation
function setNavActive(navPosition){
   $(".root > li a").removeClass("active__current");
   $( ".root > li a" ).each(function( index ) {
      if(index==navPosition){
         $(this).addClass("active__current");
         return;
      }
   });
}

// https://developers.google.com/youtube/js_api_reference
// @param String frame_id The id of (the div containing) the frame
// @param String func     Desired function to call, eg. "playVideo"
//        (Function)      Function to call when the player is ready.
// @param Array  args     (optional) List of arguments to pass to function func*/
function callPlayer(frame_id, func, args) {
    if (window.jQuery && frame_id instanceof jQuery) frame_id = frame_id.get(0).id;
    var iframe = document.getElementById(frame_id);
    if (iframe && iframe.tagName.toUpperCase() != 'IFRAME') {
        iframe = iframe.getElementsByTagName('iframe')[0];
    }

    // When the player is not ready yet, add the event to a queue
    // Each frame_id is associated with an own queue.
    // Each queue has three possible states:
    //  undefined = uninitialised / array = queue / 0 = ready
    if (!callPlayer.queue) callPlayer.queue = {};
    var queue = callPlayer.queue[frame_id],
        domReady = document.readyState == 'complete';

    if (domReady && !iframe) {
        // DOM is ready and iframe does not exist. Log a message
        window.console && console.log('callPlayer: Frame not found; id=' + frame_id);
        if (queue) clearInterval(queue.poller);
    } else if (func === 'listening') {
        // Sending the "listener" message to the frame, to request status updates
        if (iframe && iframe.contentWindow) {
            func = '{"event":"listening","id":' + JSON.stringify(''+frame_id) + '}';
            iframe.contentWindow.postMessage(func, '*');
        }
    } else if (!domReady ||
               iframe && (!iframe.contentWindow || queue && !queue.ready) ||
               (!queue || !queue.ready) && typeof func === 'function') {
        if (!queue) queue = callPlayer.queue[frame_id] = [];
        queue.push([func, args]);
        if (!('poller' in queue)) {
            // keep polling until the document and frame is ready
            queue.poller = setInterval(function() {
                callPlayer(frame_id, 'listening');
            }, 250);
            // Add a global "message" event listener, to catch status updates:
            messageEvent(1, function runOnceReady(e) {
                if (!iframe) {
                    iframe = document.getElementById(frame_id);
                    if (!iframe) return;
                    if (iframe.tagName.toUpperCase() != 'IFRAME') {
                        iframe = iframe.getElementsByTagName('iframe')[0];
                        if (!iframe) return;
                    }
                }
                if (e.source === iframe.contentWindow) {
                    // Assume that the player is ready if we receive a
                    // message from the iframe
                    clearInterval(queue.poller);
                    queue.ready = true;
                    messageEvent(0, runOnceReady);
                    // .. and release the queue:
                    while (tmp = queue.shift()) {
                        callPlayer(frame_id, tmp[0], tmp[1]);
                    }
                }
            }, false);
        }
    } else if (iframe && iframe.contentWindow) {
        // When a function is supplied, just call it (like "onYouTubePlayerReady")
        if (func.call) return func();
        // Frame exists, send message
        iframe.contentWindow.postMessage(JSON.stringify({
            "event": "command",
            "func": func,
            "args": args || [],
            "id": frame_id
        }), "*");
    }
    /* IE8 does not support addEventListener... */
    function messageEvent(add, listener) {
        var w3 = add ? window.addEventListener : window.removeEventListener;
        w3 ?
            w3('message', listener, !1)
        :
            (add ? window.attachEvent : window.detachEvent)('onmessage', listener);
    }



}


;

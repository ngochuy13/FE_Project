// Custom Functions for Video.JS Video gallery

// $(function() {
// 	// Set Width and Height for Hero Video
//    videojs("hero_video", { "width": 395, "height": 245 });
//    videojs("embed_video", { "width": 660, "height": 245 });
//    // videojs("gallery_video", { "width": 200, "height": 120 });
// });

$(function() {
	if($('#hero_video')[0]){
		videojs("hero_video", { "width": 430, "height": 245 });
	}

	if($('#embed_video')[0]){
		videojs("embed_video", { "width": 660, "height": 300 });
	}
});

var threeCol = {
   init: function () {
      this.threeColSetup();
   },

   threeColSetup: function(){
      if($('.video__gallery--wrapper')[0]){
	    	var divCount = 0,
			divMax = 3;

			$('.video__gallery--wrapper').children().each(function(e) {
		      divCount++;
		      // console.log(divCount);
		      if(divCount === 1) {
		         $(this).css({
		            'clear': 'both',
		         });
		         // console.log("both on");
		         // $(this).children().css({
		         //    'margin': '0',
		         // });
		         // console.log("content__wrapper");
		      }
		      if(divCount >= divMax) {
		         divCount = 0;
		      }
			});
		}
   }
}

var galleryVideo = {
   init: function () {
      this.galleryVideoSetup();
   },

   galleryVideoSetup: function(){
      $(".video_link").fancybox({
			maxWidth	: 800,
			maxHeight	: 600,
			fitToView	: false,
			width		: '90%',
			height		: '90%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'fade',
			closeEffect	: 'fade'
		});
   }
} 

$(function() {
	threeCol.init();
	galleryVideo.init();
});


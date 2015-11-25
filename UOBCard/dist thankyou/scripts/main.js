"use strict";var oneCardSwiper,ladyCardSwiper,delightCardSwiper,prviMasterCardSwiper,prviAmexCardSwiper,prviVisaCardSwiper,tabListCardSwiper,handlePromoTabSlider,UOB={util:{numberWithCommas:function(e){e=e.toString();for(var a=/(-?\d+)(\d{3})/;a.test(e);)e=e.replace(a,"$1,$2");return e},centerDataPosition:function(){$('*[data-position="center"]').each(function(){$(this).css("margin-left",-($(this).innerWidth()/2)),$(this).css("margin-top",-($(this).innerHeight()/2))})},equalHeightByRow:function(e){e.height("auto");var a,i=0,t=0,n=[],r=0,l=0;e.each(function(){if(a=$(this),l=a.offset().top,t!==l){for(r=0;r<n.length;r++)n[r].height(i);n=[],t=l,i=a.height(),n.push(a)}else n.push(a),i=i<a.height()?a.height():i;for(r=0;r<n.length;r++)n[r].height(i)})},equalHeight:function(e){e.height("auto");var a,i=0;e.each(function(){a=$(this),a.innerHeight()>i&&(i=a.innerHeight())}),e.innerHeight(i)},doneResizing:function(){$("body").hasClass("promo")&&UOB.util.equalHeight($(".tab-block .promo-tab-item")),UOB.util.centerDataPosition()},doneResizingWidth:function(){UOB.globalElement.unstickyHeader(),UOB.globalElement.stickyHeader()},replaceImgToBackground:function(e,a){$.each(e,function(){$(this).closest(a).css("background-image","url("+$(this).attr("src")+")")})}},globalElement:{stickyHeader:function(){$(".header").sticky({topSpacing:0})},unstickyHeader:function(){$(".header").unstick()},handleRate:function(){var e=$(".fees-block .custom-tab");e.find(".custom-tab-item").click(function(){$(this).hasClass("active")||($(this).parent().find(".custom-tab-item").removeClass("active"),$(this).addClass("active"),$("body").hasClass("jcb-card")?$(this).parent().find(".japanese").hasClass("active")?$(this).closest(".fees-block").find(".custom-tab-content").addClass("active japanese"):$(this).parent().find(".foriengers").hasClass("active")?($(this).closest(".fees-block").find(".custom-tab-content").addClass("active"),$(this).closest(".fees-block").find(".custom-tab-content").removeClass("japanese")):$(this).closest(".fees-block").find(".custom-tab-content").removeClass("japanese active"):$(this).parent().find(".foriengers").hasClass("active")?$(this).closest(".fees-block").find(".custom-tab-content").addClass("active"):$(this).closest(".fees-block").find(".custom-tab-content").removeClass("active"))})},toggleTerms:function(){$(".read-full-text").click(function(){$(".hidden-text").show(),$(this).hide()})},scrollToDeliveryBlock:function(){$("body").on("click",".unionpay-img",function(){$(this);$("#delivery-block").length>0?$("html, body").animate({scrollTop:$("#delivery-block").offset().top-$(".header").innerHeight()},800):$("html, body").animate({scrollTop:$(".promo-tab-content.active .delivery-block").offset().top-$(".header").innerHeight()},800)})}},promoElement:{handlePromoTabSlider:function(){tabListCardSwiper=$("#promo-tab-slider").swiper({mode:"horizontal",loop:!1,calculateHeight:!0,paginationClickable:!0,resizeReInit:!0,slidesPerViewFit:!0,slidesPerView:"auto",scrollContainer:!0})},handlePromoSlider:function(){var e=$(".lady-card-tab-content .slider-block");ladyCardSwiper=e.find(".swiper-container").swiper({mode:"horizontal",loop:!0,calculateHeight:!0,pagination:".lady-card-tab-content .slider-block .swiper-pagination",paginationClickable:!0,resizeReInit:!0,initialSlide:0}),e.find(".swiper-button-next").click(function(){ladyCardSwiper.swipeNext()}),e.find(".swiper-button-prev").click(function(){ladyCardSwiper.swipePrev()});var a=$(".delight-card-tab-content .slider-block");delightCardSwiper=a.find(".swiper-container").swiper({mode:"horizontal",loop:!0,calculateHeight:!0,pagination:".delight-card-tab-content .slider-block .swiper-pagination",paginationClickable:!0,resizeReInit:!0,initialSlide:0}),a.find(".swiper-button-next").click(function(){delightCardSwiper.swipeNext()}),a.find(".swiper-button-prev").click(function(){delightCardSwiper.swipePrev()});var i=$(".prvi-master-card-tab-content .slider-block");prviMasterCardSwiper=i.find(".swiper-container").swiper({mode:"horizontal",loop:!0,calculateHeight:!0,pagination:".prvi-master-card-tab-content .slider-block .swiper-pagination",paginationClickable:!0,resizeReInit:!0,initialSlide:0}),i.find(".swiper-button-next").click(function(){prviMasterCardSwiper.swipeNext()}),i.find(".swiper-button-prev").click(function(){prviMasterCardSwiper.swipePrev()});var t=$(".prvi-amex-card-tab-content .slider-block");prviAmexCardSwiper=t.find(".swiper-container").swiper({mode:"horizontal",loop:!0,calculateHeight:!0,pagination:".prvi-amex-card-tab-content .slider-block .swiper-pagination",paginationClickable:!0,resizeReInit:!0,initialSlide:0}),t.find(".swiper-button-next").click(function(){prviAmexCardSwiper.swipeNext()}),t.find(".swiper-button-prev").click(function(){prviAmexCardSwiper.swipePrev()});var n=$(".prvi-visa-card-tab-content .slider-block");prviVisaCardSwiper=n.find(".swiper-container").swiper({mode:"horizontal",loop:!0,calculateHeight:!0,pagination:".prvi-visa-card-tab-content .slider-block .swiper-pagination",paginationClickable:!0,resizeReInit:!0,initialSlide:0}),n.find(".swiper-button-next").click(function(){prviVisaCardSwiper.swipeNext()}),n.find(".swiper-button-prev").click(function(){prviVisaCardSwiper.swipePrev()})},handlePromoTab:function(){$(".tab-block-item").click(function(){if($(this).hasClass("no-action"));else{var e=$(this);$(".tab-block-item").removeClass("active"),e.addClass("active"),$(".promo-tab-content").removeClass("active").hide(),$(".promo-tab-content."+e.attr("content")).addClass("active").show();"one-card"===e.attr("card")?($(".shown-text").show(),$(".hidden-text").hide()):"lady-card"===e.attr("card")?($(".shown-text").hide(),$(".hidden-text").show()):"delight-card"===e.attr("card")?($(".shown-text").hide(),$(".hidden-text").show()):"prvi-master-card"===e.attr("card")?($(".shown-text").hide(),$(".hidden-text").show()):"prvi-amex-card"===e.attr("card")?($(".shown-text").show(),$(".hidden-text").hide()):"prvi-visa-card"===e.attr("card")&&($(".shown-text").show(),$(".hidden-text").hide()),$("#apply-button a").attr("href",e.attr("data-apply-card-url")),$("body").removeClass("one-card"),$("body").removeClass("lady-card"),$("body").removeClass("delight-card"),$("body").removeClass("prvi-amex-card"),$("body").removeClass("prvi-master-card"),$("body").removeClass("prvi-visa-card"),$("body").addClass(e.attr("card")),$(".custom-tab.category .custom-tab-item").removeClass("active"),$(".custom-tab.category .custom-tab-item.first-child").addClass("active"),$(".logo-container .logo-item").show(),$("body").hasClass("promo-prvi")?(prviMasterCardSwiper.reInit(),prviMasterCardSwiper.swipeTo(0),prviAmexCardSwiper.reInit(),prviAmexCardSwiper.swipeTo(0),prviVisaCardSwiper.reInit(),prviVisaCardSwiper.swipeTo(0),UOB.util.centerDataPosition()):(ladyCardSwiper.reInit(),ladyCardSwiper.swipeTo(0),delightCardSwiper.reInit(),delightCardSwiper.swipeTo(0))}})}},listingPopupElement:{handleTabFilterListCardSlider:function(){tabListCardSwiper=$("#list-card-filter-slider").swiper({mode:"horizontal",loop:!1,calculateHeight:!0,paginationClickable:!0,resizeReInit:!0,slidesPerViewFit:!0,slidesPerView:"auto",scrollContainer:!0})},handleFilterCards:function(){$(".card-listing-popup .custom-tab .custom-tab-item").click(function(){var e=$(this);if(!$(this).hasClass("active")){e.siblings().removeClass("active"),e.addClass("active");var a=$(e.closest("[data-target]").attr("data-target"));"All Cards"===e.text()?a.children().show():(a.children().hide(),a.children('[cate="'+e.text()+'"]').show())}})},handleShowHideListingPopup:function(){$(".list-card-block a, .more-card-tab.promo-tab-item").click(function(){$(".overlay").fadeIn(),$("#card-listing-popup").fadeIn(),UOB.listingPopupElement.handleTabFilterListCardSlider()}),$("body").on("click",".more-cards a",function(){$(".overlay").fadeIn(),$("#card-listing-popup").fadeIn(),UOB.listingPopupElement.handleTabFilterListCardSlider()}),$("#card-listing-popup").on("click",".icon-close-gray",function(){$("#card-listing-popup").fadeOut(),$(".overlay").fadeOut()}),$("#card-listing-popup").on("click",".overlay",function(){$("#card-listing-popup").fadeOut(),$(".overlay").fadeOut()})},handleListingTab:function(){$("body").on("click","#card-listing-popup .custom-tab-item",function(){var e=$(this);$("#card-listing-popup .custom-tab-item").removeClass("active"),e.addClass("active");var a=$("#card-listing-popup .card-list-container .card-item");a.hide(),"All"===e.attr("cate")?a.show():a.each(function(){$(this).attr("cate").indexOf(e.attr("cate"))>-1&&$(this).show()})})}},cardPageElement:{handleLandingSlider:function(){var e=$(".card-page .slider-block .swiper-container").swiper({mode:"horizontal",loop:!0,calculateHeight:!0,pagination:".card-page .swiper-pagination",paginationClickable:!0,resizeReInit:!0});$(".card-page .slider-block .swiper-button-next").click(function(){e.swipeNext()}),$(".card-page .slider-block .swiper-button-prev").click(function(){e.swipePrev()})},handleFilterLogo:function(){var e=$(".prvi-amex-card .filter-logo-block .custom-tab .custom-tab-item.active"),a=$(".prvi-amex-card .filter-logo-block .logo-container");a.find(".logo-item").hide(),a.find('.logo-item[cate="'+e.text()+'"]').show(),$(".filter-logo-block .custom-tab .custom-tab-item").click(function(){var e=$(this);$(this).hasClass("active")||($(".filter-logo-block .custom-tab .custom-tab-item").removeClass("active"),$(this).addClass("active"),"All"===e.text()?$(".filter-logo-block .logo-container").find(".logo-item").show():($(".filter-logo-block .logo-container").find(".logo-item").hide(),$(".filter-logo-block .logo-container").find('.logo-item[cate="'+e.text()+'"]').show()))})},handleFilterOffer:function(){for(var e=0;e<$(".offers-container .offer-item-container").length;e++)e>=9&&$($(".offers-container .offer-item-container")[e]).hide();var a=$(".prvi-master-card .filter-logo-block .custom-tab .custom-tab-item");a.click(function(){var e=$(this);if(!$(this).hasClass("active"))if(a.removeClass("active"),$(this).addClass("active"),"All"===e.text()){$(".offers-container .offer-item-container").show(),$(".view-all-offers").show();for(var i=0;i<$(".offers-container .offer-item-container").length;i++)i>=9&&$($(".offers-container .offer-item-container")[i]).hide()}else $(".view-all-offers").hide(),$(".offers-container .offer-item-container").hide(),$('.offers-container .offer-item-container[cate="'+e.text()+'"]').show();UOB.util.centerDataPosition()}),$(".view-all-offers").click(function(){$(".offers-container .offer-item-container").show(),$(this).hide(),UOB.util.centerDataPosition()})},handleTabFeaturePrviVisa:function(){var e=$(".prvi-visa-card .feature-block");$(".prvi-visa-card .feature-block .custom-tab .custom-tab-item").click(function(){var a=$(this);$(this).hasClass("active")||(e.find(".custom-tab .custom-tab-item").removeClass("active"),$(this).addClass("active"),e.find(".custom-tab-content .custom-tab-content-item").removeClass("active"),e.find(".custom-tab-content .custom-tab-content-item."+a.attr("cate")).addClass("active"))})},handleOneCardTabs:function(){var e=$(".one-card .one-card-rebate-range-block .custom-tab");e.find(".custom-tab-item").click(function(){if(!$(this).hasClass("active")){var e=$(this).attr("data-tab");$(this).parent().find(".custom-tab-item").removeClass("active"),$(".range-blocks-container .range-container").removeClass("active"),$(this).addClass("active"),$("#"+e).addClass("active")}})},handleOneCardRangeSlider:function(){var e=[50,100,300],a=$("#one-card-range-block .local"),i=a.find(".range-slider-value span"),t=500;i.html(t),a.find(".range-slider").noUiSlider({start:[t],step:1,range:{min:[500],max:[2e3]}}).Link("lower").to('-inline-<div class="range-slider-value"></div>',function(e){var a=Math.round(e);$(this).html("<span>S$</span><span>"+UOB.util.numberWithCommas(a)+"</span>")}),a.find(".range-slider").noUiSlider_pips({mode:"values",values:[1e3],format:wNumb({prefix:"S$"})}),$(a.find(".noUi-pips .noUi-value-large")[0]).html("S$1,000"),a.on("slide",function(i,t){1e3>t?($(a.find(".noUi-pips .noUi-marker-large")[0]).removeClass("active"),a.find(".calculated-value .amount").html(e[0])):t>=1e3&&2e3>t?($(a.find(".noUi-pips .noUi-marker-large")[0]).addClass("active"),a.find(".calculated-value .amount").html(e[1])):a.find(".calculated-value .amount").html(e[2])})},handlePrviCardTabs:function(){var e=$(".prvi-miles-range-block .custom-tab");e.find(".custom-tab-item").click(function(){if(!$(this).hasClass("active")){var e=$(this).attr("data-tab");$(this).parent().find(".custom-tab-item").removeClass("active"),$(".range-blocks-container .range-container").removeClass("active"),$(this).addClass("active"),$("#"+e).addClass("active")}})},handlePrviMilesRangeSlider:function(){var e=$("#prvi-world .local"),a=e.find(".range-slider-value span"),i=$("#prvi-world .overseas"),t=(i.find(".range-slider-value span"),200);a.html(t),$("#prvi-world .range-slider").noUiSlider({start:[t],range:{min:[0,50],"50%":[2e3,50],max:[3e3]}}).on("slide",function(e,a){var i=$("#prvi-world"),t=i.find(".local .range-slider").val(),n=i.find(".overseas .range-slider").val(),r=1.4*t+2.4*n;i.find(".miles-monthly").html(UOB.util.numberWithCommas(Math.round(r))),i.find(".miles-annually").html(UOB.util.numberWithCommas(12*Math.round(r)))}),e.find(".range-slider").Link("lower").to('-inline-<div class="range-slider-value has-text"></div>',function(e){var a=Math.round(e);$(this).html("<span>Local Spend</span><br><strong>S$"+a+"</strong>")}),i.find(".range-slider").Link("lower").to('-inline-<div class="range-slider-value has-text"></div>',function(e){var a=Math.round(e);$(this).html("<span>Overseas Spend</span><br><strong>S$"+a+"</strong>")})},handlePrviMilesAmericanRangeSlider:function(){var e=$("#prvi-american .local"),a=e.find(".range-slider-value span"),i=$("#prvi-american .overseas"),t=(i.find(".range-slider-value span"),200);a.html(t),$("#prvi-american .range-slider").noUiSlider({start:[t],range:{min:[0,50],"50%":[2e3,50],max:[3e3]}}).on("slide",function(e,a){var i=$("#prvi-american"),t=i.find(".local .range-slider").val(),n=i.find(".overseas .range-slider").val(),r=1.4*t+2.4*n;i.find(".miles-monthly").html(UOB.util.numberWithCommas(Math.round(r))),i.find(".miles-annually").html(UOB.util.numberWithCommas(12*Math.round(r)))}),e.find(".range-slider").Link("lower").to('-inline-<div class="range-slider-value has-text"></div>',function(e){var a=Math.round(e);$(this).html("<span>Local Spend</span><br><strong>S$"+a+"</strong>")}),i.find(".range-slider").Link("lower").to('-inline-<div class="range-slider-value has-text"></div>',function(e){var a=Math.round(e);$(this).html("<span>Overseas Spend</span><br><strong>S$"+a+"</strong>")})},handlePrviMilesVisaRangeSlider:function(){var e=$("#prvi-visa .local"),a=e.find(".range-slider-value span"),i=$("#prvi-visa .overseas"),t=(i.find(".range-slider-value span"),200);a.html(t),$("#prvi-visa .range-slider").noUiSlider({start:[t],range:{min:[0,50],"50%":[2e3,50],max:[3e3]}}).on("slide",function(e,a){var i=$("#prvi-visa"),t=i.find(".local .range-slider").val(),n=i.find(".overseas .range-slider").val(),r=1.4*t+2.4*n;i.find(".miles-monthly").html(UOB.util.numberWithCommas(Math.round(r))),i.find(".miles-annually").html(UOB.util.numberWithCommas(12*Math.round(r)))}),e.find(".range-slider").Link("lower").to('-inline-<div class="range-slider-value has-text"></div>',function(e){var a=Math.round(e);$(this).html("<span>Local Spend</span><br><strong>S$"+a+"</strong>")}),i.find(".range-slider").Link("lower").to('-inline-<div class="range-slider-value has-text"></div>',function(e){var a=Math.round(e);$(this).html("<span>Overseas Spend</span><br><strong>S$"+a+"</strong>")})},handleSingtelRangeSlider:function(){var e=[1,3,10,30],a=$("#singtel-range-block .local"),i=a.find(".range-slider-value span"),t=50;i.html(t),a.find(".range-slider").noUiSlider({start:[t],step:1,range:{min:[0],max:[500]}}).Link("lower").to('-inline-<div class="range-slider-value"></div>',function(e){var a=Math.round(e);$(this).html("<span>S$</span><span>"+a+"</span>")}),a.find(".range-slider").noUiSlider_pips({mode:"values",values:[50,100,300],format:wNumb({prefix:"S$"})}),a.on("slide",function(i,t){var n="S$";if(50>t){var r=.01*t;a.find(".calculated-value .amount").html(n+r.toFixed(2)),$(a.find(".noUi-pips .noUi-marker-large")[0]).removeClass("active"),$(a.find(".noUi-pips .noUi-marker-large")[1]).removeClass("active"),$(a.find(".noUi-pips .noUi-marker-large")[2]).removeClass("active")}else t>=50&&100>t?(a.find(".calculated-value .amount").html(n+e[0]),$(a.find(".noUi-pips .noUi-marker-large")[0]).addClass("active"),$(a.find(".noUi-pips .noUi-marker-large")[1]).removeClass("active"),$(a.find(".noUi-pips .noUi-marker-large")[2]).removeClass("active")):t>=100&&300>t?(a.find(".calculated-value .amount").html(n+e[1]),$(a.find(".noUi-pips .noUi-marker-large")[0]).addClass("active"),$(a.find(".noUi-pips .noUi-marker-large")[1]).addClass("active"),$(a.find(".noUi-pips .noUi-marker-large")[2]).removeClass("active")):t>=300&&500>t?(a.find(".calculated-value .amount").html(n+e[2]),$(a.find(".noUi-pips .noUi-marker-large")[0]).addClass("active"),$(a.find(".noUi-pips .noUi-marker-large")[1]).addClass("active"),$(a.find(".noUi-pips .noUi-marker-large")[2]).addClass("active")):t>=500&&a.find(".calculated-value .amount").html(n+e[3])}),$(a.find(".noUi-pips .noUi-value-large")[0]).addClass("first")},handleDelightRangeSliderDFSG:function(){var e=$("#delight-DFSG-rebate-slider"),a=500;e.find(".range-slider").noUiSlider({start:[a],step:1,range:{min:[0],max:[800]}}).Link("lower").to('-inline-<div class="range-slider-value"></div>',function(e){var a=Math.round(e);$(this).html("<span>S$</span><span>"+a+"</span>"),$("#delight-DFSG-rebate-slider .value-rate .amount").html(a);var i=UOB.cardPageElement.calculateDelightRebate("DFSG");0!==i&&(i=i.toFixed(2));var t=UOB.cardPageElement.calculateDelightRebate("contactless");0!==t&&(t=t.toFixed(2));var n=UOB.cardPageElement.calculateDelightRebate("other");0!==n&&(n=n.toFixed(2));var r=parseFloat(i)+parseFloat(t)+parseFloat(n);r=r>=50?50:r.toFixed(2),$("#delight-DFSG-rebate-slider .calculated-rate .amount").html(i),$("#delight-contactless-rebate-slider .calculated-rate .amount").html(t),$("#delight-other-rebate-slider .calculated-rate .amount").html(n),$(".total-value-container .total-spend-text .amount").html(r)}),e.find(".range-slider").noUiSlider_pips({mode:"values",values:[0,400,800],format:wNumb({prefix:"S$"})}),$(e.find(".noUi-pips .noUi-marker-large")[1]).addClass("active"),$(e.find(".noUi-pips .noUi-marker-large")[2]).removeClass("active"),e.on("slide",function(a,i){400>i?($(e.find(".noUi-pips .noUi-marker-large")[1]).removeClass("active"),$(e.find(".noUi-pips .noUi-marker-large")[2]).removeClass("active")):i>=400&&800>i?($(e.find(".noUi-pips .noUi-marker-large")[1]).addClass("active"),$(e.find(".noUi-pips .noUi-marker-large")[2]).removeClass("active")):i>=800&&($(e.find(".noUi-pips .noUi-marker-large")[1]).addClass("active"),$(e.find(".noUi-pips .noUi-marker-large")[2]).addClass("active"))}),$(e.find(".noUi-pips .noUi-marker-large")[0]).addClass("first"),$(e.find(".noUi-pips .noUi-marker-large")[2]).addClass("last"),$(e.find(".noUi-pips .noUi-value-large")[2]).append(" and above")},handleDelightRangeSliderContactless:function(){var e=$("#delight-contactless-rebate-slider"),a=500;e.find(".range-slider").noUiSlider({start:[a],step:1,range:{min:[0],max:[800]}}).Link("lower").to('-inline-<div class="range-slider-value"></div>',function(e){var a=Math.round(e);$(this).html("<span>S$</span><span>"+a+"</span>"),$("#delight-contactless-rebate-slider .value-rate .amount").html(a);var i=UOB.cardPageElement.calculateDelightRebate("DFSG");0!==i&&(i=i.toFixed(2));var t=UOB.cardPageElement.calculateDelightRebate("contactless");0!==t&&(t=t.toFixed(2));var n=UOB.cardPageElement.calculateDelightRebate("other");0!==n&&(n=n.toFixed(2));var r=parseFloat(i)+parseFloat(t)+parseFloat(n);r=r>=50?50:r.toFixed(2),$("#delight-DFSG-rebate-slider .calculated-rate .amount").html(i),$("#delight-contactless-rebate-slider .calculated-rate .amount").html(t),$("#delight-other-rebate-slider .calculated-rate .amount").html(n),$(".total-value-container .total-spend-text .amount").html(r)}),e.find(".range-slider").noUiSlider_pips({mode:"values",values:[0,400,800],format:wNumb({prefix:"S$"})}),$(e.find(".noUi-pips .noUi-marker-large")[1]).addClass("active"),$(e.find(".noUi-pips .noUi-marker-large")[2]).removeClass("active"),e.on("slide",function(a,i){400>i?($(e.find(".noUi-pips .noUi-marker-large")[1]).removeClass("active"),$(e.find(".noUi-pips .noUi-marker-large")[2]).removeClass("active")):i>=400&&800>i?($(e.find(".noUi-pips .noUi-marker-large")[1]).addClass("active"),$(e.find(".noUi-pips .noUi-marker-large")[2]).removeClass("active")):i>=800&&($(e.find(".noUi-pips .noUi-marker-large")[1]).addClass("active"),$(e.find(".noUi-pips .noUi-marker-large")[2]).addClass("active"))}),$(e.find(".noUi-pips .noUi-marker-large")[0]).addClass("first"),$(e.find(".noUi-pips .noUi-marker-large")[2]).addClass("last"),$(e.find(".noUi-pips .noUi-value-large")[2]).append(" and above")},handleDelightRangeSliderOther:function(){var e=$("#delight-other-rebate-slider"),a=500;e.find(".range-slider").noUiSlider({start:[a],step:1,range:{min:[0],max:[800]}}).Link("lower").to('-inline-<div class="range-slider-value"></div>',function(e){var a=Math.round(e);$(this).html("<span>S$</span><span>"+a+"</span>"),$("#delight-other-rebate-slider .value-rate .amount").html(a);var i=UOB.cardPageElement.calculateDelightRebate("DFSG");0!==i&&(i=i.toFixed(2));var t=UOB.cardPageElement.calculateDelightRebate("contactless");0!==t&&(t=t.toFixed(2));var n=UOB.cardPageElement.calculateDelightRebate("other");0!==n&&(n=n.toFixed(2));var r=parseFloat(i)+parseFloat(t)+parseFloat(n);r=r>=50?50:r.toFixed(2),$("#delight-DFSG-rebate-slider .calculated-rate .amount").html(i),$("#delight-contactless-rebate-slider .calculated-rate .amount").html(t),$("#delight-other-rebate-slider .calculated-rate .amount").html(n),$(".total-value-container .total-spend-text .amount").html(r)}),e.find(".range-slider").noUiSlider_pips({mode:"values",values:[0,400,800],format:wNumb({prefix:"S$"})}),$(e.find(".noUi-pips .noUi-marker-large")[1]).addClass("active"),$(e.find(".noUi-pips .noUi-marker-large")[2]).removeClass("active"),e.on("slide",function(a,i){400>i?($(e.find(".noUi-pips .noUi-marker-large")[1]).removeClass("active"),$(e.find(".noUi-pips .noUi-marker-large")[2]).removeClass("active")):i>=400&&800>i?($(e.find(".noUi-pips .noUi-marker-large")[1]).addClass("active"),$(e.find(".noUi-pips .noUi-marker-large")[2]).removeClass("active")):i>=800&&($(e.find(".noUi-pips .noUi-marker-large")[1]).addClass("active"),$(e.find(".noUi-pips .noUi-marker-large")[2]).addClass("active"))}),$(e.find(".noUi-pips .noUi-marker-large")[0]).addClass("first"),$(e.find(".noUi-pips .noUi-marker-large")[2]).addClass("last"),$(e.find(".noUi-pips .noUi-value-large")[2]).append(" and above")},handleDelightOtherAmountInput:function(){$("body").on("keyup","#delight-other-input",function(){$("#delight-DFSG-rebate-slider .calculated-rate .amount").html(UOB.cardPageElement.calculateDelightRebate("DFSG").toFixed(2)),$("#delight-contactless-rebate-slider .calculated-rate .amount").html(UOB.cardPageElement.calculateDelightRebate("contactless").toFixed(2)),$("#other-amount-container .calculated-rate .amount").html(UOB.cardPageElement.calculateDelightRebate("other").toFixed(2))})},handleInputNumerOnly:function(){$("#delight-other-input").keydown(function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190])||65==e.keyCode&&e.ctrlKey===!0||67==e.keyCode&&e.ctrlKey===!0||88==e.keyCode&&e.ctrlKey===!0||e.keyCode>=35&&e.keyCode<=39||(e.shiftKey||e.keyCode<48||e.keyCode>57)&&(e.keyCode<96||e.keyCode>105)&&e.preventDefault()})},calculateDelightRebate:function(e){var a=parseInt($("#delight-DFSG-rebate-slider .value-rate .amount").html()),i=parseInt($("#delight-contactless-rebate-slider .value-rate .amount").html()),t=parseInt($("#delight-other-rebate-slider .value-rate .amount").html()),n=a+i+t,r=0;return"DFSG"===e?r=400>n?.003*a:n>=400&&800>n?.03*a:.08*a:"contactless"===e?r=400>n?.003*i:.03*i:"other"===e?r=isNaN(t)?0:.003*t:"total"===e&&(r=UOB.util.numberWithCommas(n)),r},handleSingtelRangeSlider2:function(){var e=[0,100,300],a=$("#singtel-range-block2 .local"),i=a.find(".range-slider-value span"),t=14e3;i.html(t),a.find(".range-slider").noUiSlider({start:[t],step:100,range:{min:[0],max:[24e3]}}).Link("lower").to('-inline-<div class="range-slider-value"></div>',function(e){var a=Math.round(e);$(this).html("<span>S$</span><span>"+UOB.util.numberWithCommas(a)+"</span>")}),a.find(".range-slider").noUiSlider_pips({mode:"values",values:[12e3],format:wNumb({prefix:"S$"})}),$(a.find(".noUi-pips .noUi-marker-large")[0]).addClass("active"),a.on("slide",function(i,t){12e3>t?(a.find(".calculated-value .amount").html(e[0]),$(a.find(".noUi-pips .noUi-marker-large")[0]).removeClass("active")):t>=12e3&&23999>=t?(a.find(".calculated-value .amount").html(e[1]),$(a.find(".noUi-pips .noUi-marker-large")[0]).addClass("active")):(a.find(".calculated-value .amount").html(e[2]),$(a.find(".noUi-pips .noUi-marker-large")[0]).addClass("active"))}),$(a.find(".noUi-pips .noUi-value-large")[0]).html("S$12,000")},handleVisaSignatureRangeSlider:function(){var e=[0,5,10],a=$("#visa-signature-range-slider .local"),i=a.find(".range-slider-value span"),t=1;i.html(t),a.find(".range-slider").noUiSlider({start:[t],step:1,range:{min:[0],max:[2e3]}}).Link("lower").to('-inline-<div class="range-slider-value"></div>',function(e){var a=Math.round(e);$(this).html("<span>S$</span><span>"+a+"</span>")}),a.on("slide",function(i,t){1>t?a.find(".calculated-value .amount").html(e[0]):t>=1&&a.find(".calculated-value .amount").html(t/e[1]*e[2])})},handleUnionPayRangeSlider:function(){var e=[0,5],a=[0,5],i=$("#unionpay-range-slider"),t=$("#unionpay-range-slider .local"),n=t.find(".range-slider-value span"),r=$("#unionpay-range-slider .overseas"),l=r.find(".range-slider-value span"),o=500,s=300;n.html(o),t.find(".range-slider").noUiSlider({start:[o],step:1,range:{min:[0],max:[2e3]}}).Link("lower").to('-inline-<div class="range-slider-value has-text"></div>',function(e){var a=Math.round(e);$(this).html("<span>Local Spend</span><br><strong>S$"+a+"</strong>")}),t.on("slide",function(a,t){1>t?i.find(".calculated-value .local-amount").html(e[0]):t>=1&&i.find(".calculated-value .local-amount").html(t/e[1])}),l.html(s),r.find(".range-slider").noUiSlider({start:[s],step:1,range:{min:[0],max:[2e3]}}).Link("lower").to('-inline-<div class="range-slider-value has-text"></div>',function(e){var a=Math.round(e);$(this).html("<span>Overseas Spend</span><br><strong>S$"+a+"</strong>")}),r.on("slide",function(e,t){i.find(".calculated-value .overseas-amount").html(1>t?a[0]:t/a[1]*a[1])})},handlePreferredTabs:function(){var e=$("#preferred-platinum-range-slider .custom-tab");e.find(".custom-tab-item").click(function(){if(!$(this).hasClass("active")){var e=$(this).attr("data-tab");$(this).parent().find(".custom-tab-item").removeClass("active"),$(".range-blocks-container").removeClass("active"),$(this).addClass("active"),$("#"+e).addClass("active")}})},handlePreferredRangeSlider:function(){var e=[0,5,10],a=[0,5,2],i=$("#dining-other-spend .local"),t=i.find(".range-slider-value span"),n=$("#dining-other-spend .overseas"),r=n.find(".range-slider-value span"),l=400,o=300;t.html(l),i.find(".range-slider").noUiSlider({start:[l],step:1,range:{min:[0],max:[2e3]}}).Link("lower").to('-inline-<div class="range-slider-value has-text"></div>',function(e){var a=Math.round(e);$(this).html("<span>Dining</span><br><strong>S$"+a+"</strong>")}),i.on("slide",function(a,t){1>t?i.find(".calculated-value .amount").html(e[0]):t>=1&&i.find(".calculated-value .amount").html(t/e[1]*e[2])}),r.html(o),n.find(".range-slider").noUiSlider({start:[o],step:1,range:{min:[0],max:[2e3]}}).Link("lower").to('-inline-<div class="range-slider-value has-text"></div>',function(e){var a=Math.round(e);$(this).html("<span>Other spend</span><br><strong>S$"+a+"</strong>")}),n.on("slide",function(e,i){n.find(".calculated-value .amount").html(1>i?a[0]:i/a[1]*a[2])});var s=[0,5,10],d=$("#petrol-at-caltex .local"),c=d.find(".range-slider-value span"),p=400;c.html(p),d.find(".range-slider").noUiSlider({start:[p],step:1,range:{min:[0],max:[2e3]}}).Link("lower").to('-inline-<div class="range-slider-value"></div>',function(e){var a=Math.round(e);$(this).html("<span>S$</span><span>"+a+"</span>")}),d.on("slide",function(e,a){1>a?d.find(".calculated-value .amount").html(s[0]):a>=1&&d.find(".calculated-value .amount").html(a/s[1]*s[2])})}}};$(document).ready(function(){$("#card-listing-popup").load("card-listing-popup.html"),$("#top-block").load($("body").hasClass("jcb-card")?"jcb-top-block-content.html":$("body").hasClass("delight-card")?"delight-top-block-content.html":"top-block-content.html"),$(".delivery-block").load("delivery-block.html"),$(".same-day-delivery-container").load("same-day-container.html"),UOB.globalElement.stickyHeader(),UOB.globalElement.handleRate(),$("body").hasClass("prvi-master-card")?UOB.cardPageElement.handleFilterOffer():UOB.cardPageElement.handleFilterLogo(),UOB.listingPopupElement.handleFilterCards(),UOB.globalElement.toggleTerms(),UOB.util.replaceImgToBackground($(".bg-image"),".slider-bg"),UOB.promoElement.handlePromoTab(),UOB.cardPageElement.handleOneCardRangeSlider(),UOB.cardPageElement.handlePrviMilesRangeSlider(),UOB.cardPageElement.handleTabFeaturePrviVisa(),UOB.listingPopupElement.handleShowHideListingPopup(),UOB.listingPopupElement.handleListingTab(),UOB.promoElement.handlePromoTabSlider(),UOB.cardPageElement.handleOneCardTabs(),UOB.cardPageElement.handlePrviCardTabs(),UOB.cardPageElement.handleInputNumerOnly(),UOB.cardPageElement.handleSingtelRangeSlider(),UOB.cardPageElement.handleSingtelRangeSlider2(),UOB.cardPageElement.handleVisaSignatureRangeSlider(),UOB.cardPageElement.handleUnionPayRangeSlider(),UOB.cardPageElement.handlePreferredTabs(),UOB.cardPageElement.handlePreferredRangeSlider(),UOB.cardPageElement.handlePrviMilesAmericanRangeSlider(),UOB.cardPageElement.handlePrviMilesVisaRangeSlider(),UOB.cardPageElement.handleDelightRangeSliderDFSG(),UOB.cardPageElement.handleDelightRangeSliderContactless(),UOB.cardPageElement.handleDelightRangeSliderOther(),UOB.cardPageElement.handleDelightOtherAmountInput(),UOB.globalElement.scrollToDeliveryBlock()}),$(window).load(function(){UOB.util.centerDataPosition(),UOB.listingPopupElement.handleTabFilterListCardSlider(),$("body").hasClass("card-page")&&UOB.cardPageElement.handleLandingSlider(),$("body").hasClass("promo")&&(UOB.promoElement.handlePromoSlider(),UOB.util.equalHeight($(".tab-block .promo-tab-item")))});var width=$(window).width(),resize=0;$(window).resize(function(){var e=$(this);resize++,setTimeout(function(){resize--,0===resize&&(UOB.util.doneResizing(),e.width()!==width&&(width=e.width(),UOB.util.doneResizingWidth()))},200)});
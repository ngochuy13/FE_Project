/* jshint devel:true */
'use strict';

var main_slide, player;
$(document).ready(function() {
    $('.selectpicker').selectpicker();

    $('input:not(.no-icheck)').iCheck({
        checkboxClass: 'icheckbox_minimal-red',
        radioClass: 'iradio_minimal-red',
        increaseArea: '20%' // optional
    });
    //slider
    var cusNav = 0;
    if ($(".mobile-slide .slide-wrap").attr('data-nav')) {
        cusNav = ('true' == $(".mobile-slide .slide-wrap").attr('data-nav'));
    }
    main_slide = $("#main-slide-section .slide-wrap, .mobile-slide .slide-wrap").owlCarousel({
        items: 1,
        nav: cusNav,
        loop: true
    })
    var video;
    main_slide.on('changed.owl.carousel', function(event) {
        var index = event.item.index;
        var vwrap = $(event.target).find(".slide-item").eq(index = event.item.index).find(".video-wrap");
        if (vwrap.length > 0) {
            if (player != null)
                player.dispose();
            $('#temp-video').remove();
            video = $("<video width='100%' height='100%' id='temp-video'>").append("<source src='" + vwrap.attr("video-src") + "'>");
            video.appendTo(vwrap);
            player = videojs('temp-video');
            player.userActive(false);
            player.play();
        }
    });
    if ($("#main-slide-section .video-wrap").length) {
        // var vwrap = $("#main-slide-section .video-wrap");
        // $('#temp-video').remove();
        // video = $("<video width='100%' height='100%' id='temp-video'>").append("<source src='" + vwrap.attr("video-src") + "'>");
        // video.appendTo(vwrap);
        // player = videojs('temp-video');
        // player.userActive(false);
        // player.play();
        var player = videojs('really-cool-video', { /* Options */ }, function() {
            this.play();
            // console.log($(this.c).height());
        });
    }
    //slider
    var cusMargin = 9;
    if ($("#lates-section .slide-wrap").attr('data-margin')) {
        cusMargin = parseInt($("#lates-section .slide-wrap").attr('data-margin'));
    }
    var optionOwl = {
        items: 3,
        nav: true,
        dots: false,
        margin: cusMargin,
        loop: true,
        responsive: {
            320: {
                items: 1
            },
            640: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    };
    var $latesOwl = $("#lates-section .slide-wrap").owlCarousel(optionOwl);

    var funcChangeItemOwl = function(type){
        $latesOwl.trigger('destroy.owl.carousel');
        $("#lates-section .slide-wrap").empty();
        $.each( $('#lates-section .data-content-filter .slide-item'), function(){
            if($(this).hasClass(type)){
                $("#lates-section .slide-wrap").append($(this).clone())
            }
        });        
        $latesOwl.owlCarousel(optionOwl);
        Cookies.set('lates-home' , type);
    };
    if($('.data-content-filter').length){
        if(Cookies.get('lates-home')){
            $('.home #lates-section .what-the-lates').html('RECOMMENDED FOR YOU');
            var type = Cookies.get('lates-home');
            funcChangeItemOwl(type);
            $('#lates-section .filter-control .btn-group .btn[data-type="'+ type +'"]').addClass('active');
        }
    }
    $(".filter-control .btn").click(function() {
        $(".filter-control .btn").removeClass("active");
        $(this).addClass("active");
        if($('.data-content-filter').length){
            var type = $(this).attr('data-type');
            funcChangeItemOwl(type);
        }
    });

    $(".result-content .banner-slide").owlCarousel({
        items: 1,
        nav: false,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false
    });

    $('#header .header li > .dropdown-menu > .row > div').matchHeight();

    $(".price-ranger").each(function() {
        var input = $(this);
        var cus_hide_from_to = true;
        if (input.attr('data-hide-from-to')) {
            cus_hide_from_to = (input.attr('data-hide-from-to') == 'true');
        }
        var price_slider = input.ionRangeSlider({
            type: "double",
            min: 0,
            max: 50000000,
            prefix: "$",
            prettify_separator: ",",
            hide_min_max: true,
            hide_from_to: cus_hide_from_to,
        });
        price_slider.on("change", function() {
            var $this = $(this),
                from = $this.data("from"),
                to = $this.data("to");
            $this.parents('.ranger-slider').find('.ranger-view .from').text("$" + from.formatMoney());
            $this.parents('.ranger-slider').find('.ranger-view .to').text("$" + to.formatMoney());
        });
    });

    if($('.block-customer-support .content').length){
        $('.block-customer-support .content .title').on('click', function(){
            $('.block-customer-support .content').toggleClass('active');
        })
    }
    if($('.select-all-btn').length){
        $('.select-all-btn').on('click', function(){
            $('.search-listing .iCheck-helper').trigger('click');
        })
    }


    $(".filter-type").click(function() {
        $(this).parents(".filter-control").stop().toggleClass("show");
        $(this).next(".filter-body").stop().slideToggle();
    });
    $(".heart").click(function() {
        $(this).toggleClass("active");
    });
    Number.prototype.formatMoney = function(c, d, t) {
        var n = this,
            c = isNaN(c = Math.abs(c)) ? 0 : c,
            d = d == undefined ? "." : d,
            t = t == undefined ? "," : t,
            s = n < 0 ? "-" : "",
            i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };
});
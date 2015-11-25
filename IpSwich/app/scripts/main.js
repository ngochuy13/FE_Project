'use strict';

window.ODFC = window.ODFC || {};
window.ODFC.Events = window.ODFC.Events || {};
window.IPs = window.IPs || {};
window.IPs.utils = window.IPs.utils || {};

function is_touch_device() {
    return !!('ontouchstart' in window);
}
jQuery(function($) {
    $('html').toggleClass('no-touch', !is_touch_device());
    $('.imagefill-section').each(function() {
        if ($(window).width() > 1023) {
            $(this).find('img.mobile-img').hide();
            $(this).css('backgroundImage', 'url(' + $(this).find('img.main-img').attr('src') + ')');
        } else {
            $(this).find('img.main-img').hide();
            $(this).css('backgroundImage', 'url(' + $(this).find('img.mobile-img').attr('src') + ')')
                .css('background-size', 'contain');
        }
    });
});

jQuery(window).on('load', function() {
    window.IPs.flexView = (function($) {
        var module = {};
        var itemsView = $(".article-listing");
        var viewModeControl = $(".article-listing-view-mode-control");
        var gridModeBtn = viewModeControl.find(".btn-grid");
        var listModeBtn = viewModeControl.find(".btn-list");
        var mapModeBtn = viewModeControl.find(".btn-map");
        var loadmoreBtn = $(".article-listing-loadmore");

        var masonryInit = function() {
            itemsView.find('.media').imagefill({
                runOnce: true
            });

            itemsView.isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                getSortData: {
                    order: '[data-grid-order] parseInt'
                },
                sortBy: 'order',
                masonry: {
                    gutter: 0,
                    columnWidth: '.grid-sizer'
                }
            });

            itemsView.isotope('on', 'layoutComplete', function() {
                itemsView.find('.media').imagefill({
                    runOnce: true
                });
            });
        }

        module.init = function() {
            masonryInit();
            setTimeout(function() {
                itemsView.find('.media').imagefill({
                    runOnce: true
                });
            }, 1000);
            gridModeBtn.on('click', function() {
                itemsView.removeClass('list-mode').addClass('grid-mode');
                itemsView.find(".article-wrap").removeClass("col-xs-12 col-md-9");
                masonryInit();
                listModeBtn.removeClass("active");
                $(this).addClass("active");
            });

            listModeBtn.on('click', function() {
                itemsView.isotope('destroy');
                itemsView.removeClass('grid-mode').addClass('list-mode');
                gridModeBtn.removeClass("active");
                $(this).addClass("active");

                itemsView.find(".article-wrap").addClass("col-xs-12 col-md-9");

                setTimeout(function() {
                    itemsView.find('.media').imagefill({
                        runOnce: true
                    });
                }, 300);
            });

            ODFC.Events.on('resizeWindow', function(data) {
                if (itemsView.hasClass('grid-mode')) {
                    if (data.BP < 1024) {
                        itemsView.isotope({
                            sortBy: 'original-order'
                        });
                    } else {
                        itemsView.isotope({
                            sortBy: 'order'
                        });
                    }
                } else if (itemsView.hasClass('list-mode')) {
                    setTimeout(function() {
                        itemsView.find('.media').imagefill({
                            runOnce: true
                        });
                    }, 100);
                }
                if($(window).width() < 1024){
                    $(".search-form-popup").addClass("hide");
                    $("#header").removeClass("show-search");
                }
            });

            return module;
        }

        return module.init();
    })(jQuery);
});

jQuery(document).ready(function($) {

    window.IPs.makeBooking = (function($) {
        var view = $('body.detail section.make-booking');
        var module = {};

        module.init = function() {
            ODFC.Events.on('resizeWindow', function(data) {
                if (data.BP >= 1024) {
                    view.find('.input-toggle').removeClass('hide');
                }
            });
            view.find('.toggler').on('click', function() {
                var isOpen = !view.find('.input-toggle').hasClass('hide');
                $(this).toggleClass('fa-angle-down', isOpen).toggleClass('fa-angle-up', !isOpen);
                view.find('.input-toggle').toggleClass('hide', isOpen);
            });
            return module;
        };

        return module.init();
    })(jQuery);


    //TODO: 
    // This block of code to be overwriten with more specific selector but preserve current minimal settings. Because this block affects a lot of input and just for demonstration
    $('.search-date-picked input').datetimepicker({
        format: "DD/MM/YYYY",
        icons: {
            date: 'fa fa-calendar',
            up: '',
            down: '',
            previous: 'fa fa-angle-left',
            next: 'fa fa-angle-right',
            today: '',
            clear: '',
            close: ''
        }
    });

    //TODO: 
    // This block of code to be overwriten with more specific selector but preserve current minimal settings. Because this block affects a lot of input and just for demonstration
    $('.search-select-picked').selectpicker();


    //TODO: 
    // This block of code to be overwriten with more specific selector but preserve current minimal settings. Because this block affects a lot of input and just for demonstration
    if ($('#carousel').length && $('#slider').length) {

        $('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            directionNav: true,
            animationLoop: true,
            slideshow: false,
            sync: "#carousel",
        });

        $('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: true,
            slideshow: false,
            itemWidth: $('#carousel').width() / 3,
            itemMargin: 0,
            asNavFor: '#slider',
            minItems: 3,
            directionNav: true,
        });

        $(window).on('resize', function() {
            $('#carousel').removeData("flexslider").flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: true,
                slideshow: false,
                itemWidth: $('#carousel').width() / 3,
                itemMargin: 0,
                asNavFor: '#slider',
                minItems: 3,
                directionNav: true,
            });
        })
    }

    //TODO: 
    //
    var rangeSlider = $('#map-range-slider-1');
    var rangeSlider2 = $('#map-range-slider-2');

    noUiSlider.create(rangeSlider.get(0), {
        start: [40, 250],
        connect: true,
        range: {
            'min': 0,
            'max': 290
        }
    });
    noUiSlider.create(rangeSlider2.get(0), {
        start: [40, 250],
        connect: true,
        range: {
            'min': 0,
            'max': 290
        }
    });
    rangeSlider.find(".noUi-handle").append($("<span class='rangeslider-tooltip' />"));
    rangeSlider2.find(".noUi-handle").append($("<span class='rangeslider-tooltip' />"));

    rangeSlider.get(0).noUiSlider.on('update', function(values, handle) {
        rangeSlider.find(".noUi-handle .rangeslider-tooltip").eq(handle).html("$" + parseInt(values[handle]));
    });
    rangeSlider2.get(0).noUiSlider.on('update', function(values, handle) {
        rangeSlider2.find(".noUi-handle .rangeslider-tooltip").eq(handle).html("$" + parseInt(values[handle]));
    });

    //TODO: 
    //
    $(".star-rating").rating({
        filled: 'fa fa-star',
        empty: 'fa fa-star-o'
    });


    //TODO:
    //
    $('.type-map-filter').change(function() {
        $(".map-filter .option-filter").hide();
        $(".map-filter .option-filter[data-control=" + $(this).val() + "]").show();
        if($(".map-filter .option-filter[data-control=" + $(this).val() + "]").attr('data-clear-btn') == 'false'){
            $('.map-filter .filter-select .clear').hide();
        }else{
            $('.map-filter .filter-select .clear').show();
        }
    })

    //TODO:
    //
    $(window).on('resize', function() {

        if ($('#map').length > 0) {
            $('#map').height($(window).height() - $('#header').height() + 30);
        }
    }).resize();

    //TODO:
    //
    $(".filter-tab a").click(function(){
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    })
});
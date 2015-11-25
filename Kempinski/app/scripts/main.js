'use strict';

function namespacing(namespacStr) {
    var NSArr = namespacStr.split('.');
    var tempObj = window;
    for (var i = 0, len = NSArr.length; i < len; i++) {
        tempObj[NSArr[i]] = tempObj[NSArr[i]] || {};
        tempObj = tempObj[NSArr[i]];
    }
    tempObj = 0;
}

namespacing('ODFC.Events');
namespacing('KEM.utils');

function is_touch_device() {
    return !!('ontouchstart' in window);
}
function is_rtl() {
    return (document.getElementsByTagName("html")[0].getAttribute('dir') === 'rtl')
}

jQuery(document).ready(function($) {
    window.KEM.booking = (function() {
        'use strict';

        var view = $('.booking-widget');
        var checkInInput = $("#checkin-date");
        var checkOutInput = $("#checkout-date");
        var datePickerContainer = $('.booking-date-range-picker-container');
        var advancedBookingSection = $("#collapsemorebooking")

        var collapseBookingWidgetOnScrollForDesktop = function(size) {
            if (!size) {
                size = $(window).width();
            }
            if (size >= 1024) {
                $(window).on('scroll.bookingWidget', function() {
                    datePickerContainer.hide();
                    advancedBookingSection.stop().collapse("hide");
                });
                checkInInput.blur();
            } else {
                $(window).on('off.bookingWidget');
            }
        }

        function initDateRangePicker() {
            $(document).dateRangePicker({
                inline: true,
                container: '.booking-date-range-picker-container',
                alwaysOpen: true,
                autoUpdateInput: false,
                startDate: new Date()
            }).bind('datepicker-first-date-selected', function(event, obj) {
                checkInInput.parent().find('input').val(moment(obj.date1).format('ll'));
                checkInInput.html(moment(obj.date1).format('ll'));
            }).bind('datepicker-change', function(event, obj) {
                checkOutInput.parent().find('input').val(moment(obj.date1).format('ll'));
                checkOutInput.html(moment(obj.date2).format('ll'));
                datePickerContainer.hide();
            })


            $("#checkin-date, #checkout-date").on('click', function() {
                datePickerContainer.show();
            });

        }

        function initSingleDatePicker() {
            // var option = {
            //     singleDatePicker: true,
            //     inline: true,
            //     container: '.date-group',
            //     alwaysOpen: true,
            //     // locale: {
            //     //     cancelLabel: 'Clear'
            //     // },
            //     startDate: new Date()
            // }
            // $('input.datetimepicker').daterangepicker();
            var option = {
                singleMonth: true,
                showShortcuts: false,
                showTopbar: false,
                singleDate: true
            };
            $('input.datetimepicker').each(function(index, el) {
                // if($(this).attr('data-mintoday') == 'true'){
                //     option.minDate = new Date();
                // }
                $(this).dateRangePicker(option);

                if($(this).attr('data-mindate') != undefined){
                    var $input = $($(this).attr('data-mindate'));                    
                    $(this).on('apply.daterangepicker', function(ev, picker) {
                        var drp = $input.data('daterangepicker');
                        drp.minDate = picker.startDate;
                    });
                }
                $(this).val('');
            });
            $('.section-press-room-control .input-with-icon .icon-calendar').off('click').on('click', function(e){
                e.preventDefault();
                $(this).parent().find('input.datetimepicker').trigger('click');
            });

        }

        function initValidate() {
            $('form').each(function() {
                $(this).validate();
            });
        }

        function initTabRadio() {
            $(".tab-radio.nav-tabs a").click(function(e) {
                $(this).tab("show");
            })
        }

        function initRoomSuiteCarousel() {
            if ($(".section-room-suite-article__content").length > 0) {

                var tw = $(".section-room-suite-article__content").width();
                var tiw = 0;
                $(".section-room-suite-article__content .room-suite-article-item").each(function() {
                    tiw += $(this).width();
                })
                if (tw < tiw)
                    $(".section-room-suite-article__content").owlCarousel({
                        loop: true,
                        margin: 12,
                        responsive: {
                            0: {
                                items: 1
                            },
                            640: {
                                items: 2
                            },
                            1024: {
                                items: 3
                            },
                            1200: {
                                items: 4
                            }

                        }
                    });
            }

        }

        function initRoomLineCollapse() {
            $(document).on('.room-line-collapse', 'click', function() {

            })
        }

        function hideBookingWidgetOnFocusOut() {
            $(document).on('click', function(e) {
                if (e.target.id !== 'checkin-date' && e.target.id !== 'checkout-date') {
                    datePickerContainer.hide();
                }
                if ($(e.target).closest('.booking-widget').length == 0) {
                    advancedBookingSection.stop().collapse("hide");
                }
            });
            $(document).on("click", ".bootstrap-select .dropdown-toggle", function() {
                datePickerContainer.hide();
            })
        }

        function showBookingWidgetOnFocusIn() {
            view.on('click', function() {
                advancedBookingSection.stop().collapse("show");
            });
            view.find('.navigation-trigger').on('click', function(e){
                return false;
            })
        }

        function initStickyBookingWidget(size) {
            if (!size) {
                size = $(window).width();
            }
            if (size >= 1024) {
                view.unstick().sticky({
                    topSpacing: 0,
                    wrapperClassName: "booking-sticky"
                }).on('sticky-start', function() {
                    $(document).trigger('booking-sticky-start');
                }).on('sticky-end', function() {
                    $(document).trigger('booking-sticky-end');
                });
            } else {
                view.unstick()
            }
        }

        var booking = {
            toggleNavTrigger: function (isShow) {
                view.toggleClass('show-nav-trigger', isShow);
            },
            init: function() {
                var moreBookingTimeout = null;

                showBookingWidgetOnFocusIn();

                hideBookingWidgetOnFocusOut();

                view.find('select').next().remove();
                view.find('select').removeClass('hidden').selectpicker();

                initDateRangePicker();

                collapseBookingWidgetOnScrollForDesktop();

                initStickyBookingWidget();

                initValidate();

                initTabRadio();

                initSingleDatePicker();
                
                // initRoomSuiteCarousel();

                window.ODFC.Events.on('resizeWindow', function(data) {
                    collapseBookingWidgetOnScrollForDesktop(data.BP);
                    initStickyBookingWidget(data.BP)
                });

                return this;
            }
        };

        return booking.init();
    }());

    window.KEM.navigation = (function() {
        'use strict';

        var viewWrapper = $('.navigation-positioning'),
            view = viewWrapper.find('.navigation'),
            heroBannerImgWrapper = $(".hero-banner .banner-wrapper"),
            hideNavTimeout;

        var bannerTemplateGenerator = function(urls) {
            if (!urls) {
                return false;
            }
            var urlsArray = urls.split(',');
            var pictureTemplate = '<picture class="loading secondary-banner" style="background-image: url('+ urlsArray[0] +')">' +
                '<source srcset="' + urlsArray[2] + '" media="(max-width: 767px)">' +
                '<source srcset="' + urlsArray[1] + '" media="(max-width: 1023px)"><img src="' + urlsArray[0] + '" alt="Banner">' +
                '</picture>';
            return pictureTemplate;
        };
        var slidingBehavior = function(event) {
            var nextURL = this.href;
            if (nextURL === window.location.href || navigator.userAgent.indexOf("MSIE 9") >= 0) {
                return true;
            }
            var relatedPic = $("#" + $(this).attr("data-related-banner-element"));
            if (relatedPic.length == 1 && !relatedPic.hasClass('loading')) {
                event.preventDefault();
            } else {
                return true;
            }
            $("[data-wow-duration]").removeClass("fadeIn fadeInLeft fadeInUp").addClass('fadeOut').css({'animation-name':'fadeOut', "animation-fill-mode": "both", "animation-delay": "0"});
            $("#hero-img").on('transitionend webkitTransitionEnd oTransitionEnd', function() {
                window.location.href = nextURL;
            });
            heroBannerImgWrapper.append(relatedPic);
            setTimeout(function(argument) {
                $("#hero-img").addClass("slideOutUp");
                relatedPic.addClass('swing-in-down');
            }, 0);
            view.off('click.banner');
        };

        var navigation = {
            initialHeight: 0,
            intOverlap: false,
            downloadBanners : function() {
                $("body").append($("<div id='hidden-banner' class='hide'></div>"));
                view.find('a').add($(".logo>a")).each(function(i) {
                    var pictureEleHTML = bannerTemplateGenerator($(this).data('banners'));
                    var picId = "pic-" + Math.ceil(Math.random() * 1000000);
                    $(this).attr('data-related-banner-element', picId);
                    if (pictureEleHTML) {
                        var pictureEle = $(pictureEleHTML).attr("id", picId);
                        pictureEle.find("img").get(0).onload = function() {
                            $(this).parent().removeClass('loading');
                        };
                        $("#hidden-banner").append(pictureEle);
                    }
                });
            },
            toggleMiniMode: function(inMinimode) {
                viewWrapper.toggleClass('mini-menu', inMinimode);
                // this.toggleMenuFullMode(inMinimode);
            },
            toggleMenuFullMode: function(inMenuFullMode){
                if (inMenuFullMode) {
                    view.css('height', '100%');
                } else {
                    view.css('height', parseInt(view.attr('data-height')) + 'px');
                }

            },
            initSticky: function(isbool){
                if(isbool){
                    view.unstick().sticky({
                        topSpacing: 56,
                        bottomSpacing: -100
                    });                    
                }else{
                    view.unstick();
                }
            },
            initStickyBehavior: function(size) {
                if (!size) {
                    size = $(window).width();
                }
                if (size < 1024) {
                    view.unstick();
                    viewWrapper.addClass('mini-menu');
                    view.removeClass('show');
                } else {
                    viewWrapper.removeClass('mini-menu');
                    view.removeClass('show');

                    if(!this.intOverlap){
                        this.initSticky(true);
                    }
                }
            },
            initToggleNavigationBtn: function() {
                $(".navigation-trigger").on('click', function(event) {
                    event.preventDefault();
                    if (view.hasClass('show')) {
                        navigation.hideNav();
                    } else {
                        navigation.showNav();
                    }
                });
                return;
            },
            showNav: function() {
                view.addClass('show');
                $(".navigation-trigger").addClass('opened');
            },
            hideNav: function() {
                view.removeClass('show');
                $(".navigation-trigger").removeClass('opened');
            },
            overlap: function(){
                var containerW = $('.container').eq(0).width();
                var menuW = view.innerWidth();
                var windowW = $(window).width();

                this.intOverlap = !(((windowW - containerW) / 2 - menuW) > 50);
            },
            initMobile: function(){
                if($(window).width() < 1023){

                    $('.navigation__link li').each(function(index, el) {
                        var $subMenu = $(this).find('.sub-menu');
                        $subMenu.parent().prepend('<span class="submenu-click"><i class="wsmenu-arrow fa fa-angle-down fa-angle-up"></i></span>');
                    });
                    $('.navigation__link .submenu-click').off('click').on('click' , function(){
                        var $li = $(this).parent();
                        var $subMenu = $li.find('.sub-menu');
                        $(this).find('.wsmenu-arrow').toggleClass('fa-angle-down');
                        $li.toggleClass('show-submenu');
                        $subMenu.toggle($li.hasClass('show-submenu'));
                    });
                }else{
                    $('.navigation__link li .submenu-click').remove();
                    $('.navigation__link li .sub-menu').removeAttr('style');
                }
            },
            init: function() {
                var _this = this;

                this.initialHeight = view.outerHeight();
                view.attr('data-height', this.initialHeight);
                view.css('height', this.initialHeight);
                if ($("body").hasClass('homepage')) {
                    view.addClass("navigation-delay");
                }

                this.overlap();
                this.initStickyBehavior();
                this.initToggleNavigationBtn();

                this.initMobile();

                view.on('mouseleave', function(e) {
                    if ($(window).width() < 1024) {
                        return;
                    }
                    hideNavTimeout = setTimeout(function() {
                        navigation.hideNav();
                    }, 1000);
                });

                view.on('mouseenter', function() {
                    clearTimeout(hideNavTimeout);
                });

                $(window).on('resize', function (e) {
                    _this.overlap();
                })
                $(document).on('booking-sticky-start' , function(){
                    if(navigation.intOverlap){
                        window.KEM.booking.toggleNavTrigger(true);
                        navigation.toggleMiniMode(true);
                    }else{
                        window.KEM.booking.toggleNavTrigger(false);
                        // navigation.toggleMenuFullMode(true);  
                    }
                    navigation.initSticky(true);
                });
                $(document).on('booking-sticky-end' , function(){
                    window.KEM.booking.toggleNavTrigger(false);
                    navigation.toggleMiniMode(false);
                    if(navigation.intOverlap){
                        navigation.initSticky(false);
                    }
                    navigation.hideNav();
                });

                // view.find('li').on('mouseenter', function (argument) {
                //     console.log(123);
                //     var children = $(this).find("ul");
                //     if(children.length) {
                //         var width = 0;
                //         children.find("li").each(function(){
                //             var w = $(this).width();
                //             if(width < $(this).width()){
                //                 width = w;
                //             }
                //         });
                //         children.width(width+116);
                //     }
                // });
                // view.find('li').on('mouseleave', function (argument) {
                //     var children = $(this).find("ul");
                //     if(children.length) {
                //         children.removeAttr('style');
                //     }
                // });

                // $(window).on('scroll', function (e) {
                //     if($(window).width() < 1024){
                //         navigation.hideNav();
                //     }
                // })

                window.ODFC.Events.on('resizeWindow', function(data) {
                    _this.initStickyBehavior(data.BP);
                    _this.overlap();
                    _this.initMobile();
                });

                view.on('click.banner', 'a', slidingBehavior);

                return this;
            }
        };

        return navigation.init();
    }());

    window.KEM.UI = (function($) {

        // Private var
        var module = {};
        var innerWidth = 1600;
        var windowWidth = $(window).width();

        module.initSelectpicker = function() {
            // init bootstrap-select
            $('.bootstrap-select').selectpicker();
        };

        module.initTimepicker = function() {
            // init datetimepicker
            $('.datetimepicker').each(function(index, el) {
               $(this).datetimepicker($(this).data()); 
            });
        };
        module.initMatchHeight = function() {
            //init match height
            $(".map-text, .map-container").matchHeight();

            $('.match-height').matchHeight({
                property: "min-height"
            });
            // if($(window).width() > 1024){
            // }else{
            //     $('.match-height').matchHeight();
            // }

            $(".block-map-container > div").matchHeight();

            $(".section-article-blog").each(function(){
                if($(this).find('.cta-btns').length && $(this).find('.owl-carousel').length == 0){
                    $(this).find('.row').find('.slide-item').matchHeight();
                }
            });
            $.fn.matchHeight._throttle = 2000;
        };

        module.initCarousel = function() {
            //option responsive
            var responsive_option = {
                // breakpoint from 0 up
                0: {
                    items: 1
                },
                // breakpoint from 480 up
                480: {
                    items: 1
                },
                // breakpoint from 768 up
                768: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            };
            // init owlCarousel
            $(".room-slide").owlCarousel({
                items: 1,
                equalize: true,
                responsive: {
                    0: {
                        stagePadding: 0
                    },
                    640: {
                        stagePadding: 100
                    },
                    1024: {
                        stagePadding: ($(window).width() - $(".container").width()) / 2
                    }
                },
                margin: 30,
                loop: true,
                draggable: false,
                scrollwheel: false,
                panControl: false,
                onResize: function() {
                    if ($(window).width() > 639)
                        $(".room-slide").data('owl.carousel').settings.stagePadding = 100;
                    if ($(window).width() > 1023)
                        $(".room-slide").data('owl.carousel').settings.stagePadding = ($(window).width() - $(".container").width()) / 2;
                }
            });
            $(".corp-slide").owlCarousel({
                items: 1,
            });
            $(".service-slide").owlCarousel({
                items: 1,
                equalize: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    640: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    }
                },
                // margin: 57,
                loop: true,
                draggable: false,
                scrollwheel: false,
                panControl: false,
                center: true,
                onResize: function() {
                    if ($(window).width() > 639){
                        $(".service-slide").data('owl.carousel').settings.stagePadding = 100;
                    }
                    if ($(window).width() > 1023){
                        $(".service-slide").data('owl.carousel').settings.stagePadding = $(".container").width() / 3;
                    }
                }
            });
            // $(".room-slide .item").on('click', function(e) {
            //     var carousel = $('.room-slide').data('owl.carousel');
            //     e.preventDefault();
            //     carousel.to(carousel.relative($(this).index()));
            // })

            $('.owl-carousel').each(function() {
                if ($(this).data('auto-simpleinit')) {
                    if ($(this).data('responsive')) {
                        var data = $(this).data();
                        data.responsive = responsive_option;
                        $(this).on('initialized.owl.carousel', function() {
                            $(event.currentTarget).siblings('.loading-layer').addClass('fade-out');
                        }).owlCarousel(data);
                    } else {
                        $(this).on('initialized.owl.carousel', function(event) {
                            $(event.currentTarget).siblings('.loading-layer').addClass('fade-out');
                        }).owlCarousel($(this).data());
                    }
                }
            });

            $('.owl-carousel').on('click', '.item a', function(e) {
                e.preventDefault();
                if ($(this).attr('href') && $(this).closest('.filter-select').length == 0) {
                    window.location.href = $(this).attr('href');
                }
            });

            // if ($('.experience-gallery-section').length) {
            //     $('.experience-gallery-section .item').on('click', function(event) {
            //         event.preventDefault();
            //         var index = parseInt($(this).data('index')) - 1;
            //         var owl = $(this).closest('.owl-stage');
            //         owl.trigger('to.owl.carousel', [index, 300, true]);
            //     });
            // }
        };

        module.initMap = function() {
            $(".map-viewer").each(function() {
                if ($(this).attr("data-auto-map")) {
                    var _latLng = {
                        lat: parseFloat($(this).attr("data-lat")),
                        lng: parseFloat($(this).attr("data-long"))
                    };
                    var _map = new google.maps.Map($(this)[0], {
                        center: _latLng,
                        scrollwheel: false,
                        streetViewControl: false,
                        zoom: parseFloat($(this).attr("data-zoom")),
                        disableDefaultUI: false
                    });
                    var noText = [{
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }];

                    _map.setOptions({
                        styles: noText
                    });
                    _map.originalZoom = parseFloat($(this).attr("data-zoom"));
                    var _marker = new google.maps.Marker({
                        position: _latLng,
                        map: _map,
                        icon: '/images/icon/map-marker.png'
                    });
                    if($(this).attr('data-info-title') && $(this).attr('data-info-description')){

                        var contentString = '<div id="content">' +
                            '<div class="siteNotice">' +
                            '</div>' +
                            '<div class="firstHeading" class="firstHeading">' + $(this).attr('data-info-title') + '</div>' +
                            '<div class="bodyContent">' +
                            '<p>' + $(this).attr('data-info-description') + '</p>' +
                            '</div>' +
                            '</div>';

                        var infowindow = new google.maps.InfoWindow({
                            content: contentString
                        });

                        _marker.addListener('click', function() {
                            infowindow.open(_map, _marker);
                        });
                    }

                    var _mapreset = $("<div class='map-reset'><a href='#' class='fa fa-refresh'></a></div>");
                    _mapreset.appendTo($(this));
                    _mapreset.on('click', function(e) {
                        e.preventDefault();
                        _map.setCenter(new google.maps.LatLng(_latLng.lat, _latLng.lng));
                        _map.setZoom(_map.originalZoom);
                    })
                    google.maps.event.addListener(_marker, 'dblclick', function() {
                        _map.setZoom(_map.zoom + 2);
                        _map.setCenter(new google.maps.LatLng(_latLng.lat, _latLng.lng));
                    });
                }
            })

        };
        module.initScrollLink = function() {
            $("#header .banner-image-block .overlay").on("click", function(e){
                e.preventDefault();
                var href = $(this).attr("data-target");
                if(href && $(href).length > 0){
                    $("html, body").animate({ scrollTop: $(href).offset().top-55}, 600);
                }
            })
        };
        module.initGallerySort = function() {
            var viewGallery = $('.block-gallery');
            var owl = viewGallery.find('.owl-carousel').owlCarousel({
                items: 12,
                lazyLoad: true,
                loop: false,
                // center:true,
                margin: 2,
                autoplay: true,
                autoplayTimeout: 10000,
                autoplayHoverPause: true
            });
            owl.on('changed.owl.carousel', function(e) {
                var currentOwlItem = viewGallery.find('.owl-lazy').eq(e.item.index);
                if (currentOwlItem.length) {
                    var srcIMG = currentOwlItem.attr('data-src-retina');
                    viewGallery.find('.gallery-content img').attr('src', srcIMG);
                }
            });

            var initFuncGallery = function() {
                viewGallery.find('.owl-carousel .owl-item').click(function(e) {
                    e.preventDefault();
                    var itemCurrent = $(this).find('.owl-lazy');

                    var itemID = parseInt(itemCurrent.attr('data-index')) - 1;
                    owl.trigger('to.owl.carousel', [itemID, 300, true]);

                    var srcIMG = itemCurrent.attr('data-src-retina');
                    viewGallery.find('.gallery-content img').attr('src', srcIMG);
                });

                // update new gallery-content
                var srcIMG = viewGallery.find('.owl-carousel .owl-item:first-child img').attr('data-src-retina');
                viewGallery.find('.gallery-content img').attr('src', srcIMG);

            };

            initFuncGallery();

            var showProjectsbyCat = function(cat) {
                var owlNew = viewGallery.find('.owl-carousel');

                owlNew.trigger('add.owl.carousel', [$('<div/>'), 0]);

                var nb = viewGallery.find('.owl-carousel .owl-item').length;
                for (var i = 0; i < (nb - 1); i++) {
                    owlNew.trigger('remove.owl.carousel', [1]);
                }

                if (cat == 'all') {
                    viewGallery.find('.gallery-thumbnail-copy .owl-lazy').each(function() {
                        owlNew.trigger('add.owl.carousel', [$(this).clone()]);
                    });
                } else {
                    viewGallery.find('.gallery-thumbnail-copy .owl-lazy.' + cat).each(function() {
                        owlNew.trigger('add.owl.carousel', [$(this).clone()]);
                    });
                }
                owlNew.trigger('remove.owl.carousel', [0]);
                owlNew.trigger('refresh.owl.carousel');
                initFuncGallery();
            };

            viewGallery.find('.owl-carousel .owl-lazy').clone().appendTo(viewGallery.find('.gallery-thumbnail-copy'));
            viewGallery.find('.gallery-thumbnail-copy img').removeClass('loading').addClass('loaded').attr('style', 'opacity: 1');

            viewGallery.find('.gallery-filter a').click(function(e) {
                e.preventDefault();
                $(this).addClass('active').siblings().removeClass('active');
                showProjectsbyCat($(this).attr('ID'));
            });

            viewGallery.find('.owl-control .owl-next').click(function() {
                owl.trigger('next.owl.carousel');
            });

            viewGallery.find('.owl-control .owl-prev').click(function() {
                owl.trigger('prev.owl.carousel', [300]);
            });
        };

        module.init = function() {
           
            module.initSelectpicker();
            module.initScrollLink();
            // module.initTimepicker();

            module.initMatchHeight();

            module.initCarousel();

            $(".filter-select:not(.photo-gallery-filter)").filterSelect({
                funcSync: function(data, oThis) {
                    if (data.sync != '') {
                        var $owlSlider = $(data.sync);
                        if ($owlSlider.data('owl.carousel')) {
                            $owlSlider.on('changed.owl.carousel', function(e) {
                                if (!$owlSlider.data("synced")) {
                                    var index = $owlSlider.data('owl.carousel').relative(e.item.index);
                                    oThis.data('filterSelect').goto(index);
                                }
                                $owlSlider.data("synced", false);
                            });
                        }
                    }
                },
                itemClickHandler: function(options) {
                    if (options.sync != '') {
                        var $owlSlider = $(options.sync);
                        if ($owlSlider.data('owl.carousel')) {
                            var indexActive = $(this).find('a').data('index');
                            $owlSlider.data("synced", true);
                            $owlSlider.trigger('to.owl.carousel', [indexActive]);
                        }
                    }
                    if ($(this).hasClass("selected")) {
                        var $this = $(this);

                        var tab = $($this.find("a").attr("href"));
                        if(tab.hasClass('active')){
                            return false;
                        }
                        var tab_act = tab.siblings(".active");
                        tab_act.attr("style", "position: relative; opacity: 1; top: 0px; height: 100%; width: 100%; z-index: 2;");
                        tab.css({
                            "position": "absolute",
                            "opacity": 0,
                            "top": 0,
                            "height": "100%",
                            "width": "100%",
                            "z-index": 2
                        }).animate({
                            "opacity": 1
                        }, 600, function() {
                            tab.css("position", "relative").addClass("active");
                        })
                        tab_act.css({
                            "opacity": 1,
                            "z-index": 1
                        }).animate({
                            "opacity": 0
                        }, 600, function() {
                            tab_act
                                .css("height", "0")
                                .removeClass('active');
                        })
                    }
                    return false;
                }
            });

            // init click btn .back-to-top
            $('.back-to-top').click(function(e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });

            return module;
        };

        return module;
    })($);

    window.KEM.UI.init();
    window.ODFC.Events.on('resizeWindow', function(data) {
        setTimeout(function(){
            // KEM.UI.initMatchHeight();
        }, 1000);
    });
});


(function($){
    window.windowOnLoad = function(){

        // deal with banner here
        // deal with navigation appearance here
        var funcHeightBanner = function() {
            if ($(window).width() > 991) {
                $(".hero-banner").css('height', parseInt($(".navigation").attr('data-height')) + 40 + $(".top-header").height());
                // $(".hero-banner").animate({'height': parseInt($(".navigation").attr('data-height')) + 40 + $(".top-header").height()});

                if($('.corporate-banner-block').length > 0){
                    $(".hero-banner").css('height', parseInt($('.corporate-banner-block').height() + $(".top-header").height()));
                }
            } else {
                $(".hero-banner").attr('style', '');
            }
        }
        var dynamicBg = function(){
            if ($(window).width() > 991) {
                $(".dynamic-bg").each(function(){
                    $(this).css('background-image', $(this).attr('data-bg-url'));
                });
            }else{
                $(".dynamic-bg").each(function(){
                    $(this).css('background-image', 'none');
                });
            }
        }
        setTimeout(function(){
            window.KEM.navigation.downloadBanners();
        }, 1000);
        funcHeightBanner();
        dynamicBg()
        window.ODFC.Events.on('resizeWindow', function(data) {
            console.log(1);
            funcHeightBanner();
            dynamicBg();
        });

        

        if($(".map-viewer").length){
            if(is_rtl()){
                $("head").append("<script src='http://maps.google.com/maps/api/js?sensor=true&callback=KEM.UI.initMap&language=ar'></script>");
            }else{
                $("head").append("<script src='http://maps.google.com/maps/api/js?sensor=true&callback=KEM.UI.initMap'></script>");
            }
        }

        $("body").removeClass('loading');
    }
    if(!windowLoaded){
        jQuery(window).on('load', windowOnLoad);
    }else{
        windowOnLoad();
    }
})(jQuery);
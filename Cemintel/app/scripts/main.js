'use strict';
var sliderMode = 'vertical';
var simulateTouch = false;
var solutionSwiper,
    solutionThumbSwiper,
    solutionSwiperMobile,
    homeSwiper;
var isDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    mobileWidth = 767,
    deviceWidth = 1024;
var innovationsSwiper, FE;

(function($) {
    FE = {
        global: {
            showLoadingIcon: function() {
                $('body').on('click', '.button-having-loading', function() {
                    var _this = $(this),
                        overlay = _this.find('.overlay');
                    overlay.fadeIn();
                });
            },
            initializeGoogleMapFunctionality: function() {
                var loc, map, curMarker;

                loc = new google.maps.LatLng(-33.890542, 151.274856);
                var myLocation = ['Randwick', 33.9167, 151.2500, 'me'];
                var locations = [
                    ['Bondi Beach', -33.890542, 151.274856, '100'],
                    ['Coogee Beach', -33.923036, 151.259052, '55'],
                ];

                map = new google.maps.Map(document.getElementById('googleMap'), {
                    zoom: 12,
                    center: loc,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });

                var urlImg = 'images/location_map_pin.png';

                for (var i = 0; i < locations.length; i++) {
                    curMarker = new RichMarker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3]),
                        map: map,
                        content: '<div class="richmarker-wrapper" style="background: url(' + urlImg + ');background-repeat: no-repeat;background-size: 27px;background-position: center 11px;"><p style="margin: 0;color: #fff;padding: 14px;font-size: 13px;">' + locations[i][3] + '</p></div>',
                        shadow: 0
                    });
                }
                var currentLocationImg = 'images/me.png';
                var myloc = new google.maps.Marker({
                    clickable: false,
                    icon: currentLocationImg,
                    shadow: null,
                    zIndex: 999,
                    map: map // your google.maps.Map object
                });

                var me = new google.maps.LatLng(-33.9167, 151.2500);
                myloc.setPosition(me);

            },
            initializeGoogleMap: function() {
                if ($('#googleMap').length) {
                    FE.global.initializeGoogleMapFunctionality();
                    google.maps.event.addDomListener(window, 'load', FE.global.initializeGoogleMapFunctionality());
                }

            },
            videoDurationRetrive: function(selector) {
                var videos = $(selector);
                var videoIDsArr = [];
                videos.each(function() {
                    videoIDsArr.push($(this).attr('data-id'));
                });
                var videoInfoRetreiveURL = 'https://www.googleapis.com/youtube/v3/videos?id=' + videoIDsArr.join(',') + '&part=contentDetails&key=AIzaSyCkdDFKttW90ed6SBOYzao3pgvdweeALH4';

                var videosDuration = {};
                $.getJSON(videoInfoRetreiveURL, function(data) {
                    $.each(data.items, function(ind, item) {
                        if (item.contentDetails) {
                            var minute = item.contentDetails.duration.match(/\d+M/gi);
                            if (minute.length != 0) {
                                minute = minute[0].replace("M", "");
                            }
                            var second = item.contentDetails.duration.match(/\d+S/gi);
                            if (second != null && second.length != 0) {
                                second = second[0].replace("S", "");
                                second = parseInt(second) < 10 ? ":0" + second : ":" + second;
                            } else {
                                second = "";
                            }
                            var timeStr = minute + second;
                            videosDuration["v" + item.id] = timeStr;
                        }
                    });
                    videos.each(function() {
                        $(this).find(".video-time").html(videosDuration["v" + $(this).attr('data-id')]);
                    });
                });
            },
            equalHeightByRow: function(obj, notRunMobile) {
                var widthTarget = 0;
                if (obj.length) {
                    obj.height('auto');
                    widthTarget = (notRunMobile === true) ? 768 : 0;
                    if ($(window).width() >= widthTarget) {
                        var currentTallest = 0,
                            currentRowStart = 0,
                            rowDivs = [],
                            currentDiv = 0,
                            $el,
                            topPosition = 0;
                        obj.each(function() {
                            $el = $(this);
                            topPosition = $el.offset().top;
                            if (currentRowStart !== topPosition) {
                                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                                    rowDivs[currentDiv].height(currentTallest);
                                }
                                rowDivs = [];
                                currentRowStart = topPosition;
                                currentTallest = $el.height();
                                rowDivs.push($el);

                            } else {
                                rowDivs.push($el);
                                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
                            }
                            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                                rowDivs[currentDiv].height(currentTallest);
                            }
                        });
                    }
                }
            },
            ifDevice: function() {
                var a = isDevice === true ? 'device' : 'pc';
                $('html').addClass(a);
            },
            replaceImgToBackground: function(img) {
                $.each(img, function() {
                    $(this).parent().css('background-image', 'url(' + $(this).attr('src') + ')');
                });
            },
            showMenuMobile: function() {
                $('body').on('click', '.hbg-menu', function() {
                    $(this).toggleClass('active');
                    $('.nav-bar').slideToggle();
                    if (isDevice) {
                        if (!$('body').hasClass('overflow')) {
                            $('.body-wrapper > div').animate({
                                opacity: 0
                            }, 300);
                            setTimeout(function() {
                                $('html, body, .body-wrapper').toggleClass('overflow');
                                setTimeout(function() {
                                    $('.body-wrapper > div').animate({
                                        opacity: 1
                                    }, 300);
                                }, 100);
                            }, 500);
                        } else {
                            $('html, body, .body-wrapper').toggleClass('overflow');
                        }
                    }
                });
            },
            accordionMenuMobile: function() {
                $('body').on('click', '.menu-mobile .nav-bar .arrow', function() {
                    $(this).parent().siblings().find('.sub-menu-m').slideUp();
                    $(this).next().slideToggle();
                    $(this).toggleClass('active');
                    $(this).parent().siblings().find('.arrow').removeClass('active');
                });
            },
            dropDown: function() {
                $('body').on('change', '.style-select select', function() {
                    $(this).prev().text($(this).find('option:selected').text());
                });
            },
            stickyHeader: function() {
                var windowOffset = $(window).scrollTop();
                if (windowOffset > 1) {
                    $('header').addClass('sticky');
                    $('.search-block').addClass('sticky');
                } else {
                    $('header').removeClass('sticky');
                    $('.search-block').removeClass('sticky');
                }
            },
            handleLiveChat: function() {
                $('.livechat-icon img').on('click', function() {
                    var _this = $(this);
                    $('.livechat-body-icon .livechat-collapse').removeClass('fa-plus').addClass('fa-minus');
                    _this.parent().siblings().find('.livechat-form').removeAttr('style');
                    _this.parent().siblings().slideDown('slow');
                });

                $('.livechat-body-icon .livechat-collapse').on('click', function() {
                    var _this = $(this),
                        hasClass = _this.hasClass('fa-minus');
                    if (hasClass) {
                        _this.removeClass('fa-minus').addClass('fa-plus');
                        $('.livechat-form').slideUp('slow')
                        _this.attr('title', 'Maximize Live Chat');
                    } else {
                        _this.removeClass('fa-plus').addClass('fa-minus');
                        $('.livechat-form').slideDown('slow');
                        _this.attr('title', 'Minimize Live Chat');

                    }
                });

                $('.livechat-close').on('click', function() {
                    $('.livechat-body').slideUp('slow');
                })
            },
            calcTheLastItemMenuMobile: function() {
                // var nav = $('.device .nav-bar'),
                //     liIndex = nav.find('li').last().index();
                //     liIndex--;
                // var liHeight = 0;
                // for (var i = 0; i < liIndex; i++) {

                // }
                // nav.find('li').each(function() {

                // });
            },
            handleMarginTopInnovate: function() {
                var secondImage = $('.innovate-block-image .second-image-block-inner');
                var imgHeight = $('.innovate-block-image .second-items-img').height();
                secondImage.css('margin-top', parseInt(-(imgHeight / 2)));
            },
            initSkrollR: function() {
                var s = skrollr.init();
            },
            toggleClick: function(method, parentBox, child, focus) {
                $('body').on('click', parentBox + ' .toggleClick', function() {
                    var target;
                    if (child === true) {
                        target = $(this).attr('target');
                        target = $(this).find(target);
                    } else {
                        target = $(this).attr('target');
                        target = $(target);
                    }
                    target.toggleClass('active');
                    switch (method) {
                        case 'fade':
                            target.stop().fadeToggle(500);
                            break;
                        case 'slide':
                            target.stop().slideToggle();
                            break;
                    }
                    if (focus) {
                        focus.focus();
                    }
                });
            },
            toggleClickSharePoup: function(method, parentBox, child, focus) {
                $('body').on('click', parentBox + ' .toggleClick', function() {
                    var target;
                    if (child === true) {
                        target = $(this).attr('target');
                        target = $(this).find(target);
                    } else {
                        target = $(this).attr('target');
                        target = $(this).parent().find(target);
                    }
                    target.toggleClass('active');
                    switch (method) {
                        case 'fade':
                            target.stop().fadeToggle(500);
                            break;
                        case 'slide':
                            target.stop().slideToggle();
                            break;
                    }
                    if (focus) {
                        focus.focus();
                    }
                });
            },
            clickOutside: function(method, box, targetElement) {
                // $(document).mouseup(function(e) {
                $('body').on('click', '.body-wrapper', function(e) {
                    var container = box;
                    if (!container.is(e.target) && container.has(e.target).length === 0) {
                        switch (method) {
                            case 'fade':
                                targetElement.stop().fadeOut(500);
                                break;
                            case 'slide':
                                targetElement.stop().slideUp();
                                break;
                        }
                    }
                });
            },
            clickOutsideSharePopup: function(method, box, targetElement) {
                $(document).mouseup(function(e) {
                    var container = $('.share-popup-block.active');
                    if (!container.is(e.target) && container.has(e.target).length === 0) {
                        switch (method) {
                            case 'fade':
                                targetElement.stop().fadeOut(500);
                                break;
                            case 'slide':
                                targetElement.stop().slideUp();
                                break;
                        }
                    }
                });
            },
            fadeInUp: function(target) {
                setTimeout(function() {
                    if (target.length) {
                        var offsetWindow = $(window).scrollTop(),
                            offsetTarget = target.offset().top;
                        if ((offsetWindow + $(window).height()) - offsetTarget > 200) {
                            target.addClass('fadeInUp').addClass('animated');
                        }
                    }
                }, 100);
            },
            toggleActive: function(target) {
                if (target === 'this') {
                    if ($('.toggleActive').length || $('.heart-icon').length) {
                        $('body').on('click', '.toggleActive, .heart-icon', function() {
                            $(this).toggleClass('active');
                        });
                    }
                }
            },
            toggleSearch: function() {
                $('body').on('click', '.search-icon-m, .search-icon', function() {
                    $('.search-block').addClass('active');
                    $('.search-input').focus();
                    setTimeout(function() {
                        FE.global.initSearchBlockScroll();
                    }, 600);
                });
                $(document).mousedown(function(e) {
                    var container = $('.search-block, .close-search, .nicescroll-rails');
                    if (!container.is(e.target) && container.has(e.target).length === 0) {
                        container.removeClass('active');
                        $('.search-block').getNiceScroll().remove();
                    }
                });
            },
            closeSearch: function() {
                $('body').on('click', '.close-search', function() {
                    $('.search-block').removeClass('active');
                    $('.search-block').getNiceScroll().remove();
                });
            },
            initSearchBlockScroll: function() {
                // var myScroll = new IScroll('.search-block', {
                //     mouseWheel: true,
                //     scrollbars: true,
                //     disableMouse: true,
                //     interactiveScrollbars: true
                // });
                $('.search-block').niceScroll({
                    cursorcolor: '#fff',
                    cursorborder: '1px solid black',
                    cursorwidth: 8,
                    autohidemode: false,
                    horizrailenabled: false
                });
            },
            reOrderFooter: function() {
                var _wW = $(window).width();
                if (_wW < 768) {
                    $('.footer-col1').before($('.footer-col3')).before($('.footer-col2'));
                } else {
                    $('.footer-col2').after($('.footer-col3')).before($('.footer-col1'));
                }
            },
            showFullyFooter: function() {
                var wOffsetBottom = $(window).scrollTop() + $(window).height(),
                    bodyH = $('body').innerHeight();
                if (wOffsetBottom === bodyH) {
                    $('.fully-footer').addClass('active');
                    $('.newsletter-form').fadeOut();
                } else {
                    // $('.fully-footer').removeClass('active');
                }
            },
            keepLiveChatOutsideFooter: function() {
                var fullyFooterOffset = $('.fully-footer').offset().top,
                    windowOffsetBottom = $(window).scrollTop() + $(window).innerHeight(),
                    distance = windowOffsetBottom - fullyFooterOffset,
                    smallFooterHeight = $('.small-footer').innerHeight(),
                    liveChatIcon = $('.livechat-icon');
                if (distance > smallFooterHeight) {
                    liveChatIcon.css('bottom', distance);
                } else {
                    liveChatIcon.css('bottom', smallFooterHeight);
                }
            },
            handlePrint: function(target) {
                $('body').on('click', target, function() {
                    window.print();
                })

            },
            initDDD: function() {
                if ($('.dotdotdot').length) {
                    if ($('.sub-title .dotdotdot p').height() > 30) {
                        $('.dotdotdot').dotdotdot({
                            after: '.expand-subtitle',
                            watch: true,
                            wrap: 'letter',
                            ellipsis: '... '
                        });
                    }
                }

            },
            showOriginalContent: function() {
                if ($('.expand-subtitle').length) {
                    $('body').on('click', '.expand-subtitle', function() {
                        var parent = $(this).parents('.sub-title');
                        var content = parent.find('.dotdotdot').triggerHandler('originalContent');
                        // var content = $('.sub-title .dotdotdot').triggerHandler('originalContent');
                        $('.sub-title .dotdotdot').hide();
                        $('.sub-title .original').append(content);
                        $('.expand-subtitle').hide();
                        $('.sub-title .original').show();
                        $('.collapse-subtitle').show();
                    });
                }
                if ($('.collapse-subtitle').length) {
                    $('body').on('click', '.collapse-subtitle', function() {
                        $('.sub-title .original').hide();
                        $('.sub-title .dotdotdot').show();
                        $('.expand-subtitle').show();
                    })
                }
            },
            footerFormValidation: function() {
                $('#small-footer-form').validate();
                $('#fully-footer-form').validate();
            },
            handleLoadInstallationGuide: function() {
                if ($('.installation-block').length && $(window).width() < 768) {
                    var numContentDefault = 4;
                    var content = $('.installation-block .items');
                    content.each(function() {
                        var _this = $(this);
                        var totalContent = _this.find('.item-inner');
                        var numLoad = _this.find('.item-inner:lt(' + numContentDefault + ')');
                        var loadMore = _this.parent().find('.loadmore-items')
                        if (totalContent.size() > 4) {
                            loadMore.addClass('active');
                        }
                        numLoad.show();
                    });
                }
            },
            handleLoadMore: function(target) {
                $('.installation-block .loadmore-items').click(function() {
                    var _this = $(this);
                    var parent = _this.parent();
                    var allNumContent = _this.siblings('.items').find('.item-inner').size();
                    var numLoad = _this.siblings('.items').find('.item-inner:lt(' + allNumContent + ')');
                    numLoad.show();
                    FE.global.equalHeightByRow($('.installation-block .content .item-inner'), false);
                });
            },
            handleSearchInstallationGuide: function() {
                $('body').on('click', '.installation-block .search-mirror', function() {
                    var _this = $(this);
                    _this.parents('.content').find('.overlay').show();
                })
            },
            videoPlayer: function() {
                var _this = this;
                _this.videoPlayerObj = "";
                if ($(".video-player").length) {
                    _this.videoPlayer.updateVideo = function(id) {
                        $(".video-player").attr('data-id', id);
                        _this.videoPlayerObj.loadVideoById(id);
                    };
                    $(document).on("youtubeReady", function() {
                        _this.videoPlayerObj = new YT.Player($(".video-player").get(0).id, {
                            height: '390',
                            width: '640',
                            videoId: $(".video-player").attr('data-id'),
                            events: {
                                'onReady': function() {
                                    var duration = _this.videoPlayerObj.getDuration();
                                    var time = parseInt(duration, 10)
                                    var minutes = Math.floor(time / 60);
                                    var hours = Math.floor(minutes / 60);
                                    minutes = minutes - hours * 60;
                                    var seconds = time % 60;
                                    if (seconds < 10) {
                                        seconds = '0' + seconds;
                                    }
                                    if (hours < 1) {
                                        hours = '';
                                    } else {
                                        hours += ':';
                                    }
                                    //$('.video-player').parent().find('.video-time span').text(hours + minutes + ':' + seconds);

                                }
                            }
                        });
                        _this.videoPlayerObj.addEventListener('onStateChange', function(state) {
                            var eventName = "";
                            switch (state.data) {
                                case -1:
                                    eventName = "youtubeUnstarted";
                                    break;
                                case 0:
                                    eventName = "youtubeEnded";
                                    break;
                                case 1:
                                    eventName = "youtubePlaying";
                                    break;
                                case 2:
                                    eventName = "youtubePaused";
                                    break;
                                case 3:
                                    eventName = "youtubeBuffering";
                                    break;
                                case 5:
                                    eventName = "youtubeCued";
                                    break;
                                default:
                                    break;
                            }
                            if (eventName !== "") {
                                $(".video-player").trigger(eventName, [$(".video-player").attr('data-id')]);
                            }
                        });
                    });
                    $('body').on('click', '.play-btn:not(.fake)', function() {
                        var overlay = $(this).parent().find('.if-overlay'),
                            playBtn = $(this),
                            time = $(this).parent().find('.video-time');
                        console.log(_this.videoPlayerObj);
                        _this.videoPlayerObj.playVideo();
                        setTimeout(function() {
                            playBtn.fadeOut();
                            overlay.fadeOut();
                            time.fadeOut();
                        }, 500);
                    });
                }
            },
            handleReamoreTextLogIn: function() {
                $('body').on('click', '.login-block .expand-subtitle .readmore', function() {
                    var content = $('.login-block .sub-title .dotdotdot').triggerHandler('originalContent');
                    $('.login-block .sub-title .dotdotdot').hide();
                    $('.login-block .sub-title .original').append(content);
                })
            },
            handleHoverInDevice: function() {
                // if($(window).width() < 1024){
                //     $('body').on('click','.img', function(){
                //         var _this = $(this),
                //             checkClass = _this.hasClass('has-action');
                //         if(checkClass){

                //         _this.find('.action').css('display','block');
                //         }
                //     })
                // }
            },
            validateLoginOnMenu: function() {
                $('.form-login').validate();
            },
            clickToDownload: function() {
                $(document).on("click", "a.fileDownloadSimpleRichExperience", function() {
                    console.log($(this).prop('href'));
                    $.fileDownload($(this).prop('href'));
                });
            },
            showPopupToViewVideo: function() {
                if ($('.video-block').length) {
                    $('body').on('click', '.view-installation-video', function(e) {
                        e.preventDefault();
                        var offset = $('.video-block').offset().top;
                        $('html, body').animate({
                            scrollTop: offset - $('header').height()
                        }, 800);
                    });
                }
            },
            init: function() {
                // FE.global.showLoadingIcon();
                FE.global.clickToDownload();
                FE.global.validateLoginOnMenu();
                FE.global.dropDown();
                FE.global.footerFormValidation();
                FE.global.showOriginalContent();
                FE.global.initDDD();
                FE.global.reOrderFooter();
                FE.global.toggleSearch();
                FE.global.closeSearch();
                FE.global.toggleActive('this');
                FE.global.clickOutside('fade', $('.fav-popup, .fav-icon.toggleClick'), $('.fav-popup'));
                FE.global.toggleClick('fade', 'header');
                FE.global.toggleClickSharePoup('fade', '.action');
                FE.global.clickOutsideSharePopup('fade', $('.share-popup-block.active, .share-toggle.toggleClick'), $('.share-popup-block'));
                FE.global.clickOutside('fade', $('.newsletter-form, .signup-btn-ft.toggleClick'), $('.newsletter-form'));
                FE.global.toggleClick('fade', '.video-content', true);
                FE.global.toggleClick('fade', '.casestudy-detail-icon .action', true);
                FE.global.toggleClick('fade', 'footer', false, $('.newsletter-form input:first-child'));
                FE.global.accordionMenuMobile();
                FE.global.showMenuMobile();
                FE.global.ifDevice();
                FE.global.handleLiveChat();
                FE.global.equalHeightByRow($('.feature-block-content'), true);
                FE.global.equalHeightByRow($('.equalHeight'), true);
                FE.global.handlePrint('.print-favourite');
                FE.global.handlePrint('.print span');
                FE.global.handleLoadInstallationGuide();
                FE.global.handleLoadMore();
                FE.global.handleSearchInstallationGuide();
                FE.global.videoPlayer();
                FE.global.handleReamoreTextLogIn();
                FE.global.handleHoverInDevice();
                FE.global.equalHeightByRow($('.product-list-block .product-items .list-items .item-inner'), false);
                //FE.global.videoDurationRetrive(".yt-video-duration-retrieve");
                FE.global.replaceImgToBackground($('.home-slide-image'));
                // FE.global.initSkrollR();
                FE.global.showPopupToViewVideo();
                FE.global.calcTheLastItemMenuMobile();
            },
            loaded: function() {
                //FE.global.initializeGoogleMap();
                FE.global.equalHeightByRow($('.feature-block-content'), true);
                FE.global.fadeInUp($('.first-items'));
                FE.global.fadeInUp($('.second-items'));
                FE.global.equalHeightByRow($('.equalHeight'), true);
                FE.global.equalHeightByRow($('.product-list-block .product-items .list-items .item-inner'), false);
                FE.global.handleMarginTopInnovate();
            },
            resize: function() {
                FE.global.equalHeightByRow($('.feature-block-content'), true);
                FE.global.equalHeightByRow($('.favourite-content-item-inner .favourite-content-images'), true);
                // FE.global.equalHeightByRow($('body'), true);
                FE.global.handleMarginTopInnovate();
                FE.global.equalHeightByRow($('.equalHeight'), true);
                FE.global.equalHeightByRow($('.installation-block .content .item-inner'), false);
                FE.global.equalHeightByRow($('.product-list-block .product-items .list-items .item-inner'), false);
                FE.global.handleLoadInstallationGuide();

                FE.global.reOrderFooter();
                FE.global.initDDD();
            },
            scroll: function() {
                FE.global.stickyHeader();
                FE.global.fadeInUp($('.first-items'));
                FE.global.fadeInUp($('.second-items'));
                FE.global.keepLiveChatOutsideFooter();
                // FE.global.showFullyFooter();
            }
        },
        home: {
            handleHomeSlide: function() {

                sliderMode = 'horizontal';
                // simulateTouch = true;
                homeSwiper = new Swiper('#home-slider', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    resizeReInit: true,
                    mode: sliderMode,
                    simulateTouch: false,
                    autoplay: 10000,
                    loop: true,
                    calculateHeight: true,
                    speed: 800,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    onSlideChangeStart: function() {
                        $('#home-slider .hotspot').removeClass('active').popover('destroy');
                        $('#home-slider .hotspot').popover();
                    },
                    onSwiperCreated: function() {
                        $('.swiper-container').css('height', '100%');
                        $('#home-slider .swiper-wrapper').css('opacity', '1');
                        $('#home-slider .overlay').fadeOut();
                    }
                });

                $('#home-slider .hotspot').popover();

                $('#home-slider .hotspot').on('click', function() {
                    var _self = $(this);
                    _self.toggleClass('active');
                    setTimeout(function() {
                        if ($('#' + _self.attr('aria-describedby') + ':visible').length) {
                            _self.siblings('.hotspot.active').click();
                        }
                    }, 200);
                    if ($('.hotspot.active').length) {
                        homeSwiper.stopAutoplay();
                    } else {
                        homeSwiper.startAutoplay();
                    }
                });
            },
            handelReInitSlider: function() {
                if ($('#home-slider').length) {
                    $('.hotspot.active').click();
                    // if ($(window).width() < 768) {
                    //     // homeSwiper.params.mode = 'horizontal';
                    //     // homeSwiper.params.simulateTouch = true;
                    //     // $('#home-slider .swiper-wrapper').attr('style', '');
                    //     // // $('#home-slider .swiper-wrapper .swiper-slide').attr('style', '');
                    //     // setTimeout(function() {
                    //     //     homeSwiper.reInit();
                    //     // }, 200);
                    //     homeSwiper.destroy();
                    //     $('#home-slider .swiper-slide-duplicate').remove();
                    //     homeSwiper = new Swiper('#home-slider', {
                    //         pagination: '.swiper-pagination',
                    //         paginationClickable: true,
                    //         resizeReInit: true,
                    //         mode: 'horizontal',
                    //         simulateTouch: true,
                    //         autoplay: 10000,
                    //         loop: true,
                    //         calculateHeight: true,
                    //         speed: 800,
                    //         slidesPerView: 1,
                    //         slidesPerGroup: 1
                    //     });
                    // } else {
                    //     // homeSwiper.params.mode = 'vertical';
                    //     // homeSwiper.params.simulateTouch = false;
                    //     // $('#home-slider .swiper-wrapper').attr('style', '');
                    //     // // $('#home-slider .swiper-wrapper .swiper-slide').attr('style', '');
                    //     // setTimeout(function() {
                    //     //     homeSwiper.reInit();
                    //     // }, 200);
                    //     homeSwiper.destroy();
                    //     $('#home-slider .swiper-slide-duplicate').remove();
                    //     FE.home.handleHomeSlide();
                    // }
                }
            },
            handleStyliserBlock: function() {
                $('.model-container .hotspot').popover();

                $('.model-container .hotspot').on('click', function() {
                    var _self = $(this);
                    _self.toggleClass('active');
                    setTimeout(function() {
                        if ($('#' + _self.attr('aria-describedby') + ':visible').length) {
                            _self.siblings('.hotspot.active').click();
                        }
                    }, 200);
                });

                // Info slider
                var styliserSwiper = new Swiper('.styliser-slider .swiper-container', {
                    simulateTouch: false,
                    calculateHeight: true,
                    speed: 800,
                    resizeReInit: true,
                    visibilityFullFit: true,
                    roundLengths: true
                });

                // Visual slider
                var visualSwiper = new Swiper('.styliser-visual-slider .swiper-container', {
                    simulateTouch: false,
                    calculateHeight: true,
                    speed: 800,
                    resizeReInit: true,
                    visibilityFullFit: true,
                    roundLengths: true,
                    onSlideChangeStart: function() {
                        $('.styliser-visual-slider .hotspot').removeClass('active').popover('destroy');
                        $('.model-container .hotspot').popover();
                    },
                    onSwiperCreated: function() {
                        $('.model-container .hotspot').popover();
                    }
                });

                // Masonry
                $('.grid-article').isotope({
                    itemSelector: '.article-item',
                    isFitWidth: true,
                    filter: '.urban-industrial'
                });

                // Button clcik event
                $('body').on('click', '.styliser-button-list .button', function() {
                    var _self = $(this);
                    // Change button style
                    $('.styliser-button-list .button').removeClass('active');
                    _self.addClass('active');
                    // Change model image
                    $('.model-container').fadeOut().removeClass('active');
                    $($('#' + _self.attr('target'))).fadeIn().addClass('active');
                    styliserSwiper.swipeTo(_self.attr('index'));
                    visualSwiper.swipeTo(_self.attr('index'));
                    // Filter masonry
                    $('.grid-article').isotope({
                        filter: '.' + _self.attr('target')
                    });
                });

                // Handle mobile mode
                $('body').on('click', '#show-styliser-mobile', function() {
                    $('body').addClass('fixed');
                    $('header').hide();
                    $('.styliser-mobile-container').fadeIn();
                });

                $('body').on('click', '.styliser-mobile-container .close-icon', function() {
                    $('body').removeClass('fixed');
                    $('header').show();
                    $('.styliser-mobile-container').fadeOut();
                });

                $('body').on('click', '.button-selector', function() {
                    var _self = $(this);
                    $('.styliser-mobile-slider-container').fadeIn();
                    $('.styliser-mobile-slider-container .swiper-container[cate="' + _self.attr('cate') + '"]').show();
                    $('.guide-screen').fadeIn();
                    // styliser-mobile-slider-container
                    var styliserMobileSwiper = new Swiper('.styliser-mobile-slider-container .swiper-container[cate="' + _self.attr('cate') + '"]', {
                        loop: true,
                        onInit: function() {
                            $('.styliser-mobile-slider-container .header-info .product-name').text($($('.styliser-mobile-slider-container .swiper-container[cate="' + _self.attr('cate') + '"] .swiper-slide')[1]).attr('product-name'));
                        },
                        onSlideChangeEnd: function() {
                            $('.styliser-mobile-slider-container .header-info .product-name').text($(styliserMobileSwiper.activeSlide()).attr('product-name'));
                        },
                        onSlideClick: function() {
                            $('.styliser-mobile-slider-container .header-info').fadeToggle();
                        }
                    });
                });

                $('body').on('click', '.guide-screen .back-icon', function() {
                    $('.guide-screen').fadeOut();
                    $('.styliser-mobile-slider-container').fadeOut();
                });

                $('body').on('click', '.styliser-mobile-slider-container .back-icon', function() {
                    $('.styliser-mobile-slider-container').fadeOut();
                    $('.styliser-mobile-slider-container .swiper-container').hide();
                    $('.styliser-mobile-slider-container .header-info .product-name').text('');
                    $('.styliser-mobile-slider-container .header-info').hide();
                });

                $('body').on('click', '.guide-screen .button-got-it', function() {
                    $('.guide-screen').fadeOut();
                });

            },
            resizeHandleStyliserSlider: function() {
                var titleH = 0,
                    desH = 0;
                $('.styliser-slider .swiper-slide .title').each(function() {
                    if ($(this).height() > titleH) {
                        titleH = $(this).height();
                    }
                });
                $('.styliser-slider .swiper-slide .description').each(function() {
                    if ($(this).height() > desH) {
                        desH = $(this).height();
                    }
                });
                $('.styliser-slider .swiper-wrapper, .styliser-slider .swiper-slide').height(titleH + desH);
            },
            handleRendersImgStyliser: function() {
                $('body').on('click', '.item-thumb', function() {
                    var boxTarget = $(this).attr('boxTarget'),
                        imgId = $(this).data('id');
                    boxTarget = $(boxTarget);
                    boxTarget.find('img').removeClass('active');
                    boxTarget.find(imgId).addClass('active');
                    console.log(boxTarget.find(imgId));
                });
            },
            handleInnovationsSlide: function() {
                innovationsSwiper = new Swiper('.innovation-casestudy-slide .swiper-container', {
                    pagination: '.innovation-casestudy-slide .swiper-pagination',
                    paginationClickable: true,
                    simulateTouch: false,
                    autoplay: 5500,
                    calculateHeight: true,
                    speed: 700,
                    loop: true
                });
                // var innovationSlidePadding = $('.innovation-casestudy-slide .swiper-container').css('padding-bottom');
                // if (innovationSlidePadding && innovationSlidePadding !== 0) {
                //     if ($(window).width() > 767) {
                //         // var convert = innovationSlidePadding.replace('px', '');
                //         // $('.innovation-casestudy-slide .swiper-pagination').css('bottom', convert / 2 + 'px');
                //         var slideWrapper = $('.innovation-casestudy-slide .swiper-wrapper').height();
                //         $('.innovation-casestudy-slide .swiper-pagination').css('top', (slideWrapper + 50) + 'px');
                //     }
                // }

                $('.innovation-casestudy-slide .swiper-wrapper').mouseenter(function() {
                    innovationsSwiper.stopAutoplay();
                });
                $('.innovation-casestudy-slide .swiper-wrapper').mouseleave(function() {
                    innovationsSwiper.startAutoplay();
                });

            },
            handleSwiperPaginationPosition: function() {
                if ($(window).width() < 768) {
                    var imgHeight = $('.innovation-casestudy-block').find('.slide-img').height();
                    $('.innovation-casestudy-slide .swiper-pagination').css('top', (imgHeight + 40) + 'px');
                    // setTimeout(function() {
                    //     innovationsSwiper.reInit();
                    // }, 200);
                } else {
                    var slideWrapper = $('.innovation-casestudy-slide .swiper-wrapper').height();
                    $('.innovation-casestudy-slide .swiper-pagination').css('top', (slideWrapper + 50) + 'px');
                    // setTimeout(function() {
                    //     innovationsSwiper.reInit();
                    // }, 200);
                }
            },

            initNiceScrollLatestNew: function() {
                if ($('.feed-block').length) {
                    // $('.social-block .feed-block').niceScroll({
                    //     cursorcolor: '#e8e8e8',
                    //     cursorwidth: 8,
                    //     autohidemode: false,
                    //     enablemousewheel: true,
                    //     horizrailenabled: false
                    // });
                }
            },

            init: function() {
                FE.home.handleRendersImgStyliser();
            },
            loaded: function() {
                FE.home.handleHomeSlide();
                FE.home.handleInnovationsSlide();
                FE.home.handleSwiperPaginationPosition();
                FE.home.initNiceScrollLatestNew();
            },
            resize: function() {
                if ($('.innovation-casestudy-block').length) {
                    innovationsSwiper.reInit();
                }
                FE.home.resizeHandleStyliserSlider();
                FE.home.handelReInitSlider();
                FE.home.handleSwiperPaginationPosition();
            }
        },
        casestudy: {
            handleSolutionSlide: function() {
                // $('.solution-slide .paw-carousel').pawCarousel({
                //     carouselItemCls: "paw-carousel-item",
                //     carouselItemMediaCls: "paw-carousel-item-media",
                //     animSpeed: 700,
                //     alignment: 'left'
                // });
                // // $('.solution-slide .paw-carousel').pawCarousel();

                // var thumbLength = $('.solution-slide .paw-carousel-thumbs .paw-carousel-nav-item').length,
                //     thumbIcon = $('.thumb-slide');
                // if (thumbLength > 4) {
                //     thumbIcon.show();
                //     var thumbSliderItems = $('.solution-slide .paw-carousel-thumbs .paw-carousel-thumbs-items');
                //     var thumbSlider = thumbSliderItems.slick({
                //         dots: false,
                //         autoplay: false,
                //         slidesToShow: 4,
                //         slidesToScroll: 1,
                //         pauseOnHover: false,
                //         adaptiveHeight: true
                //     });
                // } else {
                //     thumbIcon.hide();
                // }
            },
            handleSolutionSwiper: function() {
                var slidePerViewParam = 'auto'
                if ($(window).width() < 768) {
                    slidePerViewParam = 1;
                }
                if ($('#solution-swiper').length) {
                    solutionSwiper = new Swiper('#solution-swiper .swiper-container', {
                        mode: 'horizontal',
                        speed: 600,
                        loop: true,
                        slidesPerView: 'auto',
                        simulateTouch: false,
                        loopedSlides: 3,
                        pagination: '.solution-slider-pagination',
                        paginationClickable: true,
                        calculateHeight: true,
                        onSlideNext: function() {
                            // solutionThumbSwiper.swipeNext();
                        },
                        onSlidePrev: function() {
                            // solutionThumbSwiper.swipePrev();
                        }
                    });
                }

                $('body').on('click', '.solution-slider.desktop-swiper .prev', function() {
                    solutionSwiper.swipePrev();
                    var _target = $('#solution-thumb-swiper .swiper-slide-active').prev().attr('target') * 1;
                    solutionThumbSwiper.swipeTo(_target, 600);
                });
                $('body').on('click', '.solution-slider.desktop-swiper .next', function() {
                    solutionSwiper.swipeNext();
                    var _target = $('#solution-thumb-swiper .swiper-slide-active').next().attr('target') * 1;
                    solutionThumbSwiper.swipeTo(_target, 600);
                });

                if ($('#solution-swiper-mobile').length) {
                    if ($(window).width() < 768) {
                        $('#solution-swiper-mobile .swiper-slide:nth-of-type(6) ~ .swiper-slide').remove();
                    }
                    solutionSwiperMobile = new Swiper('#solution-swiper-mobile .swiper-container', {
                        mode: 'horizontal',
                        speed: 600,
                        loop: false,
                        slidesPerView: 1,
                        pagination: '.solution-slider-pagination',
                        paginationClickable: true,
                        calculateHeight: true
                    });
                }


                $('body').on('click', '.solution-slider.mobile-swiper .prev', function() {
                    solutionSwiperMobile.swipePrev();
                });
                $('body').on('click', '.solution-slider.mobile-swiper .next', function() {
                    solutionSwiperMobile.swipeNext();
                });

                if ($('#solution-thumb-swiper .swiper-slide').length > 4) {
                    // handle thumbnail
                    solutionThumbSwiper = new Swiper('#solution-thumb-swiper', {
                        mode: 'horizontal',
                        speed: 600,
                        loop: true,
                        slidesPerView: 4,
                        simulateTouch: false,
                        calculateHeight: true
                    });
                    $('.solution-thumb-slider .prev, .solution-thumb-slider .next').show();
                    $('body').on('click', '.solution-thumb-slider .prev', function() {
                        solutionThumbSwiper.swipePrev();
                    });
                    $('body').on('click', '.solution-thumb-slider .next', function() {
                        solutionThumbSwiper.swipeNext();
                    });

                    $('body').on('click', '.solution-thumb-slider .swiper-slide', function() {
                        // $('.solution-thumb-slider .swiper-slide').find('.img').removeClass('active');
                        // $(this).find('.img').addClass('active');
                        var target = $(this).attr('target');
                        solutionSwiper.swipeTo(target, 600);
                        var _target = $(this).attr('target');
                        solutionThumbSwiper.swipeTo(_target, 600);
                    });
                }
            },
            resizeHandleSolutionSlider: function() {
                // var slidePerViewParam = 'auto';
                // if ($(window).width() < 768) {
                //     slidePerViewParam = 1;
                // }
                // if (solutionSwiper) {
                //     // solutionSwiper.params.slidesPerView = slidePerViewParam;
                //     setTimeout(function() {
                //         console.log('re init');
                //         solutionSwiper.reInit();
                //         solutionSwiper.resizeFix();
                //     }, 200);
                //     setTimeout(function() {
                //         console.log('re init2');
                //         solutionSwiper.reInit();
                //         solutionSwiper.resizeFix();
                //     }, 800);
                // }
            },
            handleSolutionSlideMobile: function() {
                var solutionSwiper = new Swiper('.solution-slide .solution-swiper-slider .swiper-container', {
                    pagination: '.solution-swiper-slider .swiper-pagination',
                    paginationClickable: true,
                    simulateTouch: false,
                    autoplay: 5500,
                    calculateHeight: true,
                    spaceBetween: 30,
                    speed: 700
                });
                $('body').on('click', '.solution-swiper-slider .swiper-button-next', function() {
                    solutionSwiper.swipeNext();
                });

                $('body').on('click', '.solution-swiper-slider .swiper-button-prev', function() {
                    solutionSwiper.swipePrev();
                });
            },
            handleSolutionContent: function() {
                var firstParagraph = $('.solution-main-content .main-content-inner p:first-child'),
                    other = firstParagraph.siblings();
                if ($(window).width() > 767) {
                    other.show();
                } else {
                    firstParagraph.show();
                    other.hide();
                }
            },
            handleWhiteBorder: function() {
                setTimeout(function() {
                    var hSlider = $('.paw-carousel').height();
                    $('.white-border').height(hSlider - 10);
                }, 300);
            },
            activeStatedNavThumb: function() {
                $('body').on('click', '.paw-carousel-nav-item', function() {
                    $('.paw-carousel-nav-item').removeClass('active');
                    $(this).addClass('active');
                });
            },
            titleBg: function() {
                var caseStudyPage = $('.case-study-detail-page, .product-detail-page');
                if (caseStudyPage.length) {
                    var firstImg = caseStudyPage.find('#solution-swiper .swiper-slide').first().children('img').attr('src');
                    caseStudyPage.find('.casestudy-banner').css('background-image', 'url(' + firstImg + ')');
                }
            },
            init: function() {
                //
                FE.casestudy.activeStatedNavThumb();
                FE.casestudy.titleBg();
            },
            loaded: function() {
                FE.casestudy.handleSolutionSwiper();
                FE.casestudy.handleSolutionContent();
                FE.casestudy.handleSolutionSlideMobile();
                FE.casestudy.handleWhiteBorder();
                FE.home.handleStyliserBlock();
            },
            resize: function() {
                FE.casestudy.resizeHandleSolutionSlider();
            },
        },
        whoIsCemintel: {
            eqHeight: function() {
                // $.each('.info.who-eqh', function() {
                $('.info.who-eqh').each(function() {
                    var infoH = $(this).height(),
                        imgH = $(this).parent().siblings().find('.who-eqh').height();
                    if (infoH < imgH) {
                        var space = (imgH - infoH) / 2;
                        $(this).css('margin-top', space);
                    } else {
                        $(this).css('margin-top', 0);
                    }
                });
            },
            fadeInLeft: function(target) {
                setTimeout(function() {
                    if (target.length) {
                        var offsetWindow = $(window).scrollTop();
                        target.each(function() {
                            var offsetTarget = $(this).offset().top;
                            if ((offsetWindow + $(window).height()) - offsetTarget > 200) {
                                $(this).addClass('fadeInLeft').addClass('animated');
                            }
                        });
                    }
                }, 100);
            },
            fadeInRight: function(target) {
                setTimeout(function() {
                    if (target.length) {
                        var offsetWindow = $(window).scrollTop();
                        target.each(function() {
                            var offsetTarget = $(this).offset().top;
                            if ((offsetWindow + $(window).height()) - offsetTarget > 200) {
                                $(this).addClass('fadeInRight').addClass('animated');
                            }
                        });
                    }
                }, 100);
            },
            init: function() {
                // FE.whoIsCemintel.eqHeight();
            },
            loaded: function() {
                FE.whoIsCemintel.eqHeight();
            },
            resize: function() {

            },
            scroll: function() {
                FE.whoIsCemintel.fadeInLeft($('section.left'));
                FE.whoIsCemintel.fadeInRight($('section.right'));
            }
        },
        contact: {
            contactFormValidation: function() {
                $('#contact-form').validate({
                    rules: {
                        phone: {
                            required: true,
                            number: true
                        }
                    }
                });
            },
            toggleInfoMap: function() {
                $('body').on('click', '.location .h4-wrapper', function() {
                    if ($(this).parent().hasClass('active')) {
                        $('.locations').removeClass('expanded');
                    } else {
                        $('.locations').addClass('expanded');
                    }
                    $(this).parent().find('.info').stop().slideToggle();
                    $(this).parent().siblings().find('.info').stop().slideUp();
                    $(this).parent().toggleClass('active');
                    $(this).parent().siblings().removeClass('active');
                });
            },
            orderMapSection: function() {
                var _wW = $(window).width();
                if ($(window).width() < 768) {
                    $('.contact-map-section').after($('.locations'));
                } else {
                    $('.locations-section-inside-map').append($('.locations'));
                }
            },
            init: function() {
                FE.contact.toggleInfoMap();
                FE.contact.contactFormValidation();
                FE.contact.orderMapSection();
            },
            loaded: function() {
                //loaded
            },
            resize: function() {
                FE.contact.orderMapSection();
            }
        },
        signUp: {
            initValidation: function() {
                $('#sign-up-page-form').validate({
                    rules: {
                        phone: {
                            required: true,
                            number: true
                        },
                        postcode: {
                            required: true,
                            number: true
                        }
                    },
                    submitHandler: function(form) {
                        $('.button-having-loading .overlay').fadeIn();
                        var body = $('html, body');
                        body.stop().animate({
                            scrollTop: 0
                        }, '800', 'swing', function() {
                            // $('.notsuccess').fadeOut(800, function() {
                            //     $('.sign-up-success').fadeIn(800);
                            //     $('.sign-up-page').find('h3').text('Sign up successful !');
                            // });
                        });
                    }
                });
            },
            // initValidationSignUp: function() {
            //     $('#sign-up-page-form').validate({
            //         rules: {
            //             phone: {
            //                 required: true,
            //                 number: true
            //             },
            //             postcode: {
            //                 required: true,
            //                 number: true
            //             }
            //         },
            //         submitHandler: function(form) {
            //             var body = $('html, body');
            //             body.stop().animate({
            //                 scrollTop: 0
            //             }, '800', 'swing', function() {
            //                 $('.notsuccess').fadeOut(800, function() {
            //                     $('.sign-up-success').fadeIn(800);
            //                 });
            //             });
            //         }
            //     });
            // },
            init: function() {
                FE.signUp.initValidation();
                // FE.signUp.initValidationSignUp();
            },
            loaded: function() {
                //loaded
            },
            resize: function() {
                // resize
            }
        },
        newsDetail: {
            init: function() {
                if ($(".news-detail-content").length) {
                    $(".news-detail-content").find(".readmore button").on('click', function() {
                        $(this).parent().next('.visible-md.visible-lg').removeClass('visible-md visible-lg').end().remove();
                    });
                }
            }
        },
        videoResource: {
            switchVideoState: function(video, state) {
                var statusMsg = video.find('.status .msg');
                if (state == "loading" || state == "playing" || state == "play") {
                    statusMsg.html(statusMsg.attr('data-' + state + '-status-msg'));
                    if (state == "loading") {
                        video.addClass("loading").removeClass("playing");
                    } else if (state == "playing") {
                        video.addClass("playing").removeClass("loading");
                    } else {
                        video.removeClass("playing loading");
                    }
                } else {
                    return;
                }
            },
            switchDescription: function(id) {
                $(".video-descriptions").find(".description").addClass('hide').filter("[data-id='" + id + "']").removeClass('hide');
            },
            init: function() {
                var vThis = this;
                var videoList = $(".video-list");
                if (videoList.length) {
                    $(".play-btn").on('click', function(e) {
                        e.preventDefault();
                    });
                    var videos = videoList.find('.video');

                    //FE.global.videoDurationRetrive(videos);

                    videos.on('click', function(e) {
                        e.preventDefault();
                        var currentId = $(this).attr("data-id");

                        vThis.switchDescription(currentId);
                        // Ensure every single video item is in a stop state
                        videos.not(this).each(function() {
                            vThis.switchVideoState($(this), 'play');
                        });

                        vThis.switchVideoState($(this), 'loading');

                        FE.global.videoPlayer.updateVideo(currentId);
                        $(".play-btn").trigger('click');

                        videos.removeClass('selected');
                        if ($('.device').length) {
                            $("html, body").animate({
                                "scrollTop": $('#resource-video-player').offset().top - $("header.sticky").height()
                            }, 500);
                        }
                    });

                    $(document).on('youtubeEnded', "#resource-video-player", function(e, videoId) {
                        var currentVideo = videos.filter("[data-id='" + videoId + "']");
                        vThis.switchVideoState(currentVideo, "play");
                    });
                    $(document).on('youtubePlaying', "#resource-video-player", function(e, videoId) {
                        $("html, body").animate({
                            "scrollTop": $(this).offset().top - $("header.sticky").height()
                        }, 500);
                        videos.removeClass('selected');
                        var currentVideo = videos.filter("[data-id='" + videoId + "']");
                        vThis.switchVideoState(currentVideo, "playing");
                    });
                }
            }
        },
        login: {
            loginFormValidation: function() {
                $('.login-block .login-content-form').validate({
                    rules: {
                        email: {
                            required: true,
                            email: true
                        },
                        pass: {
                            required: true,
                            minlength: 6
                        }
                    },
                    messages: {
                        email: {
                            required: "Please enter email address !",
                            email: "Please enter valid email address format !"
                        },
                        pass: {
                            required: "Please enter password !",
                            minlength: "Password must be contained at least 6 character !"
                        }
                    },
                    submitHandler: function(form) {
                        $('.button-having-loading .overlay').fadeIn();
                    }
                });
            },
            goToForgotPass: function() {
                $('body').on('click', '.i-forgot', function() {
                    $('.login-header h3').text('Forgot Your Password?');
                    $('.login-content').fadeOut(600, function() {
                        $('.forgot-content').fadeIn(600);
                    });
                });
            },
            forgotFormValidation: function() {
                $('#forgotForm').validate();
            },
            init: function() {
                FE.login.loginFormValidation();
                FE.login.forgotFormValidation();
                FE.login.goToForgotPass();
            },
            loaded: function() {
                //loaded
            },
            resize: function() {}
        },
        news: {
            initDotDotDot: function() {
                if ($('.new-list-content-body.dotdotdot p').height() > 30) {
                    $('.dotdotdot').dotdotdot({
                        watch: true,
                        wrap: 'letter',
                        ellipsis: '... '
                    });
                }
            },
            init: function() {
                FE.news.initDotDotDot();
            },
            loaded: function() {
                //loaded
            },
            resize: function() {}
        },
        locator: {
            initValidateFindSupplier: function() {
                if ($('form#find-supplier-form').length) {
                    $('form#find-supplier-form').validate({
                        submitHandler: function(form) {
                            var _form = $('#' + $(form).attr('id'));
                            _form.find('.overlay').fadeIn();
                        }
                    });
                }
                if ($('form#find-builder-form').length) {
                    $('form#find-builder-form').validate({
                        submitHandler: function(form) {
                            var _form = $('#' + $(form).attr('id'));
                            _form.find('.overlay').fadeIn();
                        }
                    });
                }
                if ($('form#find-installer-form').length) {
                    $('form#find-installer-form').validate({
                        submitHandler: function(form) {
                            var _form = $('#' + $(form).attr('id'));
                            _form.find('.overlay').fadeIn();
                        }
                    });
                }
            },
            init: function() {
                FE.locator.initValidateFindSupplier();
            },
            loaded: function() {
                //loaded
            },
            resize: function() {}
        }
    };

}(jQuery));

// Youtube API controller
if (window.navigator.userAgent.indexOf("IE") >= 0) {
    window.checkYTReady = function() {
        if (typeof YT === undefined || typeof YT.Player === undefined) {
            setTimeout(checkYTReady, 500);
        } else {
            jQuery(document).trigger("youtubeReady");
        }
    }
    setTimeout(checkYTReady, 500);
} else {
    window.onYouTubeIframeAPIReady = function() {
        jQuery(document).trigger("youtubeReady");
    };
}

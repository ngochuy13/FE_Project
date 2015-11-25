window.MP = window.MP || {};

function windowWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

var resizeBreakpoint = (function($) {
    var breakpoint = ['320', '480', '768', '800', '960', '1024'];
    var currentBPoint = 99999;
    var prevBP = 99999;
    var timeout;

    var module = {};
    module.init = function() {
        $(window).on('resize', function() {
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                var winW = windowWidth();
                var flagFinish = true;
                for (var i = 0; i < breakpoint.length; i++) {
                    if (winW < breakpoint[i]) {
                        if (i == 0) {
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
                    ODFC.Events.trigger('resizeWindow', {
                        BP: parseInt(currentBPoint)
                    });
                }
            }, 100);
        });
        return module;
    };
    return module.init();
})(jQuery);


/****** Toan script ******/
MP.ST = {
    sticky: function() {
        if ($(window).width() > 1024) {
            if ($('#header-sticky-wrapper').length > 0) {
                // Do Nothing
            } else {
                $('#header').sticky({
                    topSpacing: 0
                });
            }
        } else {
            $('#header').unstick();
        }
    },

    closePopup: function() {
        $('.close-popup').click(function(e) {
            e.preventDefault();
            $('.overlay-popup').fadeOut(500);
            $('.popup-index').fadeOut(500);
        });
    },

    blockImageIndex: function() {
        if ($('.landing').length) {
            var hWindow = $(window).height();
            var wContentIndex = $(window).width();
            $('.overlay-popup').css({
                'height': hWindow,
                'width': wContentIndex
            });
        }
    }

};

/****** Huy script ******/
MP.UI = {
    imageCenter: function(cWidth, cHeight, img) {
        var boxWidth = cWidth,
            boxHeight = cHeight,
            imgWidth = img.width(),
            imgHeight = img.height(),
            ratio = boxWidth / boxHeight,
            imgRatio = imgWidth / imgHeight;
        img.css({
            'margin-top': 'auto',
            'margin-left': 'auto'
        });
        if (imgRatio > ratio) {
            img.css({
                'width': 'auto',
                'height': '100%'
            });
            setTimeout(function() {
                var crWidth = img.width();
                img.css('margin-left', (boxWidth - crWidth) / 2);
            }, 500);
        } else {
            img.css({
                'width': '100%',
                'height': 'auto'
            });
            setTimeout(function() {
                var crHeight = img.height();
                img.css('margin-top', (boxHeight - crHeight) / 2);
            }, 500);
        }
    },

    // galleryMasonryloadmoreHandler: function(){
    //   var loadingData = true;
    //   if($('.loadmore').length){
    //     if ($('.loadmore').offset().top - window.scrollY < window.innerHeight){
    //       $.ajax({
    //         url: 'ajax/garelly.json',
    //         dataType: 'JSON',
    //         success: function(data){
    //           if(data.item.length > 0){
    //             var source   = $(".masonry-gallery-item-template").html();
    //             var template = Handlebars.compile(source);
    //             var htmlItem = '';
    //             $(data.item).each(function(i,itemdata){
    //               htmlItem = template(itemdata);
    //               var item = [$(htmlItem).get(0)];
    //               $('.masonry-container').append( item ).masonry( 'appended', item );
    //             });
    //           }
    //         },
    //         error: function(){
    //           console.log(1213);
    //         }
    //       })
    //     }
    //   }
    // },

    masonry: function() {
        if ($('.masonry-container.sales-document') && (typeof Masonry == 'function')) {
            $('.masonry-container.sales-document').masonry({
                columnWidth: ".grid-sizer",
                gutter: 0,
                itemSelector: '.item'
            });
        }
        // read more
        // $(window).on('scroll.masonry', MP.UI.galleryMasonryloadmoreHandler);
    },

    clickscroll: function() {
        var headerHeight = $('#header').height();
        if ($('.masonry-container').length && $('.scroll-down-cta h2').length)
            $('.scroll-down-cta h2, .scroll-down-cta + img').click(function() {
                $('html, body').animate({
                    scrollTop: $('.masonry-container').offset().top - headerHeight
                }, 1000);
            });
    },

    // Remove this script and replace by using slick slider for images.
    clickchangeroom: function() {
        // if($('.gallery-block .room-info .room-detail .thumb-list ul li').length){
        // $('.gallery-block .room-info .room-detail .thumb-list ul li').click(function(){
        //   var galleryItem = $(this).attr('gallery-item');
        //   $('.gallery-block .gallery-list li').removeClass('active');
        //   $('.gallery-block .gallery-list li[gallery-item="'+galleryItem+'"]').addClass('active');
        //   $('.gallery-block .room-info .room-detail .room-description .info-block').removeClass('active');
        //   $('.gallery-block .room-info .room-detail .room-description .info-block[gallery-item="'+galleryItem+'"]').addClass('active');
        // });
        // $('.gallery-block .room-info .room-detail .thumb-list ul li a').click(function(event){
        //   event.preventDefault();
        // });
        // var slider = $('.room-gallery .gallery-list ul');
        // slider.slick({
        //   speed: 500,
        //   fade: true,
        //   arrows: false,
        //   slide: 'li',
        //   asNavFor: '.room-info .room-detail .thumb-list ul li'
        // });
        // $('.gallery-block .room-info .room-detail .thumb-list ul li').click(function(){
        //   var slideIndex = $(this).index();
        //   slider.slickGoTo(parseInt(slideIndex));
        // });
        // }
    },

    parallax: function() {
        if (windowWidth() > 1024) {
            $(".parallax-content>img").each(function() {
                $(this).parent().css("background-image", "url(" + $(this).get(0).src + ")");
            });
        }
        // $(window).stellar({
        //   horizontalScrolling: false,
        //   verticalOffset: 40
        // });
    },

    parallaxVideo: function() {
        var videoParallax = $('.parallax.with-video');
        if (videoParallax.length > 0) {
            setTimeout(function() {
                $('img', videoParallax).height($('video', videoParallax).height());
            }, 100);
        }
    },

    storyVideo: function() {
        var videoSection = $('.video-section'),
            bgBlock = $('.bg-block'),
            videoList = $('.video-list');
        if (videoSection.length > 0) {
            // bgBlock.each(function() {
            //     if ($(this).hasClass('active') == false) {
            //         $(this).find('video').removeAttr('autoplay');
            //     }
            // });
            $('.play-icon').on('click', function() {
                $(this).hide();
                $(this).parent('.bg-block').find('video').get(0).play();
                $(this).parent('.bg-block').find('.parallax-content > img').hide();
            });
            $('a', videoList).on('click', function(e) {
                e.preventDefault();
                $('.play-icon').hide();
                $('.bg-block .parallax-content > img').hide();
                $('ul li', videoList).removeClass('inactive');
                $(this).closest('li').addClass('inactive');
                var activeItem = $(this).closest('li').attr('video-item');
                bgBlock.each(function() {
                    $(this).removeClass('active');
                    $(this).find('video').get(0).pause();
                });
                var bgBlockActive = $('.bg-block[video-item="' + activeItem + '"]');
                bgBlockActive.addClass('active');
                bgBlockActive.find('video').get(0).play();
            });
        }
    },

    roomList: function() {
        var roomList = $('.room-list');
        if (roomList.length > 0) {
            //$('ul', roomList).niceScroll();
        }
    },

    cityListOpen: function() {
        var cityBlock = $('.city-block');
        $('.open-link', cityBlock).click(function(e) {
            e.preventDefault();
            cityBlock.addClass('inactive').removeClass('active');
            $(this).closest('.city-block').addClass('active').removeClass('inactive');
        });
        $('.close', cityBlock).click(function(e) {
            e.preventDefault();
            cityBlock.removeClass('active').removeClass('inactive');
        });
    },

    navCollapsed: function() {
        var nav = $('.navigation'),
            navCollapsed = $('.nav-collapsed'),
            navItems = $('.nav-collapsed, .navigation');

        if (navCollapsed.length > 0) {
            navCollapsed.unbind('click').click(function() {
                nav.slideToggle();
            });
        }
        $('body').unbind('click').click(function(e) {
            if ($(window).width() < 992) {
                if (!navItems.is(e.target) && navItems.has(e.target).length === 0) {
                    nav.slideUp();
                }
            }
        });
    },

    goAnchor: function() {
        var headerHeight = $('#header').height();
        // $('.sub-menu a').click(function() {
        //     var menuLink = $(this).attr('href');
        //     var anchor = menuLink.substring(menuLink.indexOf('#'), menuLink.length);
        //     $('html, body').animate({
        //         scrollTop: $(anchor).offset().top - headerHeight
        //     }, 1000);
        // });
        $('.sub-menu a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - headerHeight
                    }, 1000);
                    return false;
                }
            }
        });

        var hashLink = $(location).attr('hash'),
            goToAnchor = hashLink.substring(hashLink.indexOf('#'), hashLink.length);
        setTimeout(function() {
            if (goToAnchor.length) {
                $('html, body').animate({
                    scrollTop: $(goToAnchor).offset().top - headerHeight
                }, 200);
            }
        }, 700);

    },

    mapSection: function() {
        var sectionMap = $('.section-map'),
            open = $('.open', sectionMap),
            close = $('.close', sectionMap),
            blockContent = $('.block-content', sectionMap);
        open.click(function(e) {
            e.preventDefault();
            $(this).addClass('clicked');
            $('h4', blockContent).show();
            close.show();
        });
        close.click(function(e) {
            e.preventDefault();
            $('.block-content .editor-content').find('ul').slideUp();
            $('h4', blockContent).hide();
            $('h4', blockContent).addClass('plus').removeClass('minus');
            $('ul', blockContent).removeClass('expand');
            open.removeClass('clicked');
            close.hide();
        });
    },

    mapImage: function() {
        var mapSection = $('.section-map'),
            content = $('.block-content'),
            imgMap = $('img.desktop', mapSection);
        if ($(window).width() > 1024) {
            var holderWidth = mapSection.width() - content.outerWidth(),
                holderHeight = content.outerHeight();
            MP.UI.imageCenter(holderWidth, holderHeight, imgMap);
        } else {
            imgMap.css({
                'height': 'auto',
                'width': '100%',
                'margin': 0
            });
        }
    },

    roomSlide: function() {
        var roomGallery = $('.room-gallery');
        if (roomGallery.length) {
            var slidePerView = 'auto';
            if ($(window).width() > 767) {
                slidePerView = 2;
            } else {
                slidePerView = 4;
            }
            var roomListMobile = new Swiper('.room-list .swiper-container', {
                slidesPerView: slidePerView,
                allowSwipeToPrev: false,
                allowSwipeToNext: false
            });
        }
    },

    snappingPanel: function() {
        var mainContent = $('#main');
        if ($(window).width() > 1024) {
            var hHeight = $('#header').height(),
                wHeight = $(window).height(),
                cHeight = wHeight - hHeight;
            if (!$('.section').hasClass('fp-section')) {
                mainContent.fullpage({
                    sectionSelector: '.section',
                    scrollBar: true,
                    fitToSection: false,
                    normalScrollElements: '.block-content, .popup-index'
                });
            }
            setTimeout(function() {
                $('.fp-section').height(cHeight);
                $('.fp-tableCell').height(cHeight);
                $('.introduction-text').height(cHeight);
                $('.city-block').height(cHeight);
                // $('.parallax-content').height(cHeight);
            }, 500);
        } else {
            if ($.fn.fullPage) {
                $.fn.fullpage.destroy();
            }
            setTimeout(function() {
                $('.fp-section').height('auto');
                $('.fp-tableCell').height('auto');
                $('.introduction-text').height('auto');
                $('.city-block').height('auto');
                // $('.parallax-content').height('auto');
            }, 500);
        }
    },

    snappingImg: function() {
        // var body = $('body'),
        //     snappingImg = $('.parallax-content > img');
        // if (!body.hasClass('landing') && !body.hasClass('body-the-contact')) {
        //     if ($(window).width() > 1024) {
        //         var wWidth = $(window).width(),
        //             // hHeight = $('#header').height(),
        //             // wHeight = $(window).height(),
        //             cHeight = 849;
        //         // cHeight = wHeight - hHeight;
        //         MP.UI.imageCenter(wWidth, cHeight, snappingImg);
        //     } else {
        //         snappingImg.css({
        //             'height': 'auto',
        //             'width': '100%',
        //             'margin': 0
        //         });
        //     }
        // }
    },

    schoolListExpand: function() {
        var blockContent = $('.block-content');
        if (blockContent.length) {
            $('h4', blockContent).click(function() {
                if ($(this).hasClass('plus')) {
                    $('.block-content .editor-content').find('ul').slideUp();
                    $('.block-content .editor-content').find('h4').removeClass('minus').addClass('plus');
                    $(this).addClass('minus').removeClass('plus');
                    $(this).next().slideToggle();
                } else {
                    $(this).addClass('plus').removeClass('minus');
                    $(this).next().slideUp();
                }
            });
        }
    },

    houseDrawing: function() {
        var houseImg = $('.house-drawing'),
            unitSection = $('.unit-section');
        if ($(window).width() > 1024) {
            var firstUnit = $('li', unitSection).first().find('a'),
                firstDrawing = $('li', unitSection).first().find('a').attr('title');
            firstUnit.addClass('active');
            $('a', unitSection).mouseenter(function() {
                var drawing = $(this).attr('title');
                $('a', unitSection).removeClass('active');
                $(this).addClass('active');
                $('img', houseImg).removeClass('active');
                $('img[name=' + drawing + ']', houseImg).addClass('active');
            });
            $('a', unitSection).mouseleave(function() {
                $('a', unitSection).removeClass('active');
                $('img', houseImg).removeClass('active');
            });

            $('img[name=' + firstDrawing + ']', houseImg).addClass('active');
            $('img', houseImg).mouseenter(function() {
                var unit = $(this).attr('name');
                $('img', houseImg).removeClass('active');
                $(this).addClass('active');
                $('a', unitSection).removeClass('active');
                $('a[title=' + unit + ']', unitSection).addClass('active');
                if ($(this).hasClass('main-img')) {
                    $(this).removeClass('active');
                    $(this).removeAttr('style');
                }
            });
            $('img', houseImg).mouseleave(function() {
                $('img', houseImg).removeClass('active');
                $('a', unitSection).removeClass('active');
            });
        }
    },

    imgLightBox: function() {
        setTimeout(function() {
            var galleryItem = $('.section-masonry-garelly .item');
            if (galleryItem.length) {
                $('a', galleryItem).fancybox({
                    maxWidth: 960,
                    maxHeight: 600,
                    openEffect: 'fade',
                    closeEffect: 'fade',
                    helpers: {
                        title: {
                            type: 'over'
                        }
                    }
                });
            }
        }, 500);
    },

    safariBrowser: function() {
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') === -1) {
            $('body').addClass('safari');
        }
    },

    initPreLoading: function() {
        if($('.ui-layout-pane').length) {
            $('.loading-block').hide();
        }        
    },

    preLoadingPage: function() {
        $('.loading-block').fadeOut();
    },

    calWidthImgFloor: function() {
        var imgFloor = $('.selected-drawing li.active img').width() + 200;
        $('.selected-info .title').css({
            'left': -imgFloor
        });
    },

    positionTitleFloor: function() {
        setTimeout(function() {
            MP.UI.calWidthImgFloor();
        }, 1000);

        $('.units li a').click(function() {
            setTimeout(function() {
                MP.UI.calWidthImgFloor();
            }, 400);
        });
    },

    removeSection: function() {
        if ($('.hide-floor').length) {
            $('.hide-floor').removeClass('section');
            $('.hide-floor').insertAfter('#footer');
        }
    },

    fixHeightIMGFloor: function() {
        if ($('.section-floor-list').length) {
            setTimeout(function() {
                var hSectionFloor = $('.section-floor-list').height(),
                    hSectionFloorIMG = hSectionFloor - 100
                if ($(window).width() > 991) {
                    $('.selected-drawing ul li.active img').css({
                        'width': 'auto',
                        'max-height': hSectionFloorIMG
                    });
                    $('.selected-section .selected-info').css({
                        'height': hSectionFloor
                    });
                } else {
                    $('.selected-drawing ul li.active img, .selected-section .selected-info').removeAttr('style');
                }

                if ($(window).width() < 1700 && $(window).width() > 991) {
                    $('.room-gallery .gallery-list').css({
                        'height': hSectionFloor
                    });
                    $('.gallery-item .slider img').css({
                        'height': hSectionFloor - 60,
                        'width': 'auto',
                        'max-width': 'inherit'
                    });
                } else {
                    $('.room-gallery .gallery-list, .gallery-item .slider img').removeAttr('style');
                }
            }, 1000);
        }
    },

    fixHeightVideo: function() {
        if ($(window).width() > 1024) {
            if ($('.video-section').length) {
                setTimeout(function() {
                    var hSectionVideo = $('.section-video').height(),
                        hVideoThumb = $('.video-thumb-box').height(),
                        hVideoContent = hSectionVideo - hVideoThumb;
                    $('.video-section .parallax-content').css({
                        'height': hVideoContent
                    });
                }, 600);
            };
        } else {
            if ($('.video-section').length) {
                $('.video-section .parallax-content').css({
                    'height': $(window).height()
                });
            }
        }
    },

    doneResizing: function() {
        // Parallax video
        // MP.UI.parallaxVideo();
        // Nav collapsed
        MP.UI.navCollapsed();
        // Room slide
        // MP.UI.roomSlide();
        // Snapping panel
        MP.UI.snappingPanel();
        // Snapping image
        // MP.UI.snappingImg();
        // Map image
        MP.UI.mapImage();
        // sticky
        //MP.ST.sticky();
        // House drawing
        MP.UI.houseDrawing();
        // handle Image content
        // MP.ST.blockImageIndex();
        MP.UI.positionTitleFloor();
        MP.UI.fixHeightIMGFloor();
        MP.UI.fixHeightVideo();
    }
};

/* Document Ready */
$(document).ready(function() {
    var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);
    if (iOS) {
        $("html").addClass('iOS');
    }
    // call sticky
    //MP.ST.sticky();
    // close popup
    MP.ST.closePopup();
    MP.UI.initPreLoading();
    MP.UI.removeSection();
});

/* Window load */
$(window).load(function() {
    // Nice scroll
    //$("html, body").niceScroll();
    // Parallax
    //MP.UI.parallax();
    // Parallax video
    // MP.UI.parallaxVideo();
    // Masonry
    MP.UI.masonry();
    // clickscroll
    MP.UI.clickscroll();
    // clickchangeroom
    MP.UI.clickchangeroom();
    // Story video
    MP.UI.storyVideo();
    // Room list
    MP.UI.roomList();
    // City list open
    MP.UI.cityListOpen();
    // Nav collapsed
    MP.UI.navCollapsed();
    // Go anchor
    MP.UI.goAnchor();
    // Slick slide
    // MP.UI.roomSlide();
    // Snapping panel
    MP.UI.snappingPanel();
    // Snapping image
    // MP.UI.snappingImg();
    // Map section
    MP.UI.mapSection();
    // Map image
    MP.UI.mapImage();
    // School list expand
    MP.UI.schoolListExpand();
    // House drawing
    MP.UI.houseDrawing();
    // Image light box
    MP.UI.imgLightBox();
    // Safari browser
    MP.UI.safariBrowser();
    // Height content Index
    // MP.ST.blockImageIndex();
    MP.UI.preLoadingPage();
    MP.UI.positionTitleFloor();
    MP.UI.fixHeightIMGFloor();
    MP.UI.fixHeightVideo();
});

// Window resize
var width = $(window).width();
var resize = 0;
$(window).resize(function() {
    var _self = $(this);
    resize++;
    setTimeout(function() {
        resize--;
        if (resize === 0) {
            // Done resize ...
            if (_self.width() !== width) {
                width = _self.width();
                // Done resize width ...
                MP.UI.doneResizing();
            }
        }
    }, 200);
});

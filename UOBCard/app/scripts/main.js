'use strict';
var oneCardSwiper, ladyCardSwiper, delightCardSwiper, prviMasterCardSwiper, prviAmexCardSwiper, prviVisaCardSwiper, tabListCardSwiper, handlePromoTabSlider;
var UOB = {
    // Common function
    util: {
        // Format number with comma
        numberWithCommas: function(x) {
            x = x.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x)) {
                x = x.replace(pattern, '$1,$2');
            }
            return x;
        },
        // Center text
        centerDataPosition: function() {
            $('*[data-position="center"]').each(function() {
                $(this).css('margin-left', -($(this).innerWidth() / 2));
                $(this).css('margin-top', -($(this).innerHeight() / 2));
            });
        },
        // Equal height by row
        equalHeightByRow: function(obj) {
            obj.height('auto');
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
        },
        // Equal height
        equalHeight: function(obj) {
            obj.height('auto');
            var $el, tallest = 0;
            obj.each(function() {
                $el = $(this);
                if ($el.innerHeight() > tallest) {
                    tallest = $el.innerHeight();
                }
            });
            obj.innerHeight(tallest);
        },
        doneResizing: function() {
            if ($('body').hasClass('promo')) {
                // Equal height promo tab
                UOB.util.equalHeight($('.tab-block .promo-tab-item'));
            }

            // Center text
            UOB.util.centerDataPosition();

        },
        doneResizingWidth: function() {
            // ReInit Sticky Header
            UOB.globalElement.unstickyHeader();

            UOB.globalElement.stickyHeader();

        },
        // Replace Img to Background
        replaceImgToBackground: function(img, target) {
            $.each(img, function() {
                $(this).closest(target).css('background-image', 'url(' + $(this).attr('src') + ')');
            });
        }
    },

    //Handle Global Elements
    globalElement: {
        // Handle Sticky Header
        stickyHeader: function() {
            $('.header').sticky({
                topSpacing: 0
            });
        },
        // Handle Un-Sticky Header
        unstickyHeader: function() {
            $('.header').unstick();
        },
        // Handle Rate tab
        handleRate: function() {
            var feeBlockTab = $('.fees-block .custom-tab');
            feeBlockTab.find('.custom-tab-item').click(function() {
                if (!$(this).hasClass('active')) {
                    $(this).parent().find('.custom-tab-item').removeClass('active');
                    $(this).addClass('active');
                    if ($('body').hasClass('jcb-card')) {
                        if ($(this).parent().find('.japanese').hasClass('active')) {
                            $(this).closest('.fees-block').find('.custom-tab-content').addClass('active japanese');
                        } else if ($(this).parent().find('.foriengers').hasClass('active')) {
                            $(this).closest('.fees-block').find('.custom-tab-content').addClass('active');
                            $(this).closest('.fees-block').find('.custom-tab-content').removeClass('japanese');
                        } else {
                            $(this).closest('.fees-block').find('.custom-tab-content').removeClass('japanese active');
                        }
                    } else {
                        if ($(this).parent().find('.foriengers').hasClass('active')) {
                            $(this).closest('.fees-block').find('.custom-tab-content').addClass('active');
                        } else {
                            $(this).closest('.fees-block').find('.custom-tab-content').removeClass('active');
                        }
                    }
                }
            });
        },
        // Handle Show Hide Terms
        toggleTerms: function() {
            $('.read-full-text').click(function() {
                $('.hidden-text').show();
                $(this).hide();
            });
        },
        // Scroll to Delivery block
        scrollToDeliveryBlock: function() {
            $('body').on('click', '.unionpay-img', function() {
                var _self = $(this);
                if ($('#delivery-block').length > 0) {
                    $('html, body').animate({
                        scrollTop: $('#delivery-block').offset().top - $('.header').innerHeight()
                    }, 800);
                } else {
                    $('html, body').animate({
                        scrollTop: $('.promo-tab-content.active .delivery-block').offset().top - $('.header').innerHeight()
                    }, 800);
                }
            });
        }
    },

    //Handle Elements on Promo Page
    promoElement: {
        // Handle promo tab Slider
        handlePromoTabSlider: function() {
            tabListCardSwiper = $('#promo-tab-slider').swiper({
                mode: 'horizontal',
                loop: false,
                calculateHeight: true,
                paginationClickable: true,
                resizeReInit: true,
                slidesPerViewFit: true,
                slidesPerView: 'auto',
                scrollContainer: true
            });
        },
        // Handle promo Slider
        handlePromoSlider: function() {
            // One Card Slider
            // var sliderOnOneTab = $('.one-card-tab-content .slider-block');
            // oneCardSwiper = sliderOnOneTab.find('.swiper-container').swiper({
            //     mode: 'horizontal',
            //     loop: true,
            //     calculateHeight: true,
            //     pagination: '.one-card-tab-content .slider-block .swiper-pagination',
            //     paginationClickable: true,
            //     resizeReInit: true
            // });
            // sliderOnOneTab.find('.swiper-button-next').click(function() {
            //     oneCardSwiper.swipeNext();
            // });
            // sliderOnOneTab.find('.swiper-button-prev').click(function() {
            //     oneCardSwiper.swipePrev();
            // });

            // Lady Card Slider
            var sliderOnLadyTab = $('.lady-card-tab-content .slider-block');
            ladyCardSwiper = sliderOnLadyTab.find('.swiper-container').swiper({
                mode: 'horizontal',
                loop: true,
                calculateHeight: true,
                pagination: '.lady-card-tab-content .slider-block .swiper-pagination',
                paginationClickable: true,
                resizeReInit: true,
                initialSlide: 0
            });
            sliderOnLadyTab.find('.swiper-button-next').click(function() {
                ladyCardSwiper.swipeNext();
            });
            sliderOnLadyTab.find('.swiper-button-prev').click(function() {
                ladyCardSwiper.swipePrev();
            });

            // Delight Card Slider
            var sliderOnDelightTab = $('.delight-card-tab-content .slider-block');
            delightCardSwiper = sliderOnDelightTab.find('.swiper-container').swiper({
                mode: 'horizontal',
                loop: true,
                calculateHeight: true,
                pagination: '.delight-card-tab-content .slider-block .swiper-pagination',
                paginationClickable: true,
                resizeReInit: true,
                initialSlide: 0
            });
            sliderOnDelightTab.find('.swiper-button-next').click(function() {
                delightCardSwiper.swipeNext();
            });
            sliderOnDelightTab.find('.swiper-button-prev').click(function() {
                delightCardSwiper.swipePrev();
            });

            // PRVI Master Card Slider
            var sliderOnPrviMasterTab = $('.prvi-master-card-tab-content .slider-block');
            prviMasterCardSwiper = sliderOnPrviMasterTab.find('.swiper-container').swiper({
                mode: 'horizontal',
                loop: true,
                calculateHeight: true,
                pagination: '.prvi-master-card-tab-content .slider-block .swiper-pagination',
                paginationClickable: true,
                resizeReInit: true,
                initialSlide: 0
            });
            sliderOnPrviMasterTab.find('.swiper-button-next').click(function() {
                prviMasterCardSwiper.swipeNext();
            });
            sliderOnPrviMasterTab.find('.swiper-button-prev').click(function() {
                prviMasterCardSwiper.swipePrev();
            });

            // PRVI Amex Card Slider
            var sliderOnPrviAmexTab = $('.prvi-amex-card-tab-content .slider-block');
            prviAmexCardSwiper = sliderOnPrviAmexTab.find('.swiper-container').swiper({
                mode: 'horizontal',
                loop: true,
                calculateHeight: true,
                pagination: '.prvi-amex-card-tab-content .slider-block .swiper-pagination',
                paginationClickable: true,
                resizeReInit: true,
                initialSlide: 0
            });
            sliderOnPrviAmexTab.find('.swiper-button-next').click(function() {
                prviAmexCardSwiper.swipeNext();
            });
            sliderOnPrviAmexTab.find('.swiper-button-prev').click(function() {
                prviAmexCardSwiper.swipePrev();
            });

            // PRVI Visa Card Slider
            var sliderOnPrviVisaTab = $('.prvi-visa-card-tab-content .slider-block');
            prviVisaCardSwiper = sliderOnPrviVisaTab.find('.swiper-container').swiper({
                mode: 'horizontal',
                loop: true,
                calculateHeight: true,
                pagination: '.prvi-visa-card-tab-content .slider-block .swiper-pagination',
                paginationClickable: true,
                resizeReInit: true,
                initialSlide: 0
            });
            sliderOnPrviVisaTab.find('.swiper-button-next').click(function() {
                prviVisaCardSwiper.swipeNext();
            });
            sliderOnPrviVisaTab.find('.swiper-button-prev').click(function() {
                prviVisaCardSwiper.swipePrev();
            });
        },
        // Handle Promo Tab
        handlePromoTab: function() {
            $('.tab-block-item').click(function() {
                if ($(this).hasClass('no-action')) {
                    //do nothing
                } else {
                    var _self = $(this);
                    $('.tab-block-item').removeClass('active');
                    _self.addClass('active');
                    $('.promo-tab-content').removeClass('active').hide();
                    $('.promo-tab-content.' + _self.attr('content')).addClass('active').show();

                    //Change Apply button URL
                    var applyUrl = '';
                    if (_self.attr('card') === 'one-card') {
                        $('.shown-text').show();
                        $('.hidden-text').hide();
                    } else if (_self.attr('card') === 'lady-card') {
                        $('.shown-text').hide();
                        $('.hidden-text').show();
                    } else if (_self.attr('card') === 'delight-card') {
                        $('.shown-text').hide();
                        $('.hidden-text').show();
                    } else if (_self.attr('card') === 'prvi-master-card') {
                        $('.shown-text').hide();
                        $('.hidden-text').show();
                    } else if (_self.attr('card') === 'prvi-amex-card') {
                        $('.shown-text').show();
                        $('.hidden-text').hide();
                    } else if (_self.attr('card') === 'prvi-visa-card') {
                        $('.shown-text').show();
                        $('.hidden-text').hide();
                    }

                    $('#apply-button a').attr('href', _self.attr('data-apply-card-url'));

                    // Apply style for slide on each tab
                    $('body').removeClass('one-card');
                    $('body').removeClass('lady-card');
                    $('body').removeClass('delight-card');
                    $('body').removeClass('prvi-amex-card');
                    $('body').removeClass('prvi-master-card');
                    $('body').removeClass('prvi-visa-card');
                    $('body').addClass(_self.attr('card'));

                    //Reset selected logo tab
                    $('.custom-tab.category .custom-tab-item').removeClass('active');
                    $('.custom-tab.category .custom-tab-item.first-child').addClass('active');
                    $('.logo-container .logo-item').show();

                    //Reinit slider on each tab

                    if ($('body').hasClass('promo-prvi')) {
                        prviMasterCardSwiper.reInit();
                        prviMasterCardSwiper.swipeTo(0);
                        prviAmexCardSwiper.reInit();
                        prviAmexCardSwiper.swipeTo(0);
                        prviVisaCardSwiper.reInit();
                        prviVisaCardSwiper.swipeTo(0);
                        // Center text
                        UOB.util.centerDataPosition();
                    } else {
                        //oneCardSwiper.reInit();
                        ladyCardSwiper.reInit();
                        ladyCardSwiper.swipeTo(0);
                        delightCardSwiper.reInit();
                        delightCardSwiper.swipeTo(0);
                    }
                }
            });
        }
    },

    // Hanlde Elements on Listing Popup
    listingPopupElement: {
        // Handle popup filter tab Slider
        handleTabFilterListCardSlider: function() {
            tabListCardSwiper = $('#list-card-filter-slider').swiper({
                mode: 'horizontal',
                loop: false,
                calculateHeight: true,
                paginationClickable: true,
                resizeReInit: true,
                slidesPerViewFit: true,
                slidesPerView: 'auto',
                scrollContainer: true
            });
        },
        // Handle Tab Filter - Listing Card Popup
        handleFilterCards: function() {
            $('.card-listing-popup .custom-tab .custom-tab-item').click(function() {
                var _self = $(this);
                if (!$(this).hasClass('active')) {
                    _self.siblings().removeClass('active');
                    _self.addClass('active');
                    var cardContainer = $(_self.closest('[data-target]').attr('data-target'));
                    if (_self.text() === 'All Cards') {
                        cardContainer.children().show();
                    } else {
                        cardContainer.children().hide();
                        cardContainer.children('[cate="' + _self.text() + '"]').show();
                    }
                }
            });
        },
        // Handle Show Listing Card Popup
        handleShowHideListingPopup: function() {
            $('.list-card-block a, .more-card-tab.promo-tab-item').click(function() {
                $('.overlay').fadeIn();
                $('#card-listing-popup').fadeIn();
                UOB.listingPopupElement.handleTabFilterListCardSlider();
            });

            $('body').on('click', '.more-cards a', function() {
                $('.overlay').fadeIn();
                $('#card-listing-popup').fadeIn();
                UOB.listingPopupElement.handleTabFilterListCardSlider();
            });

            $('#card-listing-popup').on('click', '.icon-close-gray', function() {
                $('#card-listing-popup').fadeOut();
                $('.overlay').fadeOut();
            });

            $('#card-listing-popup').on('click', '.overlay', function() {
                $('#card-listing-popup').fadeOut();
                $('.overlay').fadeOut();
            });
        },
        // Handle Listing Card Tab
        handleListingTab: function() {
            $('body').on('click', '#card-listing-popup .custom-tab-item', function() {
                var _self = $(this);
                $('#card-listing-popup .custom-tab-item').removeClass('active');
                _self.addClass('active');
                var listCard = $('#card-listing-popup .card-list-container .card-item');
                listCard.hide();
                if (_self.attr('cate') === 'All') {
                    listCard.show();
                } else {
                    listCard.each(function() {
                        if ($(this).attr('cate').indexOf(_self.attr('cate')) > -1) {
                            $(this).show();
                        }
                    });
                }

            });
        }
    },

    // Handle Card Pages Elements
    cardPageElement: {
        // Handle landing Slider
        handleLandingSlider: function() {
            var landingSwiper = $('.card-page .slider-block .swiper-container').swiper({
                mode: 'horizontal',
                loop: true,
                calculateHeight: true,
                pagination: '.card-page .swiper-pagination',
                paginationClickable: true,
                resizeReInit: true
            });
            $('.card-page .slider-block .swiper-button-next').click(function() {
                landingSwiper.swipeNext();
            });
            $('.card-page .slider-block .swiper-button-prev').click(function() {
                landingSwiper.swipePrev();
            });
        },
        // Handle Filter Logo tab Amex Card
        handleFilterLogo: function() {
            var tabSelected = $('.prvi-amex-card .filter-logo-block .custom-tab .custom-tab-item.active');
            var amexTabFilterBlock = $('.prvi-amex-card .filter-logo-block .logo-container');
            amexTabFilterBlock.find('.logo-item').hide();
            amexTabFilterBlock.find('.logo-item[cate="' + tabSelected.text() + '"]').show();
            $('.filter-logo-block .custom-tab .custom-tab-item').click(function() {
                var _self = $(this);
                if (!$(this).hasClass('active')) {
                    $('.filter-logo-block .custom-tab .custom-tab-item').removeClass('active');
                    $(this).addClass('active');
                    if (_self.text() === 'All') {
                        $('.filter-logo-block .logo-container').find('.logo-item').show();
                    } else {
                        $('.filter-logo-block .logo-container').find('.logo-item').hide();
                        $('.filter-logo-block .logo-container').find('.logo-item[cate="' + _self.text() + '"]').show();
                    }
                }
            });
        },
        // Handle Filter Offers tab - Master Card
        handleFilterOffer: function() {
            for (var i = 0; i < $('.offers-container .offer-item-container').length; i++) {
                if (i >= 9) {
                    $($('.offers-container .offer-item-container')[i]).hide();
                }
            }
            var prviMasterTabItem = $('.prvi-master-card .filter-logo-block .custom-tab .custom-tab-item');
            prviMasterTabItem.click(function() {
                var _self = $(this);
                if (!$(this).hasClass('active')) {
                    prviMasterTabItem.removeClass('active');
                    $(this).addClass('active');
                    if (_self.text() === 'All') {
                        $('.offers-container .offer-item-container').show();
                        $('.view-all-offers').show();
                        for (var i = 0; i < $('.offers-container .offer-item-container').length; i++) {
                            if (i >= 9) {
                                $($('.offers-container .offer-item-container')[i]).hide();
                            }
                        }
                    } else {
                        $('.view-all-offers').hide();
                        $('.offers-container .offer-item-container').hide();
                        $('.offers-container .offer-item-container[cate="' + _self.text() + '"]').show();
                    }
                }
                // Center text
                UOB.util.centerDataPosition();
            });
            $('.view-all-offers').click(function() {
                $('.offers-container .offer-item-container').show();
                $(this).hide();
                // Center text
                UOB.util.centerDataPosition();
            });
        },

        // Handle Feature tab PRVI Visa Card
        handleTabFeaturePrviVisa: function() {
            var visaCardFeatureBlock = $('.prvi-visa-card .feature-block');
            $('.prvi-visa-card .feature-block .custom-tab .custom-tab-item').click(function() {
                var _self = $(this);
                if (!$(this).hasClass('active')) {
                    visaCardFeatureBlock.find('.custom-tab .custom-tab-item').removeClass('active');
                    $(this).addClass('active');
                    visaCardFeatureBlock.find('.custom-tab-content .custom-tab-content-item').removeClass('active');
                    visaCardFeatureBlock.find('.custom-tab-content .custom-tab-content-item.' + _self.attr('cate')).addClass('active');
                }
            });
        },
        handleOneCardTabs: function() {
            var oneCardBlockTab = $('.one-card .one-card-rebate-range-block .custom-tab');
            oneCardBlockTab.find('.custom-tab-item').click(function() {
                if (!$(this).hasClass('active')) {
                    var tabId = $(this).attr('data-tab');
                    $(this).parent().find('.custom-tab-item').removeClass('active');

                    $('.range-blocks-container .range-container').removeClass('active');
                    $(this).addClass('active');
                    $('#' + tabId).addClass('active');
                }
            });
        },
        // Handle range slider
        handleOneCardRangeSlider: function() {
            var localRebateAmount = [50, 100, 300];

            var localOneSpendRangeSliderContainer = $('#one-card-range-block .local');
            var localSelectedVal = localOneSpendRangeSliderContainer.find('.range-slider-value span');

            var localStartVal = 500;

            localSelectedVal.html(localStartVal);
            localOneSpendRangeSliderContainer.find('.range-slider').noUiSlider({
                    start: [localStartVal],
                    step: 1,
                    range: {
                        'min': [500],
                        'max': [2000]
                    }
                })
                .Link('lower').to('-inline-<div class="range-slider-value"></div>', function(value) {
                    var val = Math.round(value);
                    $(this).html(
                        '<span>S$</span>' +
                        '<span>' + UOB.util.numberWithCommas(val) + '</span>'
                    );
                });
            localOneSpendRangeSliderContainer.find('.range-slider').noUiSlider_pips({
                mode: 'values',
                values: [1000],
                format: wNumb({
                    prefix: 'S$'
                })
            });
            //Set first active dot
            $(localOneSpendRangeSliderContainer.find('.noUi-pips .noUi-value-large')[0]).html('S$1,000');
            localOneSpendRangeSliderContainer.on('slide', function(e, v) {

                if (v < 1000) {
                    $(localOneSpendRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[0]).removeClass('active');
                    localOneSpendRangeSliderContainer.find('.calculated-value .amount').html(localRebateAmount[0]);
                } else if (v >= 1000 && v < 2000) {
                    $(localOneSpendRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[0]).addClass('active');
                    localOneSpendRangeSliderContainer.find('.calculated-value .amount').html(localRebateAmount[1]);
                } else {
                    localOneSpendRangeSliderContainer.find('.calculated-value .amount').html(localRebateAmount[2]);
                }

            });
        },
        handlePrviCardTabs: function() {
            var oneCardBlockTab = $('.prvi-miles-range-block .custom-tab');
            oneCardBlockTab.find('.custom-tab-item').click(function() {
                if (!$(this).hasClass('active')) {
                    var tabId = $(this).attr('data-tab');
                    $(this).parent().find('.custom-tab-item').removeClass('active');

                    $('.range-blocks-container .range-container').removeClass('active');
                    $(this).addClass('active');
                    $('#' + tabId).addClass('active');
                }
            });
        },
        // Handle PRVI Miles Range Slider
        handlePrviMilesRangeSlider: function() {

            var localPrviMilesRangeSliderContainer = $('#prvi-world .local');
            var localSelectedVal = localPrviMilesRangeSliderContainer.find('.range-slider-value span');
            var overseasMilesRangeSliderContainer = $('#prvi-world .overseas');
            var overseasSelectedVal = overseasMilesRangeSliderContainer.find('.range-slider-value span');

            var startVal = 200;

            localSelectedVal.html(startVal);
            $('#prvi-world .range-slider').noUiSlider({
                    start: [startVal],
                    range: {
                        'min': [0, 50],
                        '50%': [2000, 50],
                        'max': [3000]
                    }
                })
                .on('slide', function(e, v) {
                    var container = $('#prvi-world');
                    var localRange = container.find('.local .range-slider').val();
                    var overRange = container.find('.overseas .range-slider').val();
                    var milesMonthly = (localRange * 1.4) + (overRange * 2.4);
                    container.find('.miles-monthly').html(UOB.util.numberWithCommas(Math.round(milesMonthly)));
                    container.find('.miles-annually').html(UOB.util.numberWithCommas(Math.round(milesMonthly) * 12));
                });
            localPrviMilesRangeSliderContainer.find('.range-slider').Link('lower').to('-inline-<div class="range-slider-value has-text"></div>', function(value) {
                var val = Math.round(value);
                $(this).html(
                    '<span>Local Spend</span><br>' +
                    '<strong>S$' + val + '</strong>'
                );
            });
            // localPrviMilesRangeSliderContainer.find('.range-slider').noUiSlider_pips({
            //     mode: 'values',
            //     values: [300, 800],
            //     density: 15
            // });
            overseasMilesRangeSliderContainer.find('.range-slider').Link('lower').to('-inline-<div class="range-slider-value has-text"></div>', function(value) {
                var val = Math.round(value);
                $(this).html(
                    '<span>Overseas Spend</span><br>' +
                    '<strong>S$' + val + '</strong>'
                );
            });
        },
        handlePrviMilesAmericanRangeSlider: function() {

            var localPrviMilesRangeSliderContainer = $('#prvi-american .local');
            var localSelectedVal = localPrviMilesRangeSliderContainer.find('.range-slider-value span');
            var overseasMilesRangeSliderContainer = $('#prvi-american .overseas');
            var overseasSelectedVal = overseasMilesRangeSliderContainer.find('.range-slider-value span');

            var startVal = 200;

            localSelectedVal.html(startVal);
            $('#prvi-american .range-slider').noUiSlider({
                    start: [startVal],
                    range: {
                        'min': [0, 50],
                        '50%': [2000, 50],
                        'max': [3000]
                    }
                })
                .on('slide', function(e, v) {
                    var container = $('#prvi-american');
                    var localRange = container.find('.local .range-slider').val();
                    var overRange = container.find('.overseas .range-slider').val();
                    var milesMonthly = (localRange * 1.4) + (overRange * 2.4);
                    container.find('.miles-monthly').html(UOB.util.numberWithCommas(Math.round(milesMonthly)));
                    container.find('.miles-annually').html(UOB.util.numberWithCommas(Math.round(milesMonthly) * 12));
                });
            localPrviMilesRangeSliderContainer.find('.range-slider').Link('lower').to('-inline-<div class="range-slider-value has-text"></div>', function(value) {
                var val = Math.round(value);
                $(this).html(
                    '<span>Local Spend</span><br>' +
                    '<strong>S$' + val + '</strong>'
                );
            });
            // localPrviMilesRangeSliderContainer.find('.range-slider').noUiSlider_pips({
            //     mode: 'values',
            //     values: [300, 800],
            //     density: 15
            // });
            overseasMilesRangeSliderContainer.find('.range-slider').Link('lower').to('-inline-<div class="range-slider-value has-text"></div>', function(value) {
                var val = Math.round(value);
                $(this).html(
                    '<span>Overseas Spend</span><br>' +
                    '<strong>S$' + val + '</strong>'
                );
            });
        },
        handlePrviMilesVisaRangeSlider: function() {

            var localPrviMilesRangeSliderContainer = $('#prvi-visa .local');
            var localSelectedVal = localPrviMilesRangeSliderContainer.find('.range-slider-value span');
            var overseasMilesRangeSliderContainer = $('#prvi-visa .overseas');
            var overseasSelectedVal = overseasMilesRangeSliderContainer.find('.range-slider-value span');

            var startVal = 200;

            localSelectedVal.html(startVal);
            $('#prvi-visa .range-slider').noUiSlider({
                    start: [startVal],
                    range: {
                        'min': [0, 50],
                        '50%': [2000, 50],
                        'max': [3000]
                    }
                })
                .on('slide', function(e, v) {
                    var container = $('#prvi-visa');
                    var localRange = container.find('.local .range-slider').val();
                    var overRange = container.find('.overseas .range-slider').val();
                    var milesMonthly = (localRange * 1.4) + (overRange * 2.4);
                    container.find('.miles-monthly').html(UOB.util.numberWithCommas(Math.round(milesMonthly)));
                    container.find('.miles-annually').html(UOB.util.numberWithCommas(Math.round(milesMonthly) * 12));
                });
            localPrviMilesRangeSliderContainer.find('.range-slider').Link('lower').to('-inline-<div class="range-slider-value has-text"></div>', function(value) {
                var val = Math.round(value);
                $(this).html(
                    '<span>Local Spend</span><br>' +
                    '<strong>S$' + val + '</strong>'
                );
            });
            overseasMilesRangeSliderContainer.find('.range-slider').Link('lower').to('-inline-<div class="range-slider-value has-text"></div>', function(value) {
                var val = Math.round(value);
                $(this).html(
                    '<span>Overseas Spend</span><br>' +
                    '<strong>S$' + val + '</strong>'
                );
            });
        },

        // Handle Singtel Range Slider
        handleSingtelRangeSlider: function() {
            var localRebateAmount = [1, 3, 10, 30];

            var localSingtelSpendRangeSliderContainer = $('#singtel-range-block .local');
            var localSelectedVal = localSingtelSpendRangeSliderContainer.find('.range-slider-value span');

            var localStartVal = 50;

            localSelectedVal.html(localStartVal);
            localSingtelSpendRangeSliderContainer.find('.range-slider').noUiSlider({
                    start: [localStartVal],
                    step: 1,
                    range: {
                        'min': [0],
                        'max': [500]
                    }
                })
                .Link('lower').to('-inline-<div class="range-slider-value"></div>', function(value) {
                    var val = Math.round(value);
                    //    val = val > 500 ? '500+' : val;
                    $(this).html(
                        '<span>S$</span>' +
                        '<span>' + val + '</span>'
                    );
                });
            localSingtelSpendRangeSliderContainer.find('.range-slider').noUiSlider_pips({
                mode: 'values',
                values: [50, 100, 300],
                format: wNumb({
                    prefix: 'S$'
                })
            });
            localSingtelSpendRangeSliderContainer.on('slide', function(e, v) {
                var dollar = 'S$';
                if (v < 50) {
                    var less50 = v * 0.01;
                    localSingtelSpendRangeSliderContainer.find('.calculated-value .amount').html(dollar + less50.toFixed(2));
                    $(localSingtelSpendRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[0]).removeClass('active');
                    $(localSingtelSpendRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[1]).removeClass('active');
                    $(localSingtelSpendRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[2]).removeClass('active');
                } else if (v >= 50 && v < 100) {
                    localSingtelSpendRangeSliderContainer.find('.calculated-value .amount').html(dollar + localRebateAmount[0]);
                    $(localSingtelSpendRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[0]).addClass('active');
                    $(localSingtelSpendRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[1]).removeClass('active');
                    $(localSingtelSpendRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[2]).removeClass('active');
                } else if (v >= 100 && v < 300) {
                    localSingtelSpendRangeSliderContainer.find('.calculated-value .amount').html(dollar + localRebateAmount[1]);
                    $(localSingtelSpendRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[0]).addClass('active');
                    $(localSingtelSpendRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[1]).addClass('active');
                    $(localSingtelSpendRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[2]).removeClass('active');
                } else if (v >= 300 && v < 500) {
                    localSingtelSpendRangeSliderContainer.find('.calculated-value .amount').html(dollar + localRebateAmount[2]);
                    $(localSingtelSpendRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[0]).addClass('active');
                    $(localSingtelSpendRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[1]).addClass('active');
                    $(localSingtelSpendRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[2]).addClass('active');
                } else if (v >= 500) {
                    localSingtelSpendRangeSliderContainer.find('.calculated-value .amount').html(dollar + localRebateAmount[3]);
                }
            });
            $(localSingtelSpendRangeSliderContainer.find('.noUi-pips .noUi-value-large')[0]).addClass('first');
        },
        // Handle Delight Range Slider - DFSG
        handleDelightRangeSliderDFSG: function() {
            var DFSGAmount = [0.003, 0.03, 0.08];
            var DFSGRangeSliderContainer = $('#delight-DFSG-rebate-slider');

            var DFSGStartVal = 500;

            DFSGRangeSliderContainer.find('.range-slider').noUiSlider({
                    start: [DFSGStartVal],
                    step: 1,
                    range: {
                        'min': [0],
                        'max': [800]
                    }
                })
                .Link('lower').to('-inline-<div class="range-slider-value"></div>', function(value) {
                    var val = Math.round(value);
                    $(this).html(
                        '<span>S$</span>' +
                        '<span>' + val + '</span>'
                    );
                    $('#delight-DFSG-rebate-slider .value-rate .amount').html(val);
                    var DFSGVal = UOB.cardPageElement.calculateDelightRebate('DFSG');

                    if (DFSGVal !== 0) {
                        DFSGVal = DFSGVal.toFixed(2);
                    }
                    var contactlessVal = UOB.cardPageElement.calculateDelightRebate('contactless');
                    if (contactlessVal !== 0) {
                        contactlessVal = contactlessVal.toFixed(2);
                    }
                    var otherVal = UOB.cardPageElement.calculateDelightRebate('other');
                    if (otherVal !== 0) {
                        otherVal = otherVal.toFixed(2);
                    }
                    var totalVal = parseFloat(DFSGVal) + parseFloat(contactlessVal) + parseFloat(otherVal);
                    if (totalVal >= 50) {
                        totalVal = 50;
                    } else {
                        totalVal = totalVal.toFixed(2);
                    }
                    $('#delight-DFSG-rebate-slider .calculated-rate .amount').html(DFSGVal);
                    $('#delight-contactless-rebate-slider .calculated-rate .amount').html(contactlessVal);
                    $('#delight-other-rebate-slider .calculated-rate .amount').html(otherVal);
                    $('.total-value-container .total-spend-text .amount').html(totalVal);
                });
            DFSGRangeSliderContainer.find('.range-slider').noUiSlider_pips({
                mode: 'values',
                values: [0, 400, 800],
                format: wNumb({
                    prefix: 'S$'
                })
            });

            // Set first active dot
            $(DFSGRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[1]).addClass('active');
            $(DFSGRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[2]).removeClass('active');

            DFSGRangeSliderContainer.on('slide', function(e, v) {
                var dollar = 'S$';
                if (v < 400) {
                    $(DFSGRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[1]).removeClass('active');
                    $(DFSGRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[2]).removeClass('active');
                } else if (v >= 400 && v < 800) {
                    $(DFSGRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[1]).addClass('active');
                    $(DFSGRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[2]).removeClass('active');
                } else if (v >= 800) {
                    $(DFSGRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[1]).addClass('active');
                    $(DFSGRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[2]).addClass('active');
                }
            });
            $(DFSGRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[0]).addClass('first');
            $(DFSGRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[2]).addClass('last');
            //$(DFSGRangeSliderContainer.find('.noUi-pips .noUi-value-large')[0]).addClass('first');
            $(DFSGRangeSliderContainer.find('.noUi-pips .noUi-value-large')[2]).append(' and above');
            // Handle Delight Range Slider - Contactless
        },
        handleDelightRangeSliderContactless: function() {
            //delight-contactless-rebate-slider
            var contactlessAmount = [0.003, 0.03, 0.08];
            var contactlessRangeSliderContainer = $('#delight-contactless-rebate-slider');

            var contactlessStartVal = 500;

            contactlessRangeSliderContainer.find('.range-slider').noUiSlider({
                    start: [contactlessStartVal],
                    step: 1,
                    range: {
                        'min': [0],
                        'max': [800]
                    }
                })
                .Link('lower').to('-inline-<div class="range-slider-value"></div>', function(value) {
                    var val = Math.round(value);
                    $(this).html(
                        '<span>S$</span>' +
                        '<span>' + val + '</span>'
                    );
                    $('#delight-contactless-rebate-slider .value-rate .amount').html(val);
                    var DFSGVal = UOB.cardPageElement.calculateDelightRebate('DFSG');
                    if (DFSGVal !== 0) {
                        DFSGVal = DFSGVal.toFixed(2);
                    }
                    var contactlessVal = UOB.cardPageElement.calculateDelightRebate('contactless');
                    if (contactlessVal !== 0) {
                        contactlessVal = contactlessVal.toFixed(2);
                    }
                    var otherVal = UOB.cardPageElement.calculateDelightRebate('other');
                    if (otherVal !== 0) {
                        otherVal = otherVal.toFixed(2);
                    }
                    var totalVal = parseFloat(DFSGVal) + parseFloat(contactlessVal) + parseFloat(otherVal);
                    if (totalVal >= 50) {
                        totalVal = 50;
                    } else {
                        totalVal = totalVal.toFixed(2);
                    }
                    $('#delight-DFSG-rebate-slider .calculated-rate .amount').html(DFSGVal);
                    $('#delight-contactless-rebate-slider .calculated-rate .amount').html(contactlessVal);
                    $('#delight-other-rebate-slider .calculated-rate .amount').html(otherVal);
                    $('.total-value-container .total-spend-text .amount').html(totalVal);
                });
            contactlessRangeSliderContainer.find('.range-slider').noUiSlider_pips({
                mode: 'values',
                values: [0, 400, 800],
                format: wNumb({
                    prefix: 'S$'
                })
            });

            //Set first active dot
            $(contactlessRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[1]).addClass('active');
            $(contactlessRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[2]).removeClass('active');

            contactlessRangeSliderContainer.on('slide', function(e, v) {
                var dollar = 'S$';
                if (v < 400) {
                    $(contactlessRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[1]).removeClass('active');
                    $(contactlessRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[2]).removeClass('active');
                } else if (v >= 400 && v < 800) {
                    $(contactlessRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[1]).addClass('active');
                    $(contactlessRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[2]).removeClass('active');
                } else if (v >= 800) {
                    $(contactlessRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[1]).addClass('active');
                    $(contactlessRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[2]).addClass('active');
                }
            });
            $(contactlessRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[0]).addClass('first');
            $(contactlessRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[2]).addClass('last');
            // $(contactlessRangeSliderContainer.find('.noUi-pips .noUi-value-large')[0]).addClass('first');
            $(contactlessRangeSliderContainer.find('.noUi-pips .noUi-value-large')[2]).append(' and above');
        },

        // Handle Delight Range Slider - Other
        handleDelightRangeSliderOther: function() {
            //delight-other-rebate-slider
            var otherAmount = [0.003, 0.03, 0.08];
            var otherRangeSliderContainer = $('#delight-other-rebate-slider');

            var otherStartVal = 500;

            otherRangeSliderContainer.find('.range-slider').noUiSlider({
                    start: [otherStartVal],
                    step: 1,
                    range: {
                        'min': [0],
                        'max': [800]
                    }
                })
                .Link('lower').to('-inline-<div class="range-slider-value"></div>', function(value) {
                    var val = Math.round(value);
                    $(this).html(
                        '<span>S$</span>' +
                        '<span>' + val + '</span>'
                    );
                    $('#delight-other-rebate-slider .value-rate .amount').html(val);
                    var DFSGVal = UOB.cardPageElement.calculateDelightRebate('DFSG');
                    if (DFSGVal !== 0) {
                        DFSGVal = DFSGVal.toFixed(2);
                    }
                    var contactlessVal = UOB.cardPageElement.calculateDelightRebate('contactless');
                    if (contactlessVal !== 0) {
                        contactlessVal = contactlessVal.toFixed(2);
                    }
                    var otherVal = UOB.cardPageElement.calculateDelightRebate('other');
                    if (otherVal !== 0) {
                        otherVal = otherVal.toFixed(2);
                    }
                    var totalVal = parseFloat(DFSGVal) + parseFloat(contactlessVal) + parseFloat(otherVal);
                    if (totalVal >= 50) {
                        totalVal = 50;
                    } else {
                        totalVal = totalVal.toFixed(2);
                    }
                    $('#delight-DFSG-rebate-slider .calculated-rate .amount').html(DFSGVal);
                    $('#delight-contactless-rebate-slider .calculated-rate .amount').html(contactlessVal);
                    $('#delight-other-rebate-slider .calculated-rate .amount').html(otherVal);
                    $('.total-value-container .total-spend-text .amount').html(totalVal);
                    //$('#other-amount-container .calculated-rate .amount').html(UOB.cardPageElement.calculateDelightRebate('other').toFixed(2));
                });
            otherRangeSliderContainer.find('.range-slider').noUiSlider_pips({
                mode: 'values',
                values: [0, 400, 800],
                format: wNumb({
                    prefix: 'S$'
                })
            });

            //Set first active dot
            $(otherRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[1]).addClass('active');
            $(otherRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[2]).removeClass('active');

            otherRangeSliderContainer.on('slide', function(e, v) {
                var dollar = 'S$';
                if (v < 400) {
                    $(otherRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[1]).removeClass('active');
                    $(otherRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[2]).removeClass('active');
                } else if (v >= 400 && v < 800) {
                    $(otherRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[1]).addClass('active');
                    $(otherRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[2]).removeClass('active');
                } else if (v >= 800) {
                    $(otherRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[1]).addClass('active');
                    $(otherRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[2]).addClass('active');
                }
            });
            $(otherRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[0]).addClass('first');
            $(otherRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[2]).addClass('last');
            // $(otherRangeSliderContainer.find('.noUi-pips .noUi-value-large')[0]).addClass('first');
            $(otherRangeSliderContainer.find('.noUi-pips .noUi-value-large')[2]).append(' and above');
        },

        // Handle Delight other amount input - Contactless
        handleDelightOtherAmountInput: function() {
            $('body').on('keyup', '#delight-other-input', function() {
                $('#delight-DFSG-rebate-slider .calculated-rate .amount').html(UOB.cardPageElement.calculateDelightRebate('DFSG').toFixed(2));
                $('#delight-contactless-rebate-slider .calculated-rate .amount').html(UOB.cardPageElement.calculateDelightRebate('contactless').toFixed(2));
                $('#other-amount-container .calculated-rate .amount').html(UOB.cardPageElement.calculateDelightRebate('other').toFixed(2));
            });
        },

        //Handle input number only
        handleInputNumerOnly: function() {
            $("#delight-other-input").keydown(function(e) {
                // Allow: backspace, delete, tab, escape, enter and .
                if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                    // Allow: Ctrl+A
                    (e.keyCode == 65 && e.ctrlKey === true) ||
                    // Allow: Ctrl+C
                    (e.keyCode == 67 && e.ctrlKey === true) ||
                    // Allow: Ctrl+X
                    (e.keyCode == 88 && e.ctrlKey === true) ||
                    // Allow: home, end, left, right
                    (e.keyCode >= 35 && e.keyCode <= 39)) {
                    // let it happen, don't do anything
                    return;
                }
                // Ensure that it is a number and stop the keypress
                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                    e.preventDefault();
                }
            });
        },

        calculateDelightRebate: function(type) {
            // var otherAmount = 0;
            // if ($('#delight-other-input').val() !== '') {
            //     otherAmount = parseInt($('#delight-other-input').val());
            // }
            var DFSGAmount = parseInt($('#delight-DFSG-rebate-slider .value-rate .amount').html());
            var contactlessAmount = parseInt($('#delight-contactless-rebate-slider .value-rate .amount').html());
            var otherAmount = parseInt($('#delight-other-rebate-slider .value-rate .amount').html());
            var totalAmount = DFSGAmount + contactlessAmount + otherAmount;
            var result = 0;
            if (type === 'DFSG') {
                if (totalAmount < 400) {
                    result = DFSGAmount * 0.003;
                } else if (totalAmount >= 400 && totalAmount < 800) {
                    result = DFSGAmount * 0.03;
                } else {
                    result = DFSGAmount * 0.08;
                }
            } else if (type === 'contactless') {
                if (totalAmount < 400) {
                    result = contactlessAmount * 0.003;
                } else {
                    result = contactlessAmount * 0.03;
                }
            } else if (type === 'other') {
                if (isNaN(otherAmount)) {
                    result = 0;
                } else {
                    result = otherAmount * 0.003;
                }
            } else if (type === 'total') {
                result = UOB.util.numberWithCommas(totalAmount);
            }
            return result;
        },

        // Handle Singtel Range Slider
        handleSingtelRangeSlider2: function() {
            var localRebateAmount = [0, 100, 300];

            var localSingtelSpendRangeSliderContainer = $('#singtel-range-block2 .local');
            var localSelectedVal = localSingtelSpendRangeSliderContainer.find('.range-slider-value span');

            var localStartVal = 14000;

            localSelectedVal.html(localStartVal);
            localSingtelSpendRangeSliderContainer.find('.range-slider').noUiSlider({
                    start: [localStartVal],
                    step: 100,
                    range: {
                        'min': [0],
                        'max': [24000]
                    }
                })
                .Link('lower').to('-inline-<div class="range-slider-value"></div>', function(value) {
                    var val = Math.round(value);
                    //val = val > 24000 ? '24000+' : val;
                    $(this).html(
                        '<span>S$</span>' +
                        '<span>' + UOB.util.numberWithCommas(val) + '</span>'
                    );
                });
            localSingtelSpendRangeSliderContainer.find('.range-slider').noUiSlider_pips({
                mode: 'values',
                values: [12000],
                format: wNumb({
                    prefix: 'S$'
                })
            });
            //Set first active dot
            $(localSingtelSpendRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[0]).addClass('active');
            localSingtelSpendRangeSliderContainer.on('slide', function(e, v) {
                if (v < 12000) {
                    localSingtelSpendRangeSliderContainer.find('.calculated-value .amount').html(localRebateAmount[0]);
                    $(localSingtelSpendRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[0]).removeClass('active');
                } else if (v >= 12000 && v <= 23999) {
                    localSingtelSpendRangeSliderContainer.find('.calculated-value .amount').html(localRebateAmount[1]);
                    $(localSingtelSpendRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[0]).addClass('active');
                } else {
                    localSingtelSpendRangeSliderContainer.find('.calculated-value .amount').html(localRebateAmount[2]);
                    $(localSingtelSpendRangeSliderContainer.find('.noUi-pips .noUi-marker-large')[0]).addClass('active');
                }
            });
            $(localSingtelSpendRangeSliderContainer.find('.noUi-pips .noUi-value-large')[0]).html('S$12,000');

        },
        //Handle VisaSignature Range Slider
        handleVisaSignatureRangeSlider: function() {
            var localRebateAmount = [0, 5, 10];

            var localSingtelSpendRangeSliderContainer = $('#visa-signature-range-slider .local');
            var localSelectedVal = localSingtelSpendRangeSliderContainer.find('.range-slider-value span');

            var localStartVal = 1;

            localSelectedVal.html(localStartVal);
            localSingtelSpendRangeSliderContainer.find('.range-slider').noUiSlider({
                    start: [localStartVal],
                    step: 1,
                    range: {
                        'min': [0],
                        'max': [2000]
                    }
                })
                .Link('lower').to('-inline-<div class="range-slider-value"></div>', function(value) {
                    var val = Math.round(value);
                    //    val = val > 24000 ? '24000+' : val;
                    $(this).html(
                        '<span>S$</span>' +
                        '<span>' + val + '</span>'
                    );
                });
            localSingtelSpendRangeSliderContainer.on('slide', function(e, v) {
                if (v < 1) {
                    localSingtelSpendRangeSliderContainer.find('.calculated-value .amount').html(localRebateAmount[0]);
                } else if (v >= 1) {
                    localSingtelSpendRangeSliderContainer.find('.calculated-value .amount').html((v / localRebateAmount[1]) * localRebateAmount[2]);
                }
            });
        },
        //Handle UnionPay Range Slider
        handleUnionPayRangeSlider: function() {
            var localRebateAmount = [0, 5];
            var overseasRebateAmount = [0, 5];

            var unionPayContainer = $('#unionpay-range-slider');
            var localSpendRangeSliderContainer = $('#unionpay-range-slider .local');
            var localSelectedVal = localSpendRangeSliderContainer.find('.range-slider-value span');
            var overseasSpendRangeSliderContainer = $('#unionpay-range-slider .overseas');
            var overseasSelectedVal = overseasSpendRangeSliderContainer.find('.range-slider-value span');

            var localStartVal = 500;
            var overseasStartVal = 300;

            localSelectedVal.html(localStartVal);
            localSpendRangeSliderContainer.find('.range-slider').noUiSlider({
                    start: [localStartVal],
                    step: 1,
                    range: {
                        'min': [0],
                        'max': [2000]
                    }
                })
                .Link('lower').to('-inline-<div class="range-slider-value has-text"></div>', function(value) {
                    var val = Math.round(value);
                    //    val = val > 1500 ? '1500+' : val;
                    $(this).html(
                        '<span>Local Spend</span><br>' +
                        '<strong>S$' + val + '</strong>'
                    );
                });
            localSpendRangeSliderContainer.on('slide', function(e, v) {
                if (v < 1) {
                    unionPayContainer.find('.calculated-value .local-amount').html(localRebateAmount[0]);
                } else if (v >= 1) {
                    unionPayContainer.find('.calculated-value .local-amount').html(v / localRebateAmount[1]);
                }
            });

            overseasSelectedVal.html(overseasStartVal);
            overseasSpendRangeSliderContainer.find('.range-slider').noUiSlider({
                    start: [overseasStartVal],
                    step: 1,
                    range: {
                        'min': [0],
                        'max': [2000]
                    }
                })
                .Link('lower').to('-inline-<div class="range-slider-value has-text"></div>', function(value) {
                    var val = Math.round(value);
                    //    val = val > 6000 ? '6000+' : val;
                    $(this).html(
                        '<span>Overseas Spend</span><br>' +
                        '<strong>S$' + val + '</strong>'
                    );
                });
            overseasSpendRangeSliderContainer.on('slide', function(e, v) {
                if (v < 1) {
                    unionPayContainer.find('.calculated-value .overseas-amount').html(overseasRebateAmount[0]);
                } else {
                    unionPayContainer.find('.calculated-value .overseas-amount').html((v / overseasRebateAmount[1]) * overseasRebateAmount[1]);
                }
            });
        },
        //Handle Preferred Tabs
        handlePreferredTabs: function() {
            var preferredBlockTab = $('#preferred-platinum-range-slider .custom-tab');
            preferredBlockTab.find('.custom-tab-item').click(function() {
                if (!$(this).hasClass('active')) {
                    var tabId = $(this).attr('data-tab');
                    $(this).parent().find('.custom-tab-item').removeClass('active');

                    $('.range-blocks-container').removeClass('active');
                    $(this).addClass('active');
                    $('#' + tabId).addClass('active');
                }
            });
        },
        //Handle Preferred Range Slider
        handlePreferredRangeSlider: function() {
            var localRebateAmount = [0, 5, 10];
            var overseasRebateAmount = [0, 5, 2];

            //    var unionPayContainer = $('#unionpay-range-slider');
            var localSpendRangeSliderContainer = $('#dining-other-spend .local');
            var localSelectedVal = localSpendRangeSliderContainer.find('.range-slider-value span');
            var overseasSpendRangeSliderContainer = $('#dining-other-spend .overseas');
            var overseasSelectedVal = overseasSpendRangeSliderContainer.find('.range-slider-value span');

            var localStartVal = 400;
            var overseasStartVal = 300;

            localSelectedVal.html(localStartVal);
            localSpendRangeSliderContainer.find('.range-slider').noUiSlider({
                    start: [localStartVal],
                    step: 1,
                    range: {
                        'min': [0],
                        'max': [2000]
                    }
                })
                .Link('lower').to('-inline-<div class="range-slider-value has-text"></div>', function(value) {
                    var val = Math.round(value);
                    //    val = val > 1500 ? '1500+' : val;
                    $(this).html(
                        '<span>Dining</span><br>' +
                        '<strong>S$' + val + '</strong>'
                    );
                });
            localSpendRangeSliderContainer.on('slide', function(e, v) {
                if (v < 1) {
                    localSpendRangeSliderContainer.find('.calculated-value .amount').html(localRebateAmount[0]);
                } else if (v >= 1) {
                    localSpendRangeSliderContainer.find('.calculated-value .amount').html((v / localRebateAmount[1]) * localRebateAmount[2]);
                }
            });

            overseasSelectedVal.html(overseasStartVal);
            overseasSpendRangeSliderContainer.find('.range-slider').noUiSlider({
                    start: [overseasStartVal],
                    step: 1,
                    range: {
                        'min': [0],
                        'max': [2000]
                    }
                })
                .Link('lower').to('-inline-<div class="range-slider-value has-text"></div>', function(value) {
                    var val = Math.round(value);
                    //    val = val > 6000 ? '6000+' : val;
                    $(this).html(
                        '<span>Other spend</span><br>' +
                        '<strong>S$' + val + '</strong>'
                    );
                });
            overseasSpendRangeSliderContainer.on('slide', function(e, v) {
                if (v < 1) {
                    overseasSpendRangeSliderContainer.find('.calculated-value .amount').html(overseasRebateAmount[0]);
                } else {
                    overseasSpendRangeSliderContainer.find('.calculated-value .amount').html((v / overseasRebateAmount[1]) * overseasRebateAmount[2]);
                }
            });

            var localRebateAmount2 = [0, 5, 10];
            var localSpendRangeSliderContainer2 = $('#petrol-at-caltex .local');
            var localSelectedVal2 = localSpendRangeSliderContainer2.find('.range-slider-value span');

            var localStartVal2 = 400;

            localSelectedVal2.html(localStartVal2);
            localSpendRangeSliderContainer2.find('.range-slider').noUiSlider({
                    start: [localStartVal2],
                    step: 1,
                    range: {
                        'min': [0],
                        'max': [2000]
                    }
                })
                .Link('lower').to('-inline-<div class="range-slider-value"></div>', function(value) {
                    var val = Math.round(value);
                    //    val = val > 1500 ? '1500+' : val;
                    $(this).html(
                        '<span>S$</span>' +
                        '<span>' + val + '</span>'
                    );
                });
            localSpendRangeSliderContainer2.on('slide', function(e, v) {
                if (v < 1) {
                    localSpendRangeSliderContainer2.find('.calculated-value .amount').html(localRebateAmount2[0]);
                } else if (v >= 1) {
                    localSpendRangeSliderContainer2.find('.calculated-value .amount').html((v / localRebateAmount2[1]) * localRebateAmount2[2]);
                }
            });
        }
    }
};

// Document ready
$(document).ready(function() {
    $('#card-listing-popup').load('card-listing-popup.html');
    if ($('body').hasClass('jcb-card')) {
        $('#top-block').load('jcb-top-block-content.html');
    } else if ($('body').hasClass('delight-card')) {
        $('#top-block').load('delight-top-block-content.html');
    } else {
        $('#top-block').load('top-block-content.html');
    }

    $('.delivery-block').load('delivery-block.html');
    $('.same-day-delivery-container').load('same-day-container.html');
    // Handle Sticky Header
    UOB.globalElement.stickyHeader();
    // Handle Rate tab
    UOB.globalElement.handleRate();
    if (!$('body').hasClass('prvi-master-card')) {
        // Handle Filter Logo tab Amex Card
        UOB.cardPageElement.handleFilterLogo();
    } else {
        // Handle Filter Offers tab
        UOB.cardPageElement.handleFilterOffer();
    }
    // Handle Popup Card Type
    UOB.listingPopupElement.handleFilterCards();
    // Handle Show Hide Terms
    UOB.globalElement.toggleTerms();
    // Replace img to background - Slider
    UOB.util.replaceImgToBackground($('.bg-image'), '.slider-bg');
    // Handle Promo Tab
    UOB.promoElement.handlePromoTab();
    // Handle One Card Rebate Range Slider
    UOB.cardPageElement.handleOneCardRangeSlider();
    // Handle Prvi Miles Range Slider
    UOB.cardPageElement.handlePrviMilesRangeSlider();
    // Handle Feature tab PRVI Visa Card
    UOB.cardPageElement.handleTabFeaturePrviVisa();
    // Handle Show Hide Listing Card Popup
    UOB.listingPopupElement.handleShowHideListingPopup();
    // Handle Listing Card Tab
    UOB.listingPopupElement.handleListingTab();
    // Handle promo tab Slider
    UOB.promoElement.handlePromoTabSlider();
    //Handle one card tab
    UOB.cardPageElement.handleOneCardTabs();
    UOB.cardPageElement.handlePrviCardTabs();
    UOB.cardPageElement.handleInputNumerOnly();
    //handle range slider
    UOB.cardPageElement.handleSingtelRangeSlider();
    UOB.cardPageElement.handleSingtelRangeSlider2();
    UOB.cardPageElement.handleVisaSignatureRangeSlider();
    UOB.cardPageElement.handleUnionPayRangeSlider();
    UOB.cardPageElement.handlePreferredTabs();
    UOB.cardPageElement.handlePreferredRangeSlider();
    UOB.cardPageElement.handlePrviMilesAmericanRangeSlider();
    UOB.cardPageElement.handlePrviMilesVisaRangeSlider();

    UOB.cardPageElement.handleDelightRangeSliderDFSG();
    UOB.cardPageElement.handleDelightRangeSliderContactless();
    UOB.cardPageElement.handleDelightRangeSliderOther();

    UOB.cardPageElement.handleDelightOtherAmountInput();
    // Handle scroll to delivery block
    UOB.globalElement.scrollToDeliveryBlock();
});

// Window load
$(window).load(function() {
    // Center text
    UOB.util.centerDataPosition();
    // Handle popup filter tab Slider
    UOB.listingPopupElement.handleTabFilterListCardSlider();

    if ($('body').hasClass('card-page')) {
        // Handle landing Slider
        UOB.cardPageElement.handleLandingSlider();

    }
    if ($('body').hasClass('promo')) {
        // Handle promo Slider
        UOB.promoElement.handlePromoSlider();
        // Equal height promo tab
        UOB.util.equalHeight($('.tab-block .promo-tab-item'));
    }
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
            UOB.util.doneResizing();
            if (_self.width() !== width) {
                width = _self.width();
                // Done resize width ...
                UOB.util.doneResizingWidth();
            }
        }
    }, 200);
});

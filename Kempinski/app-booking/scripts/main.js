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
    if( $(".big-booking-date-range-picker-container").length){
        var bigDatePicker = $(".big-booking-date-range-picker-container");
        var startDateInput = $(bigDatePicker.attr("data-target-input-1"));
        var endDateInput   = $(bigDatePicker.attr("data-target-input-2"));
        $(document).dateRangePicker({
            inline: true,
            container: '.big-booking-date-range-picker-container',
            alwaysOpen: true,
            autoUpdateInput: false,
            startDate: new Date()
        }).bind('datepicker-first-date-selected', function(event, obj) {
            startDateInput.val( moment(obj.date1).format( startDateInput.attr('data-format') ) );
        }).bind('datepicker-change', function(event, obj) {
            startDateInput.val( moment(obj.date1).format( startDateInput.attr('data-format') ) );
            endDateInput.val( moment(obj.date2).format( endDateInput.attr('data-format') ) );
        });
    }
    window.KEM.booking = (function() {
        var view = $('.section-booking-widget');
        var checkInText = $("#checkin-date");
        var checkInInput = checkInText.parent().find('input');
        var checkOutText = $("#checkout-date");
        var checkOutInput = checkOutText.parent().find('input');
        var datePickerContainer = $('.booking-date-range-picker-container');
        //var advancedBookingSection = $("#collapsemorebooking")

        var collapseBookingWidgetOnScrollForDesktop = function(size) {
            if (!size) {
                size = $(window).width();
            }
            if (size >= 1024) {
                $(window).on('scroll.bookingWidget', function() {
                    datePickerContainer.hide();
                    //advancedBookingSection.stop().collapse("hide");
                });
                checkInText.blur();
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
                var ciDate = moment(obj.date1);

                checkInText.html(ciDate.format('ll'));
                checkInInput.val( ciDate.format( checkInInput.attr('data-format') ) );
            }).bind('datepicker-change', function(event, obj) {
                var ciDate = moment(obj.date1);
                var coDate = moment(obj.date2);

                checkInText.html(ciDate.format('ll'));
                checkInInput.val( ciDate.format( checkInInput.attr('data-format') ) );

                checkOutText.html(coDate.format('ll'));
                checkOutInput.val( coDate.format( checkOutInput.attr('data-format') ) );

                datePickerContainer.hide();
            });

            if(checkInInput.val()!==""){
                var ciDate = moment( checkInInput.val(), checkInInput.attr('data-format') );
                var coDate = moment( checkOutInput.val(), checkOutInput.attr('data-format') );

                checkInText.html( ciDate.format('ll') );
                checkOutText.html( coDate.format('ll') );

                $(document).data('dateRangePicker').setDateRange( ciDate.format("YYYY-MM-DD") , coDate.format("YYYY-MM-DD"));
            }

            view.find(".icon-calendar").on('click', function(e) {
                e.stopPropagation();
                var offset = $(this).prev().offset();
                datePickerContainer.css({left: offset.left}).show();
            });
            $("#checkin-date, #checkout-date").on('click', function() {
                var offset = $(this).offset();
                datePickerContainer.css({left: offset.left}).show();
            });

        }

        function hideBookingWidgetOnFocusOut() {
            $(document).on('click', function(e) {
                if (e.target.id !== 'checkin-date' && e.target.id !== 'checkout-date') {
                    datePickerContainer.hide();
                }
                // if ($(e.target).closest('.booking-widget').length == 0) {
                //     advancedBookingSection.stop().collapse("hide");
                // }
            });
            $(document).on("click", ".bootstrap-select .dropdown-toggle", function() {
                datePickerContainer.hide();
            })
        }

        var booking = {
            init: function() {
                if(view.length === 0){
                    return;
                }

                var moreBookingTimeout = null;

                initDateRangePicker();

                hideBookingWidgetOnFocusOut();


                collapseBookingWidgetOnScrollForDesktop();

                window.ODFC.Events.on('resizeWindow', function(data) {
                    collapseBookingWidgetOnScrollForDesktop(data.BP);
                });

                return this;
            }
        };

        return booking.init();
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

        module.init = function() {
           
            module.initSelectpicker();

            // module.initTimepicker();

            module.initMatchHeight();

            $(".filter-select").filterSelect({
                itemClickHandler: function(options) {
                    window.location.href = $(this).find('a').get(0).href;
                    // if ($(this).hasClass("selected")) {
                    //     var $this = $(this);

                    //     var tab = $($this.find("a").attr("href"));
                    //     if(tab.hasClass('active')){
                    //         return false;
                    //     }
                    //     var tab_act = tab.siblings(".active");
                    //     tab_act.attr("style", "position: relative; opacity: 1; top: 0px; height: 100%; width: 100%; z-index: 2;");
                    //     tab.css({
                    //         "position": "absolute",
                    //         "opacity": 0,
                    //         "top": 0,
                    //         "height": "100%",
                    //         "width": "100%",
                    //         "z-index": 2
                    //     }).animate({
                    //         "opacity": 1
                    //     }, 600, function() {
                    //         tab.css("position", "relative").addClass("active");
                    //     })
                    //     tab_act.css({
                    //         "opacity": 1,
                    //         "z-index": 1
                    //     }).animate({
                    //         "opacity": 0
                    //     }, 600, function() {
                    //         tab_act
                    //             .css("height", "0")
                    //             .removeClass('active');
                    //     })
                    // }
                    // return false;
                }
            });

            var activeTab = $(".filter-select .selected a").attr('data-index');
            activeTab = parseInt(activeTab);
            $(".filter-select").data('filterSelect').goto(activeTab);

            // init click btn .back-to-top
            $('.back-to-top').click(function(e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });

            // open booking-detail
            $('.booking-result-item-group.type-2 .cover').off('click').on('click', function(){
                $(this).parents('.booking-result-item-group').toggleClass('open');
            });
            $('.booking-result-item-group.type-2 .block-detail-content .block-media').off('click').on('click', function(){
                $(this).parents('.booking-result-item-group').toggleClass('open');
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

    }
    if(!windowLoaded){
        jQuery(window).on('load', windowOnLoad);
    }else{
        windowOnLoad();
    }
})(jQuery);
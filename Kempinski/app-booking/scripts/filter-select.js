;
(function($, window, document, undefined) {

    // Create the defaults once
    var pluginName = "filterSelect",
        defaults = {
            itemClickHandler: function() {},
            funcSync: function() {}
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        this.$element = $(this.element);
        this.$items = this.$element.find(".item");
        this.$carousel = this.$element.find(".filter-slide");

        this.options = $.extend({}, defaults, options);
        // add Data attribute in Option
        if (this.$element.data()) {
            this.options = $.extend({}, this.options, this.$element.data());
        }

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {
        getTotalItemWidth: function() {
            var item_tw = 0;
            this.$items.each(function() {
                item_tw += $(this).width() + 50;
            });
            this.itemsTotalWidth = item_tw;
            return;
        },
        checkOverloadedFilterItems: function() {
            // console.log(this.itemsTotalWidth, this.$items.first().closest('.filter-wrap'));
            // return this.itemsTotalWidth > this.$items.closest('.filter-wrap').width();
            return this.itemsTotalWidth > this.$element.find('.filter-wrap').width();

        },
        initCarousel: function() {
            var options = {
                autoWidth: true,
                loop: true,
                center: true
            };
            this.$carousel.owlCarousel(options);
            // $(this.$carousel).parent().append("<div class='cover-after'></div>"); 
            // $(this.$carousel).parent().append("<div class='cover-before'></div>");
        },
        initFilterSelectBehavior: function() {
            this.destroyCarousel();
            this.$element.find('.filter-wrap').addClass('container');

            if (this.checkOverloadedFilterItems()) {
                this.$element.find('.filter-wrap').removeClass('container');
                this.initCarousel();
            } else {
                var items = this.$element.find('.item');
                switch (items.length) {
                    case 1:
                        items.css("left", (this.$element.width() / 2 - items.width() / 2) + "px");
                        break;
                    case 2:
                        var containerWidth = this.$element.find('.container').width() - 30;
                        var firstItem = items.eq(0);
                        var secondItem = items.eq(1);
                        if(is_rtl()){
                            firstItem = items.eq(1);
                            secondItem = items.eq(0);                            
                        }
                        firstItem.css("left", (containerWidth/3 - firstItem.outerWidth()/2) + "px");
                        secondItem.css("left", ((containerWidth/3)*2  - secondItem.outerWidth()/2 - firstItem.outerWidth() ) + "px");
                        this.$element.find(".filter-slide").css("text-align", "left");
                        break;
                }
            }
        },
        destroyCarousel: function() {
            if (typeof this.$carousel.data('owl.carousel') != 'undefined') {
                this.$carousel.owlCarousel("destroy");
                this.addSpaceCharToItem();
            }
        },
        addSpaceCharToItem: function() {
            this.$carousel.find(".item").each(function() {
                this.outerHTML += " ";
            });
        },
        goto: function(position) {
            if (position < 0 || position >= this.$items.length) {
                return false;
            }
            if (this.$carousel.data('owl.carousel')) {
                this.$carousel.trigger('to.owl.carousel', [position]);
            }
            return this.setActive(position);
        },
        setActive: function(position) {
            if (position < 0 || position >= this.$items.length) {
                return false;
            }
            return this.$element
                .find(".selected").removeClass("selected").end()
                .find(".item a[data-index='" + (position) + "']").parent().addClass("selected");
        },
        init: function() {
            var _this = this;

            this.getTotalItemWidth();

            this.addSpaceCharToItem();

            this.$element.find(".filter-slide").css("text-align", "justify");

            this.initFilterSelectBehavior();

            $(window).on('resize', function(argument) {
                _this.initFilterSelectBehavior();
            });
            if (typeof this.options.funcSync === "function") {
                this.options.funcSync(this.options, this.$element);
            }
            this.$element.on('click', '.item', function(e) {
                var target = this;
                if(!$(target).hasClass('selected')){
                    _this.goto($(e.currentTarget).find('a').attr('data-index'));
                    if (typeof _this.options.itemClickHandler === "function") {
                        _this.options.itemClickHandler.apply(target, [_this.options, e]);
                    }
                }
            });
            // this.$element.on('click', '.item', this.relatedElementSwitchingHandler);                


        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, pluginName)) {
                $.data(this, pluginName,
                    new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);
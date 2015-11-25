;(function($, window, document, undefined) {

    // Create the defaults once
    var pluginName = "photoGallery",
        defaults = {
            itemClickHandler: function(){},
            onInitialized: function() {},
            funcSync: function () {},
            nextBtn: "",
            prevBtn: "",
            duration: 500,
            thumbnailContainer: ""
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        this.$element = $(this.element);
        this.$items = this.$element.find(".item");
        this.$currentItem = this.$items.filter(".active");
        this.$animating = false;
        this.options = $.extend({}, defaults, options);
        // add Data attribute in Option
        if(this.$element.data()){
            this.options = $.extend({}, this.options, this.$element.data());
        }

        this.sync = $(this.options.thumbnailContainer).length !== 0;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    function downloadImage (item) {
        var $item = $(item);
        if($item.hasClass('loaded')){
            return $item;
        }
        var source = $item.find("source");
        source.each(function () {
          this.setAttribute('srcset', this.getAttribute('data-srcset'));
        });

        var img = $item.find("img");
        img.get(0).onload = function(){
            item.addClass('loaded');
        }

        img.get(0).src = img.attr('data-src');
        return $item;
    }

    function nextVisible(items, item) {
        var ind = parseInt( item.attr("data-index") );
        if(isNaN(ind)){
            return false;
        }
        var nextVisibleItem;
        if(ind < items.length){
            nextVisibleItem = items.filter(":gt("+ind+")").filter('.visible:first');
        }
        if(typeof nextVisibleItem === 'undefined' || nextVisibleItem.length === 0 || ind === items.length-1){
            nextVisibleItem = items.filter('.visible:first');
            if(nextVisibleItem === item){
                return false;
            }
        }
        return nextVisibleItem;
    }

    function prevVisible(items, item) {
        var ind = parseInt( item.attr("data-index") );
        if(isNaN(ind)){
            return false;
        }
        var prevVisibleItem;
        if(ind > 0){
            prevVisibleItem = items.filter(":lt("+ind+")").filter('.visible:last');
        }
        if(typeof prevVisibleItem === 'undefined' || prevVisibleItem.length === 0 ||  ind === 0){
            prevVisibleItem = items.filter('.visible:last');
            if(prevVisibleItem === item){
                return false;
            }
        }
        return prevVisibleItem;
    }

    Plugin.prototype = {
        switchItem: function (itemHide, itemShow, noSync, cb) {
            if(this.$animating){
                return;
            }
            this.$animating = true;

            var _this = this;
            itemHide.fadeOut(this.options.duration, function(){
                $(this).removeClass('active');
            });

            itemShow.fadeIn(this.options.duration, function(){
                $(this).addClass('active');
                _this.$currentItem = $(this);
            });

            if(this.sync && !noSync){
                var owlData = this.$owlCarousel.data('owl.carousel');
                var itemInd = parseInt(itemShow.attr('data-index'));
                $(_this.$owlCarousel).find(".thumb-active").removeClass('thumb-active');
                $(_this.$owlCarousel).find(".thumb-item[data-index='"+ itemInd +"']").addClass('thumb-active');
                var targetIndex = Math.floor(itemInd / owlData.settings.items);
                if(targetIndex>=0){
                    owlData.to( targetIndex );
                }
            }

            setTimeout(function (argument) {
                _this.$animating = false;
            }, this.options.duration + 100);
        },
        next: function () {
            var _this = this;
            var nextItem = nextVisible(this.$items, this.$currentItem);
            if(this.$animating || !nextItem){
                return;
            }
            this.switchItem( this.$currentItem, downloadImage(nextItem));
        },
        prev: function () {
            var _this = this;
            var prevItem = prevVisible(this.$items, this.$currentItem);
            if(this.$animating || !prevItem){
                return;
            }
            this.switchItem( this.$currentItem, downloadImage(prevItem));
        },
        first: function() {
            this.switchItem( this.$currentItem, downloadImage(this.$items.filter('.visible').first()));
        },
        goto: function (position, noSync) {
            if(position < 0 || position >= this.$items.length){
                return false;
            }
            this.switchItem( this.$currentItem, downloadImage( this.$items.eq(position) ), noSync);
        },
        filter: function (dataType) {
            if(this.$animating){
                return false;
            }
            if(!dataType){
                this.sync && this.filterThumbnail(dataType);
                this.$items.addClass('visible');
                this.goto(0);
            }else{
                this.sync && this.filterThumbnail(dataType);
                this.$items.addClass('visible').filter(":not([data-type="+ dataType +"])").removeClass('visible');
                this.first();
            }
            // Goto according thumbnail item
        },
        filterThumbnail: function (dataType) {
            
            this.changeThumbnailContainerState("loading");

            var owl = this.$owlCarousel.data('owl.carousel');

            // Keep a placeholder for owl carousel
            owl.add('<div/>', 0);
            
            for (var i = 0, itemsLength = owl._items.length ; i < (itemsLength - 1); i++) {
                owl.remove(1);
            }
            
            if(!dataType){
                $(this.options.thumbnailContainer).find('.storage .thumb-item').each(function () {
                    owl.add($(this).clone());
                });
            }else{
                $(this.options.thumbnailContainer).find('.storage .thumb-item[data-type=' + dataType + ']').each(function(){
                    owl.add($(this).clone());
                });
            }

            // remove the placeholder previously added
            owl.remove(0);
            this.$owlCarousel.trigger('initialized.owl.carousel');

            this.changeThumbnailContainerState("reveal");
        },
        changeThumbnailContainerState: function(state){
            switch (state){
                case "loading":
                    $(this.options.thumbnailContainer).addClass("reloading");
                    break;
                case "reveal":
                    $(this.options.thumbnailContainer).removeClass("reloading");
                    break;
                default:
                    break;
            }
            return;
        },
        initThumbnailControl: function (argument) {
            if(this.sync){
                var _this = this;
                this.changeThumbnailContainerState("loading");
                $(this.options.thumbnailContainer).find(".thumb-item").first().addClass("thumb-active");
                this.$owlCarousel = $(this.options.thumbnailContainer).find('.owl-carousel');
                this.$owlCarousel.on('initialized.owl.carousel', function () {
                    _this.changeThumbnailContainerState("reveal")
                });
                this.$owlCarousel.owlCarousel({
                    loop: false,
                    lazyLoad: true,
                    responsive:{
                        0:{
                            items: 3
                        },
                        640:{
                            items: 5
                        },
                        1024:{
                            items: 8
                        },
                        1200:{
                            items: 10
                        }
                    },
                    margin: 4
                });
                // this.$owlCarousel.on('changed.owl.carousel', function (e) {
                //     var owlData = _this.$owlCarousel.data('owl.carousel');
                //     console.log(owlData.relative(e.item.index));
                //     _this.$owlCarousel.find('.thumb-active').removeClass('thumb-active').find(".thumb-item").eq( owlData.relative(e.item.index) -  1);
                // });
                this.$owlCarousel.on('click', '.thumb-item', function (e) {
                    e.preventDefault();
                    $(this).parents(".photo-thumbs").find(".thumb-item").removeClass("thumb-active");
                    $(this).addClass("thumb-active");
                    _this.goto(this.getAttribute('data-index'), true);
                });

                return true;
            }
            return false;
        },
        activateThumbnailItem : function (position, sync) {
            this.$owlCarousel.data('owl.carousel').to(position);
            if(sync){
                this.goto(position);
            }
        },
        init: function() {
            var _this = this;
            this.$items.addClass('visible');
            downloadImage(this.$items.first());
            this.initThumbnailControl();
            var nextBtn = $(this.options.nextBtn);
            if(nextBtn.length != 0){
                nextBtn.on('click', function (e) {
                    e.preventDefault();
                    _this.next();
                });
            }
            var prevBtn = $(this.options.prevBtn);
            if(prevBtn.length != 0){
                prevBtn.on('click', function (e) {
                    e.preventDefault();
                    _this.prev();
                });   
            }
            // setInterval(function(){
            //     _this.prev();
            // }, 2000);
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


jQuery(function($){
    $(".photo-gallery").photoGallery({
        thumbnailContainer: "#photo-gallery-thumbnails",
        prevBtn: "#photo-gallery-prev",
        nextBtn: "#photo-gallery-next"
    });

    // Filter select from vendor on master
    $(".photo-gallery-filter").filterSelect({
        itemClickHandler: function(options, e){
            e.preventDefault();
            var type = $(e.currentTarget).find('a').attr('href').substr(1);
            if(type === "type-0"){
                type = undefined;
            }
            $(e.delegateTarget.getAttribute('data-target')).data('photoGallery').filter(type);
            if (!$(this).hasClass("current-gallery")) {
                var $this = $(this);
                $this.closest(".filter-slide").find(".current-gallery").removeClass("current-gallery");
                $this.addClass("current-gallery");
            }
        }
    });
});
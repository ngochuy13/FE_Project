/**
 * Equalize Plugin
 * @version 2.0.0-beta.3
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the auto height plugin.
     * @class The Auto Height Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Equalize = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.equalize) {
                    this.update();
                }
            }, this),
            'loaded.owl.lazy': $.proxy(function(e) {
                if (e.namespace && this._core.settings.equalize
                    && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
                    this.update();
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Equalize.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    Equalize.Defaults = {
        equalize: false
    };

    /**
     * Updates the view.
     */
    Equalize.prototype.update = function() {
        var items = this._core.$stage.children(),
            heights = [],
            maxheight = 0;

        items.css('height', 'auto');
        $.each(items, function(index, item) {
            heights.push($(item).height());
        });

        maxheight = Math.max.apply(null, heights);
        items.height(maxheight);
    };

    Equalize.prototype.destroy = function() {
        var handler, property;

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Equalize = Equalize;

})(window.Zepto || window.jQuery, window, document);



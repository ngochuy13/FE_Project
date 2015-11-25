/*===================================
    OpenDigital FrontEnd Library
    Name: CheckboxUI - ODFC-SELECT
    Author: Xuong Luu
    Version: 1.0.1
    Documentation: 
        http://wip.projectuat.com/ODFC/
    Demo:
        http://wip.projectuat.com/ODFC/
===================================*/
;
(function($, window, document, undefined) {
    var pluginName = "checkboxUI",
        // isLtIE9 = !( document.addEventListener ) && navigator.userAgent.indexOf('MSIE')>0;
        defaults = {
            onChange: function(checkbox){},
            onAfterInit: function(checkbox){},
            errorClass: 'checkbox-error',
            successClass: 'checkbox-success',
            autoTemplate: false
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.$e = $(this.element);
        this.$cb = this.$e.find('input:checkbox');
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
        init: function() {
            var _this = this;
            this.$e.addClass('odfcChbox');
            this.$e.toggleClass('disabled', this.$cb.prop('disabled'));
            this.update();
            this.bindEvents();
            if( typeof this.settings.onAfterInit == 'function'){
                this.settings.onAfterInit( this.$cb );
            }
        },
        isDisabled: function(){
            return this.$cb.get(0).disabled;
        },
        bindEvents: function() {
            var _this = this;
            var $chbox = this.$cb.first();

            $chbox.on('focus.CheckboxUI', function(){
                $(this).closest('.odfcChbox').addClass('focused');
            });
            $chbox.on('blur.CheckboxUI', function(){
                $(this).closest('.odfcChbox').removeClass('focused');
            });
            $chbox.on('change.CheckboxUI', function(e){
                //do nothing if anchor tag is placed within label
                if(e.target.nodeName.toLowerCase() === "a"){
                    return;
                }
                if(_this.isDisabled()){
                    _this.disable();
                }else{
                    _this.enable();
                    $(this).closest('.odfcChbox').toggleClass('checked', $chbox.get(0).checked);
                }
                if( typeof _this.settings.onChange === 'function'){
                    _this.settings.onChange($chbox.get(0));
                }
            });
        },
        assignToCb: function(value){
            this.$cb.get(0).checked = value;
            this.$e.toggleClass('checked', value);
        },

        //public method
        disable: function(){
            this.$cb.prop('disabled', true);
            this.$e.addClass('disabled').removeClass('focused');
        },
        enable: function(){
            this.$cb.removeAttr('disabled');
            this.$e.removeClass('disabled');
        },
        destroy: function(){
            this.$cb.off('.CheckboxUI').end().removeData('CheckboxUI');
        },
        setValue: function(option){
            if(this.isDisabled()){
                return;
            }

            var value;
            if(typeof option === 'boolean'){
                value = option;
                if($.isFunction(this.settings.onChange)){
                    this.settings.onChange(this.$cb);
                }
            }else{
                value = option.value;
                if(!option.silent && $.isFunction(this.settings.onChange)){
                    this.settings.onChange(this.$cb);
                }
            }
            if(value !== undefined){
                this.assignToCb(value);
            }
        },
        reinit: function(){
            this.$cb.off('.CheckboxUI');
            this.bindEvents();
        },
        update: function(){
            this.$e.toggleClass( 'checked', this.$cb.get(0).checked );
        },
        // validOptions = { validationRule: function(){}, errorCallback: function(){}, successCallback: function(){} };
        validate: function(validOptions){
            if( $.isFunction(validOptions.validationRule) ){
                if( !validOptions.validationRule.apply(null, [this.$e]) ){
                    this.$e.addClass( this.settings.errorClass ).removeClass( this.settings.successClass );
                    jQuery.isFunction(validOptions.errorCallback) && validOptions.errorCallback.apply(null, [this.$e]);
                }else{
                    this.$e.addClass(this.settings.successClass).removeClass(this.settings.errorClass);
                    jQuery.isFunction(validOptions.successCallback) && validOptions.successCallback.apply(null, [this.$e]);
                }
            }else{
                return;
            }
        }
    });

    $.fn[pluginName] = function(option, val) {
        var args = [];
        for(var i=1; i<arguments.length; i++){
            args.push(arguments[i]);
        }
        this.each(function() {
            var data    = $.data(this, "plugin_" + pluginName);
            var options = typeof option == 'object' && option;
            if (!data) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }else{
                var availMethod = ["destroy", "enable", "disable", "setValue", "reInit", "validate"];
                if( $.inArray(option, availMethod)>=0 ){
                    data[option].apply(data, args);
                }
            }
        });

        // chain jQuery functions
        return this;
    };

})(jQuery, window, document);
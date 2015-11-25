/*===================================
    OpenDigital FrontEnd Library
    Name: RadioUI - ODFC-RADIO
    Author: Xuong Luu
    Version: 1.0.0
    Documentation: 
        http://wip.projectuat.com/ODFC/
    Demo:
        http://wip.projectuat.com/ODFC/
===================================*/
;
(function($, window, document, undefined) {
    var pluginName = "radioUI",
        defaults = {
            onChange: function(radio){},
            onAfterInit: function(radio){},
            errorClass: 'radio-error',
            successClass: 'radio-success',
            autoTemplate: false
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.$e = $(this.element);
        this.$rd = this.$e.find('input:radio');
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
        init: function() {
            var _this = this,
                radio = this.$rd;
            this.$e.addClass('odfcRadio');
            this.$e.toggleClass('disabled', radio.prop('disabled'));
            this.update();
            this.$e.attr('data-group', radio.attr('name'));
            this.bindEvents();
            if( typeof this.settings.onAfterInit == 'function'){
                this.settings.onAfterInit( this.$rd );
            }
        },
        isDisabled: function(){
            return this.$rd.get(0).disabled;
        },
        clickHandler: function(context){
            var radioWrapper = $(context).closest('.odfcRadio');
            $(".odfcRadio[data-group='"+ radioWrapper.attr('data-group') +"']").not(radioWrapper).removeClass('checked focused');
            radioWrapper.addClass('checked focused');
        },
        bindEvents: function() {
            var _this = this;
            // ensure we have the right radio in set with first()
            var $radio = this.$rd.first();
            $radio.on('focus.RadioUI', function(){
                $(this).closest('.odfcRadio').addClass('focused');
            });
            $radio.on('blur.RadioUI', function(){
                $(this).closest('.odfcRadio').removeClass('focused');
            });
            $radio.on('change.RadioUI', function(){
                if(_this.isDisabled()){
                    _this.disable();
                }else{
                    _this.enable();
                    _this.clickHandler(this);
                }
                if($.isFunction(_this.settings.onChange)){
                    _this.settings.onChange();
                }
            });
        },
        //public method
        disable: function(){
            this.$rd.prop('disabled', true);
            this.$e.addClass('disabled').removeClass('focused');
        },
        enable: function(){
            this.$rd.removeAttr('disabled');
            this.$e.removeClass('disabled');
        },
        destroy: function(){
            this.$rd.off('.RadioUI').end().removeData('RadioUI');
        },
        setValue: function(option){
            if(this.isDisabled()){
                return;
            }

            var value;
            if(typeof option === 'string'){
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
            
            if(this.$rd.get(0).value === value){
                this.clickHandler(this.$rd);
                this.$rd.get(0).checked = true;
                $(':radio[name="'+ this.$rd.get(0).name +'"]').checked = false;
            }else{
                this.$rd.prop('checked', false).closest('.odfcRadio').removeClass("checked").addClass('focused');
            }
        },
        update: function(){
            this.$e.toggleClass( 'checked', this.$rd.get(0).checked );
        },
        reinit: function(){
            this.$rd.off('.RadioUI');
            this.bindEvents();
        },
        // validOptions = { validationRule: function(){}, errorCallback: function(){}, successCallback: function(){} };
        validate: function(validOptions){
            if( $.isFunction(validOptions.validationRule) ){
                if( !validOptions.validationRule.apply(null, [this.$e]) ){
                    this.$e.addClass(this.settings.errorClass).removeClass(this.settings.successClass);
                    jQuery.isFunction(validOptions.errorCallback) && validOptions.errorCallback();
                }else{
                    this.$e.addClass(this.settings.successClass).removeClass(this.settings.errorClass);
                    jQuery.isFunction(validOptions.successCallback) && validOptions.successCallback();
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
                var availMethod = ["destroy", "enable", "disable", "setValue", "reinit", "validate"];
                if( $.inArray(option, availMethod)>=0 ){
                    data[option].apply(data, args);
                }
            }
        });

        // chain jQuery functions
        return this;
    };

})(jQuery, window, document);
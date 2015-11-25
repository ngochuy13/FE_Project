/*===================================
    OpenDigital FrontEnd Library
    Name: SelectUI - ODFC-SELECT
    Author: Xuong Luu
    Version: 1.0.0
    Documentation: 
        http://wip.projectuat.com/ODFC/
    Demo:
        http://wip.projectuat.com/ODFC/
===================================*/
;
(function($, window, document, undefined) {
    var pluginName = "selectUI",
        defaults = {
            onBeforeChange: function(){},
            onAfterChange: function(){},
            onAfterInit: function(){},
            errorClass: 'select-error',
            successClass: 'select-success',
            autoTemplate: false,
            template: '<div class="selectUI select-primary"><div class="select-btn"><span class="value"></span><span class="arrow">+</span></div>{{select}}</div>'
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.$e = $(this.element);
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
        init: function() {
            var _this = this;
            if(this.settings.autoTemplate){
                var selectHTMLMarkup = this.settings.template.replace("{{select}}", this.$e.get(0).outerHTML);
                selectHTMLMarkup = $(selectHTMLMarkup);
                this.$e.replaceWith( selectHTMLMarkup );
                this.$e = selectHTMLMarkup;
            }
            this.$e.addClass('odfcSel');
            var selectedOption = this.$e.find('select').find("option:selected");
            this.$e.find('.value').html(selectedOption.text());
            this.$e.toggleClass('pristine', selectedOption.attr('value')==="");
            this.$e.toggleClass('disabled', this.$e.find('select').prop('disabled'));
            this.bindEvents();
            if( typeof this.settings.onAfterInit == 'function'){
                this.settings.onAfterInit();
            }
        },
        isDisabled: function(){
            return this.$e.find('select').get(0).disabled;
        },
        bindEvents: function() {
            //TODO: These code for better selectUI
            // $(this.element).on('click', 'select', function(){

            // });
            var _this = this;
            var $select = this.$e.find('select').first();

            $select.on('click.selectUI focus.selectUI', function(){
                if(_this.isDisabled()){
                    _this.disable();
                }else{
                    _this.enable();
                    $(this).closest('.odfcSel').addClass('active');
                }
            });

            $select.on('blur.selectUI', function(){
                $(this).closest('.odfcSel').removeClass('focused active');
            });

            $select.on('change.selectUI', function(){
                if( $.isFunction(_this.settings.onBeforeChange) ){
                    _this.settings.onBeforeChange()
                }

                if(_this.isDisabled()){
                    _this.disable();
                }else{
                    var fakeSelect = $(this).closest('.odfcSel');
                    var selectedOption = $select.find("option:selected");
                    fakeSelect.find('.value').html(selectedOption.text());
                    fakeSelect.toggleClass('pristine', selectedOption.attr('value')==="")
                }

                if( $.isFunction(_this.settings.onAfterChange) ){
                    _this.settings.onAfterChange();
                }
            });
        },
        //public method
        disable: function(){
            this.$e.find('select').prop('disabled', true);
            this.$e.addClass('disabled').removeClass('focused active blur');
        },
        enable: function(){
            this.$e.find('select').removeAttr('disabled');
            this.$e.removeClass('disabled');
        },
        destroy: function(){
            this.$e.find('select').off('.selectUI').end().removeData('selectUI');
        },
        setValue: function(value){
            if(!this.isDisabled()){
                $.isFunction(this.settings.onBeforeChange) && this.settings.onBeforeChange();
                var select = this.$e.find('select').get(0);
                select.value = value;
                this.$e.find('.value').html( $(select).find("option:selected").text() );
                $.isFunction(this.settings.onAfterChange) && this.settings.onAfterChange();
            }
        },
        update: function(){
            var select = this.$e.find('select').get(0);
            select.value = value;
            this.$e.find('value').html( select.selectedOptions[0].text );  
        },
        reinit: function(){
            this.$e.find('select').off('.selectUI');
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
                var availMethod = ["destroy", "enable", "disable", "setValue", "update", "reinit", "validate"];
                if( $.inArray(option, availMethod) >=0 ){
                    data[option].apply(data, args);
                }
            }
        });

        // chain jQuery functions
        return this;
    };

})(jQuery, window, document);
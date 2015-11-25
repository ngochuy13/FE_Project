$(function(){
  // $.validator.addMethod('phone', function(value) {
  //   return /^[\d]{8,15}$/.test(value);
  // }, 'Please enter correct mobile number.');

  window.htmlUnifier = (function($){
    var view = $(".validate-form");
    var module = function(){};

    module.parseRaioCheckbox = function(block){
      var affectedView;
      if(typeof block === 'undefined'){
        affectedView = view;
      }else{
        affectedView = block;
      }
      affectedView.find(".checkbox-group, .radio-group").each(function () {
        $(this).find("br").remove();
        var input = $(this).find('input');
        var type = input.first().attr('type');
        var className = ' ' + type + "UI " + type + "-primary";
        input.each(function () {
          $(this).add( $(this).next() ).wrapAll("<div class='input-wrapper ui-" + type + ' ' + className + "'></div>");
        });

        var oddLabel = $(this).children('.ExplanationText');
        if(oddLabel.length){
          $(this).find('.checkboxUI label').html( oddLabel.html() );
          oddLabel.remove();
        }
      });


    };
    module.parseValidationAttr = function(block){
      var affectedView;
      if(typeof block === 'undefined'){
        affectedView = view;
      }else{
        affectedView = block;
      }
      affectedView.find(".form-group").each(function () {
        var input = $(this).find('input[type!="hidden"], textarea, select');
        var attrSpan = $(this).find('.attributes.hide');
        if(input.length === 1){
          if(attrSpan.length === 0){
            return;
          }
          var attrsObj = {};
          var attrsArr = attrSpan.get(0).attributes;
          $.each(attrsArr, function( n, i ) {
            if(i.name.indexOf('data-') >= 0){
              attrsObj[i.name] = i.value;
            }
          });
          input.attr(attrsObj);
        }
      });
    };

    module.init = function(){
      module.parseRaioCheckbox();
      module.parseValidationAttr();
      return module;
    }

    return module.init();
  })(jQuery);


  var form = $(".validate-form");
  var validateCarModel = function(carModel){ 
    if(carModel.find('input[type="checkbox"]:checked').length > 0){
      carModel.removeClass('has-error');
      carModel.find('label.error-carmodel').addClass('hide');
      return true;
    }else{
      carModel.addClass('has-error');
      carModel.find('label.error-carmodel').removeClass('hide');
      return false;
    }
  }
  if(form.length){

    var textareaCharCount = form.find(".charcount textarea");
    if(textareaCharCount.length){
      textareaCharCount.each(function (argument) {
        var counter = $(this).closest('.form-group').find('.counter');
        if(counter.length===0){
          return;
        }
        this.counter = counter;
        this.charmaxlength = parseInt($(this).attr('maxlength'));
        
        $(this).on('keyup', function(){
          this.counter.html( this.charmaxlength - $(this).val().length );
        });
      });
    }

    form.find(".form-group").each(function () {
      var input = $(this).find('input, select, textarea');
      var attrSpan = $(this).find('.attributes.hide');
      if(input.length === 1){
        if(attrSpan.length === 0){
          return;
        }
        var attrsObj = {};
        var attrsArr = attrSpan.get(0).attributes;
        $.each(attrsArr, function( n, i ) {
          if(i.name.indexOf('data-') >= 0){
            attrsObj[i.name] = i.value;
          }
        });
        input.attr(attrsObj);
      }
    });

    form.find('.checkboxUI').checkboxUI();
    form.find('.radioUI').radioUI();
    form.find('select').selectpicker({
      style: 'btn-info',
      size: 5,
      caretHTML: '<span class="glyphicon glyphicon-chevron-down"></span>'
    }).on('changed.bs.select', function(e, val){
      $(this).valid();
    });

    /*
    if(typeof carModelIMG == 'undefined'){
      var carModelIMG = {
        "RACTIS": "/Toyota/media/Cars/Ractis/Rastic_01.png",
        "PRIUS C": "/Toyota/media/Cars/Prius-C/Pirus_C_01.png",
        "SPADE": "/Toyota/media/Cars/Spade/spade_001.jpg",
        "SIENTA": "/Toyota/media/Cars/Sienta/sienta_001.jpg",
        "WISH": "/Toyota/media/Cars/Wish/Wish_01.png",
        "NOAH": "/Toyota/media/Cars/Noah/noah-001.jpg",
        "PRIUS V": "/Toyota/media/Cars/Prius-V/Prius_V_01.png",
        "PREVIA": "/Toyota/media/Cars/Previa/Previa_01.png",
        "ALPHARD": "/Toyota/media/Cars/Alphard-and-Vellfire/Alphard_01.png",
        "VELLFIRE": "/Toyota/media/Cars/Alphard-and-Vellfire/Vellfire_01.png",
        "COROLLA": "/Toyota/media/Cars/Corolla/Corolla_01.png",
        "CAMRY": "/Toyota/media/Cars/Camry/camry01_1.png",
        "MARK X": "/Toyota/media/Cars/Mark-X/MarkX_01.png",
        "PRIUS": "/Toyota/media/Cars/Prius/Prius_01.png",
        "RAV4": "/Toyota/media/Cars/RAV4/Rav4_01.png",
        "PRADO": "/Toyota/media/Cars/Prado/Prado_001.jpg",
        "86": "/Toyota/media/Cars/86/86_001.jpg",
        "HIACE": "/Toyota/media/Cars/Hiace/hiace.png"
      };
    }
    */
    
    var carModel = $('.car-model');
    if(carModel.length){
      carModel.find('input[type="checkbox"]').on('change', function(){
        validateCarModel(carModel);
      });

      // show img for ipad , desktop
      if(carModel.closest('.test-drive').length && (typeof carModelIMG == 'object')){
        carModel.find('input').each(function(index, el) {
          // if($(this).attr('data-img')){
          //   var imgSRC = $(this).attr('data-img');
          //   var img = $('<img class="car-model__img">');
          //   img.attr('src', imgSRC);
          //   $(this).before(img);
          // }
          var value = $(this).val().toUpperCase();
          if(carModelIMG[value]){
            var imgSRC = carModelIMG[value];
            var img = $('<img class="car-model__img">');
            img.attr('src', imgSRC);
            $(this).before(img);
          }
        });
      }
    }

    // init datepicker
    if(form.find('.datepicker-group').length){
      form.find('.datepicker-group input').datepicker({
        format: 'dd/mm/yyyy',
        startDate: new Date(),
        autoclose: true,
        orientation: 'bottom'
      });
      form.find('.datepicker-group .icon').on('click' , function (){
        form.find('.datepicker-group input').datepicker('show');
      });
    }

    form.on('focusin', 'input, select, textarea', function(){
      $(this).closest('.form-group').addClass('focused');
    }).on('focusout', 'input, select, textarea', function(){
      $(this).closest('.form-group').removeClass('focused');
    });
    form.validate({
      submitHandler: function(formObj){
        var carModel = form.find('.car-model');
        if(carModel.length){
          return validateCarModel(carModel);
        }
        return true;
      },
      highlight: function (element, errorClass) {
        $(element).closest('.form-group').addClass('has-error');
      },
      unhighlight: function (element, errorClass) {
        $(element).closest('.form-group').removeClass('has-error');
      },
      errorPlacement: function (error, element) {
        var floatLabel = false;
        var tagName = element[0].tagName.toLowerCase();
        if(tagName === 'input'){
          var type = element.attr('type').toLowerCase();
          if(type === "text" || type === "date" || type === "email"){
            floatLabel = true;
          }
        }else if(tagName === 'textarea'){
          floatLabel = true;
        }
        floatLabel && error.addClass('float-label');
        element.closest('.form-group').append(error);
        error.removeAttr('display','none');
      }
    });

    $('#numvehicleinquiry').on('change', function (e) {
        var nu = $('#numvehicleinquiry').val();
        var template = $.validator.format( $.trim( $("#vehicle-inquiry-template").text() ) );
        var formInputsString = "";
        var formInputsObj;
        $('#templateNumberVehicleInquiry').html('');
        if (nu.length > 0) {
            for (var i = 0 ; i < nu; i++) {
              formInputsString += template(i);
            }
            formInputsObj = $(formInputsString);
            htmlUnifier.parseValidationAttr( formInputsObj );
            $('#templateNumberVehicleInquiry').append( formInputsObj );
        }

    });
  }
})
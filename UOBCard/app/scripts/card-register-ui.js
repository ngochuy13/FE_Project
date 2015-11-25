window.accounting = window.accounting || {};
window.UOB = window.UOB || {};
window.UOB.formMethod = window.UOB.formMethod || {};

window.needSaveLead = true;

window.UOB.formMethod.numeralsOnly = function(event, el) {
  // Allowed key press on input fields only numerals with decimal points
  var val = $(el).val();
  // Force only one "." in the text field
  if (val.indexOf('.') !== -1) {
    if (event.keyCode === 190 || event.keyCode === 110) {
      event.preventDefault();
    }
  }
  // Allow: backspace, delete, tab, escape, enter, period, Ctrl+A, home, end, left, right
  if ($.inArray(event.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 || (event.keyCode === 65 && event.ctrlKey === true) || (event.keyCode >= 35 && event.keyCode <= 39)) {
    // let it happen, don't do anything
    return;
  } else {
    // Ensure that it is a number and stop the keypress
    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
      event.preventDefault();
    }
  }
};

window.UOB.formMethod.formatCurrency = function(event, el) {
  var v = window.accounting.formatMoney($(el).val(), "", 2);
  $(el).val(v);
};

window.UOB.formMethod.updateLabelDim = function(element){
  $(element).find(".input-control-group").each(function(){
    var maxWidth = 0;
    var styleAttr = $(this).find("label.radio-input").attr('style');
    if(styleAttr && styleAttr.indexOf('width')>=0){
      return;
    }
    $(this).find("label.radio-input:not(:hidden)").each(function(){
      if(maxWidth < $(this).width()+2){
        maxWidth = $(this).width()+2;
      }
    }).width(maxWidth);
  });
  var radioInput = $(element).find('.radio-input');
  if(radioInput.first().data('styleCache')){
    $.fn.matchHeight._update();
  }else{
    $(element).find('.radio-input').matchHeight();
  }
};


jQuery(function($){

  //============================ Validation rules

  $.validator.addMethod('username', function(value) {
      return !(/[!@#$%\^&*(){}[\]<>?/|\-]/.test(value));
    }, 'Please enter a valid name.');

  $.validator.addMethod('NRIC', function(value) {
    return /^[STFGstfg]\d{7}[A-Za-z]$/.test(value);
  }, 'Please enter a valid NRIC code.');

  $.validator.addMethod('money', function(value) {
    return window.accounting.unformat(value) > 0;
  }, 'This field is required.');

  $.validator.addMethod('yearOldRule', function(value) {
    var currdate = new Date();
    currdate.setFullYear(currdate.getFullYear() - 21);
    var parts = value.split('/');
    var dateObj = new Date(parts[2],  parts[1]-1, parts[0]);

    var birthdate = Date.parse(dateObj);

      return (currdate - birthdate) > 0;

    }, 'Need to be greater than 21 years old!!');

  $.validator.addMethod('mobile', function(value) {
    return /^[89]\d{7}$/.test(value);
  }, 'Please enter correct mobile number.');

  $.validator.addMethod('phone', function(value) {
    return $.trim(value)==="" || /^[6]\d{7}$/.test(value);
  }, 'Please enter correct phone number.');

  $(".checkbox-item input[type='checkbox']").unbind('click').bind('click', function(){
    if($(this).is(':checked')){
      $(this).closest('.checkbox-item').addClass('checked');
    }else{
      $(this).closest('.checkbox-item').removeClass('checked');
    }
  });

  $('#tab-required-documents a').click(function (e) {
    e.preventDefault()
    $(this).tab('show');
  });

  window.FormStatus = (function() {
    var module = {},
    view = $('.form-status');

    module.updateStatus = function(step){
      if(step === 1){
        view.find('li').removeClass('active').filter('.step-1').addClass('active');
      }else if(step === 2){
        view.find('li').removeClass('active').filter('.step-2, .step-1').addClass('active');
      }
    };

    module.initUI = function(){
    };

    module.init = function(){
      view.find('a').on('click', function(e){
        e.preventDefault();
        var liEle = $(this).closest('li');
        if(liEle.hasClass('active')){
          if( !$("#" + liEle.attr("data-related-step")).hasClass('hide') ){
            return;
          }
          $('.card-register-step').addClass('hide');
          var relatedStep = liEle.attr("data-related-step");
          if(relatedStep == 'card-register-step-1'){
            $(".header").toggleClass('in-step-1', true).sticky('update');
            $(".status-percent").css('width', '2%');
          }else{
            $(".header").toggleClass('in-step-1', false).sticky('update');
            $(".status-percent").css('width', '28%');
          }
          $("#" + relatedStep).removeClass('hide');
          setTimeout(function(){
            window.UOB.formMethod.updateLabelDim("#" + relatedStep);
          },0);
          liEle.addClass('active')
            .nextAll().removeClass('active');
        }
      });

      return module;
    };

    return module.init();

  })();

  window.CardRegistration = (function() {
    var module = {},
        formStep1,
        formStep2,
        processBar,
        validationRule = {
          yearofLivingInAboveAddr: {
            require_from_group: [1, ".duration-date-group"]
          },
          monthofLivingInAboveAddr: {
            require_from_group: [1, ".duration-date-group"]
          },
          yearofEmployment: {
            require_from_group: [1, ".duration-date-group-2"]
          },
          monthofEmployment: {
            require_from_group: [1, ".duration-date-group-2"]
          },
          krisflyerNumber: {
            require_from_group: [1, ".kris-flyer"]
          },
          asiaMemberNumber: {
            require_from_group: [1, ".kris-flyer"]
          },
          CPFStatementDate: {
            required: function(){
              return $("#check-confirm-cpf-submission:checked").length === 1;
            }
          }
        },
        validator,
        singCurrencyFormat = wNumb({
          decimals: 0,
          thousand: ',',
          prefix: 'S$'
        });


    // Scrolling Manipulation ==================================================================
    var scrollTop = function(top) {
      $('html, body').animate({
        scrollTop: top
      }, 200);
    };
    var scrollToErrorField = function() {
      var errorList = $('body').find('.form-group-container.error:not(:hidden)');
      if(errorList.length){
        var top = $(errorList).eq(0).offset().top;
      }else{
        var cbError = $('body').find('.checkbox-item .error:not(:hidden)');
        var top = $(cbError).eq(0).closest('.checkbox-item').offset().top;
      }
      if($(window).width()>=1024){
        top-= $(".header").height();
      }
      scrollTop(top);
    };

    // Validation Handler ======================================================================
    var errorPlacementCustom = function(error, element) {
      var ancestorEle = $(element).closest('.form-group-container');
      if(ancestorEle.length){
        ancestorEle.append( error );
      }else{
        $(element).parent().append( error );
      }
    };

    var highlightHandler = function(element, error) {
      $(element).closest('.form-group-container').addClass('error');
    };

    var unhighlightHandler = function(element, error) {
      $(element).closest('.form-group-container').removeClass('error');
    };    

    var updateHeaderIsStep1 = function(isStep1){
      $(".header").toggleClass('in-step-1', isStep1).sticky('update');
    };

    // Submit Step Initialize =================================================================
    var submitStepInit = function(){
      formStep1.on('submit', function(e){
        if(e.originalEvent){
          return false;
        }
      });
      formStep2.on('submit', function(e){
        if(e.originalEvent){
          return false;
        }
      });

      formStep1.find('.step-1-submission .btn-submit').on('click', function(e){
        e.preventDefault();
        if(formStep1.valid()){ 
          updateHeaderIsStep1(false);
          formStep1.addClass('hide');
          formStep2.removeClass('hide').find('.frm-name-card input').focus();
          FormStatus.updateStatus(2);
          scrollTop(0);
          processBar.css('width', '28%');
          setTimeout(function(){
            window.UOB.formMethod.updateLabelDim('.card-register-step-2');
          },0);
        }else{
          scrollToErrorField();
        }
      });
      
      formStep2.find('.step-2-submission .btn-submit').on('click', function(e){
        e.preventDefault();
        if(formStep2.valid()){
          window.needSaveLead = false;
          formStep2.get(0).submit();
        }else{
          scrollToErrorField();
        }
      });
      // Back to previous step
      formStep2.find('.btn-edit-register').on('click', function(){
        FormStatus.updateStatus(1);
        scrollTop(0);
        processBar.css('width', '2%');
      });

    };
    
    module.navigateByHash = function(step){
      if(step === 1){
        formStep2.addClass('hide');
        formStep1.removeClass('hide');
        updateHeaderIsStep1(true);
        FormStatus.updateStatus(1);
      }else if(step === 2){
        formStep1.css({
          "width": 1,
          "height": 1,
          "position": "absolute"
        }).removeClass('hide');
        if(formStep1.valid()){
          formStep1.removeAttr('style').addClass('hide');
          formStep2.removeClass('hide');
          updateHeaderIsStep1(false);
          FormStatus.updateStatus(2);
        }else{
          window.location.hash = "#step-1";
          formStep1.removeAttr('style');
          formStep2.addClass('hide');
          FormStatus.updateStatus(1);
        }
      }
    };

    // Init =================================================================================
    module.init = function() {
      // Define formStep1 and other needed elements
      formStep1 = $('.card-register-step-1');
      formStep2 = $('.card-register-step-2');
      if (formStep1.length === 0 || formStep2.length === 0) {
        return module;
      }
      processBar = $('.card-register-page .process-bar .status-percent');

      var unloadHandler = function(){
        if(window.needSaveLead){
          var dataF1 = $("#card-register-step-1").serializeArray();
          var dataF2 = $("#card-register-step-2").serializeArray();
          var data = $.merge(dataF1, dataF2);
          $.ajax({
            type: "POST",
            url: $("#lead-update-url").attr('data-lead-url'),
            data: data,
            async: false
          });
          return 'Do you want to leave this page ?';
        }else{
          return;
        }
      };

      window.onbeforeunload = unloadHandler;

      //Remove read full text link after clicking to show more content
      $(".read-full-text-disappear").on('click', function(){
        $(this).hide();
      });

      if($('.selectUI').length){
        $('.selectUI').selectUI({
          autoTemplate: true,
          onAfterChange: function(el){
            $(el).valid();
          }
        });
      }

      $(".form-group-fulldate-group").each(function(){
        $(this).find('.date-inputs input').on('change', function(){
          var parent = $(this).parent();
          var inputs = parent.children('input');
          parent.prev().val( inputs.get(0).value + '/' + inputs.get(1).value + '/' + inputs.get(2).value ).trigger('keyup');
        }).filter(':not(.year-input)').on('keyup', function(){
          if(this.value.length==2){
            $(this).next().next().focus().val("");
          }
        });
        $(this).find('.resembled-date').on('focus', function(){
          $(this).prev().find('input:first').focus();
        })
      });

      $(".nric-input").each(function(){
        var $sibls = $(this).siblings('[type=hidden]');
        $(this).val( $sibls.filter('.nric-1').val() + $sibls.filter('.nric-2').val() + $sibls.filter('.nric-3').val() );
        $(this).on('keyup',function(){
          var $siblings = $(this).siblings('[type=hidden]');
          $siblings.filter('.nric-1').val(this.value.substr(0,1));
          $siblings.filter('.nric-2').val(this.value.substr(1,7));
          $siblings.filter('.nric-3').val(this.value.substr(8,1));
        });
      });

      $(".form-group-container-date").each(function(){
        $(this).find('input').on('keyup', function(){
          if(this.value.length==2){
            $(this).next().focus();
          }
        });
      });

      var formSteps = $();
      formSteps = formSteps.add(formStep1).add(formStep2);

      formSteps.find('input[data-type="numerals"]').on('keydown', function(event) {
        window.UOB.formMethod.numeralsOnly(event, $(this));
      });
      formSteps.find('input[data-format="currency"]').on('blur', function(event) {
        window.UOB.formMethod.formatCurrency(event, $(this));
      });

      formSteps.find('[name="SingaporeNRIC"], [name="SingaporePR-NRIC"]').on('change', function(){
        $('[name="' + $(this).attr('data-binding-field') + '"]').val(this.value);
      });
      
      validator1 = formStep1.validate({
        rules: validationRule,
        errorElement: 'span',
        errorPlacement: errorPlacementCustom,
        highlight: highlightHandler,
        unhighlight: unhighlightHandler,
        focusinvalid: false,
        ignore: ".ignore, :hidden"
      });
      validator2 = formStep2.validate({
        rules: validationRule,
        errorElement: 'span',
        errorPlacement: errorPlacementCustom,
        highlight: highlightHandler,
        unhighlight: unhighlightHandler,
        focusinvalid: false,
        ignore: ".ignore, :hidden"
      });

      submitStepInit()


      // Get all sections depends on specific fields
      $("div[data-related-to]").each(function(){
        var relatedFieldName = $(this).attr("data-related-to");
        var relatedFieldVal = $(this).attr("data-related-val");
        var _this = $(this);
        // Based on related section with specific value, sections will appear or hidden by update value of radio.
        $("input[type='radio'][name='" + relatedFieldName + "']").on('change', function(){
          var relatedFieldValArr = relatedFieldVal.split("|");
          if($.inArray(this.value, relatedFieldValArr) >= 0){
            _this.removeClass('hide');
            setTimeout(function(){
              window.UOB.formMethod.updateLabelDim(_this);
            },0);
          }else{
            _this.addClass('hide');
          }
        });
      });
      

      $("input[name='company']").on('change', function(){
        formStep1.find('span.company-name').html(this.value);
      });

      $(".form-group label.radio-input")
        .on('click', function(){
          $(this).addClass('selected').siblings().removeClass('selected');
        })
        .find("input").filter(":checked").parent().addClass("selected");

      var limit = $("#card-limit").val();
      limit = isNaN(limit) ? 4000 : parseInt(limit);
      $('#card-limit-slider .range-slider').noUiSlider({
          start: limit,
          range: {
              'min': [2000, 100],
              'max': 50000
          }
      }).Link('lower').to('-inline-<div class="range-slider-value has-text"></div>', function(value) {
          var val = Math.round(value);
          $("#card-limit").val(window.accounting.formatMoney(val, "", 2));
          $(this).html(
              '<span>Card Limit</span><br>' +
              '<strong>' + singCurrencyFormat.to(val) + '</strong>'
          );
          $("#card-limit-slider").find(".noUi-marker-large").removeClass('active')
            .filter(":lt(" + Math.floor(val/10000) + ")").addClass('active');
      });
      $('#card-limit-slider .range-slider').noUiSlider_pips({
          mode: 'values',
          values: [10000, 20000, 30000, 40000],
          format: singCurrencyFormat,
          density: 1
      });


      $("[name='name_creditcard']").on('change', function(){
        $('.card-name').html(this.value);
      });

      // formStep1.find("#check-confirm-cpf-submission").on('change', function(){
      //   if(this.checked){
      //     var cpfsubmissiondateEle = formStep1.find(".CPFSubmissionDate");
      //     var date = new Date();
      //     var day = date.getDate()
      //     var month = date.getMonth()+1 < 10 ? "0" + (date.getMonth()+1) : date.getMonth()+1
      //     var year = date.getFullYear();
      //     cpfsubmissiondateEle.find('.fake-day').val(day);
      //     cpfsubmissiondateEle.find('.fake-month').val(month);
      //     cpfsubmissiondateEle.find('.fake-year').val(year).trigger('change');
      //   }
      // });

      if(window.location.hash === '#step-2'){
        module.navigateByHash(2);
        window.UOB.formMethod.updateLabelDim('.card-register-step-2');
        $('.status-percent').css('width','28%');
      }else{
        module.navigateByHash(1);
        window.UOB.formMethod.updateLabelDim('.card-register-step-1');
        $('.status-percent').css('width','2%');
      }

      return module;
    };

    return module.init();
  })();


  if($("[placeholder]:first").length){
    $("[placeholder]").placeholder();
  }


});

window.onload = function(){

};

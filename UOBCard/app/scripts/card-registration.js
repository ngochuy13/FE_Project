window.accounting = window.accounting || {};
window.UOB = window.UOB || {};
window.UOB.formMethod = window.UOB.formMethod || {};

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
  })

  window.CardRegistration = (function() {
    var module = {},
        view,
        formStatus = $(".form-status"),
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
        cardData = {
        'one':{
          'title': 'One Card',
          'sms-link': 'https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=ONE_Card',
          'card-face': 'images/card-register/card-faces/one-card-face.png'
        },
        'delight':{
          'title': 'Delight Card',
          'sms-link': 'https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=Delight_CreditCard',
          'card-face': 'images/card-register/card-faces/delight-card-face.png'
        },
        'lady':{
          'title': 'Lady\'s Card',
          'sms-link': 'https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=Ladys_Platinum_Card',
          'card-face': 'images/card-register/card-faces/lady-card-face.png'
        },
        'preferred-platinum-visa':{
          'title': 'Preferred Platinum VISA Card',
          'sms-link': 'https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=preferredplatinumcard',
          'card-face': 'images/card-register/card-faces/preferred-platinum-visa-face.png'
        },
        'prvi-amex':{
          'title': 'PRVI Miles American Express Card',
          'sms-link': 'http://www.uob.com.sg/personal/cards/credit/prvimilesamex-apply.html',
          'card-face': 'images/card-register/card-faces/prvi-amex-face.png'
        },
        'prvi-visa':{
          'title': 'PRVI Miles VISA Card',
          'sms-link': ' http://www.uob.com.sg/personal/cards/credit/prvimilesvisa-apply.html',
          'card-face': 'images/card-register/card-faces/prvi-visa-face.png'
        },
        'prvi-mastercard':{
          'title': 'PRIVI Miles MasterCard',
          'sms-link': 'http://www.uob.com.sg/personal/cards/credit/prvimilesmaster-apply.html',
          'card-face': 'images/card-register/card-faces/prvi-mastercard-face.png'
        },
        'jcb':{
          'title': 'JCB Card',
          'sms-link': 'https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=JCB_Platinum',
          'card-face': 'images/card-register/card-faces/jcb-face.png'
        },
        'metro':{
          'title': 'Metro Card',
          'sms-link': 'https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=Metro-UOB_Platinum',
          'card-face': 'images/card-register/card-faces/metro-face.png'
        },
        'singtel':{
          'title': 'Singtel Card',
          'sms-link': 'https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=SingTel-UOB_Platinum',
          'card-face': 'images/card-register/card-faces/singtel-face.png'
        },
        'unionpay':{
          'title': 'Union Pay Card',
          'sms-link': 'https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=UnionPay_Platinum',
          'card-face': 'images/card-register/card-faces/union-pay-face.png'
        },
        'visa-signature':{
          'title': 'Visa Signature Card',
          'sms-link': 'https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=Visa_Signature',
          'card-face': 'images/card-register/card-faces/visa-signature-face.png'
        },
        'cash-plus':{
          'title': 'Cash Plus',
          'sms-link': 'https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=Visa_Signature',
          'card-face': 'images/card-register/card-faces/cash-plus-face.png'
        },
        'preferred-platinum-card-account':{
          'title': 'Preferred Platinum Card Account',
          'sms-link': 'https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=Preferred_Platinum_Account',
          'card-face': 'images/card-register/card-faces/prvi-amex-face.png',
          'card-face-second': 'images/card-register/card-faces/prvi-mastercard-face.png',
          'header-image': 'images/card-register/card-faces/prvi-amex-face-sm.png',
          'header-image-second': 'images/card-register/card-faces/prvi-mastercard-face-sm.png'
        }
      },
      singCurrencyFormat = wNumb({
        decimals: 0,
        thousand: ',',
        prefix: 'S$'
      });

    // Card Initialization for showing up corresponding cards ==================================
    var cardInit = function (){
      var cardType;
      if($("input[name='cardType']").length){
        cardType = $("input[name='cardType']").val();
      }else{
        if(!window.location.hash){
          cardType = document.location.hash.substr(1);
        }else{
          if(window.location.hash.length){
            cardType = window.location.hash.substr(1);
          }
        }
      }
      if(cardType!=="" && cardData[cardType]){
        $('.apply-vs-sms .media-heading a').attr('href', cardData[cardType]['sms-link']);
        $('.card-icon img').attr('src', cardData[cardType]['card-face']);
        $('.card-wrapper .card-face[data-card="first"]').attr('src', cardData[cardType]['card-face']);
        $(".header-content .card-title").html(cardData[cardType]['title']);
      }

      var normalCard = ['one-card', 'delight-card', 'preferred-platinum-visa', 'prvi-amex', 'prvi-mastercard', 'jcb', 'metro', 'union-pay', 'visa-signature', 'visa-infinite', 'preferred-platinum-card-account'];
      var platinumCard = $('.card-wrapper .card-face[data-card="second"]');

      switch(cardType){
        case "lady":
          $(".customer-title input[data-type='Male']").closest(".radio-input").hide('hide');
          $("input[name='gender'][value='Male']").closest(".radio-input").addClass('hide');
          break;
        case "singtel":
          $(".singtel-acc").removeClass('hide');
          break;
        case "preferred-platinum-card-account":
          $(".header").unstick();
          platinumCard.attr('src', cardData[cardType]['card-face-second']).removeClass('hide');
          platinumCard.parents('.card-wrapper').removeClass('hide');
          $('.card-icon img').attr('src', cardData[cardType]['header-image']);
          $('.card-icon').append( $("<img />") );
          $('.card-icon img:eq(1)').load(function(){
            $(".header").sticky();
          }).attr('src', cardData[cardType]['header-image-second']);
          break;
        default:
          break;
      }
    };

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

    // Data processing of 3 steps ==============================================================
    var processStep1Data = function(){
      var existCustomer = view.find(".customer-type-switch input:checked").val();
      $(".lead-form-wrapper").children(":not(p)").not('.hide').each(function(){
        var fullName = $(this).find(".full-name input").val();
        var email = $(this).find(".email input").val();
        var mobile = $(this).find(".mobile input").val();
        var title = $(this).find(".customer-title input:checked").val();
        view.find("[name='fullnameOnCard']").val(fullName);
        view.find("[name='fullname']").val(fullName);
        view.find("[name='email']").val(email);
        view.find("[name='mobile']").val(mobile);
        view.find("[name='title']").val(title);
        view.find("[name='existingCustomer']").val(existCustomer);
        view.find('.card-register-step-2 .card-name').html( fullName );

        var selectedTitle = $(this).find(".customer-title input:checked").val();
        if(selectedTitle==='Mr' || selectedTitle==='Dr'){
          var gender = "Male";
        }else{
          var gender = "Female";
        }
        view.find("[name='gender']")
            .removeAttr('checked')
            .parent().removeClass('selected').end()
            .filter("[value='" + gender + "']").prop('checked', 'checked')
            .parent().addClass('selected')
            .siblings().removeClass('selected');
      });
    };

    var processStep2Data = function(){
      var form = view.get(0);
      $(".card-register-step-3 tr").removeClass('hide');
      $(".card-register-step-3 .label-data").each(function(){
        var dataModel = $(this).attr('data-model');
        if( !view.get(0)[ dataModel ] ){
          var val = "";
          switch(dataModel){
            case "NRIC":
              var seletedNationailty = $("input[name='nationality']:checked").val();
              if(seletedNationailty == "Singaporean"){
                val = view.get(0)['SingaporeNRIC'].value;
              }else if(seletedNationailty == "Singapore PR"){
                val = view.get(0)['SingaporePR-NRIC'].value;
              }else{
                val = view.get(0)['passport'].value;
              }
              break;
            case "timeofLivingInAboveAddr":
              val = form['yearofLivingInAboveAddr'].value + ' year(s) ' + 
                    form['monthofLivingInAboveAddr'].value + ' month(s)';
              break;
            case "timeofEmployment":
              val = form['yearofEmployment'].value + ' year(s) ' + 
                    form['monthofEmployment'].value + ' month(s)';
              break;
            case "country":
              var seletedNationailty = $("input[name='nationality']:checked").val();
              if(seletedNationailty == "Singapore PR"){
                val = view.get(0)['countrySingPR'].value;
              }else if(seletedNationailty == "Foreigners"){
                val = view.get(0)['countryForeigner'].value;
              }
              if(val===""){
                $(this).parent().addClass('hide');
              }
              break;
            default:
              break;
          }
          $(this).html( val );
        }else{
          var associatedField = view.find('[name=' + dataModel + ']');
          if(associatedField.filter(":visible").length){
            var val;
            if(associatedField.get(0).tagName.toLowerCase() === 'input'){
              if(associatedField.attr('type') === "radio"){
                val = associatedField.filter(":checked").val();
              }else{
                val = associatedField.val();
              }
            }else if(associatedField.get(0).tagName.toLowerCase() === 'select'){
              val = associatedField.val()
            }

            if(val===""){
              $(this).parent().addClass('hide');
            }else{
              $(this).html( val );
            }
          }else{
            if(associatedField.filter("[type='hidden']").length){
              $(this).html( associatedField.val() ); 
            }else{
              $(this).html("").parent().addClass('hide');
            }
          }
        }
      });
      $(".card-register-step-3 .confirm-table").each(function(){
        if($(this).find("tr:not('.hide')").length === 0){
          $(this).addClass('hide').prev('h3').addClass('hide');
        }else{
          $(this).removeClass('hide').prev('h3').removeClass('hide');
        }
      });
    };

    var updateHeaderIsStep1 = function(isStep1){
      $(".header").toggleClass('in-step-1', isStep1).sticky('update');
    };

    var updateLabelDim = function(element){
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
    }

    // Submit Step Initialize =================================================================
    var submitStepInit = function(){
      view.on('submit', function(e){
        if(e.originalEvent){
          return false;
        }
      });

      view.find('.step-1-submission .btn-submit').on('click', function(e){
        e.preventDefault();
        if(view.valid()){
          updateHeaderIsStep1(false);
          view.find('.card-register-step-1').addClass('hide');
          view.find('.card-register-step-2').removeClass('hide').find('.frm-name-card input').focus();
          formStatus.find("[data-related-step='card-register-step-2']").addClass('active')
          .prevAll().addClass('active').end()
          .nextAll().removeClass('active');
          scrollTop(0);
          processBar.css('width', '28%');
          processStep1Data();
          updateLabelDim('.card-register-step-2');
        }else{
          scrollToErrorField();
        }
      });

      view.find('.step-2-submission .btn-submit').on('click', function(e){
        e.preventDefault();
        if(view.valid()){
          processStep2Data();
          view.find('.card-register-step-2').addClass('hide');
          view.find('.card-register-step-3').removeClass('hide');
          formStatus.find("[data-related-step='card-register-step-3']").addClass('active')
          .prevAll().addClass('active').end()
          .nextAll().removeClass('active');
          scrollTop(0);
          processBar.css('width', '89%');
        }else{
          scrollToErrorField();
        }
      });

      // Confirmation Submit
      view.find('.submit-footer .btn-regis-done').on('click', function(e){
        e.preventDefault();
        if(view.valid()){
          view.find(".form-status").find("li").addClass('active');
          view.submit();
        }else{
          scrollToErrorField();
        }
      });

      // Back to previous step
      view.find('.btn-edit-register').on('click', function(){
        var dataTarget = $(this).attr('data-target');
        updateHeaderIsStep1(dataTarget == 'card-register-step-1');

        var previousTarget = $(this)
          .closest(".card-register-step").addClass('hide')
          .siblings( "#" + dataTarget ).removeClass('hide');
        formStatus.find("[data-related-step='" + $(this).attr('data-target') + "']").addClass('active')
          .prevAll().addClass('active').end()
          .nextAll().removeClass('active');
        scrollTop(0);
        processBar.css('width', previousTarget.attr('data-percent-complete') + '%');
      });
    };
    
    module.formStatusInit = function(){
      formStatus.find('a').on('click', function(e){
        e.preventDefault();
        var liEle = $(this).closest('li');
        if(liEle.hasClass('active')){
          if( !$("#" + liEle.attr("data-related-step")).hasClass('hide') ){
            return;
          }
          $('.card-register-step').addClass('hide');
          var relatedStep = liEle.attr("data-related-step");
          updateHeaderIsStep1(relatedStep == 'card-register-step-1');
          $("#" + relatedStep).removeClass('hide');
          liEle.addClass('active')
            .nextAll().removeClass('active');
        }
      });
    };

    // Init =================================================================================
    module.init = function() {
      module.formStatusInit();
      // Define view and other needed elements
      view = $('.card-register-form');
      if (view.length === 0) {
        return module;
      }
      processBar = $('.card-register-page .process-bar .status-percent');

      // Init card Infomation
      cardInit();

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
        $(this).find('.fake-date-input input').on('change', function(){
          var parent = $(this).parent();
          var inputs = parent.children('input');
          parent.prev().val( inputs.get(0).value + '/' + inputs.get(1).value + '/' + inputs.get(2).value ).trigger('keyup');
        }).filter(':not(.fake-year)').on('keyup', function(){
          if(this.value.length==2){
            $(this).next().next().focus().val("");
          }
        });
        $(this).find('.real-date').on('focus', function(){
          $(this).prev().find('input:first').focus();
        })
      });

      $(".form-group-container-date").each(function(){
        $(this).find('input').on('keyup', function(){
          if(this.value.length==2){
            $(this).next().focus();
          }
        });
      });

      view.find('input[data-type="numerals"]').on('keydown', function(event) {
        window.UOB.formMethod.numeralsOnly(event, $(this));
      });
      view.find('input[data-format="currency"]').on('blur', function(event) {
        window.UOB.formMethod.formatCurrency(event, $(this));
      });

      view.find('[name="SingaporeNRIC"], [name="SingaporePR-NRIC"]').on('change', function(){
        $('[name="' + $(this).attr('data-binding-field') + '"]').val(this.value);
      });
      
      validator = view.validate({
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
      $(".customer-type-switch input[type='radio']").on('change', function(){
        $(this).parent().addClass('selected').siblings().removeClass('selected')
        var target = $(this).parent().attr("data-target");
        $(target).removeClass('hide').siblings().addClass('hide');
        updateLabelDim(target);
      });

      // Get all sections depends on specific fields
      $("div[data-related-to]").each(function(){
        var relatedFieldName = $(this).attr("data-related-to");
        var relatedFieldVal = $(this).attr("data-related-val");
        var _this = $(this);
        // Based on related section with specific value, sections will appear or hidden by update value of radio.
        $("input[type='radio'][name='" + relatedFieldName + "']").on('change', function(){
          _this.toggleClass('hide', this.value !== relatedFieldVal);
          if(this.value === relatedFieldVal){
            updateLabelDim(_this);
          }
        });
      });

      

      $("input[name='company']").on('change', function(){
        view.find('span.company-name').html(this.value);
      });

      $(".form-group label.radio-input")
        .on('click', function(){
          $(this).addClass('selected').siblings().removeClass('selected');
        })
        .find("input").filter(":checked").parent().addClass("selected");

      $('#card-limit-slider .range-slider').noUiSlider({
          start: 4000,
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


      $("[name='fullnameOnCard']").on('change', function(){
        $('.card-name').html(this.value);
      });

      view.find("#check-confirm-cpf-submission").on('change', function(){
        if(this.checked){
          var cpfsubmissiondateEle = view.find(".CPFSubmissionDate");
          var date = new Date();
          var day = date.getDate()
          var month = date.getMonth()+1 < 10 ? "0" + (date.getMonth()+1) : date.getMonth()+1
          var year = date.getFullYear();
          cpfsubmissiondateEle.find('.fake-day').val(day);
          cpfsubmissiondateEle.find('.fake-month').val(month);
          cpfsubmissiondateEle.find('.fake-year').val(year).trigger('change');
        }
      });

      updateLabelDim('.card-register-step-1');
    };

    return module.init();
  })();

  if($("[placeholder]:first").length){
    $("[placeholder]").placeholder();
  }


});

window.onload = function(){

};

window.accounting = window.accounting || {};
window.UOB = window.UOB || {};
window.UOB.formMethod = window.UOB.formMethod || {};

window.needSaveLead = true;

jQuery(function($){

  //============================ Validation rules

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

  window.CardRegistration = (function() {
    var module = {},
        formConfirmation,
        validator;


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
      formConfirmation.on('submit', function(e){
        if(e.originalEvent){
          return false;
        }
      });
      formConfirmation.find('.btn-submit').on('click', function(e){
        e.preventDefault();
        if(formConfirmation.valid()){ 
          formConfirmation.get(0).submit();
        }else{
          scrollToErrorField();
        }
      });
    };

    // Init =================================================================================
    module.init = function() {
      // Define formStep1 and other needed elements
      formConfirmation = $('.card-register-step-3');
      if (formConfirmation.length === 0 ) {
        return module;
      }
      processBar = $('.card-register-page .process-bar .status-percent');

      var unloadHandler = function(){
        if(window.needSaveLead){
          var dataF1 = $("#card-register-step-1").serializeArray();
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

      $(".btn-edit-register").on('click', function(e){
        e.preventDefault();
        window.needSaveLead = false;
        window.location.href = this.href;
      });

      window.onbeforeunload = unloadHandler;

      //Remove read full text link after clicking to show more content
      $(".read-full-text-disappear").on('click', function(){
        $(this).hide();
      });

      validator = formConfirmation.validate({
        errorElement: 'span',
        errorPlacement: errorPlacementCustom,
        highlight: highlightHandler,
        unhighlight: unhighlightHandler,
        focusinvalid: false,
        ignore: ".ignore, :hidden"
      });

      submitStepInit()

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

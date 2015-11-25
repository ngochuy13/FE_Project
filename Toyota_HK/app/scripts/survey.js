jQuery(function($) {
  window.survey = (function() {
    var view = $("#survey-popup");
    var viewThankyou = $("#survey-thankyou-popup");
    var surveyBox = $('.survey-box');
    var module = {};


    var setCookie = function(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
    };
    var getCookie = function (cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1);
          if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
      }
      return "";
    };

    var initCarWithSurveyCTA = function(argument) {
      $('.survey-box-trigger').on('click', function(e) {
        surveyBox.fadeIn('fast');
        return false
      });
      $('.take-survey-btn').on('click', function(e) {
        e.preventDefault();
        surveyBox.fadeOut('fast', function() {
          $('.animation-right-left').animate({
            right: "120%"
          }, 2500);
        });
        view.modal({
          'show': true,
          'backdrop': 'static'
        });
        return false;
      });

      $('.surver-car').appear();
      $(document.body).one('appear', '.animation-left-right', function(e) {
        $(this).animate({
          'left': "120%"
        }, 5000, function() {
          // Animation complete.
          $(this).addClass('done');
        });
      });
      $(document.body).one('appear', '.animation-right-left', function(e) {
        $(this).css('left', 'auto').animate({
          'right': "60%"
        }, 2500, function() {
          // Animation complete.
          $(this).addClass('done');

          // check cookie
          if(getCookie('UpdateSurvey') != '1'){
            $(this).trigger('click');
          }
        });
      });
    };

    var surveySuccessHandler = function (response) {
      var result = JSON.parse(response.d);
      view.removeClass('loading');
      $(this).removeProp('disabled', 'disabled');
      if (result.error.toString() === '1') {
          alert(result.error.message);
      } else {
          view.modal('hide');
          viewThankyou.find('input[name="recordId"]').val(result.data.recordId);
          viewThankyou.modal('show');
          // set cookie
          setCookie('UpdateSurvey' , '1', 90);
      }
    };
        
    var initPopupSurvey = function() {
      // view.modal('show');
      $(".validate-form").validate();
      view.find('.star-rating a').on('click', function(e) {
        e.preventDefault();
        var value = parseInt($(this).attr('data-value'));
        $(this)
          .closest(".star-rating")
          .find('input[type="text"]').val(value);
        var stars = $(this).closest(".star-rating").find(".stars a");
        stars.filter(":lt(" + value + ")").addClass('active');
        stars.filter(":gt(" + (value - 1) + ")").removeClass('active');
      });

      view.find('.radioUI').radioUI();

      var textareaCharCount = view.find(".charcount textarea");
      if (textareaCharCount.length) {
        textareaCharCount.each(function(e) {
          var counter = $(this).closest('.charcount').find('.counter');
          if (counter.length === 0) {
            return;
          }
          this.counter = counter;
          this.charmaxlength = parseInt($(this).attr('maxlength'));

          $(this).on('keyup', function() {
            this.counter.html(this.charmaxlength - $(this).val().length);
          });
        });
      }

      view.find(".submission .forward").on('click', function(e) {
        e.preventDefault();
        if (view.find('input').valid()) {
          $(this).closest('.question').find('span.error').addClass('hide');
          view.find('.question-' + $(this).attr('data-question')).removeClass('hide').siblings().addClass('hide');
        } else {
          $(this).closest('.question').find('span.error').removeClass('hide');
        }
      });

      view.find(".submission .back").on('click', function(e) {
        e.preventDefault();
        view.find('.question-' + $(this).attr('data-question')).removeClass('hide').siblings().addClass('hide');
      });

      view.find(".submission .submit").on('click', function(e) {
        e.preventDefault();
        $(this).prop('disabled', 'disabled');
        if (view.find('input').valid()) {
          $(this).closest('.question').find('span.error').addClass('hide');
          var surveyData = {
            "answerQuestion1": view.find('.question-1 .answer .star-rating input[type="text"]').val(),
            "noteQuestion1": "",
            "answerQuestion2": view.find('.question-2 .answer input[type="radio"]:checked').val(),
            "noteQuestion2": view.find('.question-2 .answer textarea').val(),
            "answerQuestion3": view.find('.question-3 .answer input[type="radio"]:checked').val(),
            "noteQuestion3": view.find('.question-3 .answer textarea').val()
          };
          view.addClass('loading');
          $.ajax({
            type: "POST",
            url: "/CMSPages/ToyotaSurvey.aspx/SubmitSurvey",
            data: JSON.stringify(surveyData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: surveySuccessHandler,
            error: function(response) {
              view.removeClass('loading')
              view.find("button.submit").removeProp('disabled', 'disabled');
            }
          });
          view.modal('hide');
        } else {
          $(this).closest('.question').find('span.error').removeClass('hide');
        }
        return false;
      });
    };

    var initPopupSurveyThankyou = function(){
      viewThankyou.find("button").on('click', function(){
        view.addClass('loading');
        $(this).prop('disabled', 'disabled');
        var surveyThankyouData = {
          "recordId": viewThankyou.find('input[name="recordId"]').val(),
          "name": viewThankyou.find('input[name="reviewerName"]').val(),
          "email": viewThankyou.find('input[name="reviewerEmail"]').val(),
          "telephone": viewThankyou.find('input[name="reviewerTelephone"]').val()
        };
        if(surveyThankyouData.email === "" || surveyThankyouData.name === "" || surveyThankyouData.telephone === ""){
          viewThankyou.modal('hide');
          return;
        }
        $.ajax({
          type: "POST",
          url: "/CMSPages/ToyotaSurvey.aspx/UpdateSurvey",
          data: JSON.stringify(surveyThankyouData),
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function (response) {
              var result = JSON.parse(response.d);
              viewThankyou.removeClass('loading');
              viewThankyou.find('button').removeProp('disabled', 'disabled');
              if (result.error.toString() === '1') {
                  alert(result.error.message);
              } else {
                  viewThankyou.modal('hide');

              }
          },
          error: function (response) {
              view.removeClass('loading')
              viewThankyou.find('button').removeProp('disabled', 'disabled');
          }
        });
      });
    };

    var autoShowPopupSurvey = function(){
      view.find('.close').on('click',function(){        
        // set cookie
        setCookie('autoShowPopupSurvey' , '1', 1);
      });
      if(getCookie('autoShowPopupSurvey') != '1' && getCookie('UpdateSurvey') != '1'){
        setTimeout(function(){
          view.modal('show');
        }, 60000*3);
      }
    };

    module.init = function() {
      if (view.length === 0 && surveyBox.length === 0) {
        return;
      }

      initCarWithSurveyCTA();
      initPopupSurvey();
      initPopupSurveyThankyou();

      autoShowPopupSurvey();

      return module;
    }
    return module.init();
  })();
});

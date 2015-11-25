;window.Puzzle = window.Puzzle || {};   

jQuery(function($){ 
  $.validator.addMethod('phonenumber', function (value) {
    return /\d{10,12}$/.test(value); 
  }, 'Xin bạn vui lòng nhập số điện thoại hợp lệ.');

  window.messageModal = (function($){
    var view = $("#message-modal");
    var module = {};

    module.init = function(){
      ODFC.Events.on("error.message", function(data){
        view.find('.message').html(data.message);
        view.modal('show');
      })
    };
    return module.init();
  })(jQuery);

  window.loadingLayer = (function($){
    var view = $("#loading-layer");
    var module = {};

    module.show = function(){
      view.show();
    };
    module.hide = function(){
      view.hide();
    };

    return module;
  })(jQuery);

  window.Puzzle = (function(){

    var view = $('#puzzle-wrapper'),
        secondStageElement = $('#change-color-wrapper'),
        module = {},
        events = {},
        totalAccessories = 15,
        totalMatch = 0,
        timerID = null,
        timerText = $('#timer-text'),
        _previewTime = 3, // second
        _instructionTime = 5000, // milisecond
        _time = 60;  // second

    // Timer Calculation ------------------------------------------------------------------

    var timer = function(start, duration, display) {

      var diff = duration - (((Date.now() - start) / 1000) | 0);
      var minutes = (diff / 60) | 0;
      var seconds = (diff % 60) | 0;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;  
      
      if(diff <= 0){
        return false;
      }else{
        return true;
      }

    };

    var startTimer = function(duration, timeOutCallback) {
      var start = Date.now();
      var timerDO = timerText.get(0);
      timer(start, duration, timerDO);
      timerID = setInterval(function(){
        if( !timer(start, duration, timerDO) ){
          clearInterval(timerID);
          timeOutCallback();
        }
      }, 1000);

    };

    // End Timer Calculation ------------------------------------------------------------------




    // InteractJS drag move listener handler -----------------------------------------------

    var dragMoveHandler = function (event) {
      var target = event.target,
      // keep the dragged position in the data-x/data-y attributes
      x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;      
      // translate the element
      target.style.webkitTransform =
      target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

      // update the posiion attributes
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    };

    // InteractJS drag end listener handler
    var dragEndHandler = function(event){      
      var target = event.target;
      if(!$(target).hasClass('dropped')){
        //move to previous position
        target.style.webkitTransform
        	= target.style.transform
        	= 'translate(0px, 0px)';
        target.setAttribute('data-x', 0);
        target.setAttribute('data-y', 0);
      }     
    };

    // End InteractJS drag move listener handler -----------------------------------------------





    // Handle Game Flow ----------------------------------------------------------------------

    var startPuzzleGame = function() {
      module.initSkeleton();
      $('.sym-full-image', view).addClass('hide');
      $('.skeleton-motobike', view).removeClass('hide');
    }

    var resetGame = function(){
      totalMatch = 0;
      timerID = null;
      var accessoriesContainer = $('.accessories', view);
      $('.sym-full-image', view).removeClass('hide');
      $('.skeleton-motobike', view)
        .addClass('hide')
        .find(".bubble").each(function(){
          var targetContainer = accessoriesContainer.find("."+this.id+"-container");
          $(this).find('img').attr('enabled', 'true').removeAttr('style').appendTo( targetContainer );
        });
      startTimer(_previewTime, startPuzzleGame);
      // TODO: reset all accessories position and state
    };

    var failPuzzleGame = function(){
      // Show popup to replay
      $('.btn-complete', view).addClass('hide');
      $('#replay-modal').modal('show');
    };

    var finishPuzzleStageHandler = function(){
      $('.btn-complete', view)
        .off('click')
        .on('click', goToAccStage)
        .removeClass('hide');
       clearInterval(timerID);
    };

    var goToAccStage = function(){
      view.removeClass('active');
      window.secondStage.show();
      return;
    };

    // End Handle Game Flow ----------------------------------------------------------------------


    module.initSkeleton = function(){

      interact('.draggable').draggable({
        onmove: dragMoveHandler,
        onend: dragEndHandler
      });

      var iCount = 0;
      $('.shape').each(function(i){

        var shape_id = "shape_" + i;
          
        interact('#' + shape_id).dropzone({
          accept: '.' + shape_id,
          overlap: 0.3,
          ondrop: function (e) {                
            totalMatch++;
            
            $(this._element).attr('enabled', 'false').append( $(e.relatedTarget) );

            if(totalMatch === totalAccessories){
              finishPuzzleStageHandler();
            }
          }
        });
      });
      
      startTimer(_time, function(){
        failPuzzleGame();
      });

    };

    module.init = function(){
      if(view.length===0){
        return;
      }
      $('#replay-modal').on('hidden.bs.modal', function () {
      	resetGame();
      });
      
      $("#instruction-modal").on('hidden.bs.modal', function(){
        // Start game after 3 seconds of preview time
        startTimer(_previewTime, startPuzzleGame);
        $("#instruction-modal").off('hidden.bs.modal');
      });
      
      $("#instruction-modal").modal('show');
      setTimeout(function(){
        $("#instruction-modal").modal('hide');
      }, _instructionTime);
    }

    return module;

  })();








  window.secondStage = (function(){
      var view = $('#change-color-wrapper'),
          avatarModal = $("#crop-avatar-modal"),
          screenshotCanvas,
          jcropInstance,
          extraInfoModal = $("#extra-info-modal"),
        	module = {};

      var flags = {
        uploaded: false
      };

      var drawEllipse = function(ctx, centerX, centerY, width, height) {
        
        ctx.beginPath();
        
        ctx.moveTo(centerX, centerY - height/2); // A1
        
        ctx.bezierCurveTo(
          centerX + width/2, centerY - height/2, // C1
          centerX + width/2, centerY + height/2, // C2
          centerX, centerY + height/2); // A2

        ctx.bezierCurveTo(
          centerX - width/2, centerY + height/2, // C3
          centerX - width/2, centerY - height/2, // C4
          centerX, centerY - height/2); // A1
       
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();  
      }
  
      var itemChangedHandler = function(e){
        var currentItem = $('.active', $(this));
        var imgSrc = $('img', currentItem).attr('src');
        var destination_id = $('img', currentItem).attr('data-id');
        $("#"+destination_id+ " img").attr('src', imgSrc);
        //change image at destination element
      }
  
      var completeChooseAccessoriesHandler  = function(){
        $(".accessories-area-left, .accessories-area-right, .btn-complete").addClass('hide');
        $(".owl-carousel", view).addClass('hide').each(function(){
          // $(this).data('owlCarousel').destroy();
        });
        $(".extra-info-form", view).removeClass('hide');
      };

      var getCropImage = function(){
        var croppedImage = avatarModal.find(".jcrop-hline");
        var selectedArea = jcropInstance.tellSelect();
        if(selectedArea.w * selectedArea.h === 0){
          jcropInstance.setSelect([0,0,75,100]);
          return;
        }
        croppedImage = croppedImage.parent().get(0);
        var proportion = $(".rider-avatar").width() / selectedArea.w;
        var xc = -(selectedArea.x * proportion);
        var yc = -(selectedArea.y * proportion);
        var fImgW = $(".jcrop-holder").width() * proportion;
        var fImgH = $(".jcrop-holder").height() * proportion;
        var newImg = $("#uploaded-avatar>img").clone().removeAttr('style').css({"width": fImgW, "height": fImgH, "position": "relative", "top": yc, "left": xc});
        $(".rider-avatar").html("").append( newImg );
        $("#crop-avatar-modal").modal('hide');
      };

      var uploadAvatarErrorHandler = function(response){
        loadingLayer.hide();
        if(!response.message){
          message = "Đã có sự cố trong quá trình upload. Xin bạn vui lòng thử lại.";
        }else{
          message = response.message;
        }
        ODFC.Events.trigger("error.message", {message: message});
      }

      var uploadAvatarSuccessHandler = function(response){
        loadingLayer.hide();
        if(typeof response.data === "undefined"){
          ODFC.Events.trigger("error.message", {message: "Hình bạn upload bị lỗi."});
          return;
        }
        flags.uploaded = true;
        $("#upload-form").get(0).reset();
        var newImg = $("<img />",{
          alt: "avatar",
          src: ""
        });
        $("#uploaded-avatar").append( newImg );
        newImg.off('load').on('load', function(){
          $("#crop-avatar-modal").modal('show');
          $(this).Jcrop({
            aspectRatio: 0.75
          }, function(){
            jcropInstance = this;
          });
        }).attr('src', response.data);
      };

      var uploadScreenshotErrorHandler = function(response){
        loadingLayer.hide();
        if(!response.responseJSON.caption){
          message = "Gửi hình thất bại, bạn vui lòng thử lại.";
        }else{
          message = response.responseJSON.caption[0];
        }
        ODFC.Events.trigger("error.message", {message: message});
      };

      var uploadScreenshotSuccessHandler = function(response){
        loadingLayer.hide();
        if(typeof response === 'undefined'){
          return;
        }
        var shareLink = extraInfoModal.find("a.real");
        shareLink.attr('href', shareLink.attr('data-share-url') + response.data.id);
        extraInfoModal.modal('show');
      };

      var uploadCaptionFormValidation = function(){
        var captionForm = $("#caption-form");
        var uploadForm = $("#upload-form");
        var caption = captionForm.find('textarea').val();

        caption = $.trim(caption);
        captionForm.find(".caption").toggleClass("error", caption==="");
        uploadForm.toggleClass('error', flags.uploaded);

        return !(caption==="" || !flags.uploaded);
      };

      var submitExtraInfoHandler = function(e) {
        $.ajax({
          url: extraInfoModal.find('form').attr('action'),
          type: 'POST',
          data: extraInfoModal.find("form").serializeArray(),
          error: function(){
            loadingLayer.hide();
            extraInfoModal.find('form').addClass('failed').find('.real').attr("href", "#").removeAttr('target');
          },
          success: function(){
            loadingLayer.hide();
            extraInfoModal.modal('hide');
            $(".extra-info-form").addClass('hide');
            view.find(".congrate-board").removeClass('hide');
          }
        });
      }

      module.show = function(){
        view.addClass('active');
      };

      module.initAvatarModalUI = function(){
        avatarModal.on('hidden.bs.modal', function(){
          jcropInstance.destroy();
          avatarModal.find("#uploaded-avatar").html("");
        }).on('click', '.btn-ok', function(){
          getCropImage();
        })
      };

      module.initExtraInfoFormUI = function () {
        var form = extraInfoModal.find('form');
        extraInfoModal.on('shown.bs.modal', function() {
          if(form.validate().checkForm()){
            form.find('.real').off('click').on('click', submitExtraInfoHandler);
            form.find(".submission").addClass('valid');
          }else{
            form.find(".submission").removeClass('valid');
          }
        });
        var emailCheckURL = form.attr("data-email-check-url");
        form.validate({
          rules: {
            name: "required",
            phone: {
              "required": true,
              "phonenumber": true
            },
            email: {
              required: true,
              email: true,
              remote: {
                url:  emailCheckURL,
                type: "post",
                data: {
                  email: function() {
                    return form.find("input[name='email']").val();
                  },
                  id: function() {
                    return form.find("input[name='id']").val();
                  },
                  _token: function() {
                    return form.find("input[name='_token']").val();
                  }
                }
              }
            }
          },
          messages: {
            name: "Hãy điền tên của bạn.",
            phone: {
              "required": "Hãy điền số điện thoại của bạn",
              "phonenumber": "Hãy điền số điện thoại hợp lệ",
            },
            email: {
              required: "Hãy điền email của bạn",
              email: "Email của bạn chưa đúng",
              remote: "Email của bạn đã được sử dụng."
            }
          },
          unhighlight: function(){
            if(form.find('.error:visible').length){
              form.find(".submission").removeClass('valid');
              form.find('.real').off('click').on('click', submitExtraInfoHandler);
            }else{
              form.find(".submission").addClass('valid');
            }
          },
          highlight: function(){
            form.find('.real').off('click');
            form.find(".submission").removeClass('valid');
          }
        });
      };

      module.initUI = function(){
        module.initExtraInfoFormUI();
        module.initAvatarModalUI();
        $('#upload-form input').on('change', function(){
          $('#upload-form').submit();
        });
        $('#upload-form').ajaxForm({
          "beforeSubmit": function(){
            loadingLayer.show();
          },
          "success": uploadAvatarSuccessHandler,
          "error": uploadAvatarErrorHandler
        });

        $("#caption-form").on('submit', function(e){
          var _this = this;
          e.preventDefault();
          if( uploadCaptionFormValidation() ){

            $(this).find(".caption").removeClass('error');
            $(".extra-info-form").addClass('hide');
            releaseContainerShrink();
            html2canvas( $("#change-color-wrapper").get(0) , {
              onrendered: function(canvas) {
                screenshotCanvas = canvas;
                loadingLayer.show();
                resizeContainer();
                $(".extra-info-form").removeClass('hide');
                $.ajax({
                  url: $("#caption-form").attr('action'),
                  type: 'POST',
                  data: {
                    "caption": $("#caption-form textarea").val(),
                    "screenshot": screenshotCanvas.toDataURL('image/jpeg'),
                    "_token": $("#caption-form [name='_token']").val()
                  },
                  success: uploadScreenshotSuccessHandler,
                  error: uploadScreenshotErrorHandler
                })
              }
            });
          }
          return false;
        });
      };
  
      module.init = function(){

        module.initUI();
        $(".owl-carousel", view).owlCarousel({
          items: 1, 
          loop: true, 
          nav: true, 
          dots: false,
          navText: ['&nbsp;','&nbsp;']
        })
        .on('changed.owl.carousel', itemChangedHandler);
  
        $('.btn-complete',view).off('click').on('click', completeChooseAccessoriesHandler);
  
        return module;
      }
      return module;
    })();
  // $("#extra-info-modal").modal('show');
});

  
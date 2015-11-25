var schoolFinder = (function() {
  'use strict';

  var view = $(".school-finder");
  var select1 = view.find('.select1');
  var select2 = view.find('.select2');
  var submitBtn = view.find('button.submit');
  var fetchedContentContainer = view.find('.result-container');

  var ajaxURLGen = function(value){    
    if(view.find('form').attr('data-url') != ''){
      return view.find('form').attr('data-url') + '/'+ value;
    }else{
      return window.location.host + '/' + value;
    }
      
    // return "/data/"+value;
  };

  var activateLoading = function(){
    view.addClass('loading');
    select1.attr('disabled','disabled');
    select2.attr('disabled','disabled');
    submitBtn.attr('disabled','disabled');
  };

  var finishLoading = function(){
    view.removeClass('loading');
    select1.removeAttr('disabled');
    select2.removeAttr('disabled');
    submitBtn.removeAttr('disabled');
  };

  var formMessage = function( success, show, message ) {
    if ( typeof success !== "undefined" && typeof show !== "undefined" ) {
      view.find( ".msgSubmit" ).toggleClass( "text-danger", !success ).toggleClass( "text-success", success ).html( message ).toggle( show );
    }
    return;
  };

  var ajaxErrorHandler = function( xhr, textStatus, errorThrown ) {
    if ( textStatus == "timeout" ) {
      this.tryCount++;
      if ( this.tryCount <= this.retryLimit ) {
        $.ajax( this );
        return;
      }
      formMessage( false, true, view.attr( "data-timeout-msg" ) );
      finishLoading();
      return;
    } else {
      formMessage( false, true, view.attr( "data-generror-msg" ) );
      finishLoading();
    }
  };

  var ajaxRequest = function(url, data, ajaxSuccessHandler) {
    activateLoading();
    $.ajax( {
      type: "GET",
      url: url,
      data: data,
      dataType: "json",
      success: ajaxSuccessHandler,
      error: ajaxErrorHandler
    });
  };

  var updateSelect2Items = function(data){
    if(data.length){
      var tmpOption = '<option disabled="" selected="">Choose a Diploma</option>';
      $.each(data , function(index, el) {
        tmpOption += '<option value="'+el.value+'">'+el.title+'</option>'
      });
      select2.html(tmpOption);
      select2.selectpicker('refresh');
    }
  };

  var getFormParam = function (argument) {
    return {
      'select-1': select1.val(),
      'select-2': select2.val()
    };
  }


  var loadmoreView = function(data){
    if(data.length){
      var tmpResult = '';
      $.each(data , function(index, el) {
        tmpResult += '<div class="col-sm-4"><a href="'+el.link+'" class="result-block"><div class="result-info"><div class="result-title">'+el.title+'</div><div class="awarded-by">Awarded by:</div><div class="award-giver-campus">'+el.campus+'</div></div></a></div>';
      });
      fetchedContentContainer.html(tmpResult);
    }
  }

  var updateLoadmoreView = function(data){
    fetchedContentContainer.addClass('fetching');
    loadmoreView(data);
    setTimeout(function(){
      $.fn.matchHeight.update();
    }, 100);
    setTimeout(function(){
      fetchedContentContainer.removeClass('fetching');
    }, 300);
  }
  var schoolFinder = {
    init: function(){
      select1.on('change', function () {
        var val = 'polytechnic/'+select1.val();
        // val = 'data.json';
        ajaxRequest( ajaxURLGen(val), undefined, function(data){
          finishLoading();
          updateSelect2Items(data);
        })
      });
      submitBtn.on('click', function(e){
        var val = 'programme-filter/'+select1.val()+'/'+select2.val();
        ajaxRequest( ajaxURLGen(val), undefined, function(dataResult){
          finishLoading();
          updateLoadmoreView(dataResult);
        })
        return false;
      });
    }
  };

  return schoolFinder.init();
}());


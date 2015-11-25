$(document).ready(function() { 
  $('select').selectUI({
    autoTemplate: true
  });
  $('.icon-calendar').click(function(event) {
        event.preventDefault();
        var inputName = $(this).attr('for');
        $('input[name='+inputName+']').trigger('click');
  });
  $('.gotop').click(function(event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 800);
  });

  var search_from = new Pikaday({ 
        field: $('.search-from input')[0],
        format: 'MM/DD/YYYY',
        onSelect: function() {
            search_to.setMinDate(this.getMoment());
        }
    });
  var search_to = new Pikaday({ 
        field: $('.search-to input')[0],
        format: 'MM/DD/YYYY',
        onSelect: function() {
            search_from.setMaxDate(this.getMoment());
        }
    });

  function random () {
      return parseInt(Math.random() * 100);
  }
  var data = {
  	labels: new Array(5),
    datasets: [
        {
            fillColor: "rgba(157,198,46,1)",
            strokeColor: "rgba(157,198,46,1)",
            highlightFill: "rgba(157,198,46,1)",
            highlightStroke: "rgba(157,198,46,1)",
            data: [random(), random(), random(), random(), random()]
        }
    ]
	};
	var options = {
        animation: false,
        showScale: false,
        barShowStroke: false,
        tooltipXPadding: 10,
        tooltipYPadding: 6,
        tooltipFontSize: 14,
        tooltipFontStyle: 'bold',
        // Boolean - If we want to override with a hard coded scale
        scaleOverride: true,

        // ** Required if scaleOverride is true **
        // Number - The number of steps in a hard coded scale
        scaleSteps: 1,
        // Number - The value jump in the hard coded scale
        scaleStepWidth: 50,
        // Number - The scale starting value
        scaleStartValue: 0,
        barValueSpacing: 29
	};

  if(!$('html').hasClass('ie8')){
  	var ctx = $("#myChart").get(0).getContext("2d");
  	var myBarChart = new Chart(ctx).Bar(data, options);
  }
});

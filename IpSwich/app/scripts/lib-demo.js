jQuery(function(){
   $('.date-picker input').datetimepicker({
    format: "DD/MM/YYYY",
    icons: {
      date: 'fa fa-calendar',
      up: '',
      down: '',
      previous: 'fa fa-angle-left',
      next: 'fa fa-angle-right',
      today: '',
      clear: '',
      close: ''
    }
  });

  $('.bootstrap-select').selectpicker();

  var rangeSlider = $('#range-slider');

  noUiSlider.create(rangeSlider.get(0), {
    start: [20, 80],
    connect: true,
    range: {
      'min': 0,
      'max': 100
    }
  });

  rangeSlider.find(".noUi-handle").append($("<span class='rangeslider-tooltip' />"));

  rangeSlider.get(0).noUiSlider.on('update', function( values, handle ) {
    rangeSlider.find(".noUi-handle .rangeslider-tooltip").eq(handle).html("$"+values[handle]);
  });

  $(".star-rating").rating({
    filled: 'fa fa-star',
    empty: 'fa fa-star-o'
  });
});
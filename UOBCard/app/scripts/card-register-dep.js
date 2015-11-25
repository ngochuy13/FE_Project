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


  // Required Document Modal tab
  $('#tab-required-documents a').click(function (e) {
    e.preventDefault()
    $(this).tab('show');
  })
});
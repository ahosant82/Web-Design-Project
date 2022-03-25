//mobile menu
$(document).ready(function(){
  $('#Billing-address').click(function(){
    $('#booking-process-1').hide();
    $('#booking-process-2').show();
  });
});

$(document).ready(function(){
  $('#parsonal-info').click(function(){
    $('#booking-process-1').show();
    $('#booking-process-2').hide();
  });
});

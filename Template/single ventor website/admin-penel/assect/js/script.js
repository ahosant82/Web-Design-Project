
/*=====add preloeder for all page===========*/
$('body').addClass('preloader-active');
$(window).on('load', function() { 
  $('.preloader').fadeOut("slow");
  $('.loader').delay(2299).fadeOut(100);
});

// add on sticky hrader
$(window).on('scroll', function(){
  if($(window).scrollTop()) {
    $('header').addClass('sticky');
  }
  else{
    $('header').removeClass('sticky');
  }
})

// for src btn
$(document).ready(function(){
  $('.menu-bar').click(function(){
    $('.sidebar').toggle();

  });
});





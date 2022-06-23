// add on sticky hrader
$(window).on('scroll', function(){
  if($(window).scrollTop()) {
    $('header').addClass('sticky');
  }
  else{
    $('header').removeClass('sticky');
  }
})
//menu opne
$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.side-menu').show();
    });

    $('.menu-close').click(function(){
        $('.side-menu').hide();
    });
});
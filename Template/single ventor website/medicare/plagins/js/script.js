
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


//slide onn bannner
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "",
  autoplay: {
    delay: 10000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// add on product banner
var swiper = new Swiper(".mSwiper", {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });

//cetagory active
$(document).on('click', '.product-catagory .list-item', function(){
  $(this).addClass('active').siblings().removeClass('active')
})

//cart active
$(document).ready(function(){
  $('.women-care').fadeOut();
  $('.medical-support').fadeOut();

  $('.helth-care-btn').click(function(){
    $('.helth-care').show();
    $('.women-care').hide();
    $('.medical-support').hide();
    
  });

  $('.women-care-btn').click(function(){
    $('.helth-care').hide();
    $('.women-care').show();
    $('.medical-support').hide();
  });

  $('.medical-support-btn').click(function(){
    $('.helth-care').hide();
    $('.women-care').hide();
    $('.medical-support').show();
  });
});

/***********product slide********* */
$('.slider').slick({
  dots: true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  responsive: [
    {
      breakpoint: 1027,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 824,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '30px'
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
  

});
/******************** */
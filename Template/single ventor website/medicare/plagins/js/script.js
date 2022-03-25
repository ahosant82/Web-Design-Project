// active menu
// Home
//producr

// 

/*****search btn******/
$(document).ready(function(){
    $('#src-btn').click(function(){
           $('#src').slideToggle(20);
       });
    });
/********login btn ************/
$(document).ready(function(){
    $('#login-btn').click(function(){
        $('#login-form').fadeIn(100);
    })
    $('#login-close').click(function(){
        $('#login-form').fadeOut(100);
    })
    /*******************/
    $('.btn').click(function(){
        $('#login-form').fadeIn(100);
    })
    $('#login-close').click(function(){
        $('#login-form').fadeOut(100);
    })
})
/*******mobile menu****** */
$(document).ready(function(){
    $('#menu-btn').click(function(){
        $('#menu').fadeIn(100);
    })
    $('#menu-close').click(function(){
        $('#menu').fadeOut(100);
    })
})
/*******8 */
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.slide-btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 10000);
  }
  repeater();
}
repeat();
/***********product slide********* */
$('.swiper-wrapper').slick({
  dots: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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
  arrows: true,

});
/******************** */
/*****client review ********/
$('.client-review').slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 8000,
  
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  arrows: false,

});
/********payment-card************/
$(document).ready(function(){
  $('.payment-btn').click(function(){
      $('.payment-card').fadeIn(100);
  })
  $('#payment-close').click(function(){
      $('.payment-card').fadeOut(100);
  })
  //bash pay
  $('#bkash').click(function(){
    $('.pay-bkash').fadeIn(100);
  })
    //bash pay
    $('#rocket').click(function(){
      $('.pay-rocket').fadeIn(100);
    })
        //bash pay
        $('#card').click(function(){
          $('.pay-card').fadeIn(100);
        })
    
})
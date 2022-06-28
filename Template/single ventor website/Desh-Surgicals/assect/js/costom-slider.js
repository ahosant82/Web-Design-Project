//slide onn bannner
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
    spaceBetween: 30,
      loop: true,
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


  
/***********product slide********* */
$('.slider').slick({
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  responsive: [
    {
      breakpoint: 1227,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 874,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },

    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],


});

/***********product slide********* */
$('.cetagory-page-slider').slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  responsive: [
    {
      breakpoint: 1027,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },

    {
      breakpoint: 774,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },

    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],


});
  
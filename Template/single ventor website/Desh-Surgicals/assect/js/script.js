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
//menu opne
$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.side-menu').show();
    });

    $('.menu-close').click(function(){
        $('.side-menu').hide();
    });
});

// add on sticky hrader



/*===============cetagory"s script==================*/

$(document).ready(function(){
  $('#cetagory-open').click(function(){
    $('.cetagory-list').fadeIn();
  });

  $('#cetagory-close').click(function(){
    $('.cetagory-list').fadeOut();
  });
})


//cart index ative
$(document).on('click', '.content-header .menu-item', function(){
  $(this).addClass('active').siblings().removeClass('active')
})

//=======product-details page==========
//quantity up down
document.querySelector(".minus").setAttribute("disabled", "disabled");

        //plus button
        document.querySelector(".plus").addEventListener("click", function() {
          //getting value of input
          valueCount = document.getElementById("quantity").value;

          //input value increment by 1
          valueCount++;

          //setting increment input value
          document.getElementById("quantity").value = valueCount;

          if (valueCount > 1) {
              document.querySelector(".minus").removeAttribute("disabled");
              document.querySelector(".minus").classList.remove("disabled")
          }

          //calling price function
          priceTotal()
      })

      //plus button
      document.querySelector(".minus").addEventListener("click", function() {
          //getting value of input
          valueCount = document.getElementById("quantity").value;

          //input value increment by 1
          valueCount--;

          //setting increment input value
          document.getElementById("quantity").value = valueCount

          if (valueCount == 1) {
              document.querySelector(".minus").setAttribute("disabled", "disabled")
          }

          //calling price function
          priceTotal()
      })



//product-single-tab ative
$(document).on('click', '.product-single-tab .tab-item', function(){
  $(this).addClass('active').siblings().removeClass('active')
})


$(document).ready(function(){
  $('.drescription-btn').click(function(){
    $('.description-section').show();
    $('.size-section').hide();
    $('.review-section').hide();
  });

  $('.size-btn').click(function(){
    $('.description-section').hide();
    $('.size-section').show();
    $('.review-section').hide();

  });

  $('.review-btn').click(function(){
    $('.description-section').hide();
    $('.size-section').hide();
    $('.review-section').show();
  });
});

//
$(document).ready(function(){
  $('#Checkout-btn').click(function(){
    $('.cart-section').hide();
    $('.checkout-section').show();
  });

  $('.size-btn').click(function(){
    $('.description-section').hide();
    $('.size-section').show();
    $('.review-section').hide();

  });

  $('.review-btn').click(function(){
    $('.description-section').hide();
    $('.size-section').hide();
    $('.review-section').s();
  });
});
//
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
//
let addcart= document.querySelector('.add-cart');
let viewcart= document.querySelector('.view-cart');

addcart.addEventListener('click', () =>{
  addcart.innerText = 'successfully added';

  setTimeout(()=>{
    addcart.style.display = 'none';
    viewcart.style.display = 'inline-block';
    
  }, 2500);
});

function cart_btn(){
  document.location.href="cart.html";
}

//




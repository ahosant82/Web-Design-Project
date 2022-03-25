//mobile menu
//mobile menu
$(document).ready(function(){
  $('.mobile-menu-btn').click(function(){
    $('.mobile-menu').fadeIn(300);
  });
  $('.mobile-menu-cancel').click(function(){
    $('.mobile-menu').fadeOut(300);
  });
});

//mobile menu
$(document).ready(function(){
  $('.src-btn').click(function(){
    $('.searchPage').fadeIn(300);
    $('.home-page').fadeOut(300);
  });
});

//
jQuery(document).ready(function($) {
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
});

/*
=========packeg page=========
*/
var button = document.querySelectorAll(".menu-box button");
var view_wraps = document.querySelectorAll(".view_wrap");
var list_view = document.querySelector(".list-view");
var grid_view = document.querySelector(".grid-view");

button.forEach(function(link){
	link.addEventListener("click", function(){
		button.forEach(function(link){
			link.classList.remove("active");
		})

		link.classList.add("active");

		var li_view = link.getAttribute("data-view");

		view_wraps.forEach(function(view){
			view.style.display = "none";
		})

		if(li_view == "list-view"){
			list_view.style.display = "block";
		}
		else{
			grid_view.style.display = "block";
		}
	})
})

/* 
this javascript is only to change the "actpage" attribut on the .cdp div
*/

var btn = document.querySelectorAll(".pagenetion-box button");
var view_wraps = document.querySelectorAll(".view_wrap");


btn.forEach(function(link){
	link.addEventListener("click", function(){
		btn.forEach(function(link){
			link.classList.remove("active");
		})

		link.classList.add("active");

		
	})
})


//pagenetion
$(document).ready(function(){
	//frist-row
	$('.secend_row').fadeOut(300);
	$('.theard_row').fadeOut(300);
	$('.frist_row-btn').click(function(){
	  $('.frist_row').fadeIn(300);
	  
	});

	//secend-row
	$('.secend_row-btn').click(function(){
		$('.frist_row').fadeOut(300);
		$('.secend_row').fadeIn(300);
		$('.theard_row').fadeOut(300);
	  });

	  //therd-row
	$('.theard_row-btn').click(function(){
		$('.frist_row').fadeOut(300);
		$('.secend_row').fadeOut(300);
		$('.theard_row').fadeIn(300);
	  });
  });




  
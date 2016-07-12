$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 1,
  	mouseDrag: true,
  	nav:true,
  	loop:true,
  	autoplay:true,
  	smartSpeed: 1000,
  	navText:["<i class='icon-arrow-left'></i>","<i class='icon-arrow-right'></i>"],
  	responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        748:{
            items:1,
            nav:true
        }
    }

  });
});
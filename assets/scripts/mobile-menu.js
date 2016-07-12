$(document).ready(function(){
  $('.hamburger').click(function(){
    $('.navbar').addClass('active');
  });

  $('.overlay').click(function(){
    $('.navbar').removeClass('active');
  });

});
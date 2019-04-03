$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450,
    autoPlay:true
  });
  $(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('#navBar').addClass('fixed-header');
        $('.header-links').addClass('navLinks');
    }
    else {
        $('#navBar').removeClass('fixed-header');
        $('.header-links').removeClass('navLinks');
        // $('nav div').removeClass('visible-title');
    }
  });
  $('.menu-burger').click(function(){
		$(this).toggleClass('open');
    $('.menu-section').toggleClass('open');
	});
});

$(document).ready(function(){
	$('.carousel__inner').slick({
		dots: true,
		infinite: true,
		speed: 900,
		slidesToShow: 1,
		adaptiveHeight: false,
		autoplay: false,
		autoplaySpeed: 900,
		boolean: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png"></button>',
		responsive: [
			{
			  breakpoint: 767,
			  settings: {
				dots: true,
				arrows: false,
			  }
			}],
	  });
  });

$(document).ready(function($) {

	/* Quotes */ 
	function titleQuote(){
		function a(a) {
	        a.addClass("active").siblings().removeClass("active")
	    }

	    function b() {
	        var b = $(".word"),
	            c = 0;
	        setInterval(function() {
	            c < b.length - 1 ? c++ : c = 0, a($(b[c]))
	        }, 4e3)
	    }
	    return b();
	}

	titleQuote();




	/* Circle */
	$('.circle').each(function() {
		var circleValue = $(this).find('span').html();
		this.style.animationDelay = '-' + parseFloat(circleValue) + 's';
	});



	/* Mask for phones */ 
	$('.input_phone').mask('+7 (999) 999-99-99');
	


	/* Sliders */

	$('.reviews__list').slick({
		rows: 3,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon icon-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon icon-arrow-right"></i></button>',
		responsive: [
			{
				breakpoint: 790,
				settings: {
					rows: 1,
					autoplay: true
				}
			}
		]
	});

	$('.partners').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 1042,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}, {
				breakpoint: 790,
				settings: {
					autoplay: true,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			} , {
				breakpoint: 450,
				settings: {
					autoplay: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});


	/* Yandex Map */
	ymaps.ready(init);
  	var myMap;

  	function init(){
	  myMap = new ymaps.Map ("map", {
		  center: [55.746998, 37.629897],
		  zoom: 17
	  });

	  myMap.controls.remove('searchControl').remove('trafficControl').remove('geolocationControl');

	  myMap.behaviors.disable(['drag', 'scrollZoom']);

	  myPin = new ymaps.GeoObjectCollection({}, {
		iconLayout: 'default#image',
		iconImageHref: 'upload/marker.png',
		iconImageSize: [28, 43]
	  });

	  myPlacemark1 = new ymaps.Placemark([55.746998, 37.629897], {
		balloonContentBody: 'Россия, Москва, ул.Садовническая, д.18'
	  });


	  myPin.add(myPlacemark1);

	  myMap.geoObjects.add(myPin);
	}


	/* Fast link */
	$(".go-contacts").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});



	/* Animate */
	$('.know__item:nth-of-type(odd)').addClass('fadeInRight wow').attr('data-wow-delay', '0.6s');
	$('.know__item:nth-of-type(even)').addClass('fadeInLeft wow').attr('data-wow-delay', '0.6s');

	new WOW().init();


	/* Mobile nav */
	var mobileBtn = $('.panel__menu-btn'),
		mobileToggle = $('.panel__content');

	mobileBtn.click(function() {
		mobileToggle.slideToggle(0);
		mobileBtn.toggleClass('active');
	});

	$(window).resize(function() {
		var windowWidth = $(window).width();

		console.log(windowWidth);
		if (windowWidth >= 775) {
			mobileToggle.removeAttr('style');
			mobileBtn.removeData('active');
			console.log(windowWidth);
		}
	});

});
$(document).ready(function($) {

	/* Random Quote */ 
	var randomText = new Array ();
	$('.randomQuotes p').each(function() {
		var thisText = $(this).html();
		randomText.push(thisText);
	});

	var randomCounter = Math.floor((randomText.length - 1)*Math.random())

	$('.header__title .c-orange').html('[' + randomText[randomCounter] + ']');

	/* Circle */
	$('.circle').each(function() {
		var circleValue = $(this).find('span').html();
		console.log(circleValue);
		this.style.animationDelay = '-' + parseFloat(circleValue) + 's';
	});



	/* Mask for phones */ 
	$('.input_phone').mask('+7 (999) 999-99-99');
	


	/* Sliders */

	$('.reviews__list').slick({
		rows: 3,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon icon-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon icon-arrow-right"></i></button>'
	});

	$('.partners').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		dots: true
		// variableWidth: true,
		// centerMode: true
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
});
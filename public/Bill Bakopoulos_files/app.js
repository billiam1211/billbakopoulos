console.log('Hello World')


$(document).ready(function(){
	$('.slides').slick({
	  focusOnSelect: true,
	  autoplay: true,
	  autoplaySpeed: 5000,
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  responsive: [{
	  	breakpoint: 1024,
	  	settings: {
	  		slidesToShow: 2,
	  		slidesToScroll:2
	  	}
  	},
  	{
  		breakpoint: 640,
  		settings: {
  			slidesToScroll: 1,
  			slidesToShow:1
  		},
  	}]
	});

	// $('.cards').slick({
	//   focusOnSelect: true,
	//   autoplay: true,
	//   autoplaySpeed: 3000,
	//   infinite: true,
	//   slidesToShow: 1,
	//   slidesToScroll: 1
	// });


	$('.nav__item:nth-child(3)').click(function(){
		console.log('projects clicked...')
		if( $('.sub__list').hasClass('active') ){
			$('.sub__list').removeClass('active')
			$('.nav__item:nth-child(3)').addClass('arrow-down')
			$('.nav__item:nth-child(3)').removeClass('arrow-up')
		} else {
			$('.sub__list--tech').removeClass('active')
			$('.sub__list').addClass('active')
			$('.nav__item:nth-child(3)').removeClass('arrow-down')
			$('.nav__item:nth-child(3)').addClass('arrow-up')
		}
	})

	$('.nav__item:nth-child(4)').click(function(){
	console.log('projects clicked...')
	if( $('.sub__list--tech').hasClass('active') ){
		$('.sub__list--tech').removeClass('active')
		$('.nav__item:nth-child(4)').addClass('arrow-down')
		$('.nav__item:nth-child(4)').removeClass('arrow-up')
	} else {
		$('.sub__list').removeClass('active')
		$('.sub__list--tech').addClass('active')
		$('.nav__item:nth-child(4)').removeClass('arrow-down')
		$('.nav__item:nth-child(4)').addClass('arrow-up')
	}
	})



})




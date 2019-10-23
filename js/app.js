$(document).ready(function() {
    $('.hero-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000
    });

    $('.nav__item:nth-child(3)').click(function() {
        if ( $('.sub__list').hasClass('active') ) {

            $('.sub__list').removeClass('active')
            $('.nav__item:nth-child(3)').addClass('arrow-down')
            $('.nav__item:nth-child(3)').removeClass('arrow-up')

        } else {

            $('.sub__list').addClass('active')
            $('.nav__item:nth-child(3)').removeClass('arrow-down')
            $('.nav__item:nth-child(3)').addClass('arrow-up')

            $('.sub__list--tech').removeClass('active')
            $('.nav__item:nth-child(4)').addClass('arrow-down')
            $('.nav__item:nth-child(4)').removeClass('arrow-up')
        }
    })

    $('.nav__item:nth-child(4)').click(function() {
        if ( $('.sub__list--tech').hasClass('active') ) {

            $('.sub__list--tech').removeClass('active')
            $('.nav__item:nth-child(4)').addClass('arrow-down')
            $('.nav__item:nth-child(4)').removeClass('arrow-up')

        } else {

            $('.sub__list').removeClass('active')
            $('.sub__list--tech').addClass('active')
            $('.nav__item:nth-child(4)').removeClass('arrow-down')
            $('.nav__item:nth-child(4)').addClass('arrow-up')

            $('.sub__list').removeClass('active')
            $('.nav__item:nth-child(3)').addClass('arrow-down')
            $('.nav__item:nth-child(3)').removeClass('arrow-up')

        }
    })

    $('.nav__toggle').click(function() {
        
        if ( $('.nav__list').hasClass('active-nav') ) {

            $('.nav__list').removeClass('active-nav')

        } else {

            $('.nav__list').addClass('active-nav')

        }
    })

    function closeNavSmallScreens(x) {
        if (x.matches && $('.nav__list').hasClass('active-nav')) {
            $('.nav__toggle').click();
        }
    }

    var x = window.matchMedia("(min-width: 800px)")
    closeNavSmallScreens(x)
    x.addListener(closeNavSmallScreens)


})
$(document).ready(function(){
  $('.slick-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 800,
    autoplay: false,
    autoplaySpeed: 10000,
    responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            },
          ],
  }),
    
  $('.slick-slider2').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 800,
    autoplay: false,
    autoplaySpeed: 10000,
    responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            },
          ],
  })
   $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
  });
})
            
      
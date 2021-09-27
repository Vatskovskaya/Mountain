$(document).ready(function(){
    $('.popular__box').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
      responsive:[{
        breakpoint: 927,
        settings: {
          slidesToShow: 2,
        slidesToScroll: 2,
        }
      }]
    });
  });
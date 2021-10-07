$(document).ready(function(){
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__navigation__list').toggleClass('active');
  })
    $('.popular__box').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
      responsive:[
        {
          breakpoint: 927,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
      }
    ]
    });
  });
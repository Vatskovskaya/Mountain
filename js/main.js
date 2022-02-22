$(document).ready(function(){

  $('.header__burger').click(function(event) {
    $('.header__burger,.header__navigation__list').toggleClass('active');
  });

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

  $(document).on('click', '.header__search', function(event) {
    event.preventDefault();
    // if($('.search').css('display') == 'none') {
    //   $('.search').slideDown(300)
    // }else{
    //   $('.search').slideUp(300)
    // }
    $('.search').toggleClass('active'); // отображения панели инпута поиск через добавление класса
  });
  $(document).on('click', '.header__login', function (event) {
    event.preventDefault();
    $('.popup__login-container').toggleClass('active');
    $('.popup-overlay').toggleClass('active');
    $('.wrapper').css('filter','blur(5px)');

  });

  $(document).on('click', '.close_popup', function (event) {
    event.preventDefault();
    $('.popup__login-container').removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('.wrapper').css('filter','none');
  });

  $(document).on('click', '.popup-overlay', function (event) {
    event.preventDefault();
    $('.popup__login-container').removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('.wrapper').css('filter','none');
  });
});
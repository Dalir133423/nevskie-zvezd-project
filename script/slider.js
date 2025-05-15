$(document).ready(function () {
  const $slider = $('.slider');

  $slider.slick({
      slidesToShow: 3,
      arrows: true,
      prevArrow: $('.arrow-prev'),
      nextArrow: $('.arrow-next'),
      dots: false,
      adaptiveHeight: true,
      infinite: true
  });

  $('.dotes-button').removeClass('active').eq(0).addClass('active');

  $('.dotes-button').on('click', function () {
      const slideIndex = $(this).data('slide');
      $slider.slick('slickGoTo', slideIndex);

      $('.dotes-button').removeClass('active');
      $(this).addClass('active');
  });

  $slider.on('afterChange', function (event, slick, currentSlide) {
      $('.dotes-button').removeClass('active');
      $('.dotes-button[data-slide="' + currentSlide + '"]').addClass('active');
  });
});

  
  $(document).ready(function () {
    $('.slider-3').slick({
      slidesToShow: 3,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: $('.arrow-prev-3'),
      nextArrow: $('.arrow-next-3'),
      dots: false,
      adaptiveHeight: true,
      responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
          breakpoint: 575,
          settings : {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
    ]
    });
  });
  
//   $(document).ready(function () {
//     $('.festival-last-slider').slick({
//       slidesToShow: 2,  // Показывать 2 слайда
//       slidesToScroll: 1, // Прокручивать 1 слайд за раз
//       arrows: true,  // Кнопки навигации
//       autoplay: false,
//       autoplaySpeed: 3000,
//       prevArrow: $('.festival-last-slider-prev'),
//       nextArrow: $('.festival-last-slider-next'),
//       dots: false,  
//       infinite: true, 
//     });
// });

$('.festival-last').each(function () {
  const $this = $(this);
  const $slider = $this.find('.festival-last-slider');
  const $prev = $this.find('.festival-last-slider-prev');
  const $next = $this.find('.festival-last-slider-next');

  $slider.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: $prev,
    nextArrow: $next,
    responsive: [
      {
        breakpoint : 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, 
      {
        breakpoint : 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay:true
        }
      }
    ]
  });
});


// $('.festival-img-row img').on('click', function () {
//   const $video = $('#festival-video');
  
//   // Получаем позицию изображения
//   const imgOffset = $(this).offset();
//   const imgWidth = $(this).width();
//   const imgHeight = $(this).height();

//   $video.css({
//     display: 'block',
//     top: imgOffset.top,
//     left: imgOffset.left,
//     width: imgWidth,
//     height: imgHeight
//   });

//   $video[0].currentTime = 0;  
//   $video[0].play();
// });

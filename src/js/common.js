//= jquery-1.10.1.min.js
//= foundation.min.js
//= owl.carousel.min.js
//= jquery.mCustomScrollbar.concat.min.js
//= jquery.viewportchecker.min.js
//= jquery.animateNumber.min.js


$(document).ready(function() {


$('.our-progress').viewportChecker({
  callbackFunction: function() {
    $('.our-progress--1').animateNumber({
      number: 42,
      easing: 'swing'
      },
      2000
    );

  $('.our-progress--2').animateNumber({
      number: 123,
      easing: 'swing'
    },
    2300
  );

  $('.our-progress--3').animateNumber({
      number: 15,
      easing: 'swing'
    },
    2700
  );

  $('.our-progress--4').animateNumber({
      number: 99,
      easing: 'swing'
    },
    1900
  );

  $('.our-progress--5').animateNumber({
      number: 24,
      easing: 'swing'
    },
    2400
  );

    }


});


  (function($){
        $(window).on("load",function(){
            $(".tabs-text").mCustomScrollbar({
              theme: '3d-dark'
            });
        });
    })(jQuery);

  
  });

    $('.open_map a').click(function() {
      $(this).parent().next().css({
        'display': 'block'
      }).next().show();
      return false;
    });

    $('.close_map').click(function() {
      var visibleFrame = $('.map_frame').is(':visible');

      if(visibleFrame) {
        $('.map_frame').slideUp(1000);
        $(this).fadeOut(1000)
      };
    });


    $('.tabs>.tabs-text-box').hide();

    $('.tabs>.tabs-text-box:first').show();
    $('.tabs-header__box:first').css({'backgroundPosition': '96% 24px'});

    $('.tabs-header__box').click(function() {
      var openTabs = $(this).next().is(':visible');

      if(openTabs) {
        return;
      }

      $(this)
      .css({'backgroundPosition': '96% 24px'})
      .parent()
      .find('> .tabs-text-box:visible')
      .slideToggle()
      .prev()
      .css({'backgroundPosition': '96% -16px'})
      $(this)
      .next()
      .stop(true, true)
      .slideToggle();
    });

 $(".slider_1, .slider_2").owlCarousel({
  items: 1,
  nav: true,
  loop: true,
  navText: '',
  navSpeed: 2000,
  margin: 100
 });



$(function() {

  var slider = $('.slider_top'),                      // Контейнер, содержащий пункты слайдера, в нем они уложены друг за другом
  slideWidth = $('.slider_box').outerWidth(),         // Ширина слайдера, .slider_box контейнер-родитель, в котором перемещается длинный контейнер
  slideCount = $('.slider_item').length,              // Пункты слайдера, их количество
  slideNum = 1,                                       // Номер текущего слайда
  index = 0,
  clickBullets = 0,                                    // Нажат буллет или нет
  sliderInterval = 8000,                              // Интервал смены слайдов
  animateTime = 3000,                                 // Время смены слайдов
  course = 1,                                         // Направление движения слайдера (1 или -1)
  margin = 0;                                         // первоначальное смещение слайда



  var  bullets = $('.slider-link--item');            // Здесь хранится список пунктов-буллетов

  $('.slider-nav li:first').addClass('active');       // Первому пункту буллетов, устанавливается класс active

  $('.slider_top').css({
    'margin-left': margin                           // Для контейнера-потомка устанавливаем первоначальное расположение и ширину (она равна кол-во пунктов * на ширину контейнера-родителя)
  });

 

  function nextSlide(){                                 // Данная функция запускается в конце анонимной ф-ии и запускает слайдер в автоматическом режиме (запускается ф-я animate())
    interval = window.setInterval(animate, sliderInterval);
  };


  function animate(){                                                         // Функция меняющая слайды  
    if (margin == -slideCount * slideWidth + slideWidth && course == 1) {     // Если слайдер дошел до конца

      slider.css({'marginLeft': slideWidth - slideWidth});                    // то блок .slider возвращается в начальное положение
      margin = 0;                                                             // соответственно margin устанавливается в ноль

    } else if (margin == 0 && course == -1) {                                 // Иначе если слайдер находится в начале и нажата кнопка "назад"

        slider.css({'marginLeft': -slideWidth * slideCount});                 // то блок .slider перемещается в конечное положение
        margin = -slideWidth * slideCount + slideWidth;                       // Margin в данном случае будет левой стороной самого последнего пункта

      } else {                                                                // Если условия выше не сработали,

      margin = margin - slideWidth*(course);                                  // значение margin устанавливается для показа следующего слайда

    }

    slider.animate({'marginLeft': margin}, animateTime);                       // После всех проверок блок .slider смещается влево на 1 слайд.

    // теперь нужно установить класс .active для буллета

    if (clickBullets == 0) {                                                   // Если слайдер сменился не через выбор буллета
      bulletsActive();                                                         // Вызов функции, изменяющей активный буллет
    }else{                                                                     // Если слайдер выбран с помощью буллета
      slideNum=index+1;                                                        // Номер выбранного слайда P.S. clickBullets задается при bullets.click()
    }
  }

  //  Если слайды меняются автоматически, а не через клик по буллету, то нужно добавлять буллету класс .active через функцию bulletsActive

function bulletsActive() {
    if (course == 1 && slideNum != slideCount) {                                            // Если слайды скользят влево и текущий слайд не последний

      slideNum++;                                                                           // Редактируется номер текущего слайда
      $('.slider-nav .active').removeClass('active').next('li').addClass('active');         // Изменить активный буллет

  } else if (course == 1 && slideNum == slideCount) {                                       // Если слайды скользят влево и текущий слайд последний

    slideNum = 1;                                                                           // Номер текущего слайда
    $('.slider-nav li').removeClass('active').eq(0).addClass('active');                     // Активным отмечается первый буллет
    return false;

  } else if (course == -1  && slideNum != 1){                                               // Если слайды скользят вправо и текущий слайд не последний

    slideNum--;                                                                             // Редактирунтся номер текущего слайда
      $('.slider-nav .active').removeClass('active').prev('li').addClass('active');         // Изменить активный буллет  
    return false;  

  } else if (course == -1  && slideNum == 1){                                               // Если слайды скользят вправо и текущий слайд последний

    slideNum = slideCount;                                                                  // Номер текущего слайда
    $('.slider-nav li').removeClass('active').eq(slideCount-1).addClass('active');          // Активным отмечается последний буллет

  }

}

  function sliderStop(){                                                                    // Функция преостанавливающая работу слайдера
    window.clearInterval(interval);
  }

$(window).resize(function() {
    sliderStop();
    slider.css({'marginLeft': 0}); 
    slideWidth = $('.slider_box').outerWidth();
  });

 bullets.click(function(e) {                                                    // Нажат один из буллетов

    event.preventDefault();

    if (slider.is(':animated')) { return false; }                               // Если слайдер работает в автоматическом режиме

      sliderStop();                                                             // Таймер на показ очередного слайда выключается
      index = bullets.index(this);                                              // Номер нажатого буллета

    if (course == 1) {                                                          // Если слайды скользят влево

      margin = -slideWidth * (index-1);                                         // значение margin устанавливается для показа следующего слайда
  } else if (course ==- 1) {                                                    // Если слайды скользят вправо

    margin = -slideWidth * index-2 * slideWidth;

  }

  $('.slider-nav li').removeClass('active').eq(index).addClass('active');       // Выбранному буллету добавляется сласс .active
  clickBullets=1;                                                               // Флаг информирующий о том, что слайд выбран именно буллетом
  animate();
  clickBullets=0;
  });

  nextSlide()     // Запуск всего процесса после первоначальной загрузки document.ready

});




$('.nav_toggle').click(function() {


  if($('.nav_block').is(':visible')) {
    $('.nav_block').fadeOut('fast').next().css({'display': 'none'});
    return;
  }
  $('.nav_block').fadeIn('slow').next().css({'display': 'flex'});
});






document.addEventListener("DOMContentLoaded", () => {
  // 1. Первый слайдер (Портфолио)
  const swiperPortfolio = new Swiper(".swiper-portfolio", {
    // Количество одновременно видимых слайдов (можно дробные: 1.2, 1.5, 'auto')
    slidesPerView: 1.5,

    // Расстояние (отступ) между слайдами в пикселях
    spaceBetween: 20,

    // Отступ перед первым и после последнего слайда в px
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,

    // Выравнивание карточек по высоте (все слайды будут высоты самого высокого)
    autoHeight: false,

    // Центрировать активный слайд
    centeredSlides: false,

    // Бесконечная прокрутка (зацикливание)
    loop: true,

    // Переключение по клику на любой видимый слайд
    slideToClickedSlide: true,

    // Разрешить/запретить перетаскивание мышкой и пальцем
    allowTouchMove: true,

    // Курсор-ручка при наведении ("grab")
    grabCursor: true,

    // Переключение клавиатурой (стрелками)
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    // Точки (Пагинация)
    pagination: {
      el: ".portfolio__dots",
      clickable: true, // Сделать точки кликабельными
      dynamicBullets: true, // Уменьшать дальние точки (эффект масштабирования)
      type: "bullets", // Варианты: 'bullets' | 'fraction' (1/5) | 'progressbar'
    },

    // Кнопки «Вперед / Назад»
    navigation: {
      nextEl: ".portfolio__btn--next",
      prevEl: ".portfolio__btn--prev",
    },

    autoplay: {
      delay: 3000, // Пауза между слайдами в мс (3 сек)
      disableOnInteraction: false, // НЕ останавливать автопрокрутку после ручного свайпа
      pauseOnMouseEnter: true, // На паузу при наведении мыши
    },

    // Мобильные по умолчанию (0px+)
    slidesPerView: 1.2,
    spaceBetween: 16,

    breakpoints: {
      // При ширине экрана >= 480px
      480: {
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      // При ширине экрана >= 768px (Планшеты)
      768: {
        slidesPerView: 2.5,
        spaceBetween: 24,
      },
      // При ширине экрана >= 1024px (Десктоп)
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false, // Отключить свайп на десктопе, если нужна статичная сетка
      },
    },

    effect: "fade", // Варианты: 'slide' | 'fade' | 'cube' | 'coverflow' | 'cards'
    fadeEffect: {
      crossFade: true, // Плавный перекрестный файд
    },
  });
});

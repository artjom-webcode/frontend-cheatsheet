const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 42,
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1230: {
      slidesPerView: 4,
      spaceBetween: 42,
    },
  },
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },

  // Бесконечная прокрутка
  loop: true,

  // Скорость анимации
  speed: 500,

  // Переключение мышкой / пальцем
  grabCursor: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

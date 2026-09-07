const swiper = new Swiper(".swiper", {
  /*
    1.2 = один полный слайд
          + кусочек следующего

    centeredSlides позволяет
    показывать кусочки с обеих сторон.
  */
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 20,

  loop: true,

  speed: 500,

  grabCursor: true,

  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },

    900: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 4.5,
      spaceBetween: 30,
    },
  },
});

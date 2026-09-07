// // Swiper slider
// const swiper = new Swiper(".swiper", {
//   loop: true,
//   //   freeMode: true,

//   //   slidesPerView: 1,
//   //   spaceBetween: 42,

//   breakpoints: {
//     600: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     920: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },
//     1230: {
//       slidesPerView: 4,
//       spaceBetween: 42,
//     },
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: "#sliderNext",
//     prevEl: "#sliderPrev",
//   },
// });

// Tabs
/* не лучший вариант */
// const tabControls = document.querySelector(".tab-controls");
// const tabsBtns = document.querySelectorAll("[data-tab]");
// const tabsProducts = document.querySelectorAll("[data-tab-value]");

// tabControls.addEventListener("click", (e) => {
//   const btnClicked = e.target.closest(".tab-controls__btn");
//   if (!btnClicked) return;

//   tabsBtns.forEach((btn) => {
//     btn.classList.remove("tab-controls__btn--active");
//   });

//   btnClicked.classList.add("tab-controls__btn--active");

//   const category = btnClicked.dataset.tab;

//   tabsProducts.forEach((product) => {
//     if (category === "all" || product.dataset.tabValue === category) {
//       product.style.display = "flex";
//     } else {
//       product.style.display = "none";
//     }
//   });

//   swiper.update();
// });

const swiper = new Swiper(".swiper", {
  loop: true,

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
});

// ==========================
// Tabs
// ==========================

const tabControls = document.querySelector(".tab-controls");
const tabsBtns = document.querySelectorAll("[data-tab]");

// Сохраняем все исходные слайды
const allSlides = [...document.querySelectorAll(".swiper-slide")];

tabControls.addEventListener("click", (e) => {
  const btnClicked = e.target.closest(".tab-controls__btn");

  if (!btnClicked) return;

  // Активная кнопка
  tabsBtns.forEach((btn) => {
    btn.classList.remove("tab-controls__btn--active");
  });

  btnClicked.classList.add("tab-controls__btn--active");

  const category = btnClicked.dataset.tab;

  // Удаляем все слайды из Swiper
  swiper.removeAllSlides();

  // Выбираем нужные
  const filteredSlides =
    category === "all"
      ? allSlides
      : allSlides.filter((slide) => slide.dataset.tabValue === category);

  // Возвращаем нужные слайды
  swiper.appendSlide(filteredSlides);

  // Обновляем Swiper
  swiper.update();

  // Возвращаемся к первому слайду
  swiper.slideTo(0);
});

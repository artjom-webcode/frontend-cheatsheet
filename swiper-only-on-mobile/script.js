document.addEventListener("DOMContentLoaded", () => {
  let portfolioSwiper = null;

  const mobileQuery = window.matchMedia("(max-width: 690px)");
  const track = document.querySelector(".portfolio__track");
  const trackInner = document.querySelector(".portfolio__track-inner");
  const pagination = document.querySelector(".portfolio__pagination");

  function initSwiper(e) {
    // берём items заново каждый раз — на случай динамических изменений DOM
    const items = trackInner.querySelectorAll(":scope > .portfolio__item");

    if (e.matches) {
      // --- МОБИЛЬНЫЙ (<= 690px): включаем Swiper ---
      if (!portfolioSwiper) {
        track.classList.add("swiper");
        trackInner.classList.add("swiper-wrapper");
        items.forEach((item) => item.classList.add("swiper-slide"));

        portfolioSwiper = new Swiper(track, {
          slidesPerView: 1,
          spaceBetween: 16,
          pagination: {
            el: pagination,
            clickable: true,
          },
        });
      }
    } else {
      // --- ДЕСКТОП (> 690px): выключаем Swiper полностью ---
      if (portfolioSwiper) {
        portfolioSwiper.destroy(true, true);
        portfolioSwiper = null;

        track.classList.remove("swiper");
        trackInner.classList.remove("swiper-wrapper");
        items.forEach((item) => item.classList.remove("swiper-slide"));
      }
    }
  }

  initSwiper(mobileQuery);
  mobileQuery.addEventListener("change", initSwiper);
});

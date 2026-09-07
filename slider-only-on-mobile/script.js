/* Этот весь код нужен только для точек пагинации. Слайдер работает на css. */

document.addEventListener("DOMContentLoaded", () => {
  const mobileQuery = window.matchMedia("(max-width: 690px)");
  const trackInner = document.querySelector(".portfolio__track-inner");
  const pagination = document.querySelector(".portfolio__pagination");
  // массив с дивами portfolio__item
  const items = Array.from(trackInner.querySelectorAll(":scope > .portfolio__item"));

  let dots = [];
  /* IntersectionObserver (тот самый "наблюдатель", который следит, какая карточка сейчас видна на экране) нужен не всегда — только когда включён мобильный слайдер. На десктопе он не нужен вообще. */
  let observer = null;

  /* Функция создания точек для слайдера */
  function buildDots() {
    pagination.innerHTML = "";
    dots = items.map((_, index) => {
      const dot = document.createElement("button");
      dot.className = "portfolio__pagination-dot";
      dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
      dot.addEventListener("click", () => {
        items[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      });
      pagination.appendChild(dot);
      return dot;
    });
    if (dots.length) dots[0].classList.add("is-active");
  }

  function setActiveDot(index) {
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
  }

  function initObserver() {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = items.indexOf(entry.target);
            if (index !== -1) setActiveDot(index);
          }
        });
      },
      {
        root: trackInner,
        threshold: 0.6, // слайд считается "активным", когда виден на 60%+
      },
    );

    items.forEach((item) => observer.observe(item));
  }

  function enableSlider() {
    if (!dots.length) buildDots();
    if (!observer) initObserver();
  }

  function disableSlider() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    pagination.innerHTML = "";
    dots = [];
    // сбрасываем горизонтальный скролл, чтобы при возврате на мобильный
    // слайдер не открывался с середины списка
    trackInner.scrollLeft = 0;
  }

  function handleChange(e) {
    if (e.matches) {
      enableSlider();
    } else {
      disableSlider();
    }
  }

  handleChange(mobileQuery);
  mobileQuery.addEventListener("change", handleChange);
});

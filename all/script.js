const listDiv = document.querySelector(".list");

const list = [
  {
    itemName: "Форма с уроков Jonas'a",
    itemText: "Простая форма с уроков у Jonas. Без JS",
    itemLink: "/form-from-jonas/index.html",
    itemLinkGithub: "form-from-jonas",
  },
  {
    itemName: "Шпаргалка с гридами",
    itemText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, fugit?",
    itemLink: "/grid-cheatsheet/index.html",
    itemLinkGithub: "grid-cheatsheet",
  },
  {
    itemName: "Бесконечный скрол (Эффект)",
    itemText: "",
    itemLink: "/infinite-horizontal-scroll-animation/index.html",
    itemLinkGithub: "infinite-horizontal-scroll-animation",
  },
  {
    itemName: "Навигация 1",
    itemText: "",
    itemLink: "/navigation-01/index.html",
    itemLinkGithub: "navigation-01",
  },
  {
    itemName: "Навигация 2",
    itemText: "",
    itemLink: "/navigation-02/index.html",
    itemLinkGithub: "navigation-02",
  },
  {
    itemName: "Навигация 3",
    itemText: "",
    itemLink: "/navigation-03/index.html",
    itemLinkGithub: "navigation-03",
  },
  {
    itemName: "Навигация 4",
    itemText: "",
    itemLink: "/navigation-04/index.html",
    itemLinkGithub: "navigation-04",
  },
  {
    itemName: "Навигация 5",
    itemText: "",
    itemLink: "/navigation-05/index.html",
    itemLinkGithub: "navigation-05",
  },
  {
    itemName: "Навигация 6",
    itemText: "",
    itemLink: "/navigation-06/index.html",
    itemLinkGithub: "navigation-06",
  },
  {
    itemName: "Навигация 7",
    itemText: "",
    itemLink: "/navigation-07/index.html",
    itemLinkGithub: "navigation-07",
  },
  {
    itemName: "Навигация 8",
    itemText: "",
    itemLink: "/navigation-08/index.html",
    itemLinkGithub: "navigation-08",
  },
  {
    itemName: "Навигация внизу 1",
    itemText: "",
    itemLink: "/navigation-bottom-01/index.html",
    itemLinkGithub: "navigation-bottom-01",
  },
  {
    itemName: "Навигация внизу 2",
    itemText: "",
    itemLink: "/navigation-bottom-02/index.html",
    itemLinkGithub: "navigation-bottom-02",
  },
  {
    itemName: "Навигация внизу 3",
    itemText: "",
    itemLink: "/navigation-bottom-03/index.html",
    itemLinkGithub: "navigation-bottom-03",
  },

  {
    itemName: "scroll-snap",
    itemText: "",
    itemLink: "/scroll-snap/index.html",
    itemLinkGithub: "scroll-snap",
  },
  {
    itemName: "slider-only-on-mobile",
    itemText: "",
    itemLink: "/slider-only-on-mobile/index.html",
    itemLinkGithub: "slider-only-on-mobile",
  },
  {
    itemName: "swiper-basic",
    itemText: "",
    itemLink: "/swiper-basic/index.html",
    itemLinkGithub: "swiper-basic",
  },
  {
    itemName: "swiper-only-on-mobile",
    itemText: "",
    itemLink: "/swiper-only-on-mobile/index.html",
    itemLinkGithub: "swiper-only-on-mobile",
  },
  {
    itemName: "swiper-responsive",
    itemText: "",
    itemLink: "/swiper-responsive/index.html",
    itemLinkGithub: "swiper-responsive",
  },
  {
    itemName: "swiper-with-middle-slide",
    itemText: "",
    itemLink: "/swiper-with-middle-slide/index.html",
    itemLinkGithub: "swiper-with-middle-slide",
  },
  {
    itemName: "tabs-filter-swiper",
    itemText: "",
    itemLink: "/tabs-filter-swiper/index.html",
    itemLinkGithub: "tabs-filter-swiper",
  },
  {
    itemName: "video-cards",
    itemText: "",
    itemLink: "/video-cards/index.html",
    itemLinkGithub: "video-cards",
  },
  {
    itemName: "Адаптивные карточки с изображениями",
    itemText: "",
    itemLink: "/cards/index.html",
    itemLinkGithub: "cards",
  },
  {
    itemName: "Карточка frontend mentor",
    itemText: "",
    itemLink: "/cart-frontend-mentor-01/index.html",
    itemLinkGithub: "cart-frontend-mentor-01",
  },
  {
    itemName: "Карточка frontend mentor 2",
    itemText: "",
    itemLink: "/cart-frontend-mentor-02/index.html",
    itemLinkGithub: "cart-frontend-mentor-02",
  },
];

function renderMarkUp() {
  let html = "";
  list.forEach((item) => {
    html += `<li class="item">
          <h3 class="item__title">${item.itemName}</h3>
          <p class="item__text">${item.itemText}</p>
          <a href="..${item.itemLink}" class="item__link">Link</a>
          <a href="https://github.com/artjom-webcode/frontend-cheatsheet/tree/main/${item.itemLinkGithub}"
            class="item__link-github"
            >Github</a
          >
        </li>`;
  });
  listDiv.insertAdjacentHTML("beforeend", html);
}

renderMarkUp();

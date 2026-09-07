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
    itemLink: "/sswiper-basic/index.html",
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
];

function renderMarkUp() {
  let html = "";
  list.forEach((item) => {
    html += `<li class="item">
          <h3 class="item__title">${item.itemName}</h3>
          <p class="item__text">${item.itemText}</p>
          <a href="${item.itemLink}" class="item__link">Link</a>
          <a href="https://github.com/artjom-webcode/frontend-cheatsheet/tree/main/${item.itemLinkGithub}"
            class="item__link-github"
            >Github</a
          >
        </li>`;
  });
  listDiv.insertAdjacentHTML("beforeend", html);
}

renderMarkUp();

"use strict";

///////////////////////////////////////
//ADD SHADOW HEADER
const header = document.getElementById("header");

const shadowHeader = () => {
  if (!header) return;

  window.scrollY >= 50
    ? header.classList.add("header--active-shadow")
    : header.classList.remove("header--active-shadow");
};

window.addEventListener("scroll", shadowHeader);

// const header = document.getElementById("header");
// const trigger = document.querySelector(".section-1");

// const observer = new IntersectionObserver(([entry]) => {
//   header.classList.toggle("header--active-shadow", !entry.isIntersecting);
//   console.log(trigger);
// });

// observer.observe(trigger);

///////////////////////////////////////////////////////////
// Make mobile navigation work (burger-menu)
const btnMobile = document.querySelector(".btn-mobile");
const menu = document.querySelector(".menu");

btnMobile.addEventListener("click", function () {
  const isActive = menu.classList.toggle("menu--active");
  btnMobile.classList.toggle("btn-mobile--active", isActive);
  document.body.style.overflow = isActive ? "hidden" : "auto";
});
///////////////////////////////////////
// PAGE NAVIGATION
document.querySelector(".menu__list").addEventListener("click", function (e) {
  //навешиваем на ul слушателя
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("menu__link")) {
    // если мы кликнули на ссылку
    const id = e.target.getAttribute("href"); // узнаем ее данные в атрубте href
    document.querySelector(id).scrollIntoView({ behavior: "smooth" }); // находим элемент с этим данным и скролем плавно
  }
  //  Close mobile naviagtion это для того когда открыто бургер меню
  if (menu.classList.contains("menu--active"))
    // если на навесит класс nav--active
    menu.classList.remove("menu--active"); // убираем его и закрывается бургер меню
  btnMobile.classList.remove(
    "btn-mobile--active",
  ); /* ибираем к кнопке класс для крестика и крестик становится линиями */
  document.body.style.overflow = "auto";
});

////////////////////////////////////////////
// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(".menu a[href*=" + sectionId + "]");

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("menu__link--active");
    } else {
      sectionsClass.classList.remove("menu__link--active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

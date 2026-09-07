/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector(".nav__menu"),
  navToggle = document.querySelector(".nav__toggle"),
  navClose = document.querySelector(".nav__close");

const openMenu = () => {
  navMenu.classList.add("nav__menu--open");
  document.body.style.overflow = "hidden";
};

const closeMenu = () => {
  navMenu.classList.remove("nav__menu--open");
  document.body.style.overflow = "auto";
};

navToggle?.addEventListener("click", openMenu);
navClose?.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

///////////////////////////////////////
//ADD SHADOW HEADER
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (!header) return;

  window.scrollY >= 50
    ? header.classList.add("header--active")
    : header.classList.remove("header--active");
});

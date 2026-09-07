/////////////////////////
// Mobile navigation menu
/////////////////////////
const burgerBtn = document.querySelector(".header__burger-menu");
const closeBtn = document.querySelector(".nav__close-btn");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");

function openMenu() {
  nav.classList.add("nav--open");
  burgerBtn.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  nav.classList.remove("nav--open");
  burgerBtn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

burgerBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

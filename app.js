/**
 * =========================
 * =========================
 *          sidemenu
 * =========================
 * =========================
 */
const hamburger = document.getElementById("hamburger");
const sidemenu = document.querySelector(".sidemenu");
const nav = document.getElementById("nav");

const sidemenuVisibility = () => {
  nav.classList.toggle("sidemenu-nav");
  sidemenu.classList.toggle("show-sidemenu");
};

hamburger.addEventListener("click", () => sidemenuVisibility());
sidemenu.addEventListener("click", () => sidemenuVisibility());

/**
 * =========================
 * =========================
 *          features
 * =========================
 * =========================
 */

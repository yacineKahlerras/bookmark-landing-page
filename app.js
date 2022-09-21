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
const featureBtns = [...document.querySelector(".features-btns").children];
const featuresContent = [
  ...document.querySelector(".features-content-container").children,
];

const showFeature = (index) => {
  featuresContent.forEach((feature, featureIndex) => {
    feature.style.transform = `translate(${index * -100}%, 0)`;

    if (featureIndex == index) feature.style.opacity = `1`;
    else feature.style.opacity = `0`;
  });

  featureBtns.forEach((btn, btnIndex) => {
    if (btnIndex == index) btn.classList.add("feature-selected");
    else btn.classList.remove("feature-selected");
  });
};

showFeature(0);

featureBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => showFeature(index));
});

/**
 * =========================
 * =========================
 *          questions
 * =========================
 * =========================
 */
const questions = [...document.querySelector(".questions-container").children];

questions.forEach((q) => {
  q.addEventListener("click", () => q.classList.toggle("hide-question"));
});

/**
 * =========================
 * =========================
 *          email
 * =========================
 * =========================
 */
const form = document.getElementById("signup");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputContainer = form.querySelector(".input-container");
  const emailInput = form.elements["email"];
  const email = emailInput.value.trim();
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(email)) {
    inputContainer.classList.add("input-error");
    inputContainer.classList.remove("input-success");
  } else {
    inputContainer.classList.remove("input-error");
    inputContainer.classList.add("input-success");
  }
});

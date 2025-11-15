// FORCER SCROLL EN HAUT
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

// TYPEWRITER HERO
const heroText = document.getElementById("hero-text");
const phrases = [
  "Boostez votre productivité.",
  "Travaillez plus intelligemment.",
  "Découvrez SaaSify.",
];
let i = 0,
  currentPhrase = "",
  isDeleting = false,
  speed = 100;
function type() {
  let fullText = phrases[i];
  if (isDeleting) {
    currentPhrase = fullText.substring(0, currentPhrase.length - 1);
  } else {
    currentPhrase = fullText.substring(0, currentPhrase.length + 1);
  }
  heroText.innerHTML = currentPhrase;
  if (!isDeleting && currentPhrase === fullText) {
    isDeleting = true;
    speed = 50;
  } else if (isDeleting && currentPhrase === "") {
    isDeleting = false;
    i++;
    if (i >= phrases.length) i = 0;
    speed = 150;
  } else {
    speed = isDeleting ? 50 : 150;
  }
  setTimeout(type, speed);
}
type();

// FAQ Accordéon
document.querySelectorAll(".faq-item").forEach((item) => {
  item.querySelector(".question").addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// Pricing Toggle
const toggle = document.getElementById("billing-toggle");
const prices = document.querySelectorAll(".plan .price");
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    prices[0].textContent = "€100";
    prices[1].textContent = "€300";
    prices[2].textContent = "€800";
  } else {
    prices[0].textContent = "€10";
    prices[1].textContent = "€30";
    prices[2].textContent = "€80";
  }
});

// Fade-in sections
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);
sections.forEach((sec) => observer.observe(sec));

// HAMBURGER MENU TOGGLE
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("header nav");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"); // animation X
  nav.classList.toggle("active"); // slide menu
});

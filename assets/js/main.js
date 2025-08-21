/* ================================
   NAV TOGGLE
================================ */
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

/* ================================
   LIGHTBOX WITH SLIDER
================================ */
const images = [
  "img/1.png",
  "img/2.png",
  "img/3.png",
  "img/4.png",
  "img/5.png",
  "img/6.png",
  "img/7.png",
  "img/8.png",
  "img/9.png"
];

// Default preview: 2.png (index 1)
let currentIndex = 1;

// DOM elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const projectPreview = document.querySelector(".project-preview");

/* ===== Open modal when clicking project preview ===== */
if (projectPreview && lightbox && lightboxImg) {
  projectPreview.addEventListener("click", () => {
    currentIndex = 1; // always start at 2.png
    showImage();
    lightbox.style.display = "flex";
  });
}

/* ===== Show selected image ===== */
function showImage() {
  if (lightboxImg) {
    lightboxImg.src = images[currentIndex];
  }
}

/* ===== Close modal ===== */
if (closeBtn && lightbox) {
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}

/* ===== Next image ===== */
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  });
}

/* ===== Previous image ===== */
if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
  });
}

/* ===== Close modal when clicking outside image ===== */
if (lightbox) {
  window.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
}

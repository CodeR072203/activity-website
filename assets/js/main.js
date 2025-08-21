<<<<<<< HEAD
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
=======
/* MENU SHOW */ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*----- ANIMATE -----*/
// OVERLAY
gsap.to(".first", 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut});
gsap.to(".second", 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut});
gsap.to(".third", 1.5, {delay: .9, top: "-100%", ease: Expo.easeInOut});

// IMG
gsap.from('.home__img', {opacity: 0, duration: 2, delay: 2, x: 60})

// INFORMATION
gsap.from('.home__information', {opacity: 0, duration: 3, delay: 2.3, y: 25})
gsap.from('.anime-text', {opacity: 0, duration: 3, delay: 2.3, y: 25, ease:'expo.out', stagger: .3})

// NAV ITEM
gsap.from('.nav__logo', {opacity:0, duration: 3, delay: 3.2, y: 25, ease:'expo.out'});
gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 3.2, y: 25, ease:'expo.out', stagger: .2})

// SOCIAL
gsap.from('.home__social-icon', {opacity: 0, duration: 3, delay: 4, y: 25, ease:'expo.out', stagger: .2})
>>>>>>> 4bf5938e390de62c2415f5bf11667d13ee6b20d3

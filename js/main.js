/*=============== SHOW MENU ===============*//*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Function to open the menu
const showMenu = () => {
  navMenu.classList.add("show-menu");
};

// Function to close the menu
const closeMenu = () => {
  navMenu.classList.remove("show-menu");
};

// Event listeners for opening and closing the menu
if (navToggle) {
  navToggle.addEventListener("click", showMenu);
}

if (navClose) {
  navClose.addEventListener("click", closeMenu);
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

// Function to close the menu when a link is clicked
const linkAction = () => {
  closeMenu(); // Close the menu
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== SWIPER WACTHES ===============*/
const swiperWatches = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [-100, 0, -500],
      rotate: [0, 0, 15],
      opacity: 0,
    },
    next: {
      translate: [100, 0, -500],
      rotate: [0, 0, -15],
      opacity: 0,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
});

// document.addEventListener("DOMContentLoaded", function() {
//   var grid = document.querySelector('.photo-grid');
//   var masonry = new Masonry(grid, {
//     itemSelector: '.photo',
//     columnWidth: '.photo',
//     gutter: 10
//   });
// });-

/*=============== GSAP ANIMATION ==============*/
gsap.from('.home__images', { opacity: 0, y: 150, duration: 1.5, delay: 0.1 });
gsap.from('.home__data', { opacity: 0, x: -100, duration: 1.8, delay: 0.8 });
gsap.from('.home__info', { opacity: 0, x: -100, duration: 1.8, delay: 1 });
gsap.from('main', { opacity: 0, x: -100, duration: 1.4, delay: 1 });

// swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    allowTouchMove: false,
    loop: true,
    autoplay: {
        delay: 0,
    },
    speed: 3500,          //add
    slidesPerView: 3,     //add

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
      }
  });

// hamburguer menu

let navLinks = document.querySelector(".navbar_links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".navbar_links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".inst-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}

let jsArrow = document.querySelector(".socios-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
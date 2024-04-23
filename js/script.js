//    user options toggle button
function userOptions() {
  document
    .querySelector("#user-options-toggle")
    .classList.toggle("user-options-affter-toggle");
  document
    .querySelector("#button")
    .classList.toggle("icon-background-after-toggle");
}

//  review carousel
var splide = new Splide(".splide", {
  direction: "rtl",
  perPage: 1,
  perMove: 1,
  gap: "1.3rem",
  breakpoints: {
    640: {
      perPage: 2,
      gap: ".7rem",
      height: "6rem",
    },
    480: {
      perPage: 1,
      gap: ".7rem",
      height: "6rem",
    },
  },
});
splide.mount();

// banner carousel
var splide = new Splide("#banner-carousel2", {
  direction: "rtl",
  autoplay: true,
});
splide.mount();

//  special-offers carousel

var splide = new Splide("#special-offers-carousel3", {
  direction: "rtl",
  perPage: 7,
  perMove: 1,
  gap: "0.15rem",
   breakpoints: {
    640: {
      perPage: 2,
    },
    480: {
      perPage: 1,
    },
  },
});
splide.mount();

// review-carousel and banner-carousel z-index  :-(
const element1 = document.getElementById("menu-categoryy");
const targetElement = document.getElementById("review-carousel1");
element1.addEventListener("mouseenter", () => {
  targetElement.style.zIndex = "-1";
});
element1.addEventListener("mouseleave", () => {
  targetElement.style.zIndex = "auto";
});
/////
const element2 = document.getElementById("menu-categoryy");
const targetElement2 = document.getElementById("banner-carousel2");
element2.addEventListener("mouseenter", () => {
  targetElement2.style.zIndex = "-1";
});
element2.addEventListener("mouseleave", () => {
  targetElement2.style.zIndex = "auto";
});

////////////////////////////////////////
////////////////////////////////////////

function forReviewcarousel() {
  var targetElement = document.getElementById("review-carousel1");
  if (targetElement.style.zIndex === "-1") {
    targetElement.style.zIndex = "1";
  } else {
    targetElement.style.zIndex = "-1";
  }
  var targetElement2 = document.getElementById("banner-carousel2");
  if (targetElement2.style.zIndex === "-1") {
    targetElement2.style.zIndex = "1";
  } else {
    targetElement2.style.zIndex = "-1";
  }
}

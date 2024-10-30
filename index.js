//-------------Landing Page Animation---------------

var lp_tl = gsap.timeline();
lp_tl.from(".logo", {
  y: -50,
  opacity: 0,
  duration: 1,
});
lp_tl.from(".nav_right li", {
  y: -10,
  opacity: 0,
  duration: 0.1,
  stagger: 0.2,
});
lp_tl.from(".nav_right .nav_btn", {
  y: -10,
  opacity: 0,
  duration: 0.1,
  stagger: 0.2,
});
lp_tl.from(".hero_left h1,.hero_left  p,.hero_left .btn_bg ", {
  x: -400,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});
lp_tl.from(
  ".hero_right img",
  {
    x: 400,
    opacity: 0,
  },
  "-=1"
);

//-------------Brand Animation---------------

gsap.from(".brand_sec p", {
  y: -50,
  opacity: 0,
  duration: 1,
});

gsap.from(".brand_logo .brand_logo_img", {
  y: 50,
  opacity: 0,
  duration: 2,
  stagger: 0.3, // Adds delay between each image
  scrollTrigger: {
    trigger: ".brand_logo",
    scroller: "body",
    start: "top 50%",
    // markers: true,
  },
});

//-------------Choose Cowork Animation---------------

gsap.from(".choose_sec .img_sm", {
  rotate: 360,
  delay: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".choose_sec .img_sm",
    scroll: "body",
    start: "top 60%",
    // markers:true
  },
});

gsap.from(".choose_sec .card_img_color", {
  left: 0,
  delay: 1,
  duration: 1,
  repeat: 1,
  scrollTrigger: {
    trigger: ".choose_sec .choose_card_wrapper",
    scroll: "body",
    start: "top 60%",
    // markers:true
  },
});

//-------------Explore Animation---------------

gsap.from(".explore_sec .img_sm", {
  rotateX: 360,
  delay: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".explore_sec .img_sm",
    scroll: "body",
    start: "top 60%",
    // markers:true
  },
});

gsap.from(".explore_sec .explore_img", {
  scale: 0,
  opacity: 0,
  delay: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".explore_sec img",
    scroll: "body",
    start: "top 50%",
    // markers:true
  },
});

//-------------Stat Animation---------------
var stat_tl = gsap.timeline();
stat_tl.from(".stat_sec .left_stat", {
  x: -100,
  delay: 0.5,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".stat_sec",
    scroll: "body",
    start: "top 60%",
    // markers: true,
  },
});
stat_tl.from(".stat_sec .right_stat", {
  delay: 0.5,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".stat_sec",
    scroll: "body",
    start: "top 60%",
    // markers: true,
  },
});
gsap.from(".stat_sec .stat_clr .card_img_color ", {
  x: 60,
  delay: 0.5,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".stat_clr",
    scroll: "body",
    start: "top 60%",
    // markers: true,
  },
});

//-------------Testimonial Animatation---------------

if (window.innerWidth > 900) {
  gsap.from(".testimonial .test_card", {
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".testimonial",
      scroller: "body",
      start: "top 60%",
      // markers: true,
    },
  });
}

//-------------Chronicles Animatation---------------

gsap.from(".chr_card img", {
  opacity: 0,
  scale: 0,
  duration: 0.5,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".chrncle_cards",
    scroller: "body",
    start: "top 60%",
    // markers: true,
  },
});

//-------------Hamburger Naviagation---------------
let nav_right = document.querySelector(".nav_right");
let nav_menu = document.querySelector("#nav_menu");

nav_menu.addEventListener("click", function () {
  console.log("showData");
  nav_right.classList.toggle("showData");
});

// -------------FAQ SECTION-------------
let faqs = document.querySelectorAll(".faq");

faqs.forEach(function (faq) {
  let arrow_down = faq.querySelector(".faq_arrow_down");
  let arrow_up = faq.querySelector(".faq_arrow_up");
  let ans = faq.querySelector(".faq_ans");
  arrow_down.addEventListener("click", function () {
    ans.style.display = "block";
    arrow_down.style.display = "none";
    arrow_up.style.display = "block";
  });
  arrow_up.addEventListener("click", function () {
    ans.style.display = "none";
    arrow_down.style.display = "block";
    arrow_up.style.display = "none";
  });
});

// -------------CHRONICLE SECTION-------------

let btn = document.querySelector("#chr_btn");
let chr = document.querySelector(".chrncle_btm");
let isExpand = false;

btn.addEventListener("click", function () {
  if (isExpand) {
    chr.style.height = "425px";
    chr.style.transition = "2s ease-in-out";
    btn.textContent = "View All";
  } else {
    chr.style.height = "auto";
    chr.style.transition = "ease-in-out";
    btn.textContent = "Close All";
  }
  isExpand = !isExpand;
});

// -------------Testinomial Card Scroll Animation-------------

let testmnl_sec = document.querySelector(".testmnl_sec");
let test_cards = document.querySelectorAll(".test_card");

// let testmnl_sec = document.querySelector(".testmnl_sec");
// let test_cards = document.querySelectorAll(".test_card");
// const mediaquery = window.matchMedia("(min-width:700px)");

// function active_animation() {
//   test_cards.forEach(function (test_card) {
//     test_card.classList.add("active");
//   });
// }

// window.addEventListener("DOMContentLoaded", function () {
//     window.addEventListener("scroll", function () {
//       const testml_position = testmnl_sec.getBoundingClientRect().top;
//       const height = window.innerHeight;
//       if (testml_position < height && testml_position > 0) active_animation();
//     });
//   });

// // Listen for changes in the media query
// mediaquery.addEventListener("change", function (e) {
//   if (e.matches) {
//     // If the media query matches
//     console.log("Media query matched: Viewport is at least 700px wide");
//   } else {
//     // If the media query does not match
//     console.log("Media query did not match: Viewport is less than 700px");
//   }
// });

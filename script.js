function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,

    tablet: { smooth: true },

    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();

var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 10 + "px";
  crsr.style.top = dets.y + 10 + "px";
});

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top 30%",
    end: "top 0",
    scrub: 3,
  },
});

tl.to(
  ".page1 h1",
  {
    x: -100,
  },
  "anim"
);

tl.to(
  ".page1 h2",
  {
    x: 100,
  },
  "anim"
);

tl.to(
  ".page1 video",
  {
    width: "95%",
  },
  "anim"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top -130%",
    end: "top -110%",
    scrub: 3,
  },
});

tl2.to(".main", {
  backgroundColor: "#fff",
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top -350%",
    end: "top -340%",
    scrub: 3,
  },
});

tl3.to(".main", {
  backgroundColor: "#0F0D0D",
});

var boxs = document.querySelectorAll(".box");

boxs.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var att = elem.getAttribute("data-image");
    crsr.style.opacity = 1;
    crsr.style.height = "400px";
    crsr.style.width = "580px";
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${att})`;
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.opacity = 0;
    crsr.style.height = "20px";
    crsr.style.width = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = "none";
  });
});

var video = document.querySelector(".page1 video");

Shery.makeMagnet(".magnet-target", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

let pdiv = document.querySelector(".purple");
let links = document.querySelectorAll(".npart2 a");
links.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    pdiv.style.display = "block";
  });

  elem.addEventListener("mouseleave", function () {
    pdiv.style.display = "none";
  });
});

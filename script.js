var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  console.log(dets.x, dets.y);
  crsr.style.left = dets.x - 7.5 + "px";
  crsr.style.top = dets.y - 7.5 + "px";
  blur.style.left = dets.x - 150 + "px";
  blur.style.top = dets.y - 150 + "px";
});
gsap.to(".nav", {
  backgroundColor: "#3A76B110",
  color: "#fff",
  height: "90px",
  duration: 1,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -50%",
    end: "top -60",
    scrub: 1,
  },
});
gsap.to(".nav .hidden", {
  display: "initial",
  height: "70px",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".nav img",
    scroller: "body",
    // markers:true,
    start: "top -50%",
    end: "top -60",
    scrub: 0.5,
  },
});
gsap.to(".nav .navName", {
  display: "none",
  // height: "70px",
  // duration: 0.5,
  scrollTrigger: {
    trigger: ".nav img",
    scroller: "body",
    // markers:true,
    start: "top -50",
    end: "top -51",
    scrub: 0.1,
  },
});

gsap.to("#main", {
  backgroundColor: "#11009E",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:true,
    start: "top -50%",
    end: "top -70%",
    scrub: 1,
  },
});

gsap.to("#page-1", {
  backgroundColor: "#0F0282",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:true,
    start: "top -50%",
    end: "top -70%",
    scrub: 1,
  },
});
gsap.to(".box", {
  x: 700,
  y: 200,
  duration: 2,
  delay: 1,
  backgroundColor: "blue",
  rotate: 660,
  scale: 0,
  scrollTrigger: {
    trigger: ".nav img",
    scroller: "body",
    // markers:true,
    start: "top -50%",
    end: "top -60",
    scrub: 1,
  },
});

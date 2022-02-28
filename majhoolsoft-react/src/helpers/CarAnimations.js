import anime from "animejs";
function CarAnimations(timeline = null) {
  anime({
    targets: "#rear-wheel , #front-wheel",
    rotate: "21turn",
    duration: 11000,
    // easing: "cubicBezier(1,0,.45,.45)",
    easing: "easeOutQuad",
  });
  anime({
    targets: "#car, #beam, #sideview",
    translateX: 1050,
    duration: 6000,
    delay: 5000,
    // easing: "cubicBezier(1,0,.45,.45)",
    easing: "easeOutQuad",
  });
}

export default CarAnimations;

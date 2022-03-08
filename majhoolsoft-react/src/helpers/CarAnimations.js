import anime from "animejs";
function CarAnimations(finishedCallback) {
  anime({
    targets: "#rear-wheel , #front-wheel",
    rotate: [{ value: "21turn", duration: 11000 }],
    translateY: [
      { value: 1, easing: "easeInSine", duration: 100, delay: 1000 },
      { value: -1, easing: "easeInSine", duration: 100 },
      { value: 0, easing: "easeInSine", duration: 300 },
      { value: -1, easing: "easeInSine", duration: 100, delay: 1000 },
      { value: 1, easing: "easeInSine", duration: 100 },
      { value: 0, easing: "easeInSine", duration: 300 },
    ],
    // easing: "cubicBezier(1,0,.45,.45)",
    easing: "easeOutQuad",
  });
  anime({
    targets: "#car, #beam, #sideview",
    translateX: 1050,
    duration: 6000,
    delay: 5000,
    translateY: [
      { value: -2, easing: "easeInSine", duration: 200, delay: 1200 },
      { value: 2, easing: "easeInSine", duration: 200 },
      { value: -2, easing: "easeInSine", duration: 200, delay: 1200 },
      { value: 2, easing: "easeInSine", duration: 200 },
    ],
    // easing: "cubicBezier(1,0,.45,.45)",
    easing: "easeOutQuad",
  }).finished.then(finishedCallback);
}

export default CarAnimations;

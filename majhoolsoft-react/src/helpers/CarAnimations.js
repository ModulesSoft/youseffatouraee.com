import anime from "animejs";
function CarAnimations(finishedCallback) {
  anime({
    targets: "#rear-wheel , #front-wheel",
    rotate: [{ value: "21turn", duration: 11000 }],
    easing: "easeOutQuad",
  });
  anime({
    targets: "#wheels",
    translateY: [
      { value: -5, easing: "linear", duration: 200, delay: 1000 },
      { value: 0, easing: "easeOutBounce", duration: 1000 },
      { value: -10, easing: "linear", duration: 200 },
      { value: 0, easing: "easeOutBounce" },
    ],
    easing: "easeOutQuad",
  });
  anime({
    targets: "#car, #beam, #sideview",
    translateX: 1050,
    duration: 6000,
    delay: 5000,
    translateY: [
      { value: -1, easing: "linear", duration: 200, delay: 1100 },
      { value: 0, easing: "easeOutBounce", duration: 900 },
      { value: -3, easing: "linear", duration: 200 },
      { value: 0, easing: "easeOutBounce" },
    ],
    easing: "easeOutQuad",
  }).finished.then(finishedCallback);
}

export default CarAnimations;

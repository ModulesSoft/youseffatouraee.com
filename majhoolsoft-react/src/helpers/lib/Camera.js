import anime from "animejs";
function Camera() {
  function fromTo(
    target,
    viewArray,
    duration,
    easing = null,
    delay = 0,
    finishedCallback
  ) {
    anime({
      targets: target,
      viewBox: viewArray,
      easing: easing ? easing : "easeOutQuad",
      duration,
      delay,
    }).finished.then(finishedCallback);
  }
  return {
    fromTo,
  };
}
export default Camera;

import anime from "animejs";
function Camera() {
  function fromTo(
    target,
    from,
    to,
    duration,
    easing = null,
    delay = 0,
    finishedCallback
  ) {
    anime({
      targets: target,
      viewBox: [from, to],
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

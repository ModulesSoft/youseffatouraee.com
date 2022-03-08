import anime from "animejs";

function CameraAnimations() {
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
    // IntroScene,
    // LaptopView,
    // DegreeView,
    // OSView,
    // frontEndOneView,
    // frontEndTwoView,
    // backEndOneView,
    // notebookOneView,
    // notebookTwoView,
    // microphoneView,
    // motorcycleView,
    // gardenView,
    // mountainView,
    fromTo,
  };
}
export default CameraAnimations;

import anime from "animejs";
function Camera(target, view, easing, finishedCallback = () => {}) {
  anime({
    targets: target,
    viewBox: view,
    duration: 10,
    easing: easing ? easing : "linear",
  });
}
export default Camera;

import anime from "animejs";
function Camera(target, view, easing, finishedCallback = () => {}) {
  anime({
    targets: target,
    viewBox: view,
    easing: easing ? easing : "linear",
  });
}
export default Camera;

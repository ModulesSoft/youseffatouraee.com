import anime from "animejs";
var anim = anime.timeline({ loop: false });
function Camera(target, view, easing, finishedCallback = () => {}) {
  anim.add({
    targets: target,
    viewBox: view,
    duration: 0,
    easing: easing ? easing : "linear",
  });
}
export default Camera;

import anime from "animejs";
function Camera(target, view, easing, finishedCallback = () => {}) {
  anime({
    targets: target,
    viewBox: view,
    duration: 10,
    easing: easing ? easing : "linear",
  });
  anime({
    targets: "#motorcycle",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1500,
    delay: function (el, i) {
      return i * 250;
    },
    direction: "alternate",
    loop: true,
  });
}
export default Camera;

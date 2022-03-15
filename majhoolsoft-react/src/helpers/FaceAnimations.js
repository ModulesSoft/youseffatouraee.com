import anime from "animejs";
function FaceAnimations(isMobile, mobileTarget, desktopTarget) {
  console.log(isMobile);
  function smile() {
    anime
      .timeline({ loop: false })
      .add({
        targets: mobileTarget,
        duration: 2000,
        easing: "easeOutQuad",
        y: 60,
      })
      .add({
        targets: desktopTarget,
        duration: 2000,
        easing: "easeOutQuad",
        translateX: 20,
        translateY: -6,
        rotate: "50deg",
      })
      .add({
        targets: desktopTarget,
        duration: 2000,
        easing: "easeOutQuad",
        translateX: -20,
        translateY: 6,
        rotate: "-50deg",
      })
      .finished.then(() => {});
  }
  function poker() {
    anime({
      targets: mobileTarget,
      duration: 2000,
      easing: "easeOutQuad",
      y: 45,
    });
  }
  if (isMobile) {
    poker();
  } else {
  }
}
export default FaceAnimations;

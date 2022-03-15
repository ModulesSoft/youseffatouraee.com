import anime from "animejs";
function FaceAnimations(isMobile, mobileTarget, desktopTarget, faceUp = false) {
  if (isMobile) {
    anime({
      targets: mobileTarget,
      duration: 5000,
      easing: "easeOutQuad",
      y: 45,
    });
  } else {
    if (faceUp) {
      anime
        .timeline({ loop: false })
        .add({
          targets: desktopTarget,
          opacity: 0,
        })
        .add({
          targets: mobileTarget,
          duration: 2000,
          easing: "easeOutQuad",
          y: 45,
        });
    } else {
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
        });
    }
  }
}
export default FaceAnimations;

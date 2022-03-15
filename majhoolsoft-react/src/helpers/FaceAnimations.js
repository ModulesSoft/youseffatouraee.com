import anime from "animejs";
function FaceAnimations(pokerFace, smileFace) {
  function poker() {
    anime
      .timeline({ loop: false })
      .add({
        targets: smileFace,
        opacity: 0,
      })
      .add({
        targets: pokerFace,
        opacity: 1,
      })
      .add({
        targets: pokerFace,
        duration: 2000,
        easing: "easeOutQuad",
        y: 45,
      });
  }
  function smile() {
    anime
      .timeline({ loop: false })
      .add({
        targets: pokerFace,
        opacity: 0,
      })
      .add({
        targets: smileFace,
        opacity: 1,
      })
      .add({
        targets: pokerFace,
        duration: 2000,
        easing: "easeOutQuad",
        y: 60,
      })
      .add({
        targets: smileFace,
        duration: 2000,
        easing: "easeOutQuad",
        translateX: 20,
        translateY: -6,
        rotate: "50deg",
      });
  }
  return { poker, smile };
}
export default FaceAnimations;

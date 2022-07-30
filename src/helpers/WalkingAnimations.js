import anime from "animejs";
function WalkingAnimations(walkingId, sideviewId, finishedCallback = () => {}) {
  anime
    .timeline({ loop: false })
    .add({
      targets: walkingId,
      translateX: 550,
      duration: 4500,
      easing: "linear",
    })
    .add({
      targets: walkingId,
      translateY: 50,
      opacity: 0,
    })
    .add(
      {
        targets: sideviewId,
        opacity: 1,
      },
      "-=1000"
    )
    .add({
      targets: sideviewId,
      translateY: 5,
      duration: 500,
      easing: "spring(1, 80, 10, 0)",
    })
    .finished.then(() => {
      anime.remove(`${walkingId},${sideviewId}`);
      finishedCallback();
    });
}
export default WalkingAnimations;

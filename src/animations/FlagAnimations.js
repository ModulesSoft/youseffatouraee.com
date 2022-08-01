import anime from "animejs";
function FlagAnimations(flagId, finishedCallback = () => {}) {
  anime
    .timeline({ loop: false })
    .add({
      targets: flagId,
      opacity: 1,
    })
    .add({
      targets: flagId,
      duration: 1000,
      translateY: 160,
      easing: "linear",
    })
    .finished.then(() => {
      anime.remove(flagId);
      finishedCallback();
    });
}
export default FlagAnimations;

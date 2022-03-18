import anime from "animejs";
function FlagAnimations(finishedCallback) {
  console.log("flag");
  anime
    .timeline({ loop: false })
    .add({
      targets: "#flag",
      opacity: 1,
    })
    .add({
      targets: "#flag",
      duration: 1000,
      translateY: 150,
      easing: "linear",
    });
}
export default FlagAnimations;

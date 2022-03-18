import anime from "animejs";
function WalkingAnimations(finishedCallback) {
  console.log("walking");
  anime
    .timeline({ loop: false })
    .add({
      targets: "#walking",
      translateX: 550,
      duration: 4500,
      easing: "linear",
    })
    .add({
      targets: "#walking",
      translateY: 50,
      opacity: 0,
    })
    .add(
      {
        targets: "#sideview",
        opacity: 1,
      },
      "-=1000"
    )
    .add({
      targets: "#sideview",
      translateY: 5,
      duration: 500,
      easing: "spring(1, 80, 10, 0)",
    })
    // .add({
    //   //to prevent showing again
    //   targets: "#walking",
    //   x: 1450,
    //   opacity: 0,
    //   easing: "linear",
    // })
    .finished.then(finishedCallback);
}
export default WalkingAnimations;

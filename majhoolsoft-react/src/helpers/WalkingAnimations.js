import anime from "animejs";
function WalkingAnimations() {
  console.log("walkingg");

  anime
    .timeline({ loop: false })
    .add({
      targets: "#walking",
      opacity: 1,
      duration: 2000,
      easing: "easeInExpo",
    })
    .add({
      targets: "#walking",
      translateX: 450,
      duration: 3000,
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
    });
}
export default WalkingAnimations;

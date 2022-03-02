import anime from "animejs";
function WalkingAnimations() {
  anime
    .timeline({ loop: false })
    .add({
      targets: "#sideview",
      translateY: 5,
      duration: 500,
      delay: 0,
    })
    .add({
      targets: "#sideview",
      opacity: 0,
      duration: 1,
      delay: 0,
    })
    .add({
      targets: "#walking",
      opacity: 1,
      duration: 100,
      delay: 0,
      easing: "easeInExpo",
    })
    .add({
      targets: "#walking",
      translateX: 450,
      duration: 3000,
      delay: 100,
      easing: "linear",
    })
    .add({
      targets: "#walking",
      opacity: 0,
      delay: 0,
      easing: "easeInExpo",
    });
}
export default WalkingAnimations;

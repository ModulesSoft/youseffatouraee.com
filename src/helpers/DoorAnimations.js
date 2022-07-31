import anime from "animejs";
function DoorAnimations(doorId, amount) {
  // turn off the head lights
  anime({
    targets: doorId,
    duration: 0,
    opacity: 0,
    easing: "easeOutQuad",
    translateY: amount,
  });
}

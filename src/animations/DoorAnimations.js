import anime from "animejs";
function DoorAnimations(doorId, amount) {
  anime({
    targets: doorId,
    duration: 0,
    translateY: amount,
  });
}
export default DoorAnimations;

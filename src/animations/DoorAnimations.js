import anime from "animejs";
function DoorAnimations(doorId, scroll) {
  let slideAmount = Math.ceil(scroll) * 14 + "px";
  if (scroll < 1) slideAmount = 0;
  anime({
    targets: doorId,
    duration: 0,
    translateY: slideAmount,
  });
}
export default DoorAnimations;

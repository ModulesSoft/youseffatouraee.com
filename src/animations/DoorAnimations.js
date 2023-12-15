function DoorAnimations(doorId, step, maxStep) {
  let slideStep = (step / maxStep) * 150;
  if (step < 1) slideStep = 0;
  document.querySelector(doorId).style.transform = `translateY(${slideStep}px)`;
}
export default DoorAnimations;

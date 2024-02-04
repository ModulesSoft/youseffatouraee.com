function DoorAnimations(doorId, step, maxStep) {
  const distance = 140;
  let slideStep = (step / maxStep) * distance;
  if (step < 1) slideStep = 0;
  document.querySelector(doorId).style.transform = `translateY(${slideStep}px)`;
}
export default DoorAnimations;

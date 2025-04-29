function DoorAnimations(doorId, step, maxStep) {
  const distance = 140;
  let slideStep = distance - (step / maxStep) * distance;
  if (step < 1) slideStep = distance;
  document.querySelector(doorId).style.transform = `translateY(${slideStep}px)`;
}
export default DoorAnimations;

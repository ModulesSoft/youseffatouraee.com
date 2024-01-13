function WalkingAnimations(walkingId, cycleIds, step, maxStep) {
  const fullCycle = maxStep / 2;
  const moveStep = Math.floor((step / fullCycle) * cycleIds.length);
  if (step > fullCycle) {
    step = step / 2;
  }
  const shuffleStep = Math.floor((step / fullCycle) * cycleIds.length) - 1;
  // Hide the other cycles
  cycleIds.forEach((cycleId) => {
    document.querySelector(cycleId).style.opacity = 0;
  });
  if (shuffleStep >= 0 && shuffleStep < cycleIds.length) {
    // Show the current cycle
    document.querySelector(cycleIds[shuffleStep]).style.opacity = 1;
    // Move the body
    document.querySelector(walkingId).style.transform = `translateX(${
      moveStep * 30
    }px)`;
  }
}
export default WalkingAnimations;

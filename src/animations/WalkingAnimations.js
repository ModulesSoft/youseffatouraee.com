function WalkingAnimations(walkingId, cycleIds, step, maxStep) {
  const roundedStep = Math.floor((step / maxStep) * (cycleIds.length + 1)); // +1 to make sure it exceeds walking cycles and stops rendering it
  // Hide the other cycles
  cycleIds.forEach((cycleId) => {
    document.querySelector(cycleId).style.opacity = 0;
  });
  if (roundedStep >= 0 && roundedStep < cycleIds.length) {
    // Show the current cycle
    document.querySelector(cycleIds[roundedStep]).style.opacity = 1;
    // Move the body
    document.querySelector(walkingId).style.transform = `translateX(${
      roundedStep * 60
    }px)`;
  }
}
export default WalkingAnimations;

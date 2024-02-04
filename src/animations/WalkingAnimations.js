function WalkingAnimations(walkingId, cycleIds, step, maxStep) {
  // Maximum distance to move
  const distance = 40;
  // Move to shuffle proportion
  const proportion = 1.55;
  const amount = (step / maxStep) * distance;
  const shuffleStep = Math.floor((amount / proportion) % cycleIds.length);
  const move = Math.floor(amount * cycleIds.length * proportion);
  // Hide the other cycles
  cycleIds.forEach((cycleId) => {
    document.querySelector(cycleId).style.opacity = 0;
  });
  if (shuffleStep >= 0 && shuffleStep < cycleIds.length) {
    // Show the current cycle
    document.querySelector(cycleIds[shuffleStep]).style.opacity = 1;
    // Move the body
    document.querySelector(walkingId).style.transform = `translateX(${move}px)`;
  }
}
export default WalkingAnimations;

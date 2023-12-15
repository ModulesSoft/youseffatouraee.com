function WalkingAnimations(walkingId, cycleIds, sideviewId, step, maxStep) {
  const roundedStep = Math.floor((step / maxStep) * 9); // 9 to make sure it exceeds 8 and enters else condition
  // Hide the other cycles
  cycleIds.forEach((cycleId) => {
    document.querySelector(cycleId).style.opacity = 0;
  });
  if (roundedStep >= 0 && roundedStep < 8) {
    console.log(roundedStep);
    // Show the current cycle
    document.querySelector(cycleIds[roundedStep]).style.opacity = 1;
    // Move the body
    document.querySelector(walkingId).style.transform = `translateX(${
      roundedStep * 60
    }px)`;
  } else {
    // Show the face in the car
    document.querySelector(sideviewId).style.opacity = 1;
    // Never show the body again
    document.querySelector(walkingId).style.opacity = 0;
  }
}
export default WalkingAnimations;

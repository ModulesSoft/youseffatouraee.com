import anime from "animejs";
function CarAnimations(
  carId,
  beamId,
  rearWheelId,
  frontWheelId,
  wheelsId,
  sideviewId
) {
  // turn off the head lights
  anime({
    targets: beamId,
    duration: 0,
    opacity: 0,
    easing: "easeOutQuad",
  });
  anime({
    targets: [rearWheelId, frontWheelId],
    rotate: [{ value: "21turn", duration: 11000 }],
    easing: "easeOutQuad",
  });
  anime({
    targets: wheelsId,
    translateY: [
      { value: -5, easing: "linear", duration: 200, delay: 1000 },
      { value: 0, easing: "easeOutBounce", duration: 1000 },
      { value: -7, easing: "linear", duration: 200 },
      { value: 0, easing: "easeOutBounce" },
    ],
    easing: "easeOutQuad",
  });
  anime({
    targets: `${carId},${beamId},${sideviewId}`,
    translateX: 1050,
    duration: 6000,
    // delay: 5000,
    translateY: [
      { value: -1, easing: "linear", duration: 200, delay: 1100 },
      { value: 0, easing: "easeOutBounce", duration: 900 },
      { value: -3, easing: "linear", duration: 200 },
      { value: 0, easing: "easeOutBounce" },
    ],
    easing: "easeOutQuad",
  }).finished.then(() => {
    anime.remove(
      `${carId},${beamId},${rearWheelId},${frontWheelId},${wheelsId},${sideviewId}`
    );
    if (document.querySelector(carId)) {
      document.querySelector(carId).style.visibility = "hidden";
      document.querySelector(beamId).style.visibility = "hidden";
      document.querySelector(sideviewId).style.visibility = "hidden";
    }
  });
}

export default CarAnimations;

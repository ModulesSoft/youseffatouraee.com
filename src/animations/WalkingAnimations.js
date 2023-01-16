import anime from "animejs";
function WalkingAnimations(
  walkingId,
  cycleIds,
  sideviewId,
  scroll,
  finishedCallback = () => {}
) {
  const roundedScroll = Math.ceil(scroll * 2.5) % 8;
  anime({
    targets: cycleIds,
    duration: 0,
    opacity: 0,
  });
  if (roundedScroll >= 0 && scroll < 8) {
    anime({
      targets: cycleIds[roundedScroll],
      duration: 0,
      opacity: 1,
    });
    anime({
      targets: walkingId,
      translateX: 55 * scroll,
      duration: 0,
      easing: "linear",
    });
  } else {
    anime({
      targets: sideviewId,
      opacity: 1,
      duration: 500,
    });
    // never show walking again
    anime({
      targets: walkingId,
      opacity: 0,
      duration: 0,
      easing: "linear",
    });
    finishedCallback();
  }
  // anime
  //   .timeline({ loop: false })
  //   .add({
  //     targets: walkingId,
  //     translateX: 550,
  //     duration: 4500,
  //     easing: "linear",
  //   })
  //   .add({
  //     targets: walkingId,
  //     translateY: 50,
  //     opacity: 0,
  //   })
  //   .add(
  //     {
  //       targets: sideviewId,
  //       opacity: 1,
  //     },
  //     "-=1000"
  //   )
  //   .add({
  //     targets: sideviewId,
  //     translateY: 5,
  //     duration: 500,
  //     easing: "spring(1, 80, 10, 0)",
  //   })
  //   .finished.then(() => {
  //     anime.remove(`${walkingId},${sideviewId}`);
  //     finishedCallback();
  //   });
}
export default WalkingAnimations;

import anime from "animejs";
function BackgroundAnimations(pageClass, darknessId, cloudsId, sunId) {
  function day() {
    anime
      .timeline({ loop: false })
      // sun sets
      .add(
        {
          targets: sunId,
          duration: 3000,
          translateY: "-650px",
          easing: "easeOutQuad",
        },
        1000 //delay to start
      )
      // clouds come up
      .add({
        targets: cloudsId,
        duration: 1000,
        translateY: "-300px",
      })
      .add(
        {
          targets: darknessId,
          opacity: 0,
          duration: 2000,
          easing: "linear",
        },
        "-=3000"
      )

      .add(
        {
          targets: pageClass,
          backgroundColor: "#87CEEB",
          duration: 2000,
          easing: "linear",
        },
        "-=4000"
      )
      .finished.then(() => {
        anime.remove(`${sunId},${cloudsId},${darknessId},${pageClass}`);
        if (document.querySelector(darknessId)) {
          document.querySelector(darknessId).style.visibility = "hidden";
        }
      });
  }
  function night() {
    if (document.querySelector(darknessId))
      document.querySelector(darknessId).style.visibility = "";
    anime({
      targets: darknessId,
      duration: 0,
      opacity: 1,
      easing: "easeOutQuad",
      delay: 0,
    }).finished.then(() => anime.remove(darknessId));
  }
  return { night, day };
}
export default BackgroundAnimations;

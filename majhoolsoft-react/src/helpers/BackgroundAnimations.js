import anime from "animejs";
function BackgroundAnimations() {
  function day() {
    anime
      .timeline({ loop: false })
      // sun sets
      .add(
        {
          targets: "#sun",
          duration: 3000,
          translateY: "-650px",
          easing: "easeOutQuad",
        },
        1000 //delay to start
      )
      // clouds come up
      .add({
        targets: "#clouds",
        duration: 1000,
        translateY: "-300px",
      })
      .add(
        {
          targets: "#darkness",
          opacity: 0,
          duration: 2000,
          easing: "linear",
        },
        "-=3000"
      )

      .add(
        {
          targets: ".page",
          backgroundColor: "#87CEEB",
          duration: 2000,
          easing: "linear",
        },
        "-=4000"
      );
    // turn off the head lights
    anime({
      targets: "#beam",
      duration: 500,
      opacity: 0,
      easing: "easeOutQuad",
      delay: 10000,
    });
    // to prevent appearing again
    anime({
      targets: "#darkness",
      translateY: 1080,
      duration: 500,
      easing: "linear",
      delay: 6000,
    });
  }
  function night() {
    anime({
      targets: "#darkness",
      duration: 0,
      opacity: 1,
      easing: "easeOutQuad",
      delay: 0,
    });
  }
  return { night, day };
}
export default BackgroundAnimations;

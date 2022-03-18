import anime from "animejs";
function BackgroundAnimations() {
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
    });
  // fade in to day
  anime
    .timeline({ loop: false })
    .add({
      targets: "#darkness",
      opacity: [1, 0],
      duration: 2000,
      delay: 7000,
      easing: "linear",
    })
    .add(
      {
        targets: "#background",
        opacity: [0, 1],
        duration: 1000,
        easing: "linear",
      },
      "-=3000"
    )
    .add({
      targets: ".page",
      backgroundColor: "#87CEEB",
      duration: 2000,
      easing: "linear",
    });

  //thread four (headlights):
  // turn off the head lights
  anime({
    targets: "#beam",
    duration: 500,
    opacity: 0,
    easing: "easeOutQuad",
    delay: 10000,
  });
}
export default BackgroundAnimations;

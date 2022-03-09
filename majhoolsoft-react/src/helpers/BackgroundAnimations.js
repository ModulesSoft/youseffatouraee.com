import anime from "animejs";
function BackgroundAnimations(timeline = null) {
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
      6000 //delay to start
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
    .add(
      {
        targets: ".page",
        "background-image": "linear-gradient(#87ceeb, #2a7936)",
        duration: 2000,
        easing: "linear",
      },
      "-=4500"
    );

  //thread four (headlights):
  // turn off the head lights
  anime({
    targets: "#beam",
    duration: 500,
    opacity: 0,
    easing: "easeOutQuad",
    delay: 10000,
  });

  //last thread - infinite loop (scroll icon):
  // Scroll icon
  anime({
    targets: ".scrollIcon",
    opacity: [0, 0.4],
    delay: 16000,
  });
  anime({
    targets: ".scrollIcon",
    translateY: -50,
    direction: "alternate",
    loop: true,
    easing: "spring(1, 80, 10, 0)",
  });
}
export default BackgroundAnimations;

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
  anime.timeline({ loop: false }).add({
    targets: "#darkness",
    keyframes: [
      // fade in to day
      { opacity: 0, duration: 3000, delay: 7000, easing: "linear" },
      // fade in unless scroll
      {
        opacity: 0.7,
        duration: 1000,
        delay: 4000,
        easing: "linear",
      },
    ],
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

  //last thread - infinite loop (scroll icon):
  // Scroll icon
  anime({
    targets: ".scrollIcon",
    translateY: -50,
    direction: "alternate",
    loop: true,
    easing: "spring(1, 80, 10, 0)",
    opacity: 0.3,
  });
}
export default BackgroundAnimations;

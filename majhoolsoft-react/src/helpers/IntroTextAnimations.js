import anime from "animejs";
function IntroTextAnimations() {
  anime
    .timeline({ loop: false })
    // Hi text fades in
    .add({
      targets: ".hi",
      opacity: [0, 1],
      easing: "easeInExpo",
    })
    // welcome text fades in
    .add({
      targets: ".welcome",
      opacity: [0, 1],
      easing: "easeInExpo",
    })
    // Hi and welcome text fade out
    .add(
      {
        targets: [".hi", ".welcome"],
        opacity: 0,
        easing: "easeInExpo",
      },
      5000
    )
    .add(
      {
        targets: ".scroll",
        opacity: [0, 0.8],
        easing: "easeInExpo",
      },
      15000
    );
}
export default IntroTextAnimations;

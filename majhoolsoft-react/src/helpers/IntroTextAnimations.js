import anime from "animejs";
function IntroTextAnimations() {
  function introScene(finishedCallback) {
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
      .finished.then(addScrollIcon(".scrollResume"), finishedCallback);
  }
  function addScrollIcon(target, finishedCallback) {
    anime({
      targets: target,
      opacity: [0, 0.8],
      easing: "easeInExpo",
    }).finished.then(finishedCallback);
  }
  function removeScrollIcon() {
    anime.remove([".scrollIcon", "#darkness", ".scrollText"]);
    anime({
      targets: [".scrollIcon", "#darkness", ".scrollText"],
      opacity: 0,
    });
  }
  return { introScene, removeScrollIcon, addScrollIcon };
}
export default IntroTextAnimations;

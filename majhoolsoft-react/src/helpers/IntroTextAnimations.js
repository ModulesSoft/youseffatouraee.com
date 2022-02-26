import anime from "animejs";
function IntroTextAnimations() {
  function introScene(finishedCallback) {
    anime({
      targets: [".hi", ".welcome"],
      keyframes: [
        {
          opacity: 1,
          easing: "easeInExpo",
          delay: anime.stagger(2000, { start: 1000 }),
        },
        {
          opacity: 0,
          easing: "easeOutExpo",
          delay: anime.stagger(5000, { start: 4000, direction: "reverse" }),
        },
      ],
    }).finished.then(addScrollIcon(".scrollResume", finishedCallback, 15000));
  }
  function addScrollIcon(target, finishedCallback, delay = 0) {
    anime({
      targets: target,
      opacity: [0, 0.8],
      easing: "easeInExpo",
      delay: delay,
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

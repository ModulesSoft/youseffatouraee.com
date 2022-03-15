import anime from "animejs";
function IntroTextAnimations() {
  function introScene(finishedCallback) {
    anime({
      targets: [".hi", ".welcome", ".download"],
      keyframes: [
        {
          opacity: 1,
          easing: "easeInExpo",
          delay: anime.stagger(1500, { start: 500 }),
        },
        {
          opacity: 0,
          easing: "easeOutExpo",
          delay: anime.stagger(2000, { start: 4000, direction: "reverse" }),
        },
      ],
    }).finished.then(addScroll(".scrollResume", finishedCallback, 15000));
  }
  function addScroll(scrollClass, scrollIconClass, scrollTextClass) {
    anime({
      targets: [scrollClass, scrollTextClass],
      duration: 1000,
      easing: "easeInExpo",
      opacity: 1,
    });
    anime({
      targets: scrollIconClass,
      duration: 2000,
      easing: "easeInExpo",
      opacity: 0.6,
    });
    anime({
      targets: scrollIconClass,
      translateY: -50,
      direction: "alternate",
      loop: true,
      easing: "spring(1, 80, 10, 0)",
    });
  }
  function removeScroll(scrollClass, scrollTextClass) {
    anime({
      targets: [scrollClass, scrollTextClass],
      opacity: 0,
    });
  }
  return { introScene, removeScroll, addScroll };
}
export default IntroTextAnimations;

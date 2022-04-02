import anime from "animejs";
function TextAnimations() {
  function introScene(targets, finishedCallback = () => {}) {
    anime({
      targets: targets,
      keyframes: [
        {
          opacity: 1,
          easing: "easeInExpo",
          delay: anime.stagger(1500, { start: 0 }),
        },
        {
          opacity: 0,
          easing: "easeOutExpo",
          delay: anime.stagger(2000, { start: 4000, direction: "reverse" }),
        },
      ],
    }).finished.then(() => {
      anime.remove(targets);
      finishedCallback();
    });
  }
  function addScroll(
    scrollClass,
    scrollIconClass,
    scrollTextClass,
    introId,
    decorativeId,
    delay = 0
  ) {
    addSVGOverlays(introId, decorativeId);
    anime
      .timeline({ loop: false })
      .add({
        targets: [scrollClass, scrollTextClass],
        duration: 10,
        easing: "easeInExpo",
        opacity: 1,
        delay,
      })
      .add({
        targets: scrollIconClass,
        duration: 0,
        easing: "easeInExpo",
        opacity: 0.6,
      })
      .finished.then(() => {
        anime({
          targets: scrollIconClass,
          translateY: -50,
          direction: "alternate",
          loop: true,
          easing: "spring(1, 80, 10, 0)",
        }).finished.then(() => anime.remove(scrollIconClass));
        anime.remove(`${scrollClass},  ${scrollTextClass}`);
      });
  }
  function removeScroll(
    scrollClass,
    scrollIconClass,
    scrollTextClass,
    decorativeId
  ) {
    anime({
      targets: [scrollClass, scrollIconClass, scrollTextClass],
      duration: 0,
      opacity: 0,
    }).finished.then(() =>
      anime.remove(`${scrollClass}, ${scrollIconClass}, ${scrollTextClass}`)
    );
    removeSVGOverlays(decorativeId);
  }

  function removeSVGOverlays(introId, decorativeId) {
    if (document.querySelector(introId))
      document.querySelector(introId).style.visibility = "hidden";
    if (document.querySelector(decorativeId))
      document.querySelector(decorativeId).style.visibility = "hidden";
  }
  function addSVGOverlays(decorativeId) {
    if (document.querySelector(decorativeId))
      document.querySelector(decorativeId).style.visibility = "";
  }
  return { introScene, removeScroll, addScroll };
}
export default TextAnimations;

import anime from "animejs";
function TextAnimations() {
  function introScene(finishedCallback) {
    anime({
      targets: ".hi,.welcome,.download",
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
    }).finished.then(finishedCallback);
  }
  function addScroll(scrollClass, scrollIconClass, scrollTextClass, delay = 0) {
    addSVGOverlays();
    anime({
      targets: [scrollClass, scrollTextClass],
      duration: 0,
      easing: "easeInExpo",
      opacity: 1,
      delay,
    });
    anime({
      targets: scrollIconClass,
      duration: 0,
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
  function removeScroll(scrollClass, scrollIconClass, scrollTextClass) {
    anime({
      targets: [scrollClass, scrollIconClass, scrollTextClass],
      duration: 0,
      opacity: 0,
    });
    removeSVGOverlays();
  }

  function removeSVGOverlays() {
    document.getElementById("intro").style.visibility = "hidden";
    if (document.getElementById("decorative"))
      document.getElementById("decorative").style.visibility = "hidden";
  }
  function addSVGOverlays() {
    if (document.getElementById("decorative"))
      document.getElementById("decorative").style.visibility = "";
  }
  return { introScene, removeScroll, addScroll };
}
export default TextAnimations;

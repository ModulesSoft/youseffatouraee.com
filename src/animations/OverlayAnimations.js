import anime from "animejs";
export default class OverlayAnimations {
  scrollIconAnimation;
  constructor(scrollIconClass) {
    this.scrollIconAnimation = anime({
      targets: scrollIconClass,
      translateY: 50,
      direction: "alternate",
      loop: true,
      easing: "spring(1, 80, 10, 0)",
    });
  }
  removeAnimationAndHide(...overlays) {
    this.scrollIconAnimation.pause();
    overlays.forEach((overlay) => {
      if (document.querySelector(overlay))
        document.querySelector(overlay).style.visibility = "hidden";
      // anime.remove(overlay);
    });
  }
  addAnimationAndShow(...overlays) {
    this.scrollIconAnimation.play();
    overlays.forEach((overlay) => {
      if (document.querySelector(overlay))
        document.querySelector(overlay).style.visibility = "";
      anime({
        targets: overlay,
        duration: 0,
        opacity: 1,
        easing: "easeOutQuad",
        delay: 0,
      });
    });
  }
}

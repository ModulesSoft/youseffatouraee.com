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
  addMultipleText(...targets) {
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

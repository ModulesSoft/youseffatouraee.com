import IntroTextAnimations from "../IntroTextAnimations";
function scrollIconHandler(
  scrollClass,
  scrollIconClass,
  scrollTextClass,
  scroll,
  scrollStage,
  delay,
  sceneNumber,
  threshold,
  fnBefore,
  fnAfter
) {
  if (
    scroll < sceneNumber * scrollStage + threshold &&
    scroll >= sceneNumber * scrollStage
  ) {
    IntroTextAnimations().addScroll(
      scrollClass,
      scrollIconClass,
      scrollTextClass,
      delay
    );
    fnBefore();
  } else {
    IntroTextAnimations().removeScroll(
      scrollClass,
      scrollIconClass,
      scrollTextClass,
      delay
    );
    fnAfter();
  }
}
export default scrollIconHandler;

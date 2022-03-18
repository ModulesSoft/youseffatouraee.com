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
  callbackfn
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
  } else {
    IntroTextAnimations().removeScroll(
      scrollClass,
      scrollIconClass,
      scrollTextClass,
      delay
    );
    callbackfn();
  }
}
export default scrollIconHandler;

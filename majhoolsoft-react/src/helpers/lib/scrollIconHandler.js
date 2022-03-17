import IntroTextAnimations from "../IntroTextAnimations";
function scrollIconHandler(
  scrollClass,
  scrollIconClass,
  scrollTextClass,
  scroll,
  scrollStage,
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
      scrollTextClass
    );
  } else {
    IntroTextAnimations().removeScroll(scrollClass, scrollTextClass);
    callbackfn();
  }
}
export default scrollIconHandler;

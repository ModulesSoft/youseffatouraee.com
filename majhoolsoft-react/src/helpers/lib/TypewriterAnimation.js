import anime from "animejs";
import Typewriter from "typewriter-effect/dist/core";
function TypewriterAnimation(
  pageClass,
  wrapperClassName,
  speed,
  target,
  position,
  finishedCallback
) {
  // positioning
  anime({
    targets: ".article",
    translateX: position.x,
    translateY: position.y,
    width: position.width,
  }).finished.then();
  // writing
  let tw = new Typewriter("." + pageClass, {
    strings: target,
    autoStart: true,
    delay: speed,
    wrapperClassName: wrapperClassName,
    deleteSpeed: 0.5,
  });
  tw.callFunction(finishedCallback);
}
export default TypewriterAnimation;

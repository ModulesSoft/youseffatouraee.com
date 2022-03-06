import Typewriter from "typewriter-effect/dist/core";
function TypewriterAnimation(
  pageClass,
  wrapperClassName,
  speed,
  target,
  finishedCallback,
  position
) {
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

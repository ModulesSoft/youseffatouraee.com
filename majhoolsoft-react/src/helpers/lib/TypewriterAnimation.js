import Typewriter from "typewriter-effect/dist/core";
function TypewriterAnimation(
  pageClass,
  wrapperClassName,
  speed,
  target,
  finishedCallback
) {
  let tw = new Typewriter("." + pageClass, {
    strings: target,
    autoStart: true,
    delay: speed,
    wrapperClassName: wrapperClassName,
  });
  tw.callFunction(finishedCallback);
}
export default TypewriterAnimation;

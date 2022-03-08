import anime from "animejs";
import TW from "typewriter-effect/dist/core";
function Typewriter(
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
  let tw = new TW("." + pageClass, {
    strings: target,
    autoStart: true,
    delay: speed,
    wrapperClassName: wrapperClassName,
    deleteSpeed: 0.5,
  });
  tw.callFunction(finishedCallback);
}
export default Typewriter;

// import anime from "animejs";
import TW from "typewriter-effect/dist/core";
let prevText = "";
function Typewriter(
  pageClass,
  wrapperClassName,
  delay,
  textArray,
  position = null,
  finishedCallback = () => {}
) {
  if (!position || prevText === textArray) {
    return;
  }
  prevText = textArray;
  // positioning
  // anime({
  //   targets: pageClass,
  //   translateX: position.x,
  //   translateY: position.y,
  //   width: position.width,
  // }).finished.then(() => {
  // writing
  // let tw =
  new TW(pageClass, {
    strings: textArray,
    autoStart: true,
    delay: delay,
    wrapperClassName: wrapperClassName,
    deleteSpeed: 0.5,
  });
  //   tw.callFunction(() => {
  //     anime.remove(pageClass);
  //     tw.stop();
  //     finishedCallback();
  //   });
  // });
}
export default Typewriter;

import TW from "typewriter-effect/dist/core";
let prevText = "";
function Typewriter(
  pageClass,
  wrapperClassName,
  delay,
  textArray,
  position = null
) {
  if (!position || prevText === textArray) {
    return;
  }
  prevText = textArray;
  const tw = new TW(pageClass, {
    strings: textArray,
    autoStart: true,
    delay: delay,
    wrapperClassName: wrapperClassName,
    pauseFor: delay + 3000,
    deleteSpeed: 50,
  });
  return tw;
}
const CleanTypewriter = (pageClass) => {
  const tw = new TW(pageClass).stop();
  return tw;
};
export { Typewriter, CleanTypewriter };

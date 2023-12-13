import TW from "typewriter-effect/dist/core";
export default class Typewriter {
  constructor(pageClass, wrapperClassName, delay, deleteSpeed, pauseFor) {
    this.text = "";
    this.pageClass = pageClass;
    this.wrapperClassName = wrapperClassName;
    this.delay = delay;
    this.deleteSpeed = deleteSpeed;
    this.pauseFor = pauseFor;
  }
  write(textArray) {
    // Check for duplication
    if (this.text === textArray) {
      return;
    }
    // Copy the new text to the last text
    this.text = textArray;
    // Render the typewriter
    this.typewriter = new TW(this.pageClass, {
      strings: textArray,
      autoStart: true,
      delay: this.delay,
      wrapperClassName: this.wrapperClassName,
      pauseFor: this.pauseFor,
      deleteSpeed: this.deleteSpeed,
    });
  }
  stop() {
    // Stop writing text
    this.typewriter.stop();
  }
  clear() {
    // Clear the written text
    this.typewriter.deleteAll();
  }
}

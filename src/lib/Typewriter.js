import TW from "typewriter-effect/dist/core";
export default class Typewriter {
  constructor(pageClass, wrapperClassName, delay, deleteSpeed, pauseFor) {
    this.text = "";
    this.typewriter = new TW(pageClass, {
      autoStart: true,
      delay: delay,
      wrapperClassName: wrapperClassName,
      pauseFor: pauseFor,
      deleteSpeed: deleteSpeed,
    });
  }
  write(step, maxStep, text) {
    // Render the typewriter
    if (step < text.length) {
      this.typewriter
        .typeString(
          text.substring(
            ((step > 0 ? step - 1 : 0) / maxStep) * text.length,
            (step / maxStep) * text.length
          )
        )
        .start();
    }
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

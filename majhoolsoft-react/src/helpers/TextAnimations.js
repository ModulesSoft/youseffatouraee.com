import anime from "animejs";
import Typewriter from "./lib/TypewriterAnimation";
function TextAnimations(timeline) {
  function BackgroundScene() {
    anime
      .timeline({ loop: false })
      // Hi text fades in
      .add({
        targets: ".hi",
        opacity: [0, 1],
        easing: "easeInExpo",
      })
      // welcome text fades in
      .add({
        targets: ".welcome",
        opacity: [0, 1],
        easing: "easeInExpo",
      })
      // Hi and welcome text fade out
      .add(
        {
          targets: [".hi", ".welcome"],
          opacity: 0,
          easing: "easeInExpo",
        },
        (timeline += 5000)
      )
      .add(
        {
          targets: ".scroll",
          opacity: [0, 0.8],
          easing: "easeInExpo",
        },
        (timeline += 10000)
      );
  }
  function GarageScene() {
    anime
      .timeline({ loop: false })
      //resumeOne text background appearance
      .add({
        targets: "#resumeOne",
        duration: 1000,
        opacity: [0, 1],
        easing: "easeInExpo",
      })
      //resumeTwo text background appearance
      .add({
        targets: "#resumeTwo",
        duration: 1000,
        opacity: [0, 1],
        easing: "easeInExpo",
      })
      //degreeOne text background appearance
      .add({
        targets: "#degreeOne",
        duration: 1000,
        opacity: [0, 1],
        easing: "easeInExpo",
      })
      //degreeTwo text background appearance
      .add({
        targets: "#degreeTwo",
        duration: 1000,
        opacity: [0, 1],
        easing: "easeInExpo",
      });
    Typewriter("#resumeOne", 5_000, 100, 10000);
    Typewriter("#resumeTwo", 10_000, 100, 16000);

    // Typewriter("#degreeOne", 10_000, 100, 10000);
    // Typewriter("#degreeTwo", 26_000, 100, 10000);
  }
  return { BackgroundScene, GarageScene };
}
export default TextAnimations;

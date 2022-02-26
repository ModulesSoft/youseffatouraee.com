import CarAnimations from "./helpers/CarAnimations";
import IntroTextAnimations from "./helpers/IntroTextAnimations";
import BackgroundAnimations from "./helpers/BackgroundAnimations";
import CameraAnimations from "./helpers/CameraAnimations";
import TypewriterAnimation from "./helpers/lib/TypewriterAnimation";

function Play(isMobile, width, height, timeline = 0) {
  // setting camera
  const Camera = new CameraAnimations(isMobile, width, height, timeline);
  function introScene(finished) {
    CarAnimations(timeline);
    IntroTextAnimations().introScene();
    Camera.IntroScene(finished);
    BackgroundAnimations(timeline);
  }
  function garageScene(finishedCallback) {
    // start sequence
    notebookTwoTwo();
    function laptopOne() {
      TypewriterAnimation("#laptopOne", 2_000, 100, 1000, laptopTwo);
    }
    function laptopTwo() {
      TypewriterAnimation("#laptopTwo", 500, 100, 1000, degreeCamera);
    }
    function degreeCamera() {
      Camera.CertificateView(degreeOne);
    }
    function degreeOne() {
      TypewriterAnimation("#degreeOne", 2_000, 100, 1000, degreeTwo);
    }
    function degreeTwo() {
      TypewriterAnimation("#degreeTwo", 2_000, 100, 1000, OSCamera);
    }
    function OSCamera() {
      Camera.OSView(OSOne);
    }
    function OSOne() {
      TypewriterAnimation("#OSOne", 2_000, 100, 1000, frontEndOneCamera);
    }
    function frontEndOneCamera() {
      Camera.frontEndOneView(frontEndOneOne);
    }
    // front end
    function frontEndOneOne() {
      TypewriterAnimation("#frontEndOneOne", 2_000, 100, 1000, frontEndOneTwo);
    }
    function frontEndOneTwo() {
      TypewriterAnimation(
        "#frontEndOneTwo",
        2_000,
        100,
        1000,
        frontEndTwoCamera
      );
    }
    function frontEndTwoCamera() {
      Camera.frontEndTwoView(frontEndTwoOne);
    }
    function frontEndTwoOne() {
      TypewriterAnimation("#frontEndTwoOne", 2_000, 100, 1000, frontEndTwoTwo);
    }
    function frontEndTwoTwo() {
      TypewriterAnimation(
        "#frontEndTwoTwo",
        2_000,
        100,
        1000,
        backEndOneCamera
      );
    }
    // back end
    function backEndOneCamera() {
      Camera.backEndOneView(backEndOneOne);
    }
    function backEndOneOne() {
      TypewriterAnimation("#backEndOneOne", 2_000, 100, 1000, backEndOneTwo);
    }
    function backEndOneTwo() {
      TypewriterAnimation(
        "#backEndOneTwo",
        2_000,
        100,
        1000,
        notebookOneCamera
      );
    }
    // notebook view
    function notebookOneCamera() {
      Camera.notebookOneView(notebookOneOne);
    }
    function notebookOneOne() {
      TypewriterAnimation("#notebookOneOne", 2_000, 100, 1000, notebookOneTwo);
    }
    function notebookOneTwo() {
      notebookTwoCamera();
    }
    function notebookTwoCamera() {
      Camera.notebookTwoView(notebookTwoOne);
    }
    function notebookTwoOne() {
      TypewriterAnimation("#notebookTwoOne", 2_000, 100, 1000, notebookTwoTwo);
    }
    function notebookTwoTwo() {
      TypewriterAnimation("#notebookTwoTwo", 2_000, 100, 1000, scroll);
    }
    //scroll down to see the hobbies
    function scroll() {
      IntroTextAnimations().addScrollIcon(
        ".scrollHobbies",
        finishedCallback(true)
      );
    }
  }
  function hobbiesScene() {
    IntroTextAnimations().removeScrollIcon();
    microphoneCamera();
    function microphoneCamera() {
      Camera.microphoneView(microphoneOne);
    }
    function microphoneOne() {
      TypewriterAnimation("#microphoneOne", 2_000, 100, 1000, test);
    }
    function test() {
      console.log("hobbiesScene");
    }
  }
  function removeScrollIcon() {
    IntroTextAnimations().removeScrollIcon();
  }
  return { introScene, garageScene, removeScrollIcon, hobbiesScene };
}
export default Play;

import CarAnimations from "./helpers/CarAnimations";
import IntroTextAnimations from "./helpers/IntroTextAnimations";
import BackgroundAnimations from "./helpers/BackgroundAnimations";
import CameraAnimations from "./helpers/CameraAnimations";
import TypewriterAnimation from "./helpers/lib/TypewriterAnimation";
import WalkingAnimations from "./helpers/WalkingAnimations";

function Play(isMobile, width, height, texts, timeline = 0) {
  // setting camera
  const Camera = new CameraAnimations(isMobile, width, height, timeline);
  function introScene(finishedCallback) {
    CarAnimations(walking);
    function walking() {
      WalkingAnimations();
    }
    IntroTextAnimations().introScene();
    Camera.IntroScene(finishedCallback);
    BackgroundAnimations(timeline);
  }

  function garageScene(finishedCallback) {
    // start sequence
    Camera.LaptopView(laptopText);
    function laptopText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.laptop,
        degreeCamera
      );
    }
    function degreeCamera() {
      Camera.CertificateView(degreeText);
    }
    function degreeText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.degree,
        OSCamera
      );
    }
    function OSCamera() {
      Camera.OSView(osText);
    }
    function osText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.os,
        frontEndOneCamera
      );
    }
    function frontEndOneCamera() {
      Camera.frontEndOneView(frontEndOneText);
    }
    // front end
    function frontEndOneText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.frontEndOne,
        frontEndTwoCamera
      );
    }
    function frontEndTwoCamera() {
      Camera.frontEndTwoView(frontEndTwoText);
    }
    function frontEndTwoText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.frontEndTwo,
        backEndCamera
      );
    }
    // back end
    function backEndCamera() {
      Camera.backEndOneView(backEndText);
    }
    function backEndText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.backEnd,
        notebookOneCamera
      );
    }
    // notebook view
    function notebookOneCamera() {
      Camera.notebookOneView(notebookOneText);
    }
    function notebookOneText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.notebookOne,
        notebookTwoCamera
      );
    }
    function notebookTwoCamera() {
      Camera.notebookTwoView(notebookTwoText);
    }
    function notebookTwoText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.notebookTwo,
        scroll
      );
    }
    //scroll down to see the hobbies
    function scroll() {
      IntroTextAnimations().addScrollIcon(
        ".scrollHobbies",
        finishedCallback(true)
      );
    }
  }
  function hobbiesScene(finishedCallback) {
    IntroTextAnimations().removeScrollIcon();

    microphoneCamera();
    function microphoneCamera() {
      Camera.microphoneView(microphoneText);
    }
    function microphoneText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.microphone,
        motorcycleCamera
      );
    }
    function motorcycleCamera() {
      Camera.motorcycleView(motorcycleText);
    }
    function motorcycleText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.motorcycle,
        gardenCamera
      );
    }
    function gardenCamera() {
      Camera.gardenView(gardenText);
    }
    function gardenText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.garden,
        mountainCamera
      );
    }
    function mountainCamera() {
      Camera.mountainView(mountainText);
    }
    function mountainText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.mountain,
        finishedCallback
      );
    }
  }
  function removeScrollIcon() {
    IntroTextAnimations().removeScrollIcon();
  }

  return { introScene, garageScene, removeScrollIcon, hobbiesScene };
}
export default Play;

import CarAnimations from "./helpers/CarAnimations";
import IntroTextAnimations from "./helpers/IntroTextAnimations";
import BackgroundAnimations from "./helpers/BackgroundAnimations";
import CameraAnimations from "./helpers/CameraAnimations";
import TypewriterAnimation from "./helpers/lib/TypewriterAnimation";
import WalkingAnimations from "./helpers/WalkingAnimations";

function Play(isMobile, width, height, timeline = 0) {
  // setting camera
  const Camera = new CameraAnimations(isMobile, width, height, timeline);
  function introScene(finished) {
    CarAnimations(walking);
    function walking() {
      WalkingAnimations();
    }
    IntroTextAnimations().introScene();
    Camera.IntroScene(finished);
    BackgroundAnimations(timeline);
  }

  function garageScene(finishedCallback) {
    // start sequence
    let laptop = getTexts("laptop");
    let degree = getTexts("degree");
    let os = getTexts("os");
    let frontEndOne = getTexts("frontEndOne");
    let frontEndTwo = getTexts("frontEndTwo");
    let backEnd = getTexts("backEnd");
    let notebookOne = getTexts("notebookOne");
    let notebookTwo = getTexts("notebookTwo");

    Camera.LaptopView(laptopText);
    function laptopText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        laptop,
        degreeCamera
      );
    }
    function degreeCamera() {
      Camera.CertificateView(degreeText);
    }
    function degreeText() {
      TypewriterAnimation("article", "text-background", 50, degree, OSCamera);
    }
    function OSCamera() {
      Camera.OSView(osText);
    }
    function osText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        os,
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
        frontEndOne,
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
        frontEndTwo,
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
        backEnd,
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
        notebookOne,
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
        notebookTwo,
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
  function hobbiesScene() {
    IntroTextAnimations().removeScrollIcon();

    const microphone = getTexts("microphone");
    const motorcycle = getTexts("bike");
    const garden = getTexts("garden");
    const mountain = getTexts("mountain");
    microphoneCamera();
    function microphoneCamera() {
      Camera.microphoneView(microphoneText);
    }
    function microphoneText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        microphone,
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
        motorcycle,
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
        garden,
        mountainCamera
      );
    }
    function mountainCamera() {
      Camera.mountainView(mountainText);
    }
    function mountainText() {
      TypewriterAnimation("article", "text-background", 50, mountain, test);
    }
    function test() {
      console.log("hobbiesScene done");
    }
  }
  function removeScrollIcon() {
    IntroTextAnimations().removeScrollIcon();
  }
  function getTexts(id) {
    let temp = document.getElementById(id).children;
    let result = [];
    for (let i = 0; i < temp.length; i++) {
      result.push(temp[i].innerText);
    }
    return result;
  }
  return { introScene, garageScene, removeScrollIcon, hobbiesScene };
}
export default Play;

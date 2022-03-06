import CarAnimations from "./helpers/CarAnimations";
import IntroTextAnimations from "./helpers/IntroTextAnimations";
import BackgroundAnimations from "./helpers/BackgroundAnimations";
import CameraAnimations from "./helpers/CameraAnimations";
import TypewriterAnimation from "./helpers/lib/TypewriterAnimation";
import WalkingAnimations from "./helpers/WalkingAnimations";

function Play(isMobile, width, height, texts, timeline = 0) {
  const library = {
    begin: {
      view: isMobile ? "-780 650 900 500" : "-1000 650 900 500",
      textPosition: "",
    },
    general: {
      view: "0 0 1920 1080",
    },
    door: {
      view: isMobile
        ? `1000 ${1080 - height} ${width} ${height}`
        : "1000 800 400 240",
    },
    laptop: {
      view: "1328 920 60 60",
      textPosition: isMobile
        ? { x: 16, y: 16, width: `${width - 16}` }
        : {
            x: `${(1 / 2) * width}`,
            y: `${(1 / 2) * height}`,
            width: `${(1 / 2) * width}`,
          },
    },
    certificate: {
      view: isMobile ? "1288 900 60 45" : "1288 900 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : {
            x: `${(1 / 2) * width}`,
            y: `${(1 / 2) * height}`,
            width: `${(1 / 2) * width}`,
          },
    },
    OS: {
      view: isMobile ? "1252 900 60 45" : "1240 900 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : { x: 16, y: 16, width: `${width - 16}` },
    },
    firstRowEnd: {
      view: isMobile ? "1230 900 60 45" : "1200 900 60 28",
    },
    frontEndOne: {
      view: isMobile ? "1230 930 60 45" : "1200 930 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : { x: 16, y: `${(1 / 2) * height}`, width: `${(1 / 2) * width}` },
    },
    frontEndTwo: {
      view: isMobile ? "1257 920 60 45" : "1230 930 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(20 / 100) * height}`, width: `${width - 16}` }
        : {
            x: `${(1 / 2) * width}`,
            y: `${(20 / 100) * height}`,
            width: `${(1 / 2) * width}`,
          },
    },
    backEndOne: {
      view: isMobile ? "1288 930 60 45" : "1260 930 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : {
            x: 16,
            y: `${(25 / 100) * height}`,
            width: `${(1 / 2) * width}`,
          },
    },
    notebookOne: {
      view: isMobile ? "1252 960 60 45" : "1215 962 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : {
            x: 16,
            y: `${(25 / 100) * height}`,
            width: `${(1 / 2) * width}`,
          },
    },
    notebookTwo: {
      view: isMobile ? "1270 960 60 45" : "1270 962 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : {
            x: `${(10 / 100) * width}`,
            y: `${(90 / 100) * height}`,
            width: `${(80 / 100) * width}`,
          },
    },
    microphone: {
      view: isMobile ? "1130 900 100 62" : "1130 900 100 62",
      textPosition: isMobile ? "bottom" : "right",
    },
    motorcycle: {
      view: isMobile ? "1010 850 390 220" : "1000 850 200 180",
      textPosition: isMobile ? "bottom" : "right",
    },
    garden: {
      view: isMobile ? "20 550 600 420" : "20 550 600 420",
      textPosition: isMobile ? "bottom" : "right",
    },
    mountain: {
      view: isMobile ? "300 250 600 420" : "150 250 600 420",
      textPosition: isMobile ? "bottom" : "right",
    },
  };
  function introScene(finishedCallback) {
    CarAnimations(walking);
    function walking() {
      WalkingAnimations();
    }
    IntroTextAnimations().introScene();
    CameraAnimations(library, timeline).IntroScene(finishedCallback);
    BackgroundAnimations(timeline);
  }

  function garageScene(finishedCallback) {
    // start sequence
    // CameraAnimations(library, timeline).LaptopView(laptopText);
    notebookTwoCamera();
    function laptopText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.laptop,
        library.laptop.textPosition,
        degreeCamera
      );
    }
    function degreeCamera() {
      CameraAnimations(library, timeline).CertificateView(degreeText);
    }
    function degreeText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.degree,
        library.certificate.textPosition,
        OSCamera
      );
    }
    function OSCamera() {
      CameraAnimations(library, timeline).OSView(osText);
    }
    function osText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.os,
        library.OS.textPosition,
        frontEndOneCamera
      );
    }
    function frontEndOneCamera() {
      CameraAnimations(library, timeline).frontEndOneView(frontEndOneText);
    }
    // front end
    function frontEndOneText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.frontEndOne,
        library.frontEndOne.textPosition,
        frontEndTwoCamera
      );
    }
    function frontEndTwoCamera() {
      CameraAnimations(library, timeline).frontEndTwoView(frontEndTwoText);
    }
    function frontEndTwoText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.frontEndTwo,
        library.frontEndTwo.textPosition,
        backEndCamera
      );
    }
    // back end
    function backEndCamera() {
      CameraAnimations(library, timeline).backEndOneView(backEndText);
    }
    function backEndText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.backEnd,
        library.backEndOne.textPosition,
        notebookOneCamera
      );
    }
    // notebook view
    function notebookOneCamera() {
      CameraAnimations(library, timeline).notebookOneView(notebookOneText);
    }
    function notebookOneText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.notebookOne,
        library.notebookOne.textPosition,
        notebookTwoCamera
      );
    }
    function notebookTwoCamera() {
      CameraAnimations(library, timeline).notebookTwoView(notebookTwoText);
    }
    function notebookTwoText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.notebookTwo,
        library.notebookTwo.textPosition,
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
      CameraAnimations(library, timeline).microphoneView(microphoneText);
    }
    function microphoneText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.microphone,
        library.microphone.textPosition,
        motorcycleCamera
      );
    }
    function motorcycleCamera() {
      CameraAnimations(library, timeline).motorcycleView(motorcycleText);
    }
    function motorcycleText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.motorcycle,
        library.motorcycle.textPosition,
        gardenCamera
      );
    }
    function gardenCamera() {
      CameraAnimations(library, timeline).gardenView(gardenText);
    }
    function gardenText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.garden,
        library.garden.textPosition,
        mountainCamera
      );
    }
    function mountainCamera() {
      CameraAnimations(library, timeline).mountainView(mountainText);
    }
    function mountainText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        texts.mountain,
        library.mountain.textPosition,
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

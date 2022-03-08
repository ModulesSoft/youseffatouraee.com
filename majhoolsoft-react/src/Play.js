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
    degree: {
      view: isMobile ? "1288 900 60 45" : "1288 900 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : {
            x: `${(1 / 2) * width}`,
            y: `${(1 / 2) * height}`,
            width: `${(1 / 2) * width}`,
          },
    },
    os: {
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
  // distinguish textposition and view for camera and typewriter data
  let cameraData = {};
  let typewriterData = {};
  Object.keys(library).forEach(function (k) {
    cameraData = { ...cameraData, ...{ [k]: { view: library[k]["view"] } } };
    typewriterData = {
      ...typewriterData,
      ...{
        [k]: { text: texts?.[k], textPosition: library[k]["textPosition"] },
      },
    };
  });

  function introScene(finishedCallback) {
    CarAnimations(walking);
    function walking() {
      WalkingAnimations();
    }
    IntroTextAnimations().introScene();
    CameraAnimations().fromTo(
      ".page",
      cameraData.begin.view,
      cameraData.general.view,
      5000,
      "easeOutQuad",
      4000,
      secondCamera
    );
    function secondCamera() {
      CameraAnimations().fromTo(
        ".page",
        cameraData.general.view,
        cameraData.door.view,
        3000,
        "easeOutQuad",
        4000,
        finishedCallback
      );
    }
    BackgroundAnimations(timeline);
  }

  function garageScene(finishedCallback) {
    // start sequence
    CameraAnimations().fromTo(
      ".page",
      cameraData.door.view,
      cameraData.laptop.view,
      3000,
      "easeOutQuad",
      0,
      laptopText
    );
    function laptopText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        typewriterData.laptop.text,
        typewriterData.laptop.textPosition,
        degreeCamera
      );
    }
    function degreeCamera() {
      CameraAnimations().fromTo(
        ".page",
        cameraData.laptop.view,
        cameraData.degree.view,
        3000,
        "easeOutQuad",
        0,
        degreeText
      );
    }
    function degreeText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        typewriterData.degree.text,
        typewriterData.degree.textPosition,
        OSCamera
      );
    }
    function OSCamera() {
      CameraAnimations().fromTo(
        ".page",
        cameraData.degree.view,
        cameraData.os.view,
        3000,
        "easeOutQuad",
        0,
        osText
      );
    }
    function osText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        typewriterData.os.text,
        typewriterData.os.textPosition,
        frontEndOneCamera
      );
    }
    function frontEndOneCamera() {
      CameraAnimations().fromTo(
        ".page",
        cameraData.os.view,
        cameraData.firstRowEnd.view,
        3000,
        "easeOutQuad",
        0,
        secondCamera
      );
      function secondCamera() {
        CameraAnimations().fromTo(
          ".page",
          cameraData.firstRowEnd.view,
          cameraData.frontEndOne.view,
          3000,
          "easeOutQuad",
          0,
          frontEndOneText
        );
      }
    }
    // front end
    function frontEndOneText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        typewriterData.frontEndOne.text,
        typewriterData.frontEndOne.textPosition,
        frontEndTwoCamera
      );
    }
    function frontEndTwoCamera() {
      CameraAnimations().fromTo(
        ".page",
        cameraData.frontEndOne.view,
        cameraData.frontEndTwo.view,
        3000,
        "easeOutQuad",
        0,
        frontEndTwoText
      );
    }
    function frontEndTwoText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        typewriterData.frontEndTwo.text,
        typewriterData.frontEndTwo.textPosition,
        backEndCamera
      );
    }
    // back end
    function backEndCamera() {
      CameraAnimations().fromTo(
        ".page",
        cameraData.frontEndTwo.view,
        cameraData.backEndOne.view,
        3000,
        "easeOutQuad",
        0,
        backEndText
      );
    }
    function backEndText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        typewriterData.backEndOne.text,
        typewriterData.backEndOne.textPosition,
        notebookOneCamera
      );
    }
    // notebook view
    function notebookOneCamera() {
      CameraAnimations().fromTo(
        ".page",
        cameraData.backEndOne.view,
        cameraData.notebookOne.view,
        3000,
        "easeOutQuad",
        0,
        notebookOneText
      );
    }
    function notebookOneText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        typewriterData.notebookOne.text,
        typewriterData.notebookOne.textPosition,
        notebookTwoCamera
      );
    }
    function notebookTwoCamera() {
      CameraAnimations().fromTo(
        ".page",
        cameraData.notebookOne.view,
        cameraData.notebookTwo.view,
        3000,
        "easeOutQuad",
        0,
        notebookTwoText
      );
    }
    function notebookTwoText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        typewriterData.notebookTwo.text,
        typewriterData.notebookTwo.textPosition,
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
      CameraAnimations().fromTo(
        ".page",
        cameraData.notebookTwo.view,
        cameraData.microphone.view,
        3000,
        "easeOutQuad",
        0,
        microphoneText
      );
    }
    function microphoneText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        typewriterData.microphone.text,
        typewriterData.microphone.textPosition,
        motorcycleCamera
      );
    }
    function motorcycleCamera() {
      CameraAnimations().fromTo(
        ".page",
        cameraData.microphone.view,
        cameraData.motorcycle.view,
        3000,
        "easeOutQuad",
        0,
        motorcycleText
      );
    }
    function motorcycleText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        typewriterData.motorcycle.text,
        typewriterData.motorcycle.textPosition,
        gardenCamera
      );
    }
    function gardenCamera() {
      CameraAnimations().fromTo(
        ".page",
        cameraData.motorcycle.view,
        cameraData.garden.view,
        3000,
        "easeOutQuad",
        0,
        gardenText
      );
    }
    function gardenText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        typewriterData.garden.text,
        typewriterData.garden.textPosition,
        mountainCamera
      );
    }
    function mountainCamera() {
      CameraAnimations().fromTo(
        ".page",
        cameraData.garden.view,
        cameraData.mountain.view,
        3000,
        "easeOutQuad",
        0,
        mountainText
      );
    }
    function mountainText() {
      TypewriterAnimation(
        "article",
        "text-background",
        50,
        typewriterData.mountain.text,
        typewriterData.mountain.textPosition,
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

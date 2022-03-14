import CarAnimations from "./helpers/CarAnimations";
import IntroTextAnimations from "./helpers/IntroTextAnimations";
import BackgroundAnimations from "./helpers/BackgroundAnimations";
import Camera from "./helpers/lib/Camera";
import Typewriter from "./helpers/lib/Typewriter";
import WalkingAnimations from "./helpers/WalkingAnimations";
import FaceAnimations from "./helpers/FaceAnimations";
var fromView = null;
function Play(
  scroll,
  scrollStage,
  sceneNumber,
  isMobile,
  width,
  height,
  texts,
  timeline = 0
) {
  console.log("scrollStage " + scrollStage);

  var library = {
    begin: {
      view: "-1000 0 800 1080",
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
        : { x: 16, y: 16, width: `${width - 16}` },
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
        : { x: 16, y: `${(90 / 100) * height}`, width: `${width - 16}` },
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
        : { x: 16, y: `${(90 / 100) * height}`, width: `${width - 16}` },
    },
    backEndOne: {
      view: isMobile ? "1288 930 60 45" : "1260 930 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : { x: 16, y: `${(90 / 100) * height}`, width: `${width - 16}` },
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
        : { x: 16, y: `${(90 / 100) * height}`, width: `${width - 16}` },
    },
    microphone: {
      view: isMobile ? "1130 900 100 62" : "1130 900 100 62",
      textPosition: {
        x: 16,
        y: `${(90 / 100) * height}`,
        width: `${width - 16}`,
      },
    },
    motorcycle: {
      view: isMobile ? "1010 850 390 220" : "1000 850 200 180",
      textPosition: isMobile
        ? { x: 16, y: `${(90 / 100) * height}`, width: `${width - 16}` }
        : {
            x: `${(1 / 2) * width}`,
            y: `${(1 / 2) * height}`,
            width: `${(1 / 2) * width}`,
          },
    },
    garden: {
      view: isMobile ? "20 550 600 420" : "20 550 600 420",
      textPosition: {
        x: 16,
        y: `${(10 / 100) * height}`,
        width: `${width - 16}`,
      },
    },
    mountain: {
      view: isMobile ? "300 250 600 420" : "150 250 600 420",
      textPosition: {
        x: 16,
        y: `${(90 / 100) * height}`,
        width: `${width - 16}`,
      },
    },
  };
  // add texts to library
  Object.keys(library).forEach(function (k) {
    library = {
      ...library,
      ...{
        [k]: {
          text: texts?.[k],
          textPosition: library[k]["textPosition"],
          view: library[k]["view"],
        },
      },
    };
  });
  // operate animations
  let state = library.laptop;
  let cameraEnd = false;
  let limitedScroll = scroll - sceneNumber * scrollStage;
  switch (sceneNumber) {
    case 0:
      console.log("sceneNumber number : " + sceneNumber);
      FaceAnimations(isMobile, "#straightFace", "#smileFace");
      state = library.laptop;
      break;
    case 1:
      console.log("sceneNumber number : " + sceneNumber);
      state = library.notebookTwo;
      break;
    case 2:
      console.log("sceneNumber number : " + sceneNumber);
      state = library.notebookOne;
      break;
    case 3:
      console.log("sceneNumber number : " + sceneNumber);
      state = library.degree;
      break;
    default:
      console.log("sceneNumber number : default");
      break;
  }
  if (!fromView) {
    fromView = state.view;
  } else {
    if (state) {
      let currentView = calculateView(state.view);
      Camera(".page", currentView, "linear");
      currentView === state.view && //change to are close
        Typewriter(
          "article",
          "text-background",
          50,
          state.text,
          state.textPosition
        );

      fromView = currentView;
    }
  }
  function calculateView(toView) {
    let from = stringToArray(fromView);
    let to = stringToArray(toView);
    if (from.length !== to.length) {
      return console.error("Arrays don't match!");
    }
    let currentView = [];
    for (let i = 0; i < from.length; i++) {
      let sub = (to[i] - from[i]) / scrollStage;
      currentView.push(Math.ceil(limitedScroll * sub + from[i]));
    }
    for (let i = 0; i < from.length; i++) {
      if (isNaN(from[i]) || isNaN(to[i]) || isNaN(currentView[i])) {
        return console.error("Arrays don't have valid values!");
      }
    }
    return arrayToString(currentView);
  }
  function initCamera() {
    Camera(".page", library.laptop.view, "linear");
  }

  function areClose(par1, par2, accuracy) {
    let closeArray = [];
    //check x and y of view port to be close
    for (let i = 0; i < 2; i++) {
      if (par1[i] + accuracy >= par2[i] && par1[i] - accuracy <= par2[i]) {
        closeArray.push(true);
      } else {
        closeArray.push(false);
      }
    }
    return closeArray.filter((t) => t === true).length === 2;
  }
  function arrayToString(array) {
    let result = "";
    array.forEach((element) => {
      result += element + " ";
    });
    result = result.trim();
    return result;
  }
  function stringToArray(string) {
    return string.split(" ").map(Number);
  }
  function removeScrollIcon() {
    IntroTextAnimations().removeScrollIcon();
  }

  return { removeScrollIcon, initCamera };
}
export default Play;

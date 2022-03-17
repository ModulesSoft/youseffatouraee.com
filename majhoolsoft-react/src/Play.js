import CarAnimations from "./helpers/CarAnimations";
import IntroTextAnimations from "./helpers/IntroTextAnimations";
import BackgroundAnimations from "./helpers/BackgroundAnimations";
import Camera from "./helpers/lib/Camera";
import Typewriter from "./helpers/lib/Typewriter";
import WalkingAnimations from "./helpers/WalkingAnimations";
import FaceAnimations from "./helpers/FaceAnimations";
import scrollIconHandler from "./helpers/scrollIconHandler";
var closeToViewAccuracy = 1;
var fromView = null;
var state;
var once = false;

function Play(
  scroll = 0,
  scrollStage = 20,
  sceneNumber = 0,
  isMobile,
  width,
  height,
  texts,
  enterOnce,
  setEnterOnce
) {
  if (isMobile === undefined)
    return console.error("Undefined parameters may cause problems!");
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
        ? `262 ${1080 - height} ${width} ${height}`
        : "262 800 400 240",
    },
    laptopAlone: {
      view: "590 920 60 60",
    },
    laptop: {
      view: "590 920 60 60",
      textPosition: isMobile
        ? { x: 16, y: 16, width: `${width - 16}` }
        : { x: 16, y: 16, width: `${width - 16}` },
    },
    degree: {
      view: isMobile ? "550 900 60 45" : "550 900 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : {
            x: `${(1 / 2) * width}`,
            y: `${(1 / 2) * height}`,
            width: `${(1 / 2) * width}`,
          },
    },
    os: {
      view: isMobile ? "514 900 60 45" : "502 900 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : { x: 16, y: `${(90 / 100) * height}`, width: `${width - 16}` },
    },
    firstRowEnd: {
      view: isMobile ? "492 900 60 45" : "462 900 60 28",
    },
    frontEndOne: {
      view: isMobile ? "492 930 60 45" : "462 930 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : { x: 16, y: `${(1 / 2) * height}`, width: `${(1 / 2) * width}` },
    },
    frontEndTwo: {
      view: isMobile ? "519 920 60 45" : "492 930 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(20 / 100) * height}`, width: `${width - 16}` }
        : { x: 16, y: `${(90 / 100) * height}`, width: `${width - 16}` },
    },
    backEndOneAlone: {
      view: isMobile ? "550 930 60 45" : "522 930 60 28",
    },
    backEndOne: {
      view: isMobile ? "550 930 60 45" : "522 930 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : { x: 16, y: `${(90 / 100) * height}`, width: `${width - 16}` },
    },
    notebookOne: {
      view: isMobile ? "514 960 60 45" : "477 962 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : {
            x: 16,
            y: `${(25 / 100) * height}`,
            width: `${(1 / 2) * width}`,
          },
    },
    notebookTwo: {
      view: isMobile ? "532 960 60 45" : "532 962 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : { x: 16, y: `${(90 / 100) * height}`, width: `${width - 16}` },
    },
    microphone: {
      view: isMobile ? "392 900 100 62" : "392 900 100 62",
      textPosition: {
        x: 16,
        y: `${(90 / 100) * height}`,
        width: `${width - 16}`,
      },
    },
    motorcycle: {
      view: isMobile ? "272 850 390 220" : "262 850 200 180",
      textPosition: isMobile
        ? { x: 16, y: `${(90 / 100) * height}`, width: `${width - 16}` }
        : {
            x: `${(1 / 2) * width}`,
            y: `${(1 / 2) * height}`,
            width: `${(1 / 2) * width}`,
          },
    },
    garden: {
      view: isMobile ? "758 550 600 420" : "758 550 600 420",
      textPosition: {
        x: 16,
        y: `${(10 / 100) * height}`,
        width: `${width - 16}`,
      },
    },
    mountain: {
      view: isMobile ? "1038 250 600 420" : "888 250 600 420",
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
  let limitedScroll = scroll - sceneNumber * scrollStage;
  let animation = null;
  console.log("scene num : " + sceneNumber);
  switch (sceneNumber) {
    case 0:
      state = library.laptopAlone;
      // check if scrolled remove scroll icon and continue playing animations
      scrollIconHandler(
        ".scroll",
        ".scrollIcon",
        ".scrollResume",
        scroll,
        scrollStage,
        sceneNumber,
        scrollStage / 4,
        () => {
          animation = "FirstFace";
          state = library.laptop;
        }
      );
      break;
    case 1:
      state = library.notebookTwo;
      break;
    case 2:
      state = library.notebookOne;
      break;
    case 3:
      state = library.degree;
      break;
    case 4:
      state = library.os;
      break;
    case 5:
      state = library.frontEndOne;
      break;
    case 6:
      state = library.frontEndTwo;
      break;
    case 7:
      state = library.backEndOne;
      break;
    case 8:
      state = library.backEndOneAlone;
      // hobbies
      scrollIconHandler(
        ".scroll",
        ".scrollIcon",
        ".scrollHobbies",
        scroll,
        scrollStage,
        sceneNumber,
        scrollStage / 4,
        () => {
          state = library.microphone;
        }
      );
      break;
    case 9:
      state = library.motorcycle;
      break;
    case 10:
      state = library.door;
      // change faces for variety
      animation = "SecondFace";

      break;
    case 11:
      // walking and car animation
      state = library.general;
      animation = "WalkingAnimations"; //to prevent multiple run
      break;
    case 12:
      state = library.garden;
      break;
    case 13:
      state = library.mountain;
      break;
    default:
      console.log("scene num : default");
      break;
  }
  if (!fromView) {
    fromView = state.view;
  } else {
    if (state) {
      try {
        let currentView = calculateView(state.view);
        Camera(".page", currentView, "linear");
        let approached = areClose(
          stringToArray(currentView),
          stringToArray(state.view),
          closeToViewAccuracy
        );
        if (animation) {
          switch (animation) {
            case "FirstFace":
              isMobile
                ? FaceAnimations("#pokerFace", "#smileFace").poker()
                : FaceAnimations("#pokerFace", "#smileFace").smile();
              break;
            case "SecondFace":
              isMobile
                ? FaceAnimations("#pokerFace", "#smileFace").smile()
                : FaceAnimations("#pokerFace", "#smileFace").poker();
              break;
            case "WalkingAnimations":
              preventRepetition(approached) && WalkingAnimations();
              break;
            default:
              console.error("Provided animation does not exist");
              break;
          }
        } else {
          preventRepetition(approached) &&
            Typewriter(
              "article",
              "text-background",
              50,
              state.text,
              state.textPosition
            );
        }
        fromView = currentView;
      } catch (e) {
        console.error("is it first render?" + e);
      }
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
  function preventRepetition(boolean) {
    if (boolean) {
      // has not been triggered
      if (!once) {
        once = true;
        return boolean;
      } else {
        return false;
      }
    } else {
      once = false;
      return boolean;
    }
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
    if (string) {
      return string.split(" ").map(Number);
    }
  }
  function initCamera() {
    Camera(".page", library.laptopAlone.view, "linear");
  }
  return { initCamera };
}
export default Play;

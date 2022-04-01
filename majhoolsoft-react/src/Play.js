import Typewriter from "./helpers/lib/Typewriter";
import Camera from "./helpers/lib/Camera";
import TextAnimations from "./helpers/TextAnimations";
import WalkingAnimations from "./helpers/WalkingAnimations";
import CarAnimations from "./helpers/CarAnimations";
import FaceAnimations from "./helpers/FaceAnimations";
import TreeAnimations from "./helpers/TreeAnimations";
import FlagAnimations from "./helpers/FlagAnimations";
import BackgroundAnimations from "./helpers/BackgroundAnimations";
var closeToViewAccuracy = 5;
var state = [];
var currentView = null;
var prevAnimation = "";
function Play(
  scroll = 0,
  scrollDir = "down",
  scrollStage = 10,
  sceneNumber = 0,
  isMobile,
  width,
  height,
  texts
) {
  if (isMobile === undefined || isMobile === null)
    return console.error("Undefined parameters may cause problems!");
  var library = {
    begin: {
      view: "590 890 60 60",
    },
    end: { view: "0 0 0 0" },
    general: {
      view: "0 0 1920 1080",
    },
    walking: {
      view: isMobile ? "800 0 1120 1080" : "300 0 1620 1080",
    },
    door: {
      view: isMobile
        ? `262 ${1080 - height} ${width} ${height}`
        : "262 800 400 240",
      textPosition: { x: 0, y: height, width: 0 },
    },
    laptop: {
      view: "590 920 60 60",
      textPosition: isMobile
        ? { x: 16, y: 16, width: `${width - 16}` }
        : { x: 16, y: 16, width: `${width - 16}` },
    },
    notebookOne: {
      view: "550 952 60 35",
      textPosition: isMobile
        ? { x: 16, y: 16, width: `${width - 16}` }
        : { x: 16, y: 16, width: `${width - 16}` },
    },
    notebookTwo: {
      view: isMobile ? "510 952 60 35" : "480 952 60 35",
      textPosition: isMobile
        ? { x: 16, y: `${(50 / 100) * height}`, width: `${width - 16}` }
        : { x: 16, y: `${(50 / 100) * height}`, width: `${width - 16}` },
    },
    degree: {
      view: isMobile ? "550 890 60 45" : "550 890 60 35",
      textPosition: isMobile
        ? { x: 16, y: 16, width: `${width - 16}` }
        : {
            x: `${(50 / 100) * width}`,
            y: `${(50 / 100) * height}`,
            width: `${(50 / 100) * width}`,
          },
    },
    os: {
      view: isMobile ? "514 890 60 45" : "502 890 60 35",
      textPosition: isMobile
        ? { x: 16, y: 16, width: `${width - 16}` }
        : { x: 16, y: 16, width: `${width - 16}` },
    },
    firstRowEnd: {
      view: isMobile ? "492 890 60 45" : "462 890 60 35",
    },
    frontEndOne: {
      view: isMobile ? "492 920 60 45" : "462 920 60 35",
      textPosition: isMobile
        ? { x: 16, y: 16, width: `${width - 16}` }
        : { x: 16, y: `${(50 / 100) * height}`, width: `${(1 / 2) * width}` },
    },
    frontEndTwo: {
      view: isMobile ? "519 920 60 45" : "492 920 60 35",
      textPosition: { x: 16, y: 16, width: `${width - 16}` },
    },
    backEndOneAlone: {
      view: isMobile ? "550 920 60 46" : "522 920 60 36",
    },
    backEndOne: {
      view: isMobile ? "550 920 60 45" : "522 920 60 35",
      textPosition: { x: 16, y: 16, width: `${width - 16}` },
    },
    microphone: {
      view: isMobile ? "392 900 100 62" : "392 900 100 62",
      textPosition: isMobile
        ? {
            x: 16,
            y: 16,
            width: `${width - 16}`,
          }
        : {
            x: `${(50 / 100) * width}`,
            y: `${(50 / 100) * height}`,
            width: `${(50 / 100) * width}`,
          },
    },
    motorcycle: {
      view: isMobile ? "272 850 390 220" : "262 850 200 180",
      textPosition: {
        x: 16,
        y: 16,
        width: `${width - 16}`,
      },
    },
    garden: {
      view: isMobile ? "1258 600 600 420" : "1258 600 600 420",
      textPosition: {
        x: 16,
        y: 16,
        width: `${width - 16}`,
      },
    },
    mountain: {
      view: "970 110 600 420",
      textPosition: {
        x: 16,
        y: 16,
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
  var limitedScroll = 0;
  if (scrollDir === "down") {
    limitedScroll = Number.parseFloat(
      scroll - sceneNumber * scrollStage
    ).toFixed(2);
  } else {
    sceneNumber > 0 && sceneNumber--;
    limitedScroll = Number.parseFloat(
      scroll - (sceneNumber + 1) * scrollStage
    ).toFixed(2);
  }
  if (limitedScroll >= scrollStage) limitedScroll = scrollStage - 0.01;
  if (limitedScroll < 0) limitedScroll = 0.01;
  state.length === 0 && state.push(library.begin);
  switch (sceneNumber) {
    case 0:
      state.push(library.laptop);
      if (Number.parseInt(limitedScroll) === 0) {
        animate("introScene");
      } else if (limitedScroll > 0 && limitedScroll < scrollStage / 2) {
        animate("introSceneScrollRemove");
      } else {
        animate("FirstFace");
      }
      break;
    case 1:
      state.push(library.notebookOne);
      break;
    case 2:
      state.push(library.notebookTwo);
      break;
    case 3:
      state.push(library.degree);
      break;
    case 4:
      state.push(library.os);
      break;
    case 5:
      state.push(library.frontEndOne);
      break;
    case 6:
      state.push(library.frontEndTwo);
      break;
    case 7:
      state.push(library.backEndOne);
      break;
    case 8:
      // hobbies
      state.push(library.microphone);
      if (scrollDir === "down" && limitedScroll < scrollStage / 4) {
        animate("hobbiesAddScroll");
      } else {
        animate("hobbiesRemoveScroll");
      }
      break;
    case 9:
      // change faces for variety
      state.push(library.motorcycle);
      animate("SecondFace");
      break;
    case 10:
      state.push(library.door);
      animate("night");
      break;
    case 11:
      state.push(library.general);
      animate("day");
      break;
    case 12:
      state.push(library.walking);
      animate("WalkingAnimations");
      break;
    case 13:
      state.push(library.garden);
      if (limitedScroll > (scrollStage * 75) / 100) animate("TreeAnimations");
      break;
    case 14:
      state.push(library.mountain);
      if (limitedScroll > (scrollStage * 75) / 100) animate("FlagAnimations");
      break;
    default:
      state.push("end");
      break;
  }
  if (state.length > 2) {
    if (
      JSON.stringify(state[state.length - 1]) ===
      JSON.stringify(state[state.length - 2])
    ) {
      // remove last duplication
      state.pop();
    }
    if (state[state.length - 1] === "end" || state[state.length - 2] === "end")
      return;
    try {
      currentView = calculateView();
      if (!currentView) return;

      Camera(".page", currentView, "linear");

      let approached = areClose(
        stringToArray(currentView),
        stringToArray(state[state.length - 1].view),
        closeToViewAccuracy
      );
      approached &&
        state[state.length - 1].text &&
        Typewriter(
          "article",
          "text-background",
          50,
          state[state.length - 1].text,
          state[state.length - 1].textPosition
        );
    } catch (e) {
      console.error(e);
      console.error(state);
    }
  }

  function animate(animation = "") {
    if (prevAnimation !== animation) {
      prevAnimation = animation;
      switch (animation) {
        case "introScene":
          TextAnimations().introScene();
          TextAnimations().addScroll(
            ".scroll",
            ".scrollIcon",
            ".scrollResume",
            1000
          );
          break;
        case "introSceneScrollRemove":
          TextAnimations().removeScroll(
            ".scroll",
            ".scrollIcon",
            ".scrollResume"
          );
          break;
        case "hobbiesAddScroll":
          TextAnimations().addScroll(
            ".scroll",
            ".scrollIcon",
            ".scrollHobbies",
            500
          );
          break;
        case "hobbiesRemoveScroll":
          TextAnimations().removeScroll(
            ".scroll",
            ".scrollIcon",
            ".scrollHobbies"
          );
          break;
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
          WalkingAnimations(CarAnimations);
          break;
        case "night":
          BackgroundAnimations().night();
          break;
        case "day":
          BackgroundAnimations().day();
          break;
        case "TreeAnimations":
          TreeAnimations();
          break;
        case "FlagAnimations":
          FlagAnimations();
          break;
        default:
          console.error("Provided animation does not exist");
          break;
      }
    }
  }
  function calculateView() {
    if (!state[state.length - 1] || !state[state.length - 2]) return false;
    let from = stringToArray(state[state.length - 2].view);
    let to = stringToArray(state[state.length - 1].view);
    if (scrollDir !== "down") {
      [from, to] = [to, from];
    }
    if (from.length !== to.length) {
      console.error("Arrays don't match!");
      return false;
    }
    let currentView = [];
    for (let i = 0; i < from.length; i++) {
      let sub = (to[i] - from[i]) / scrollStage;
      currentView.push(limitedScroll * sub + from[i]);
    }
    for (let i = 0; i < from.length; i++) {
      if (
        isNaN(from[i]) ||
        isNaN(to[i]) ||
        isNaN(currentView[i]) ||
        currentView[i] < 0 ||
        to[i] < 0 ||
        from[i] < 0
      ) {
        console.error("Arrays don't have valid values!");
        return false;
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
}
export default Play;

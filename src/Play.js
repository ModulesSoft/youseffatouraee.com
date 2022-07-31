import calculateView from "./lib/CalculateView";
import Typewriter from "./lib/Typewriter";
import Camera from "./lib/Camera";
import animate, { slideDoor } from "./lib/Animate";
var state = [];
var currentView = null;
var day = false;
var limitedScroll = 0;

function Play(
  pageRef,
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
  let library = {
    begin: {
      view: "590 890 60 60",
    },
    end: { view: "0 0 0 0" },
    general: {
      view: isMobile
        ? `462 ${1080 - height} ${width} ${height}`
        : "0 0 1920 1080",
    },
    walking: {
      view: isMobile ? `1300 0 620 1080` : "300 0 1620 1080",
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
        ? { x: 16, y: 16, width: `${width - 16}` }
        : { x: 16, y: 16, width: `${width - 16}` },
    },
    degree: {
      view: isMobile ? "550 890 60 45" : "550 890 60 35",
      textPosition: isMobile
        ? { x: 16, y: 16, width: `${width - 16}` }
        : { x: 16, y: 16, width: `${width - 16}` },
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
        : { x: 16, y: 16, width: `${width - 16}` },
    },
    frontEndTwo: {
      view: isMobile ? "519 920 60 45" : "492 920 60 35",
      textPosition: { x: 16, y: 16, width: `${width - 16}` },
    },
    backEndOne: {
      view: isMobile ? "550 920 60 45" : "540 920 60 35",
      textPosition: { x: 16, y: 16, width: `${width - 16}` },
    },
    microphone: {
      view: isMobile ? "392 900 100 62" : "392 900 100 62",
      textPosition: isMobile
        ? { x: 16, y: 16, width: `${width - 16}` }
        : { x: 16, y: 16, width: `${width - 16}` },
    },
    motorcycle: {
      view: isMobile ? "272 850 390 220" : "262 850 200 180",
      textPosition: { x: 16, y: 16, width: `${width - 16}` },
    },
    garden: {
      view: isMobile ? "1258 600 600 420" : "1258 600 600 420",
      textPosition: { x: 16, y: 16, width: `${width - 16}` },
    },
    mountain: {
      view: "970 100 600 420",
      textPosition: { x: 16, y: 16, width: `${width - 16}` },
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
  let newState = null;
  switch (sceneNumber) {
    case 0:
      newState = library.laptop;
      if (limitedScroll > 0 && limitedScroll < scrollStage / 2) {
        animate(isMobile, "introSceneScrollRemove");
      } else {
        animate(isMobile, "FirstFace");
      }
      break;
    case 1:
      newState = library.notebookOne;
      break;
    case 2:
      newState = library.notebookTwo;
      break;
    case 3:
      newState = library.degree;
      break;
    case 4:
      newState = library.os;
      break;
    case 5:
      newState = library.frontEndOne;
      break;
    case 6:
      newState = library.frontEndTwo;
      break;
    case 7:
      newState = library.backEndOne;
      break;
    case 8:
      // hobbies
      newState = library.microphone;
      if (scrollDir === "down" && limitedScroll < scrollStage / 4) {
        animate(isMobile, "hobbiesAddScroll");
      } else {
        animate(isMobile, "hobbiesRemoveScroll");
      }
      break;
    case 9:
      // change faces for variety
      newState = library.motorcycle;
      animate(isMobile, "SecondFace");
      break;
    case 10:
      newState = library.door;
      !day && animate(isMobile, "night");
      break;
    case 11:
      newState = library.general;
      day = true;
      animate(isMobile, "day");
      break;
    case 12:
      newState = library.walking;
      animate(isMobile, "WalkingAnimations");
      break;
    case 13:
      newState = library.garden;
      // if (limitedScroll > (scrollStage * 75) / 100)
      animate(isMobile, "TreeAnimations");
      break;
    case 14:
      newState = library.mountain;
      // if (limitedScroll > (scrollStage * 75) / 100)
      animate(isMobile, "FlagAnimations");
      break;
    default:
      newState = "end";
      break;
  }
  //init
  if (state.length === 0) {
    state.push(library.begin);
    animate(isMobile, "introScene");
  } else if (state.length > 0) {
    let lastState = state[state.length - 1];
    if (JSON.stringify(lastState) !== JSON.stringify(newState)) {
      if (scrollDir === "up") {
        state.pop();
        if (state.length === 2) {
          state = [];
          return;
        }
      } else {
        state.push(newState);
      }
    }

    if (lastState === "end") return;
    if (scroll > 10 * scrollStage) slideDoor(limitedScroll);
    if (scroll > 11 * scrollStage) slideDoor(-1); //close the door
    currentView = calculateView(state, scrollDir, scrollStage, limitedScroll);
    if (!currentView) {
      return;
    }
    Camera(pageRef, currentView, "linear");
    if (state[state.length - 2].text) {
      Typewriter(
        ".article",
        "text-background",
        0,
        state[state.length - 2].text,
        state[state.length - 2].textPosition
      );
    }
  }
}
export default Play;

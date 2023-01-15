import calculateView from "./lib/CalculateView";
import Typewriter from "./lib/Typewriter";
import Camera from "./lib/Camera";
import animate from "./lib/Animate";
let state = [];
let currentView = null;
function Play(
  pageRef,
  scroll = 0,
  scrollDir = "down",
  scrollStage = 10,
  sceneNumber = 0,
  isMobile,
  library
) {
  if (isMobile === undefined || isMobile === null)
    return console.error("Undefined parameters may cause problems!");

  const limitedScroll = Number.parseFloat(
    scroll - sceneNumber * scrollStage
  ).toFixed(2);
  let newState = null;
  switch (sceneNumber) {
    case 0:
      newState = library.laptop;
      if (limitedScroll > 0 && limitedScroll < scrollStage / 2) {
        animate(isMobile, "introSceneScrollRemove");
      } else {
        animate(isMobile, "FirstFace", limitedScroll);
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
      break;
    case 10:
      newState = library.door;
      animate(isMobile, "night");
      break;
    case 11:
      newState = library.general;
      animate(isMobile, "door", limitedScroll);
      animate(isMobile, "day", limitedScroll);
      break;
    case 12:
      newState = library.walking;
      animate(isMobile, "WalkingAnimations", limitedScroll);
      break;
    case 13:
      newState = library.garden;
      animate(isMobile, "TreeAnimations", limitedScroll);
      break;
    case 14:
      newState = library.mountain;
      animate(isMobile, "FlagAnimations", limitedScroll);
      break;
    default:
      newState = "end";
      break;
  }
  if (state.length === 0) {
    //init
    state.push(library.begin);
    Camera(pageRef, "0 0 0 0");
    animate(isMobile, "introScene");
  } else if (state.length > 0) {
    if (JSON.stringify(state[state.length - 1]) !== JSON.stringify(newState)) {
      if (scrollDir === "down") {
        state.push(newState);
      } else {
        state.pop();
        if (state.length === 2) {
          // state = [];
          return;
        }
      }
    }
    if (state[state.length - 1] === "end") return;
    if (state.length > 1) {
      currentView = calculateView(state, scrollDir, scrollStage, limitedScroll);
      if (!currentView) {
        return;
      }
      Camera(pageRef, currentView);
      if (
        (scrollDir === "down" && limitedScroll > scrollStage - 2) ||
        scrollDir !== "down"
      ) {
        Typewriter(
          ".resume",
          "text-background",
          0,
          state[state.length - 1].text,
          state[state.length - 1].textPosition
        );
      }
    }
  }
}
export default Play;

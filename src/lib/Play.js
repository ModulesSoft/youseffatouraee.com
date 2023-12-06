import calculateView from "./CalculateView";
import { Typewriter, CleanTypewriter } from "./Typewriter";
import Camera from "./Camera";
import animate from "./Animate";
const state = [];
let currentView = null;
function Play(
  pageRef,
  scroll = 0,
  scrollDir = "down",
  scrollStage = 10,
  sceneNumber = 0,
  isMobile,
  viewsAndTexts
) {
  if (isMobile === undefined || isMobile === null)
    return console.error("Undefined parameters may cause problems!");

  const limitedScroll = Number.parseFloat(
    scroll - sceneNumber * scrollStage
  ).toFixed(2);
  let newState = null;
  switch (sceneNumber) {
    case 0:
      newState = viewsAndTexts.laptop;
      if (limitedScroll > 0 && limitedScroll < scrollStage / 2) {
        animate(isMobile, "introSceneScrollRemove");
      } else {
        animate(isMobile, "FirstFace", limitedScroll);
      }
      break;
    case 1:
      newState = viewsAndTexts.notebookOne;
      break;
    case 2:
      newState = viewsAndTexts.notebookTwo;
      break;
    case 3:
      newState = viewsAndTexts.degree;
      break;
    case 4:
      newState = viewsAndTexts.os;
      break;
    case 5:
      newState = viewsAndTexts.frontEndOne;
      break;
    case 6:
      newState = viewsAndTexts.frontEndTwo;
      break;
    case 7:
      newState = viewsAndTexts.backEndOne;
      break;
    case 8:
      // hobbies
      newState = viewsAndTexts.microphone;
      if (scrollDir === "down" && limitedScroll < scrollStage / 4) {
        animate(isMobile, "hobbiesAddScroll");
      } else {
        animate(isMobile, "hobbiesRemoveScroll");
      }
      break;
    case 9:
      // change faces for variety
      newState = viewsAndTexts.motorcycle;
      break;
    case 10:
      newState = viewsAndTexts.door;
      animate(isMobile, "night");
      break;
    case 11:
      newState = viewsAndTexts.general;
      animate(isMobile, "door", limitedScroll);
      animate(isMobile, "day", limitedScroll);
      break;
    case 12:
      newState = viewsAndTexts.walking;
      animate(isMobile, "WalkingAnimations", limitedScroll);
      break;
    case 13:
      newState = viewsAndTexts.garden;
      animate(isMobile, "TreeAnimations", limitedScroll);
      break;
    case 14:
      newState = viewsAndTexts.mountain;
      animate(isMobile, "FlagAnimations", limitedScroll);
      break;
    default:
      newState = "end";
      break;
  }
  if (state.length === 0) {
    //init
    state.push(viewsAndTexts.begin);
    Camera(pageRef, viewsAndTexts.begin.view);
    animate(isMobile, "introScene");
    animate(isMobile, "door", 0); //to debug halfway door after page refresh
    CleanTypewriter(".resume");
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

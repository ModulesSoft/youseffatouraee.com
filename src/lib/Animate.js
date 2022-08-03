import OverlayAnimations from "../animations/OverlayAnimations";
import WalkingAnimations from "../animations/WalkingAnimations";
import CarAnimations from "../animations/CarAnimations";
import { poker, smile } from "../animations/FaceAnimations";
import TreeAnimations from "../animations/TreeAnimations";
import FlagAnimations from "../animations/FlagAnimations";
import { day, night } from "../animations/BackgroundAnimations";
import DoorAnimations from "../animations/DoorAnimations";
const overlayAnimations = new OverlayAnimations(".decorative__scroll__image");
let prevAnimation = "";
export function animate(isMobile, animation = "", scroll = 0) {
  if (prevAnimation !== animation || scroll > 0) {
    prevAnimation = animation;
    switch (animation) {
      case "introScene":
        overlayAnimations.addMultipleText("#hi", "#welcome", "#download");
        overlayAnimations.addAnimationAndShow(
          ".decorative",
          ".decorative__scroll",
          "#scrollResume",
          "#darkness"
        );
        break;
      case "introSceneScrollRemove":
        overlayAnimations.removeAnimationAndHide(
          "#hi",
          "#welcome",
          "#download"
        );
        overlayAnimations.removeAnimationAndHide(
          ".decorative",
          ".decorative__scroll",
          "#scrollResume",
          "#darkness"
        );
        break;
      case "hobbiesAddScroll":
        overlayAnimations.addAnimationAndShow(
          ".decorative",
          ".decorative__scroll",
          "#scrollHobbies",
          "#darkness"
        );
        break;
      case "hobbiesRemoveScroll":
        overlayAnimations.removeAnimationAndHide(
          ".decorative",
          ".decorative__scroll",
          "#scrollHobbies",
          "#darkness"
        );
        break;
      case "FirstFace":
        isMobile ? poker("#pokerFace", scroll) : smile("#smileFace", scroll);
        break;
      case "SecondFace":
        isMobile ? smile("#smileFace", scroll) : poker("#pokerFace", scroll);
        break;
      case "WalkingAnimations":
        WalkingAnimations("#walking", "#sideview", () =>
          CarAnimations(
            "#car",
            "#beam",
            "#rearWheel",
            "#frontWheel",
            "#wheels",
            "#sideview"
          )
        );
        break;
      case "door":
        DoorAnimations("#garage-door", scroll);
        break;
      case "night":
        night("#darkness");
        break;
      case "day":
        day(".page", "#darkness", "#clouds", "#sun", scroll);
        break;
      case "TreeAnimations":
        TreeAnimations("#treeOne", "#treeTwo", scroll);
        break;
      case "FlagAnimations":
        FlagAnimations("#flag", scroll);
        break;
      default:
        console.error("Provided animation does not exist");
        break;
    }
  }
}

export default animate;

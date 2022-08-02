import OverlayAnimations from "../animations/OverlayAnimations";
import WalkingAnimations from "../animations/WalkingAnimations";
import CarAnimations from "../animations/CarAnimations";
import FaceAnimations from "../animations/FaceAnimations";
import TreeAnimations from "../animations/TreeAnimations";
import FlagAnimations from "../animations/FlagAnimations";
import BackgroundAnimations from "../animations/BackgroundAnimations";
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
      case "night":
        BackgroundAnimations(".page", "#darkness", "#clouds", "#sun").night();
        break;
      case "day":
        BackgroundAnimations(".page", "#darkness", "#clouds", "#sun").day();
        break;
      case "TreeAnimations":
        TreeAnimations("#treeOne", "#treeTwo", scroll);
        break;
      case "FlagAnimations":
        FlagAnimations("#flag");
        break;
      default:
        console.error("Provided animation does not exist");
        break;
    }
  }
}
export function slideDoor(scroll) {
  if (scroll === -1) {
    //finished
    DoorAnimations("#garage-door", "140px");
  } else {
    //slide the door
    DoorAnimations("#garage-door", scroll * 10);
  }
}

export default animate;

import TextAnimations from "../animations/TextAnimations";
import WalkingAnimations from "../animations/WalkingAnimations";
import CarAnimations from "../animations/CarAnimations";
import FaceAnimations from "../animations/FaceAnimations";
import TreeAnimations from "../animations/TreeAnimations";
import FlagAnimations from "../animations/FlagAnimations";
import BackgroundAnimations from "../animations/BackgroundAnimations";
import DoorAnimations from "../animations/DoorAnimations";

let prevAnimation = "";
export function animate(isMobile, animation = "", scroll = 0) {
  if (prevAnimation !== animation || scroll > 0) {
    prevAnimation = animation;
    switch (animation) {
      case "introScene":
        TextAnimations().introScene(".hi,.welcome,.download");
        TextAnimations().addScroll(
          ".scroll",
          ".scrollIcon",
          ".scrollResume",
          "#intro",
          "#decorative",
          3000
        );
        break;
      case "introSceneScrollRemove":
        TextAnimations().removeScroll(
          ".scroll",
          ".scrollIcon",
          ".scrollResume",
          "#decorative"
        );
        break;
      case "hobbiesAddScroll":
        TextAnimations().addScroll(
          ".scroll",
          ".scrollIcon",
          ".scrollHobbies",
          "#intro",
          "#decorative",
          500
        );
        break;
      case "hobbiesRemoveScroll":
        TextAnimations().removeScroll(
          ".scroll",
          ".scrollIcon",
          ".scrollHobbies",
          "#decorative"
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

import TextAnimations from "../animations/TextAnimations";
import WalkingAnimations from "../animations/WalkingAnimations";
import CarAnimations from "../animations/CarAnimations";
import FaceAnimations from "../animations/FaceAnimations";
import TreeAnimations from "../animations/TreeAnimations";
import FlagAnimations from "../animations/FlagAnimations";
import BackgroundAnimations from "../animations/BackgroundAnimations";
import DoorAnimations from "../animations/DoorAnimations";

let prevAnimation = "";
export function animate(isMobile, animation = "") {
  if (prevAnimation !== animation) {
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
        // scrollY={scene >= 10 && scroll - 10 * scrollStage}
        // console.log(scrollY);
        // let transform = {
        //   transform: `translateY(${scrollY * 7}px)`,
        // };
        // checkwhether the door is finished opening
        // if (scrollY > 19) {
        //   transform = {
        //     transform: "translateY(140px)",
        //   };
        // }
        // DoorAnimations("#garage-door", limitedScroll * 7);
        BackgroundAnimations(".page", "#darkness", "#clouds", "#sun").night();
        break;
      case "day":
        // DoorAnimations("#garage-door", limitedScroll * -7);

        BackgroundAnimations(".page", "#darkness", "#clouds", "#sun").day();
        break;
      case "TreeAnimations":
        TreeAnimations("#treeOne", "treeTwo");
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
export default animate;

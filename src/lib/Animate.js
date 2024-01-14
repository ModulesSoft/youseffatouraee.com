import {
  removeAnimationAndHide,
  addAnimationAndShow,
} from "../animations/OverlayAnimations";
import WalkingAnimations from "../animations/WalkingAnimations";
import CarAnimations from "../animations/CarAnimations";
import { poker, smile } from "../animations/FaceAnimations";
import TreeAnimations from "../animations/TreeAnimations";
import FlagAnimations from "../animations/FlagAnimations";
import { day, night } from "../animations/BackgroundAnimations";
import DoorAnimations from "../animations/DoorAnimations";
import SubtitleAnimations from "../animations/SubtitleAnimations";
export default class Animate {
  constructor(isMobile) {
    this.isMobile = isMobile;
  }
  scrollInstruction() {
    addAnimationAndShow(".decorative", ".decorative__scroll", "#scrollResume");
  }
  removeScrollInstruction() {
    removeAnimationAndHide(
      ".decorative",
      ".decorative__scroll",
      "#scrollResume"
    );
  }
  face(step, maxStep) {
    poker("#pokerFace", step, maxStep);
    smile("#smileFace", step, maxStep);
  }
  door(step, maxStep) {
    DoorAnimations("#garage-door", step, maxStep);
  }
  dayAndNight(step, maxStep) {
    night(
      ["#trees", "#mountains", "#flag", "#house", "#garage-door", "#car"],
      step,
      maxStep
    );
    day("#sky", "#clouds", "#sun", step, maxStep);
  }
  walk(step, maxStep) {
    WalkingAnimations(
      "#walking",
      [
        "#cycle1",
        "#cycle2",
        "#cycle3",
        "#cycle4",
        "#cycle5",
        "#cycle6",
        "#cycle7",
        "#cycle8",
      ],
      step,
      maxStep
    );
  }
  drive(step, maxStep) {
    CarAnimations("#car", "#rearWheel", "#frontWheel", step, maxStep);
  }
  trees(step, maxStep) {
    TreeAnimations("#treeOne", "#treeTwo", step, maxStep);
  }
  flag(step, maxStep) {
    FlagAnimations("#flag", step, maxStep);
  }
  write(step, maxStep, text) {
    SubtitleAnimations(".subtitle", text);
  }
  doubleCheck(step, maxStep, { door, walk, drive }) {
    if (door === true) {
      // keep the door opened
      this.door(1, 1);
    } else if (door === false) {
      // keep the door closed
      this.door(0, 1);
    }
    if (walk === true) {
      this.walk(1, 1);
    } else if (walk === false) {
      this.walk(0, 1);
    }
    if (drive === true) {
      this.drive(1, 1);
    } else if (drive === false) {
      this.drive(0, 1);
    }
  }
  // Remove hardcoded values and pass them up
}

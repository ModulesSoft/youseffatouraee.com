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
    addAnimationAndShow(".scroll-instruction");
  }
  removeScrollInstruction() {
    removeAnimationAndHide(".scroll-instruction");
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
  // Double check the animations situation in case the user scrolls fast
  doubleCheck(step, maxStep, { door, walk, drive, instruction, day, poker }) {
    if (door === true) {
      this.door(1, 1);
    } else if (door === false) {
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
    if (instruction === true) {
      this.scrollInstruction();
    } else if (instruction === false) {
      this.removeScrollInstruction();
    }
    if (day === true) {
      this.dayAndNight(1, 1);
    } else if (day === false) {
      this.dayAndNight(0, 1);
    }
    if (poker === true) {
      this.face(0, 1);
    } else if (day === false) {
      this.face(1, 1);
    }
  }
}

import calculateView from "./CalculateView";
class Camera {
  constructor(screen) {
    this.screen = screen;
  }
  show(view) {
    this.screen.current?.setAttribute("viewBox", view);
  }
  zoom(from, to, level, maxLevel) {
    // Construct the intermediate viewport string and construct the intermediate viewport string
    const intermediateViewportString = calculateView(from, to, level, maxLevel);
    this.screen.current?.setAttribute("viewBox", intermediateViewportString);
  }

  move(from, to, steps, maxSteps) {
    // Calculate the intermediate viewport based on the move steps and construct the intermediate viewport string
    const intermediateViewportString = calculateView(from, to, steps, maxSteps);
    this.screen.current?.setAttribute("viewBox", intermediateViewportString);
  }
}
export default Camera;

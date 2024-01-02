import calculateView from "./CalculateView";
class Camera {
  constructor(screen) {
    this.screen = screen;
  }
  show(steps, maxSteps, view) {
    this.screen.current?.setAttribute("viewBox", view);
  }
  zoom(steps, maxSteps, from, to) {
    // Construct the intermediate viewport string and construct the intermediate viewport string
    const intermediateViewportString = calculateView(from, to, steps, maxSteps);
    this.screen.current?.setAttribute("viewBox", intermediateViewportString);
  }

  move(steps, maxSteps, from, to) {
    // Calculate the intermediate viewport based on the move steps and construct the intermediate viewport string
    const intermediateViewportString = calculateView(from, to, steps, maxSteps);
    this.screen.current?.setAttribute("viewBox", intermediateViewportString);
  }
}
export default Camera;

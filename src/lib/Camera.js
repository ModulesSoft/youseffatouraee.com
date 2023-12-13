class Camera {
  constructor(screen) {
    this.screen = screen;
  }
  show(view) {
    this.screen.current?.setAttribute("viewBox", view);
  }
}
export default Camera;

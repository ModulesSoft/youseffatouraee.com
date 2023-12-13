class Camera {
  constructor(screen) {
    this.screen = screen;
  }
  show(view) {
    this.screen.current?.setAttribute("viewBox", view);
  }
  zoom(from, to, level, maxLevel) {
    // Parse viewport values from strings
    const fromViewport = from.split(" ").map(parseFloat);
    const toViewport = to.split(" ").map(parseFloat);

    // Calculate the intermediate viewport based on the zoom level
    const intermediateViewport = fromViewport.map((value, index) => {
      const delta = (toViewport[index] - value) * (level / maxLevel);
      const result = value + delta;
      return Math.max(result, 0); // Ensure non-negative values
    });

    // Construct the intermediate viewport string
    const intermediateViewportString = intermediateViewport.join(" ");

    // Update viewBox
    this.screen.current?.setAttribute("viewBox", intermediateViewportString);
  }

  move(from, to, steps) {}
}
export default Camera;

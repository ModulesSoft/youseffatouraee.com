import CarAnimations from "./helpers/CarAnimations";
import TextAnimations from "./helpers/TextAnimations";
import BackgroundAnimations from "./helpers/BackgroundAnimations";
import CameraAnimations from "./helpers/CameraAnimations";

function Play(isMobile, width, height, timeline = 0) {
  // setting camera
  const Camera = new CameraAnimations(isMobile, width, height, timeline);
  function HouseScene() {
    CarAnimations(timeline);
    TextAnimations(timeline).BackgroundScene();
    Camera.BackgroundScene();
    BackgroundAnimations(timeline);
  }

  function GarageScene() {
    TextAnimations(timeline).GarageScene();
    Camera.GarageScene();
  }
  return { HouseScene, GarageScene };
}
export default Play;

import CarAnimations from "./helpers/CarAnimations";
import IntroTextAnimations from "./helpers/IntroTextAnimations";
import BackgroundAnimations from "./helpers/BackgroundAnimations";
import CameraAnimations from "./helpers/CameraAnimations";
import TypewriterAnimation from "./helpers/lib/TypewriterAnimation";

function Play(isMobile, width, height, timeline = 0) {
  // setting camera
  const Camera = new CameraAnimations(isMobile, width, height, timeline);
  function HouseScene() {
    CarAnimations(timeline);
    IntroTextAnimations();
    Camera.BackgroundScene();
    BackgroundAnimations(timeline);
  }

  function GarageScene() {
    // start sequence
    Camera.LaptopView(laptopOne);

    function laptopOne() {
      TypewriterAnimation("#laptopOne", 2_000, 100, 1000, laptopTwo);
    }
    function laptopTwo() {
      TypewriterAnimation("#laptopTwo", 500, 100, 1000, degreeCamera);
    }
    function degreeCamera() {
      Camera.CertificateView(degreeOne);
    }
    function degreeOne() {
      TypewriterAnimation("#degreeOne", 2_000, 100, 1000, degreeTwo);
    }
    function degreeTwo() {
      TypewriterAnimation("#degreeTwo", 2_000, 100, 1000, OS);
    }
    function OS() {
      console.log("os");
    }
  }
  return { HouseScene, GarageScene };
}
export default Play;

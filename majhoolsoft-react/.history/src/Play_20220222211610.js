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
    startSequence();

    function startSequence() {
      laptopOne();
    }

    function laptopOne() {
      Camera.LaptopView();
      TypewriterAnimation("#laptopOne", 2_000, 100, 1000, laptopTwo);
    }
    function laptopTwo() {
      TypewriterAnimation("#laptopTwo", 500, 100, 1000, degreeOne);
    }
    function degreeOne() {
      Camera.CertificateView();
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

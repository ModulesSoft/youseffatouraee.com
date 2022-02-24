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
    // Camera.LaptopView(laptopOne);
    // function laptopOne() {
    //   TypewriterAnimation("#laptopOne", 2_000, 100, 1000, laptopTwo);
    // }
    // function laptopTwo() {
    //   TypewriterAnimation("#laptopTwo", 500, 100, 1000, degreeCamera);
    // }
    // function degreeCamera() {
    //   Camera.CertificateView(degreeOne);
    // }
    // function degreeOne() {
    //   TypewriterAnimation("#degreeOne", 2_000, 100, 1000, degreeTwo);
    // }
    // function degreeTwo() {
    //   TypewriterAnimation("#degreeTwo", 2_000, 100, 1000, OSCamera);
    // }
    // function OSCamera() {
    //   Camera.OSView(OSOne);
    // }
    // function OSOne() {
    //   TypewriterAnimation("#OSOne", 2_000, 100, 1000, frontEndOneCamera);
    // }
    // function frontEndOneCamera() {
    //   Camera.frontEndOneView(frontEndOneOne);
    // }
    // // front end
    // function frontEndOneOne() {
    //   TypewriterAnimation("#frontEndOneOne", 2_000, 100, 1000, frontEndOneTwo);
    // }
    // function frontEndOneTwo() {
    //   TypewriterAnimation(
    //     "#frontEndOneTwo",
    //     2_000,
    //     100,
    //     1000,
    //     frontEndTwoCamera
    //   );
    // }
    // function frontEndTwoCamera() {
    //   Camera.frontEndTwoView(frontEndTwoOne);
    // }
    // function frontEndTwoOne() {
    //   TypewriterAnimation("#frontEndTwoOne", 2_000, 100, 1000, frontEndTwoTwo);
    // }
    // function frontEndTwoTwo() {
    //   TypewriterAnimation(
    //     "#frontEndTwoTwo",
    //     2_000,
    //     100,
    //     1000,
    //     backEndOneCamera
    //   );
    // }
    // back end
    backEndOneCamera();
    function backEndOneCamera() {
      Camera.backEndOneView(backEndOneOne);
    }
    function backEndOneOne() {
      TypewriterAnimation("#backEndOneOne", 2_000, 100, 1000, backEndOneTwo);
    }
    function backEndOneTwo() {
      TypewriterAnimation("#backEndOneTwo", 2_000, 100, 1000, test);
    }
    function test(e) {
      console.log("done");
    }
  }
  return { HouseScene, GarageScene };
}
export default Play;

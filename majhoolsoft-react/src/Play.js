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
    //   TypewriterAnimation("#OSOne", 2_000, 100, 1000, test);
    // }
    // function htmlCssJsCamera() {
    //   Camera.htmlCssJsView(htmlCssJsOne);
    // }
    // function htmlCssJsOne() {
    //     TypewriterAnimation("#HtmlCssJsOne", 2_000, 100, 1000, htmlCssJsTwo);
    // }
    // function htmlCssJsTwo() {
    //     TypewriterAnimation("#HtmlCssJsTwo", 2_000, 100, 1000, test);
    // }
    SassGraphqlTsCamera();
    function SassGraphqlTsCamera() {
      Camera.SassGraphqlTsView(SassGraphqlTsOne);
    }
    function SassGraphqlTsOne() {
      TypewriterAnimation(
        "#SassGraphqlTsOne",
        2_000,
        100,
        1000,
        SassGraphqlTsTwo
      );
    }
    function SassGraphqlTsTwo() {
      TypewriterAnimation("#SassGraphqlTsTwo", 2_000, 100, 1000, test);
    }

    function test(e) {
      console.log(e);
    }
  }
  return { HouseScene, GarageScene };
}
export default Play;

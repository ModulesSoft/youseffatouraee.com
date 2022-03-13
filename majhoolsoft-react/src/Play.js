import CarAnimations from "./helpers/CarAnimations";
import IntroTextAnimations from "./helpers/IntroTextAnimations";
import BackgroundAnimations from "./helpers/BackgroundAnimations";
import { View, Camera } from "./helpers/lib/Camera";
import Typewriter from "./helpers/lib/Typewriter";
import WalkingAnimations from "./helpers/WalkingAnimations";
import FaceAnimations from "./helpers/FaceAnimations";
function Play(
  scroll,
  scrollStage,
  isMobile,
  width,
  height,
  texts,
  timeline = 0
) {
  var library = {
    begin: {
      view: "-1000 0 800 1080",
      textPosition: "",
    },
    general: {
      view: "0 0 1920 1080",
    },
    door: {
      view: isMobile
        ? `1000 ${1080 - height} ${width} ${height}`
        : "1000 800 400 240",
    },
    laptop: {
      view: "1328 920 60 60",
      textPosition: isMobile
        ? { x: 16, y: 16, width: `${width - 16}` }
        : { x: 16, y: 16, width: `${width - 16}` },
    },
    degree: {
      view: isMobile ? "1288 900 60 45" : "1288 900 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : {
            x: `${(1 / 2) * width}`,
            y: `${(1 / 2) * height}`,
            width: `${(1 / 2) * width}`,
          },
    },
    os: {
      view: isMobile ? "1252 900 60 45" : "1240 900 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : { x: 16, y: `${(90 / 100) * height}`, width: `${width - 16}` },
    },
    firstRowEnd: {
      view: isMobile ? "1230 900 60 45" : "1200 900 60 28",
    },
    frontEndOne: {
      view: isMobile ? "1230 930 60 45" : "1200 930 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : { x: 16, y: `${(1 / 2) * height}`, width: `${(1 / 2) * width}` },
    },
    frontEndTwo: {
      view: isMobile ? "1257 920 60 45" : "1230 930 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(20 / 100) * height}`, width: `${width - 16}` }
        : { x: 16, y: `${(90 / 100) * height}`, width: `${width - 16}` },
    },
    backEndOne: {
      view: isMobile ? "1288 930 60 45" : "1260 930 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : { x: 16, y: `${(90 / 100) * height}`, width: `${width - 16}` },
    },
    notebookOne: {
      view: isMobile ? "1252 960 60 45" : "1215 962 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : {
            x: 16,
            y: `${(25 / 100) * height}`,
            width: `${(1 / 2) * width}`,
          },
    },
    notebookTwo: {
      view: isMobile ? "1270 960 60 45" : "1270 962 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : { x: 16, y: `${(90 / 100) * height}`, width: `${width - 16}` },
    },
    microphone: {
      view: isMobile ? "1130 900 100 62" : "1130 900 100 62",
      textPosition: {
        x: 16,
        y: `${(90 / 100) * height}`,
        width: `${width - 16}`,
      },
    },
    motorcycle: {
      view: isMobile ? "1010 850 390 220" : "1000 850 200 180",
      textPosition: isMobile
        ? { x: 16, y: `${(90 / 100) * height}`, width: `${width - 16}` }
        : {
            x: `${(1 / 2) * width}`,
            y: `${(1 / 2) * height}`,
            width: `${(1 / 2) * width}`,
          },
    },
    garden: {
      view: isMobile ? "20 550 600 420" : "20 550 600 420",
      textPosition: {
        x: 16,
        y: `${(10 / 100) * height}`,
        width: `${width - 16}`,
      },
    },
    mountain: {
      view: isMobile ? "300 250 600 420" : "150 250 600 420",
      textPosition: {
        x: 16,
        y: `${(90 / 100) * height}`,
        width: `${width - 16}`,
      },
    },
  };
  // add texts to library
  Object.keys(library).forEach(function (k) {
    library = {
      ...library,
      ...{
        [k]: {
          text: texts?.[k],
          textPosition: library[k]["textPosition"],
          view: library[k]["view"],
        },
      },
    };
  });
  // operate animations
  let fromView = "";
  if (scroll > 0 && scroll < scrollStage) {
    // additional smile face pop right for laptop and straight face for mobile
    FaceAnimations(isMobile, "#straightFace", "#smileFace");
    laptopText();
  } else if (scroll > scrollStage && scroll < scrollStage * 2) {
    fromView = library.laptop.view;
    Camera(
      ".page",
      calculateView(library.notebookTwo.view),
      scroll - scrollStage,
      notebookTwoText
    );
  } else if (scroll > scrollStage * 2 && scroll < scrollStage * 3) {
    // fromView = library.notebookTwo.view;
    // Camera(
    //   ".page",
    //   calculateView(library.notebookTwo.view),
    //   scroll,
    //   notebookOneText
    // );
  }
  function calculateView(toView) {
    let from = fromView.split(" ").map(Number);
    let to = toView.split(" ").map(Number);
    let sub = [];
    for (let i = 0; i < from.length; i++) {
      sub.push((to[i] - from[i]) / scrollStage);
    }
    return [from, to, sub];
  }
  // function introScene(finishedCallback) {
  //   CarAnimations(walking);
  //   function walking() {
  //     WalkingAnimations();
  //   }
  //   IntroTextAnimations().introScene();
  //   firstCamera();
  //   function firstCamera() {
  //     Camera().fromTo(
  //       ".page",
  //       [library.begin.view, library.general.view],
  //       4000,
  //       "easeOutQuart",
  //       4000,
  //       secondCamera
  //     );
  //   }
  //   function secondCamera() {
  //     Camera().fromTo(
  //       ".page",
  //       [library.general.view, library.door.view],
  //       4000,
  //       "easeOutQuart",
  //       6000,
  //       finishedCallback
  //     );
  //   }

  //   BackgroundAnimations(timeline);
  // }

  // function garageScene(finishedCallback) {
  // function laptopCamera(scroll, view) {
  //   Camera().fromTo(".page", view, scroll, laptopText);
  // }
  function initCamera() {
    View(".page", library.laptop.view);
  }
  function laptopText() {
    Typewriter(
      "article",
      "text-background",
      50,
      library.laptop.text,
      library.laptop.textPosition
    );
  }
  // function degreeCamera() {
  //   Camera().fromTo(
  //     ".page",
  //     [library.laptop.view, library.degree.view],
  //     3000,
  //     "easeOutQuad",
  //     0,
  //     degreeText
  //   );
  // }
  // function degreeText() {
  //   Typewriter(
  //     "article",
  //     "text-background",
  //     50,
  //     library.degree.text,
  //     library.degree.textPosition,
  //     OSCamera
  //   );
  // }
  // function OSCamera() {
  //   Camera().fromTo(
  //     ".page",
  //     [library.degree.view, library.door.view, library.os.view],
  //     3000,
  //     "easeOutQuad",
  //     0,
  //     osText
  //   );
  // }
  // function osText() {
  //   Typewriter(
  //     "article",
  //     "text-background",
  //     50,
  //     library.os.text,
  //     library.os.textPosition,
  //     frontEndOneCamera
  //   );
  // }
  // function frontEndOneCamera() {
  //   Camera().fromTo(
  //     ".page",
  //     [
  //       library.os.view,
  //       library.firstRowEnd.view,
  //       library.frontEndOne.view,
  //     ],
  //     3000,
  //     "easeOutQuad",
  //     0,
  //     frontEndOneText
  //   );
  // }
  // // front end
  // function frontEndOneText() {
  //   Typewriter(
  //     "article",
  //     "text-background",
  //     50,
  //     library.frontEndOne.text,
  //     library.frontEndOne.textPosition,
  //     frontEndTwoCamera
  //   );
  // }
  // function frontEndTwoCamera() {
  //   Camera().fromTo(
  //     ".page",
  //     [library.frontEndOne.view, library.frontEndTwo.view],
  //     3000,
  //     "easeOutQuad",
  //     0,
  //     frontEndTwoText
  //   );
  // }
  // function frontEndTwoText() {
  //   Typewriter(
  //     "article",
  //     "text-background",
  //     50,
  //     library.frontEndTwo.text,
  //     library.frontEndTwo.textPosition,
  //     backEndCamera
  //   );
  // }
  // // back end
  // function backEndCamera() {
  //   Camera().fromTo(
  //     ".page",
  //     [library.frontEndTwo.view, library.backEndOne.view],
  //     3000,
  //     "easeOutQuad",
  //     0,
  //     backEndText
  //   );
  // }
  // function backEndText() {
  //   Typewriter(
  //     "article",
  //     "text-background",
  //     50,
  //     library.backEndOne.text,
  //     library.backEndOne.textPosition,
  //     notebookOneCamera
  //   );
  // }
  // // notebook view
  // function notebookOneCamera() {
  //   Camera().fromTo(
  //     ".page",
  //     [
  //       library.backEndOne.view,
  //       library.door.view,
  //       library.notebookOne.view,
  //     ],
  //     3000,
  //     "easeOutQuad",
  //     0,
  //     notebookOneText
  //   );
  // }
  function notebookOneText() {
    Typewriter(
      "article",
      "text-background",
      50,
      library.notebookOne.text,
      library.notebookOne.textPosition
      // notebookTwoCamera
    );
  }
  // function notebookTwoCamera() {
  //   Camera().fromTo(
  //     ".page",
  //     [library.notebookOne.view, library.notebookTwo.view],
  //     3000,
  //     "easeOutQuad",
  //     0,
  //     notebookTwoText
  //   );
  // }
  function notebookTwoText() {
    Typewriter(
      "article",
      "text-background",
      50,
      library.notebookTwo.text,
      library.notebookTwo.textPosition
    );
  }
  //scroll down to see the hobbies
  // function scroll() {
  //   IntroTextAnimations().addScrollIcon(
  //     ".scrollHobbies",
  //     finishedCallback(true)
  //   );
  // }
  // }
  // function hobbiesScene(finishedCallback) {
  //   IntroTextAnimations().removeScrollIcon();

  //   microphoneCamera();
  //   function microphoneCamera() {
  //     Camera().fromTo(
  //       ".page",
  //       [
  //         library.notebookTwo.view,
  //         library.door.view,
  //         library.microphone.view,
  //       ],
  //       3000,
  //       "easeOutQuad",
  //       0,
  //       microphoneText
  //     );
  //   }
  //   function microphoneText() {
  //     Typewriter(
  //       "article",
  //       "text-background",
  //       50,
  //       library.microphone.text,
  //       library.microphone.textPosition,
  //       motorcycleCamera
  //     );
  //   }
  //   function motorcycleCamera() {
  //     Camera().fromTo(
  //       ".page",
  //       [library.microphone.view, library.motorcycle.view],
  //       3000,
  //       "easeOutQuad",
  //       0,
  //       motorcycleText
  //     );
  //   }
  //   function motorcycleText() {
  //     Typewriter(
  //       "article",
  //       "text-background",
  //       50,
  //       library.motorcycle.text,
  //       library.motorcycle.textPosition,
  //       gardenCamera
  //     );
  //   }
  //   function gardenCamera() {
  //     Camera().fromTo(
  //       ".page",
  //       [library.motorcycle.view, library.garden.view],
  //       3000,
  //       "easeOutQuad",
  //       0,
  //       gardenText
  //     );
  //   }
  //   function gardenText() {
  //     Typewriter(
  //       "article",
  //       "text-background",
  //       50,
  //       library.garden.text,
  //       library.garden.textPosition,
  //       mountainCamera
  //     );
  //   }
  //   function mountainCamera() {
  //     Camera().fromTo(
  //       ".page",
  //       [library.garden.view, library.mountain.view],
  //       3000,
  //       "easeOutQuad",
  //       0,
  //       mountainText
  //     );
  //   }
  //   function mountainText() {
  //     Typewriter(
  //       "article",
  //       "text-background",
  //       50,
  //       library.mountain.text,
  //       library.mountain.textPosition,
  //       finishedCallback
  //     );
  //   }
  // }
  function removeScrollIcon() {
    IntroTextAnimations().removeScrollIcon();
  }

  return { removeScrollIcon, initCamera };
}
export default Play;

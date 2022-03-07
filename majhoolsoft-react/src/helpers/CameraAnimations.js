import anime from "animejs";

function CameraAnimations(library, timeline = 0) {
  //Intro Scene
  function IntroScene(finishedCallback) {
    // camera transition
    anime
      .timeline({ loop: false })
      .add({
        targets: ".page",
        duration: 4000,
        keyframes: [
          // camera transition from the car in the way home to the background
          {
            viewBox: [library.begin.view, library.general.view],
            duration: (timeline += 3000),
            delay: (timeline += 1000),
          },
          // camera transition to Garage door
          {
            viewBox: [library.general.view, library.door.view],
            delay: 7000,
          },
        ],
        easing: "easeOutQuad",
      })
      .finished.then(finishedCallback);
  }

  // Garage Scene
  function LaptopView(finishedCallback) {
    anime
      .timeline({ loop: false })
      .add({
        targets: ".page",
        duration: 4000,
        keyframes: [
          // camera transition from the GarageCamera door to the laptop
          {
            viewBox: [library.door.view, library.laptop.view],
            // viewBox: mobile ? doorViewMobile : doorViewDesktop,
          },
          {},
        ],
        easing: "easeOutQuad",
      })
      .finished.then(finishedCallback);
  }

  function DegreeView(finishedCallback) {
    // Degree View
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          {
            viewBox: [library.laptop.view, library.degree.view],
          },
          {},
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
  function OSView(finishedCallback) {
    // OS View
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          {
            viewBox: [library.degree.view, library.os.view],
          },
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
  function frontEndOneView(finishedCallback) {
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          // camera transition from the OS books to the end of the first row (left)
          {
            viewBox: [library.os.view, library.firstRowEnd.view],
          },
          // camera transition from the end of the first row (left) to the begining of the second row (left) html css js books
          {
            viewBox: [library.firstRowEnd.view, library.frontEndOne.view],
          },
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
  function frontEndTwoView(finishedCallback) {
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          {
            viewBox: [library.frontEndOne.view, library.frontEndTwo.view],
          },
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
  function backEndOneView(finishedCallback) {
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          {
            viewBox: [library.frontEndTwo.view, library.backEndOne.view],
          },
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
  function notebookOneView(finishedCallback) {
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          {
            viewBox: [library.backEndOne.view, library.notebookOne.view],
          },
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
  function notebookTwoView(finishedCallback) {
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          {
            viewBox: [library.notebookOne.view, library.notebookTwo.view],
          },
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
  function microphoneView(finishedCallback) {
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          {
            viewBox: [library.notebookTwo.view, library.microphone.view],
          },
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
  function motorcycleView(finishedCallback) {
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          {
            viewBox: [library.microphone.view, library.motorcycle.view],
          },
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
  function gardenView(finishedCallback) {
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          {
            viewBox: [library.motorcycle.view, library.garden.view],
          },
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
  function mountainView(finishedCallback) {
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          {
            viewBox: [library.garden.view, library.mountain.view],
          },
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
  return {
    IntroScene,
    LaptopView,
    DegreeView,
    OSView,
    backEndOneView,
    frontEndOneView,
    gardenView,
    frontEndTwoView,
    microphoneView,
    mountainView,
    notebookOneView,
    notebookTwoView,
    motorcycleView,
  };
}
export default CameraAnimations;

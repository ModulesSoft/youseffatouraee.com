import anime from "animejs";

class CameraAnimations {
  constructor(isMobile, width, height, timeline = null) {
    this.timeline = timeline;
    this.library = {
      begin: {
        view: "-1000 650 900 500",
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
        textPosition: "",
      },
      certificate: {
        view: isMobile ? "1288 900 60 45" : "1288 900 60 25",
        textPosition: isMobile ? "bottom" : "right",
      },
      OS: {
        view: isMobile ? "1288 900 60 45" : "1240 900 60 25",
        textPosition: isMobile ? "bottom" : "right",
      },
      firstRowEnd: {
        view: isMobile ? "1230 900 60 45" : "1200 900 60 25",
      },
      frontEndOne: {
        view: isMobile ? "1230 930 60 45" : "1200 930 60 25",
        textPosition: isMobile ? "bottom" : "right",
      },
      frontEndTwo: {
        view: isMobile ? "1257 920 60 45" : "1230 930 60 25",
        textPosition: isMobile ? "bottom" : "right",
      },
      backEndOne: {
        view: isMobile ? "1288 920 60 45" : "1260 930 60 25",
        textPosition: isMobile ? "bottom" : "right",
      },
      notebookOne: {
        view: isMobile ? "1252 960 60 45" : "1215 962 60 25",
        textPosition: isMobile ? "bottom" : "right",
      },
      notebookTwo: {
        view: isMobile ? "1270 960 60 45" : "1270 962 60 25",
        textPosition: isMobile ? "bottom" : "right",
      },
      microphone: {
        view: isMobile ? "1130 900 100 62" : "1130 900 100 62",
        textPosition: isMobile ? "bottom" : "right",
      },
      motorcycle: {
        view: isMobile ? "1010 850 390 220" : "1000 850 200 180",
        textPosition: isMobile ? "bottom" : "right",
      },
    };
  }

  //Intro Scene
  IntroScene(finishedCallback) {
    // camera transition
    anime
      .timeline({ loop: false })
      .add({
        targets: ".page",
        duration: 4000,
        keyframes: [
          // camera transition from the car in the way home to the background
          {
            viewBox: [this.library.begin.view, this.library.general.view],
            duration: (this.timeline += 3000),
            delay: (this.timeline += 1000),
          },
          // camera transition to Garage door
          {
            viewBox: [this.library.general.view, this.library.door.view],
            delay: 500000,
          },
        ],
        easing: "easeOutQuad",
      })
      .finished.then(finishedCallback);
  }

  // Garage Scene
  LaptopView(finishedCallback) {
    anime
      .timeline({ loop: false })
      .add({
        targets: ".page",
        duration: 4000,
        keyframes: [
          // camera transition from the GarageCamera door to the laptop
          {
            viewBox: [this.library.door.view, this.library.laptop.view],
            // viewBox: mobile ? doorViewMobile : doorViewDesktop,
          },
          {},
        ],
        easing: "easeOutQuad",
      })
      .finished.then(finishedCallback);
  }

  CertificateView(finishedCallback) {
    // Certificate View
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          {
            viewBox: [this.library.laptop.view, this.library.certificate.view],
          },
          {},
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
  OSView(finishedCallback) {
    // OS View
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          {
            viewBox: [this.library.certificate.view, this.library.OS.view],
          },
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
  frontEndOneView(finishedCallback) {
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          // camera transition from the OS books to the end of the first row (left)
          {
            viewBox: [this.library.OS.view, this.library.firstRowEnd.view],
          },
          // camera transition from the end of the first row (left) to the begining of the second row (left) html css js books
          {
            viewBox: [
              this.library.firstRowEnd.view,
              this.library.frontEndOne.view,
            ],
          },
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
  frontEndTwoView(finishedCallback) {
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          {
            viewBox: [
              this.library.frontEndOne.view,
              this.library.frontEndTwo.view,
            ],
          },
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
  backEndOneView(finishedCallback) {
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          {
            viewBox: [
              this.library.frontEndTwo.view,
              this.library.backEndOne.view,
            ],
          },
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
  notebookOneView(finishedCallback) {
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          {
            viewBox: [
              this.library.backEndOne.view,
              this.library.notebookOne.view,
            ],
          },
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
  notebookTwoView(finishedCallback) {
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          {
            viewBox: [
              this.library.notebookOne.view,
              this.library.notebookTwo.view,
            ],
          },
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
  microphoneView(finishedCallback) {
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          {
            viewBox: [
              this.library.notebookTwo.view,
              this.library.microphone.view,
            ],
          },
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
  motorcycleView(finishedCallback) {
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          {
            viewBox: [
              this.library.microphone.view,
              this.library.motorcycle.view,
            ],
          },
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
}
export default CameraAnimations;

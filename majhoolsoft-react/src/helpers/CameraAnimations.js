import anime from "animejs";

class CameraAnimations {
  constructor(isMobile, width, height, timeline = null) {
    this.isMobile = isMobile;
    this.width = width;
    this.height = height;
    this.timeline = timeline;
    this.doorViewMobile = `1000 ${1080 - this.height} ${this.width} ${
      this.height
    }`;

    this.laptopView = "1328 920 60 60";
    // const certificateView = isMobile ? "1288 900 60 45" : "1288 900 60 25";
    this.generalView = "0 0 1920 1080";
    this.doorViewDesktop = "1000 800 400 240";
    this.beginView = "-1000 650 900 500";
  }

  BackgroundScene() {
    // camera transition
    anime.timeline({ loop: false }).add({
      targets: ".page",
      duration: 4000,
      keyframes: [
        // camera transition from the car in the way home to the background
        {
          viewBox: [this.beginView, this.generalView],
          duration: (this.timeline += 3000),
          delay: (this.timeline += 1000),
        },
        // camera transition to GarageCamera door
        {
          viewBox: [
            this.generalView,
            this.isMobile ? this.doorViewMobile : this.doorViewDesktop,
          ],
          delay: 5000,
        },
      ],
      easing: "easeOutQuad",
    });
  }

  // GarageScene() {
  //   const library = {
  //     certificate: {
  //       view: this.isMobile ? "1288 900 60 45" : "1288 900 60 25",
  //       textPosition: this.isMobile ? "bottom" : "right",
  //     },
  //   };
  // }

  LaptopView() {
    anime.timeline({ loop: false }).add({
      targets: ".page",
      duration: 4000,
      keyframes: [
        // camera transition from the GarageCamera door to the laptop
        {
          viewBox: [
            this.isMobile ? this.doorViewMobile : this.doorViewDesktop,
            this.laptopView,
          ],
          // viewBox: mobile ? doorViewMobile : doorViewDesktop,
        },
        // camera transition to GarageCamera door
        {},
      ],
      easing: "easeOutQuad",
    });
  }

  CertificateView() {
    const library = {
      certificate: {
        view: this.isMobile ? "1288 900 60 45" : "1288 900 60 25",
        textPosition: this.isMobile ? "bottom" : "right",
      },
    };
    // Certificate View
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          // camera transition from the laptop to GarageCamera door
          {
            viewBox: [this.laptopView, library.certificate.view],
          },
          // camera transition to GarageCamera door
          {},
        ],
        easing: "easeOutQuad",
      },
      15000
    );
  }
}
export default CameraAnimations;

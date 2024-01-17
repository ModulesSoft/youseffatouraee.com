class Timeline {
  constructor(viewsAndTexts, camera, animate) {
    this.viewsAndTexts = viewsAndTexts;
    this.camera = camera;
    this.animate = animate;
    this.initialTime = 0;
    this.timeRanges = [
      {
        time: this.calculateRange(0),
        actions: [
          { method: "camera.show", args: [viewsAndTexts.door.view] },
          {
            method: "animate.doubleCheck",
            args: [
              {
                door: false,
                walk: false,
                day: false,
                instruction: true,
                poker: true,
              },
            ],
          },
        ],
      },
      {
        time: this.calculateRange(200),
        actions: [
          {
            method: "camera.zoom",
            args: [viewsAndTexts.door.view, viewsAndTexts.laptop.view],
          },
          {
            method: "animate.doubleCheck",
            args: [{ instruction: false, poker: false }],
          },
        ],
      },
      {
        time: this.calculateRange(200),
        actions: [
          {
            method: "animate.write",
            args: [viewsAndTexts.laptop.text[0]],
          },
          {
            method: "animate.face",
            args: [],
          },
        ],
      },
      {
        time: this.calculateRange(200),
        actions: [
          {
            method: "animate.write",
            args: [viewsAndTexts.laptop.text[1]],
          },
          {
            method: "camera.zoom",
            args: [viewsAndTexts.laptop.view, viewsAndTexts.door.view],
          },
        ],
      },
      {
        time: this.calculateRange(200),
        actions: [
          {
            method: "camera.zoom",
            args: [viewsAndTexts.door.view, viewsAndTexts.bachelor.view],
          },
        ],
      },
      {
        time: this.calculateRange(200),
        actions: [
          {
            method: "animate.write",
            args: [viewsAndTexts.bachelor.text[0]],
          },
          {
            method: "camera.move",
            args: [viewsAndTexts.bachelor.view, viewsAndTexts.certificate.view],
          },
        ],
      },
      {
        time: this.calculateRange(200),
        actions: [
          {
            method: "animate.write",
            args: [viewsAndTexts.certificate.text[0]],
          },
          {
            method: "camera.zoom",
            args: [viewsAndTexts.certificate.view, viewsAndTexts.door.view],
          },
        ],
      },
      {
        time: this.calculateRange(200),
        actions: [
          {
            method: "animate.write",
            args: [viewsAndTexts.skills.text[0]],
          },
          {
            method: "camera.zoom",
            args: [viewsAndTexts.door.view, viewsAndTexts.skills.view],
          },
        ],
      },
      {
        time: this.calculateRange(50),
        actions: [
          {
            method: "animate.write",
            args: [viewsAndTexts.skills.text[1]],
          },
        ],
      },
      {
        time: this.calculateRange(200),
        actions: [
          {
            method: "animate.write",
            args: [viewsAndTexts.garageHobbies.text[0]],
          },
          {
            method: "camera.zoom",
            args: [viewsAndTexts.skills.view, viewsAndTexts.door.view],
          },
        ],
      },
      {
        time: this.calculateRange(200),
        actions: [
          {
            method: "animate.write",
            args: [viewsAndTexts.garageHobbies.text[1]],
          },
          {
            method: "camera.zoom",
            args: [viewsAndTexts.door.view, viewsAndTexts.garageHobbies.view],
          },
          {
            method: "animate.doubleCheck",
            args: [{ door: false, walk: false }],
          },
        ],
      },
      {
        time: this.calculateRange(50),
        actions: [
          {
            method: "animate.write",
            args: [viewsAndTexts.garageHobbies.text[2]],
          },
        ],
      },
      {
        time: this.calculateRange(200),
        actions: [
          {
            method: "animate.write",
            args: [""],
          },
          {
            method: "camera.zoom",
            args: [viewsAndTexts.garageHobbies.view, viewsAndTexts.door.view],
          },
          {
            method: "animate.door",
            args: [],
          },
          {
            method: "animate.doubleCheck",
            args: [{ day: false }],
          },
        ],
      },
      {
        time: this.calculateRange(200),
        actions: [
          {
            method: "animate.dayAndNight",
            args: [],
          },
          {
            method: "camera.move",
            args: [viewsAndTexts.door.view, viewsAndTexts.general.view],
          },
          {
            method: "animate.doubleCheck",
            args: [{ door: true, walk: false, drive: false }],
          },
        ],
      },
      {
        time: this.calculateRange(200),
        actions: [
          {
            method: "camera.move",
            args: [viewsAndTexts.general.view, viewsAndTexts.walking.view],
          },
          {
            method: "animate.walk",
            args: [],
          },
          {
            method: "animate.doubleCheck",
            args: [{ day: true }],
          },
        ],
      },
      {
        time: this.calculateRange(200),
        actions: [
          {
            method: "animate.drive",
            args: [],
          },
          {
            method: "animate.doubleCheck",
            args: [{ door: true, walk: false }],
          },
        ],
      },
      {
        time: this.calculateRange(200),
        actions: [
          {
            method: "camera.zoom",
            args: [viewsAndTexts.walking.view, viewsAndTexts.woods.view],
          },
          {
            method: "animate.trees",
            args: [],
          },
          {
            method: "animate.write",
            args: [viewsAndTexts.woods.text[0]],
          },
          {
            method: "animate.doubleCheck",
            args: [{ door: true, walk: false, drive: true }],
          },
        ],
      },
      {
        time: this.calculateRange(200),
        actions: [
          {
            method: "camera.zoom",
            args: [viewsAndTexts.woods.view, viewsAndTexts.mountain.view],
          },
        ],
      },
      {
        time: this.calculateRange(200),
        actions: [
          {
            method: "animate.flag",
            args: [],
          },
          {
            method: "animate.write",
            args: [viewsAndTexts.mountain.text[0]],
          },
        ],
      },
      {
        time: this.calculateRange(50),
        actions: [
          {
            method: "animate.write",
            args: [viewsAndTexts.mountain.text[1]],
          },
          {
            method: "animate.doubleCheck",
            args: [
              {
                door: true,
                walk: false,
                drive: true,
                day: true,
                instruction: false,
                poker: false,
              },
            ],
          },
        ],
      },
    ];
  }
  calculateRange(amount = 0) {
    if (this.initialTime >= 0) {
      return {
        start: this.initialTime,
        end: (this.initialTime += amount),
      };
    } else {
      console.error("Start time is not >=0 !");
    }
  }
  play(time) {
    let period;
    const matchedRange = this.timeRanges.find((range) => {
      if (typeof range.time === "object") {
        period = range.time;
        return time >= range.time.start && time <= range.time.end;
      } else {
        return console.error("The type of range is not valid!");
      }
    });
    if (matchedRange) {
      matchedRange.actions.forEach((action) => {
        const [object, method] = action.method.split(".");
        const targetObject = object === "animate" ? this.animate : this.camera;
        targetObject[method](
          this.calculateSteps(time, period.start, period.end).step,
          this.calculateSteps(time, period.start, period.end).maxStep,
          ...action.args
        );
      });
    } else {
      // Handle default case
      // Animation.scrollup();
    }
  }
  calculateSteps(time, start, end) {
    return {
      step: Math.abs(time - start),
      maxStep: Math.abs(end - start),
    };
  }
}
export default Timeline;

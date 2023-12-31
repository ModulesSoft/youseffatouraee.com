function Timeline(time, viewsAndTexts, camera, animate) {
  const timeRanges = [
    {
      time: 0,
      actions: [
        { method: "camera.show", args: [viewsAndTexts.door.view] },
        { method: "animate.scrollInstruction", args: [] },
      ],
    },
    {
      time: 1,
      actions: [{ method: "animate.removeScrollInstruction", args: [] }],
    },
    {
      time: { start: 2, end: 5 },
      actions: [
        {
          method: "camera.zoom",
          args: [
            viewsAndTexts.door.view,
            viewsAndTexts.laptop.view,
            calculateSteps(time, 2, 5).step,
            calculateSteps(time, 2, 5).maxStep,
          ],
        },
      ],
    },
    {
      time: { start: 6, end: 15 },
      actions: [
        {
          method: "animate.face",
          args: [
            calculateSteps(time, 6, 15).step,
            calculateSteps(time, 6, 15).maxStep,
          ],
        },
        {
          method: "animate.type",
          args: [
            calculateSteps(time, 6, 15).step,
            calculateSteps(time, 6, 15).maxStep,
            viewsAndTexts.laptop.text[0],
          ],
        },
      ],
    },
    {
      time: 16,
      actions: [{ method: "animate.clear", args: [] }],
    },
    {
      time: { start: 17, end: 25 },
      actions: [
        {
          method: "animate.type",
          args: [
            calculateSteps(time, 17, 25).step,
            calculateSteps(time, 17, 25).maxStep,
            viewsAndTexts.laptop.text[1],
          ],
        },
      ],
    },
    {
      time: 26,
      actions: [
        {
          method: "animate.clear",
          args: [],
        },
      ],
    },
    {
      time: { start: 27, end: 40 },
      actions: [
        {
          method: "camera.zoom",
          args: [
            viewsAndTexts.laptop.view,
            viewsAndTexts.door.view,
            calculateSteps(time, 27, 40).step,
            calculateSteps(time, 27, 40).maxStep,
          ],
        },
      ],
    },
    {
      time: { start: 41, end: 50 },
      actions: [
        {
          method: "camera.zoom",
          args: [
            viewsAndTexts.door.view,
            viewsAndTexts.bachelor.view,
            calculateSteps(time, 41, 50).step,
            calculateSteps(time, 41, 50).maxStep,
          ],
        },
      ],
    },
    {
      time: { start: 51, end: 60 },
      actions: [
        {
          method: "animate.type",
          args: [
            calculateSteps(time, 51, 60).step,
            calculateSteps(time, 51, 60).maxStep,
            viewsAndTexts.bachelor.text[0],
          ],
        },
      ],
    },
    {
      time: 61,
      actions: [
        {
          method: "animate.clear",
          args: [],
        },
      ],
    },
    {
      time: { start: 62, end: 70 },
      actions: [
        {
          method: "animate.type",
          args: [
            calculateSteps(time, 62, 70).step,
            calculateSteps(time, 62, 70).maxStep,
            viewsAndTexts.certificate.text[0],
          ],
        },
        {
          method: "camera.move",
          args: [
            viewsAndTexts.bachelor.view,
            viewsAndTexts.certificate.view,
            calculateSteps(time, 62, 70).step,
            calculateSteps(time, 62, 70).maxStep,
          ],
        },
      ],
    },
    {
      time: 71,
      actions: [
        {
          method: "animate.clear",
          args: [],
        },
      ],
    },
    {
      time: { start: 72, end: 80 },
      actions: [
        {
          method: "camera.zoom",
          args: [
            viewsAndTexts.certificate.view,
            viewsAndTexts.door.view,
            calculateSteps(time, 70, 80).step,
            calculateSteps(time, 70, 80).maxStep,
          ],
        },
      ],
    },
    {
      time: { start: 81, end: 90 },
      actions: [
        {
          method: "camera.zoom",
          args: [
            viewsAndTexts.door.view,
            viewsAndTexts.skills.view,
            calculateSteps(time, 81, 90).step,
            calculateSteps(time, 81, 90).maxStep,
          ],
        },
      ],
    },
    {
      time: { start: 91, end: 100 },
      actions: [
        {
          method: "animate.type",
          args: [
            calculateSteps(time, 91, 100).step,
            calculateSteps(time, 91, 100).maxStep,
            viewsAndTexts.skills.text[0],
          ],
        },
      ],
    },
    {
      time: 101,
      actions: [
        {
          method: "animate.clear",
          args: [],
        },
      ],
    },
    {
      time: { start: 102, end: 110 },
      actions: [
        {
          method: "animate.type",
          args: [
            calculateSteps(time, 102, 110).step,
            calculateSteps(time, 102, 110).maxStep,
            viewsAndTexts.skills.text[1],
          ],
        },
      ],
    },
    {
      time: 111,
      actions: [
        {
          method: "animate.clear",
          args: [],
        },
      ],
    },
    {
      time: { start: 112, end: 120 },
      actions: [
        {
          method: "camera.zoom",
          args: [
            viewsAndTexts.skills.view,
            viewsAndTexts.door.view,
            calculateSteps(time, 112, 120).step,
            calculateSteps(time, 112, 120).maxStep,
          ],
        },
      ],
    },
    {
      time: { start: 121, end: 130 },
      actions: [
        {
          method: "camera.zoom",
          args: [
            viewsAndTexts.door.view,
            viewsAndTexts.garageHobbies.view,
            calculateSteps(time, 121, 130).step,
            calculateSteps(time, 121, 130).maxStep,
          ],
        },
      ],
    },
    {
      time: { start: 131, end: 140 },
      actions: [
        {
          method: "animate.type",
          args: [
            calculateSteps(time, 131, 140).step,
            calculateSteps(time, 131, 140).maxStep,
            viewsAndTexts.garageHobbies.text[0],
          ],
        },
      ],
    },
    {
      time: 141,
      actions: [
        {
          method: "animate.clear",
          args: [],
        },
      ],
    },
    {
      time: { start: 142, end: 150 },
      actions: [
        {
          method: "animate.type",
          args: [
            calculateSteps(time, 142, 150).step,
            calculateSteps(time, 142, 150).maxStep,
            viewsAndTexts.garageHobbies.text[1],
          ],
        },
      ],
    },
    {
      time: 151,
      actions: [
        {
          method: "animate.clear",
          args: [],
        },
      ],
    },
    {
      time: { start: 152, end: 160 },
      actions: [
        {
          method: "camera.zoom",
          args: [
            viewsAndTexts.garageHobbies.view,
            viewsAndTexts.general.view,
            calculateSteps(time, 152, 160).step,
            calculateSteps(time, 152, 160).maxStep,
          ],
        },
        {
          method: "animate.door",
          args: [
            calculateSteps(time, 152, 160).step,
            calculateSteps(time, 152, 160).maxStep,
          ],
        },
      ],
    },
    {
      time: { start: 161, end: 175 },
      actions: [
        {
          method: "animate.dayAndNight",
          args: [
            calculateSteps(time, 161, 175).step,
            calculateSteps(time, 161, 175).maxStep,
          ],
        },
      ],
    },
    {
      time: { start: 176, end: 185 },
      actions: [
        {
          method: "animate.walk",
          args: [
            calculateSteps(time, 176, 185).step,
            calculateSteps(time, 176, 185).maxStep,
          ],
        },
      ],
    },
    {
      time: { start: 186, end: 200 },
      actions: [
        {
          method: "animate.drive",
          args: [
            calculateSteps(time, 186, 200).step,
            calculateSteps(time, 186, 200).maxStep,
          ],
        },
      ],
    },
    {
      time: { start: 201, end: 210 },
      actions: [
        {
          method: "camera.zoom",
          args: [
            viewsAndTexts.general.view,
            viewsAndTexts.woods.view,
            calculateSteps(time, 201, 210).step,
            calculateSteps(time, 201, 210).maxStep,
          ],
        },
        {
          method: "animate.trees",
          args: [
            calculateSteps(time, 201, 210).step,
            calculateSteps(time, 201, 210).maxStep,
          ],
        },
        {
          method: "animate.type",
          args: [
            calculateSteps(time, 201, 210).step,
            calculateSteps(time, 201, 210).maxStep,
            viewsAndTexts.woods.text[0],
          ],
        },
      ],
    },
    {
      time: 211,
      actions: [
        {
          method: "animate.clear",
          args: [],
        },
      ],
    },
    {
      time: { start: 212, end: 220 },
      actions: [
        {
          method: "camera.zoom",
          args: [
            viewsAndTexts.woods.view,
            viewsAndTexts.general.view,
            calculateSteps(time, 212, 220).step,
            calculateSteps(time, 212, 220).maxStep,
          ],
        },
      ],
    },
    {
      time: { start: 221, end: 230 },
      actions: [
        {
          method: "camera.zoom",
          args: [
            viewsAndTexts.general.view,
            viewsAndTexts.mountain.view,
            calculateSteps(time, 221, 230).step,
            calculateSteps(time, 221, 230).maxStep,
          ],
        },
      ],
    },
    {
      time: { start: 231, end: 240 },
      actions: [
        {
          method: "animate.flag",
          args: [
            calculateSteps(time, 231, 240).step,
            calculateSteps(time, 231, 240).maxStep,
          ],
        },
      ],
    },
    {
      time: { start: 241, end: 249 },
      actions: [
        {
          method: "animate.type",
          args: [
            calculateSteps(time, 241, 249).step,
            calculateSteps(time, 241, 249).maxStep,
            viewsAndTexts.mountain.text[0],
          ],
        },
      ],
    },
    {
      time: 250,
      actions: [{ method: "animate.clear", args: [] }],
    },
    {
      // Default case
      time: "default",
      actions: [
        // { method: 'Animation.scrollup', args: [] },
      ],
    },
  ];
  executeActions(time);

  function executeActions(time) {
    const matchedRange = timeRanges.find((range) => {
      if (typeof range.time === "number") {
        return time === range.time;
      } else if (typeof range.time === "object") {
        return time >= range.time.start && time <= range.time.end;
      } else {
        return false;
      }
    });

    if (matchedRange) {
      matchedRange.actions.forEach((action) => {
        const [object, method] = action.method.split(".");
        const targetObject = object === "animate" ? animate : camera; // Assuming animate and camera are available globally
        targetObject[method](...action.args);
      });
    } else {
      // Handle default case
      // Animation.scrollup();
    }
  }
}
function calculateSteps(time, start, end) {
  return {
    step: time - start,
    maxStep: end - start,
  };
}
export default Timeline;

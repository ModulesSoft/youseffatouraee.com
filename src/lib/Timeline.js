function Timeline(time, viewsAndTexts, camera, animate) {
  if (time === 0) {
    camera.show(viewsAndTexts.door.view);
    animate.scrollInstruction();
  } else if (time === 1) {
    animate.removeScrollInstruction();
  } else if (time >= 2 && time <= 5) {
    camera.zoom(
      viewsAndTexts.door.view,
      viewsAndTexts.laptop.view,
      calculateSteps(time, 2, 5).step,
      calculateSteps(time, 2, 5).maxStep
    );
  } else if (time >= 6 && time <= 15) {
    animate.face(
      calculateSteps(time, 6, 15).step,
      calculateSteps(time, 6, 15).maxStep
    );
    animate.type(
      calculateSteps(time, 6, 15).step,
      calculateSteps(time, 6, 15).maxStep,
      viewsAndTexts.laptop.text[0]
    );
  } else if (time === 16) {
    animate.clear();
  } else if (time >= 17 && time <= 25) {
    animate.type(
      calculateSteps(time, 17, 25).step,
      calculateSteps(time, 17, 25).maxStep,
      viewsAndTexts.laptop.text[1]
    );
  } else if (time === 26) {
    animate.clear();
  } else if (time >= 27 && time <= 40) {
    camera.zoom(
      viewsAndTexts.laptop.view,
      viewsAndTexts.door.view,
      calculateSteps(time, 27, 40).step,
      calculateSteps(time, 27, 40).maxStep
    );
  } else if (time >= 41 && time <= 50) {
    camera.zoom(
      viewsAndTexts.door.view,
      viewsAndTexts.bachelor.view,
      calculateSteps(time, 41, 50).step,
      calculateSteps(time, 41, 50).maxStep
    );
  } else if (time >= 51 && time <= 60) {
    animate.type(
      calculateSteps(time, 51, 60).step,
      calculateSteps(time, 51, 60).maxStep,
      viewsAndTexts.bachelor.text[0]
    );
  } else if (time === 61) {
    animate.clear();
  } else if (time >= 62 && time <= 70) {
    animate.type(
      calculateSteps(time, 62, 70).step,
      calculateSteps(time, 62, 70).maxStep,
      viewsAndTexts.certificate.text[0]
    );
    camera.move(
      viewsAndTexts.bachelor.view,
      viewsAndTexts.certificate.view,
      calculateSteps(time, 62, 70).step,
      calculateSteps(time, 62, 70).maxStep
    );
  } else if (time === 71) {
    animate.clear();
  } else if (time >= 72 && time <= 80) {
    camera.zoom(
      viewsAndTexts.certificate.view,
      viewsAndTexts.door.view,
      calculateSteps(time, 70, 80).step,
      calculateSteps(time, 70, 80).maxStep
    );
  } else if (time >= 81 && time <= 90) {
    camera.zoom(
      viewsAndTexts.door.view,
      viewsAndTexts.skills.view,
      calculateSteps(time, 81, 90).step,
      calculateSteps(time, 81, 90).maxStep
    );
  } else if (time >= 91 && time <= 100) {
    animate.type(
      calculateSteps(time, 91, 100).step,
      calculateSteps(time, 91, 100).maxStep,
      viewsAndTexts.skills.text[0]
    );
  } else if (time === 101) {
    animate.clear();
  } else if (time >= 102 && time <= 110) {
    animate.type(
      calculateSteps(time, 102, 110).step,
      calculateSteps(time, 102, 110).maxStep,
      viewsAndTexts.skills.text[1]
    );
  } else if (time === 111) {
    animate.clear();
  } else if (time >= 112 && time <= 120) {
    camera.zoom(
      viewsAndTexts.skills.view,
      viewsAndTexts.door.view,
      calculateSteps(time, 112, 120).step,
      calculateSteps(time, 112, 120).maxStep
    );
  } else if (time >= 121 && time <= 130) {
    camera.zoom(
      viewsAndTexts.door.view,
      viewsAndTexts.garageHobbies.view,
      calculateSteps(time, 121, 130).step,
      calculateSteps(time, 121, 130).maxStep
    );
  } else if (time >= 131 && time <= 140) {
    animate.type(
      calculateSteps(time, 131, 140).step,
      calculateSteps(time, 131, 140).maxStep,
      viewsAndTexts.garageHobbies.text[0]
    );
  } else if (time === 141) {
    animate.clear();
  } else if (time >= 142 && time <= 150) {
    animate.type(
      calculateSteps(time, 142, 150).step,
      calculateSteps(time, 142, 150).maxStep,
      viewsAndTexts.garageHobbies.text[1]
    );
  } else if (time === 151) {
    animate.clear();
  } else if (time >= 152 && time <= 160) {
    camera.zoom(
      viewsAndTexts.garageHobbies.view,
      viewsAndTexts.general.view,
      calculateSteps(time, 152, 160).step,
      calculateSteps(time, 152, 160).maxStep
    );
    animate.door(
      calculateSteps(time, 152, 160).step,
      calculateSteps(time, 152, 160).maxStep
    );
  } else if (time >= 161 && time <= 175) {
    animate.dayAndNight(
      calculateSteps(time, 161, 175).step,
      calculateSteps(time, 161, 175).maxStep
    );
  } else if (time >= 176 && time <= 185) {
    animate.walk(
      calculateSteps(time, 176, 185).step,
      calculateSteps(time, 176, 185).maxStep
    );
  } else if (time >= 186 && time <= 200) {
    animate.drive(
      calculateSteps(time, 186, 200).step,
      calculateSteps(time, 186, 200).maxStep
    );
  } else if (time >= 201 && time <= 210) {
    camera.zoom(
      viewsAndTexts.general.view,
      viewsAndTexts.woods.view,
      calculateSteps(time, 201, 210).step,
      calculateSteps(time, 201, 210).maxStep
    );
    animate.trees(
      calculateSteps(time, 201, 210).step,
      calculateSteps(time, 201, 210).maxStep
    );
    animate.type(
      calculateSteps(time, 201, 210).step,
      calculateSteps(time, 201, 210).maxStep,
      viewsAndTexts.woods.text[0]
    );
  } else if (time === 211) {
    animate.clear();
  } else if (time >= 212 && time <= 220) {
    camera.zoom(
      viewsAndTexts.woods.view,
      viewsAndTexts.general.view,
      calculateSteps(time, 212, 220).step,
      calculateSteps(time, 212, 220).maxStep
    );
  } else if (time >= 221 && time <= 230) {
    camera.zoom(
      viewsAndTexts.general.view,
      viewsAndTexts.mountain.view,
      calculateSteps(time, 221, 230).step,
      calculateSteps(time, 221, 230).maxStep
    );
  } else if (time >= 231 && time <= 240) {
    animate.flag(
      calculateSteps(time, 231, 240).step,
      calculateSteps(time, 231, 240).maxStep
    );
  } else if (time >= 241 && time <= 249) {
    animate.type(
      calculateSteps(time, 241, 249).step,
      calculateSteps(time, 241, 249).maxStep,
      viewsAndTexts.mountain.text[0]
    );
  } else if (time === 250) {
    animate.clear();
  } else {
    //   Animation.scrollup();
  }
}
function calculateSteps(time, start, end) {
  return {
    step: time - start,
    maxStep: end - start,
  };
}
export default Timeline;

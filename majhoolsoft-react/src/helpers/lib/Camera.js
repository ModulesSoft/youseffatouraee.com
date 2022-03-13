import anime from "animejs";
function Camera(target, viewArray, scroll, finishedCallback = () => {}) {
  let from = viewArray[0];
  let to = viewArray[1];
  let sub = viewArray[2];
  let currentView = [];
  for (let i = 0; i < to.length; i++) {
    currentView.push(scroll * sub[i] + from[i]);
  }
  if (areClose(currentView, to, 10)) {
    let currentViewString = arrayToString(to);
    // console.log(currentView + " is close to " + to);
    View(target, currentViewString, "linear");
    finishedCallback();
  } else {
    let currentViewString = arrayToString(currentView);
    View(target, currentViewString, "linear");
  }
  function areClose(par1, par2, accuracy) {
    let closeArray = [];
    //check x and y of view port to be close
    for (let i = 0; i < 2; i++) {
      if (par1[i] + accuracy >= par2[i] && par1[i] - accuracy <= par2[i]) {
        closeArray.push(true);
      } else {
        closeArray.push(false);
      }
    }
    return closeArray.filter((t) => t === true).length === 2;
  }
  function arrayToString(array) {
    let result = "";
    array.forEach((element) => {
      result += " " + element;
    });
    return result;
  }
}
function View(target, view, easing = "") {
  anime({
    targets: target,
    viewBox: view,
    easing: easing ? easing : "linear",
  });
}
export default Camera;
export { Camera, View };

function Camera(target, viewArray, scroll, finishedCallback) {
  let from = viewArray[0];
  let to = viewArray[1];
  let sub = viewArray[2];
  let currentView = [];
  for (let i = 0; i < 4; i++) {
    currentView.push(scroll * sub[i] + from[i]);
  }
  if (currentView === to) {
    finishedCallback();
  } else {
    return currentView;
  }
}
export default Camera;

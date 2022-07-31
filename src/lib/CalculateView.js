function calculateView(state, scrollDir, scrollStage, limitedScroll) {
  if (!state[state.length - 1] || !state[state.length - 2]) return false;
  let from = stringToArray(state[state.length - 2].view);
  let to = stringToArray(state[state.length - 1].view);
  if (scrollDir !== "down") {
    [from, to] = [to, from];
  }
  if (from.length !== to.length) {
    console.error("Arrays don't match!");
    return false;
  }
  let currentView = [];
  for (let i = 0; i < from.length; i++) {
    let sub = (to[i] - from[i]) / scrollStage;
    currentView.push(limitedScroll * sub + from[i]);
  }
  for (let i = 0; i < from.length; i++) {
    if (
      isNaN(from[i]) ||
      isNaN(to[i]) ||
      isNaN(currentView[i]) ||
      currentView[i] < 0 ||
      to[i] < 0 ||
      from[i] < 0
    ) {
      console.error("Arrays don't have valid values!");
      return false;
    }
  }
  return arrayToString(currentView);
}

export function areClose(par1, par2, accuracy) {
  let arg1 = stringToArray(par1);
  let arg2 = stringToArray(par2);
  let closeArray = [];
  //check x and y of view port to be close
  for (let i = 0; i < 2; i++) {
    if (arg1[i] + accuracy >= arg2[i] && arg1[i] - accuracy <= arg2[i]) {
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
    result += element + " ";
  });
  result = result.trim();
  return result;
}
function stringToArray(string) {
  if (string) {
    return string.split(" ").map(Number);
  }
}
export default calculateView;

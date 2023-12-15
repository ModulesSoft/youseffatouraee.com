export function day(pageClass, cloudsId, sunId, step, maxStep) {
  const slideStep = step / maxStep;
  const sunPosition = -650 * slideStep;
  const cloudsPosition = -300 * slideStep;
  const red = 135 * slideStep;
  const green = 206 * slideStep;
  const blue = 238 * slideStep;
  // sun sets
  document.querySelector(
    sunId
  ).style.transform = `translateY(${sunPosition}px)`;
  // clouds come up
  document.querySelector(
    cloudsId
  ).style.transform = `translateY(${cloudsPosition}px)`;
  // sky color changes - desired blue: #87CEEE
  document.querySelector(
    pageClass
  ).style = `background-color:rgb(${red}, ${green}, ${blue})`;
}
export function night(pageId, step, maxStep) {
  document.querySelector(pageId).style.filter = `brightness(${step / maxStep})`;
}

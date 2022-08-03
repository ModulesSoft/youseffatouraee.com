import anime from "animejs";
export function day(pageClass, darknessId, cloudsId, sunId, scroll) {
  let intScroll = Number.parseInt(scroll);
  let sunPosition = -65 * intScroll + "px";
  let cloudsPosition = -30 * intScroll + "px";
  let darknessOpacity = 1 - intScroll / 10;
  let redAmount = 13.5 * intScroll;
  let greenAmount = 20.6 * intScroll;
  let blueAmount = 23.8 * intScroll;

  // sun sets
  anime({
    targets: sunId,
    translateY: sunPosition,
    easing: "easeOutQuad",
  });
  // clouds come up
  anime({
    targets: cloudsId,
    duration: 1000,
    translateY: cloudsPosition,
    delay: 1000,
  });
  // darkness fades away
  anime({
    targets: darknessId,
    opacity: darknessOpacity,
  });
  // sky color changes - desired blue: #87CEEE
  anime({
    targets: pageClass,
    backgroundColor: `rgb(${redAmount}, ${greenAmount}, ${blueAmount})`,
    easing: "linear",
  });
  if (darknessOpacity < 0.1) {
    if (document.querySelector(darknessId)) {
      document.querySelector(darknessId).style.visibility = "hidden";
    }
  } else {
    night(darknessId);
  }
}
export function night(darknessId) {
  if (document.querySelector(darknessId))
    document.querySelector(darknessId).style.visibility = "";
  // anime({
  //   targets: darknessId,
  //   duration: 0,
  //   opacity: 1,
  //   easing: "easeOutQuad",
  //   delay: 0,
  // }).finished.then(() => anime.remove(darknessId));
}

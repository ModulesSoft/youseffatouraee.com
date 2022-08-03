import anime from "animejs";
export function poker(pokerFaceId, scroll) {
  anime({
    targets: pokerFaceId,
    easing: "easeOutQuad",
    translateY: -1 * scroll,
  }).finished.then(() => anime.remove(pokerFaceId));
}
export function smile(smileFaceId, scroll) {
  anime({
    targets: smileFaceId,
    easing: "easeOutQuad",
    translateX: 2 * scroll,
    translateY: (-1 / 2) * scroll,
    rotate: 5 * scroll + "deg",
  }).finished.then(() => anime.remove(smileFaceId));
}

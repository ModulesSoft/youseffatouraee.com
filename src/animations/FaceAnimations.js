export function poker(pokerFaceId, step) {
  document.querySelector(pokerFaceId).style.transform = `translateY(${step}px)`;
}
export function smile(smileFaceId, step) {
  document.querySelector(smileFaceId).style.transform = `translate(${
    2 * step
  }px, ${(-1 / 2) * step}px) rotate(${5 * step}deg)`;
}

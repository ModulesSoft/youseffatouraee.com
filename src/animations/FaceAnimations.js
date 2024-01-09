export function poker(pokerFaceId, step, maxStep) {
  document.querySelector(pokerFaceId).style.transform = `translateY(${
    (step / maxStep) * 30
  }px)`;
}
export function smile(smileFaceId, step, maxStep) {
  document.querySelector(smileFaceId).style.transform = `translate(${
    (step / maxStep) * 20
  }px, ${(step / maxStep) * -4}px) rotate(${(step / maxStep) * 45}deg)`;
}

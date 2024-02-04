export function poker(pokerFaceId, step, maxStep) {
  const distance = 30;
  document.querySelector(pokerFaceId).style.transform = `translateY(${
    (step / maxStep) * distance
  }px)`;
}
export function smile(smileFaceId, step, maxStep) {
  const distance = 20;
  document.querySelector(smileFaceId).style.transform = `translate(${
    (step / maxStep) * distance
  }px, ${(step / maxStep) * -4}px) rotate(${(step / maxStep) * 45}deg)`;
}

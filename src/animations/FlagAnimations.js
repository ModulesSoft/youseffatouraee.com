function FlagAnimations(flagId, step, maxStep) {
  const distance = -18;
  document.querySelector(flagId).style.transform = `translateY(${
    (step / maxStep) * distance
  }px)`;
}
export default FlagAnimations;

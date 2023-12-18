function FlagAnimations(flagId, step, maxStep) {
  document.querySelector(flagId).style.transform = `translateY(${
    (step / maxStep) * 450
  }px)`;
}
export default FlagAnimations;

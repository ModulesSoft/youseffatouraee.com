function FlagAnimations(flagId, step, maxStep) {
  document.querySelector(flagId).style.transform = `translateY(${
    (step / maxStep) * -18
  }px)`;
}
export default FlagAnimations;

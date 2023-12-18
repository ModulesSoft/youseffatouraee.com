function TreeAnimations(treeOneId, treeTwoId, step, maxStep) {
  document.querySelector(treeOneId).style.transform = `translateX(${
    (step / maxStep) * 10
  }px)`;
  document.querySelector(treeTwoId).style.transform = `translateX(${
    (step / maxStep) * -10
  }px)`;
}
export default TreeAnimations;

function TreeAnimations(treeOneId, treeTwoId, step, maxStep) {
  const distanceOne = 20;
  const distanceTwo = -20;
  document.querySelector(treeOneId).style.transform = `translateX(${
    (step / maxStep) * distanceOne
  }px)`;
  document.querySelector(treeTwoId).style.transform = `translateX(${
    (step / maxStep) * distanceTwo
  }px)`;
}
export default TreeAnimations;

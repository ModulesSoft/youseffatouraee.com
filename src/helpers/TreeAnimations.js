import anime from "animejs";
function TreeAnimations(treeOneId, treeTwoId, finishedCallback = () => {}) {
  anime({
    targets: treeOneId,
    transformOrigin: "125px 250px 0",
    rotate: ["10deg", "0deg"],
    easing: "spring(1, 80, 10, 0)",
    duration: 10000,
  }).finished.then(() => anime.remove(treeOneId));
  anime({
    targets: treeTwoId,
    transformOrigin: "425px 250px 0",
    rotate: ["10deg", "0deg"],
    easing: "spring(1, 80, 10, 0)",
    duration: 10000,
  }).finished.then(() => anime.remove(treeTwoId));
}
export default TreeAnimations;

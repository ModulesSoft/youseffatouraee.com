import anime from "animejs";
function TreeAnimations(treeOneId, treeTwoId, scroll) {
  anime({
    targets: treeOneId,
    duration: 0,
    transformOrigin: "0 0 0",
    translateX: 10 * scroll + "px",
  });
  anime({
    targets: treeTwoId,
    duration: 0,
    transformOrigin: "0 0 0",
    translateX: -10 * scroll + "px",
  });
}
export default TreeAnimations;

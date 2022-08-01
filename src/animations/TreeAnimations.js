import anime from "animejs";
function TreeAnimations(treeOneId, treeTwoId, scroll) {
  anime({
    targets: treeOneId,
    duration: 0,
    transformOrigin: "0 0 0",
    translateX: scroll + "px",
  }).finished.then(() => {
    anime.remove(treeOneId);
  });
  anime({
    targets: treeTwoId,
    duration: 0,
    transformOrigin: "0 0 0",
    translateX: -1 * scroll + "px",
  }).finished.then(() => {
    anime.remove(treeTwoId);
  });
}
export default TreeAnimations;

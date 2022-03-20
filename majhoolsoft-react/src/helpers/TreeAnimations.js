import anime from "animejs";
function TreeAnimations(finishedCallback) {
  anime({
    targets: "#treeOne",
    transformOrigin: "125px 250px 0",
    rotate: ["10deg", "0deg"],
    easing: "spring(1, 80, 10, 0)",
    duration: 10000,
  });
  anime({
    targets: "#treeTwo",
    transformOrigin: "425px 250px 0",
    rotate: ["10deg", "0deg"],
    easing: "spring(1, 80, 10, 0)",
    duration: 10000,
  });
}
export default TreeAnimations;

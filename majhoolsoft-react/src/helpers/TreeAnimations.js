import anime from "animejs";
function TreeAnimations(finishedCallback) {
  console.log("tree");
  anime({
    targets: "#treeOne",
    duration: 10000,
    transformOrigin: "125px 250px 0",
    rotate: ["10deg", "0deg"],
    easing: "spring(1, 80, 10, 0)",
  });
  anime({
    targets: "#treeTwo",
    duration: 10000,
    transformOrigin: "425px 250px 0",
    rotate: ["10deg", "0deg"],
    easing: "spring(1, 80, 10, 0)",
  });
}
export default TreeAnimations;

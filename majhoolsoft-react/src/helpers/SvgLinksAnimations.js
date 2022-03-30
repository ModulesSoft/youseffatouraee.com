import anime from "animejs";
function SvgLinksAnimations(id) {
  anime({
    targets: id,
    strokeWidth: [0.1, 0, 0.1],
    duration: 100,
    direction: "reverse",
  });
}
export default SvgLinksAnimations;

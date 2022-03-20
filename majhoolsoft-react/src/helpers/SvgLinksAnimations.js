import anime from "animejs";
function SvgLinksAnimations(id) {
  console.log("SvgLinksAnimations");
  anime({
    targets: id,
    strokeWidth: [0.1, 0, 0.1],
    duration: 2000,
    direction: "reverse",
    loop: true,
  });
}
export default SvgLinksAnimations;

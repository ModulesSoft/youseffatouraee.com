import anime from "animejs";
function FlagAnimations(flagId, scroll) {
  let translateAmount = parseInt(scroll) * 50;
  anime({
    targets: flagId,
    translateY: translateAmount + "px",
    opacity: 1,
  });
}
export default FlagAnimations;

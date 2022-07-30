function Camera(target, view) {
  // anim.add({
  //   targets: target,
  //   viewBox: view,
  //   duration: 0,
  //   easing: easing ? easing : "linear",
  // });
  target.current?.setAttribute("viewBox", view);
}
export default Camera;

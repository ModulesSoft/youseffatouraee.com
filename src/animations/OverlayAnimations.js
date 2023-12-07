export function removeAnimationAndHide(...overlays) {
  overlays.forEach((overlay) => {
    if (document.querySelector(overlay)) {
      document.querySelector(overlay).style.visibility = "hidden";
    }
  });
}
export function addAnimationAndShow(...overlays) {
  overlays.forEach((overlay) => {
    if (document.querySelector(overlay)) {
      document.querySelector(overlay).style.visibility = "show";
      document.querySelector(overlay).style.opacity = 1;
    }
  });
}

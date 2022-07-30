var lastScrl = 0;
export const GetScroll = (scroll, scrollDir, sceneNumber, scrollStage) => {
  // scroll event listener
  window.addEventListener(
    "scroll",
    () => {
      let scrl =
        (window.pageYOffset || document.documentElement.scrollTop) / 50;
      scroll(Number.parseFloat(scrl).toFixed(2));
      sceneNumber(Math.floor(scrl / scrollStage));
      if (scrl > lastScrl) {
        scrollDir("down");
      } else {
        scrollDir("up");
      }
      lastScrl = scrl;
    },
    false
  );
};

export default GetScroll;

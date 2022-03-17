export const GetScroll = (scroll, sceneNumber, scrollStage) => {
  // scroll event listener
  window.addEventListener(
    "scroll",
    () => {
      let scrl =
        (window.pageYOffset || document.documentElement.scrollTop) / 50;
      scroll(scrl);
      sceneNumber(Math.floor(scrl / scrollStage));
    },
    false
  );
};

export default GetScroll;

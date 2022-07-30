import { useEffect } from "react";
import Play from "./Play";
import scrollToTop from "./helpers/lib/ScrollToTop";
export const Render = (pageRef, mobile, width, height, texts) => {
  const scrollStage = 10;
  var lastScrl = 0; // to detect scroll direction changes
  const getScroll = () => {
    let scrl = (window.pageYOffset || document.documentElement.scrollTop) / 50;
    let scroll = Number.parseFloat(scrl).toFixed(2);
    let scene = Math.floor(scrl / scrollStage);
    let scrollDir = scrl > lastScrl ? "down" : "up";
    Play(
      pageRef,
      scroll,
      scrollDir,
      scrollStage,
      scene,
      mobile,
      width,
      height,
      texts
    );
    lastScrl = scrl;
  };
  useEffect(() => {
    // when component did mount:
    scrollToTop();
    if (document.getElementById("darkness"))
      document.getElementById("darkness").style.visibility = "hidden";

    window.addEventListener("scroll", getScroll, { passive: true });
    // clean up code
    return () => {
      window.removeEventListener("scroll", getScroll);
    };
  }, []);
};
export default Render;

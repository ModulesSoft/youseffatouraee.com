import { useEffect } from "react";
import Play from "../Play";
import scrollToTop from "./ScrollToTop";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import viewsAndTexts from "./ViewsAndTexts";
export const useRender = (pageRef, isMobile, width, height, texts) => {
  const scrollSteps = 50; // the number to devide scroll by
  const scrollWait = 25; // for performance (should be less than scrollSteps)
  const scrollStage = 10; // the number of scrolls for each scene
  const library = viewsAndTexts(isMobile, width, height, texts); // view points data
  useEffect(() => {
    // lights, camera...
    scrollToTop();
    Play(pageRef, 0, "down", scrollStage, 0, isMobile, library);
    // if (document.getElementById("darkness"))
    //   document.getElementById("darkness").style.visibility = "hidden";
  }, []);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const scrollDir = currPos.y < prevPos.y ? "down" : "up";
      const scrl = Math.abs(currPos.y) / scrollSteps;
      const scroll = Number.parseFloat(scrl).toFixed(2);
      const scene = Math.floor(scrl / scrollStage);
      // action
      Play(pageRef, scroll, scrollDir, scrollStage, scene, isMobile, library);
    },
    undefined,
    undefined,
    undefined,
    scrollWait
  );
};
export default useRender;

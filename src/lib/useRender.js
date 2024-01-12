import ViewsAndTexts from "./ViewsAndTexts";
import Timeline from "./Timeline";
import Camera from "./Camera";
import { useEffect } from "react";
import Animate from "./Animate";
export const useRender = (pageRef, isMobile, width, height, texts) => {
  const viewsAndTexts = ViewsAndTexts(isMobile, width, height, texts);
  const camera = new Camera(pageRef);
  const animate = new Animate(isMobile);
  const timeline = new Timeline(viewsAndTexts, camera, animate);
  const handleScroll = () => {
    // Update the scrollY state when the user scrolls
    requestAnimationFrame(() => timeline.play(window.scrollY));
  };
  useEffect(() => {
    // Init the page
    timeline.play(0);
    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
export default useRender;

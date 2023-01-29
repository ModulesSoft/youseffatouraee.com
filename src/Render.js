import { useEffect } from "react";
import Play from "./Play";
import scrollToTop from "./lib/ScrollToTop";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
export const Render = (pageRef, isMobile, width, height, texts) => {
  // stage scroll steps
  const scrollSteps = 50; // the number to devide scroll by
  const scrollWait = 40; // for performance (should be less than scrollSteps)
  const scrollStage = 10; // the number of scrolls for each scence
  // view points data
  let library = {
    begin: {
      view: "540 880 120 120",
    },
    end: { view: "0 0 0 0" },
    general: {
      view: isMobile
        ? `600 ${1080 - height} ${width} ${height}`
        : "0 0 1920 1080",
    },
    walking: {
      view: isMobile ? "1300 0 620 1080" : "300 0 1620 1080",
    },
    door: {
      view: isMobile
        ? `262 ${1080 - height} ${width} ${height}`
        : "262 800 400 240",
      textPosition: { x: 0, y: height, width: 0 },
    },
    laptop: {
      view: "590 920 60 60",
      textPosition: isMobile
        ? { x: 16, y: 16, width: `${width - 16}` }
        : { x: 16, y: 16, width: `${width - 16}` },
    },
    notebookOne: {
      view: "550 952 60 35",
      textPosition: isMobile
        ? { x: 16, y: 16, width: `${width - 16}` }
        : { x: 16, y: 16, width: `${width - 16}` },
    },
    notebookTwo: {
      view: isMobile ? "510 952 60 35" : "480 952 60 35",
      textPosition: isMobile
        ? { x: 16, y: 16, width: `${width - 16}` }
        : { x: 16, y: 16, width: `${width - 16}` },
    },
    degree: {
      view: isMobile ? "550 890 60 45" : "550 890 60 35",
      textPosition: isMobile
        ? { x: 16, y: 16, width: `${width - 16}` }
        : { x: 16, y: 16, width: `${width - 16}` },
    },
    os: {
      view: isMobile ? "514 890 60 45" : "502 890 60 35",
      textPosition: isMobile
        ? { x: 16, y: 16, width: `${width - 16}` }
        : { x: 16, y: 16, width: `${width - 16}` },
    },
    firstRowEnd: {
      view: isMobile ? "492 890 60 45" : "462 890 60 35",
    },
    frontEndOne: {
      view: isMobile ? "492 920 60 45" : "462 920 60 35",
      textPosition: isMobile
        ? { x: 16, y: 16, width: `${width - 16}` }
        : { x: 16, y: 16, width: `${width - 16}` },
    },
    frontEndTwo: {
      view: isMobile ? "519 920 60 45" : "492 920 60 35",
      textPosition: { x: 16, y: 16, width: `${width - 16}` },
    },
    backEndOne: {
      view: isMobile ? "550 920 60 45" : "540 920 60 35",
      textPosition: { x: 16, y: 16, width: `${width - 16}` },
    },
    microphone: {
      view: isMobile ? "392 900 100 62" : "392 900 100 62",
      textPosition: isMobile
        ? { x: 16, y: 16, width: `${width - 16}` }
        : { x: 16, y: 16, width: `${width - 16}` },
    },
    motorcycle: {
      view: isMobile ? "272 850 390 220" : "262 850 200 180",
      textPosition: { x: 16, y: 16, width: `${width - 16}` },
    },
    garden: {
      view: isMobile ? "1400 600 600 420" : "1258 600 600 420",
      textPosition: { x: 16, y: 16, width: `${width - 16}` },
    },
    mountain: {
      view: "970 100 600 420",
      textPosition: { x: 16, y: 16, width: `${width - 16}` },
    },
  };
  // add texts to library
  Object.keys(library).forEach(function (k) {
    library = {
      ...library,
      ...{
        [k]: {
          text: texts?.[k],
          textPosition: library[k]["textPosition"],
          view: library[k]["view"],
        },
      },
    };
  });
  console.log("comes");
  useEffect(() => {
    // when component did mount:
    scrollToTop();
    // initial call
    Play(pageRef, 0, "down", scrollStage, 0, isMobile, library);
    // if (document.getElementById("darkness"))
    //   document.getElementById("darkness").style.visibility = "hidden";
  }, []);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const scrollDir = currPos.y < prevPos.y ? "down" : "up";
      const scrl = Math.abs(currPos.y) / scrollSteps;
      const scroll = Number.parseFloat(scrl).toFixed(1);
      const scene = Math.floor(scrl / scrollStage);
      Play(pageRef, scroll, scrollDir, scrollStage, scene, isMobile, library);
    },
    undefined,
    undefined,
    undefined,
    scrollWait
  );
};
export default Render;

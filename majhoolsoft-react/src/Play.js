import scrollIconHandler from "./helpers/lib/scrollIconHandler";
import Typewriter from "./helpers/lib/Typewriter";
import Camera from "./helpers/lib/Camera";
import IntroTextAnimations from "./helpers/IntroTextAnimations";
import WalkingAnimations from "./helpers/WalkingAnimations";
import CarAnimations from "./helpers/CarAnimations";
import FaceAnimations from "./helpers/FaceAnimations";
import TreeAnimations from "./helpers/TreeAnimations";
import FlagAnimations from "./helpers/FlagAnimations";
import BackgroundAnimations from "./helpers/BackgroundAnimations";
var closeToViewAccuracy = 5;
var state = [];
var currentView = null;
var enteredOnce = false;
// link animations begin
// SvgLinksAnimations("#motorcycle");
// SvgLinksAnimations("#microphone");
// SvgLinksAnimations("#aut");
// SvgLinksAnimations("#treeOne");
// SvgLinksAnimations("#treeTwo");
function Play(
  scroll = 0,
  scrollDir = "down",
  scrollStage = 20,
  sceneNumber = 0,
  isMobile,
  width,
  height,
  texts
) {
  if (isMobile === undefined || isMobile === null)
    return console.error("Undefined parameters may cause problems!");
  var library = {
    begin: {
      view: "590 800 5 5",
    },
    end: { view: "0 0 0 0" },
    general: {
      view: "0 0 1920 1080",
    },
    walking: {
      view: isMobile ? "800 0 1120 1080" : "300 0 1620 1080",
    },
    door: {
      view: isMobile
        ? `262 ${1080 - height} ${width} ${height}`
        : "262 800 400 240",
      textPosition: { x: 0, y: height, width: 0 },
    },
    laptopAlone: {
      view: "590 920 60 61",
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
        ? { x: 16, y: `${(50 / 100) * height}`, width: `${width - 16}` }
        : { x: 16, y: `${(50 / 100) * height}`, width: `${width - 16}` },
    },
    degree: {
      view: isMobile ? "550 890 60 45" : "550 890 60 35",
      textPosition: isMobile
        ? { x: 16, y: 16, width: `${width - 16}` }
        : {
            x: `${(50 / 100) * width}`,
            y: `${(50 / 100) * height}`,
            width: `${(50 / 100) * width}`,
          },
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
        : { x: 16, y: `${(50 / 100) * height}`, width: `${(1 / 2) * width}` },
    },
    frontEndTwo: {
      view: isMobile ? "519 920 60 45" : "492 920 60 35",
      textPosition: { x: 16, y: 16, width: `${width - 16}` },
    },
    backEndOneAlone: {
      view: isMobile ? "550 920 60 46" : "522 920 60 36",
    },
    backEndOne: {
      view: isMobile ? "550 920 60 45" : "522 920 60 35",
      textPosition: { x: 16, y: 16, width: `${width - 16}` },
    },
    microphone: {
      view: isMobile ? "392 900 100 62" : "392 900 100 62",
      textPosition: isMobile
        ? {
            x: 16,
            y: 16,
            width: `${width - 16}`,
          }
        : {
            x: `${(50 / 100) * width}`,
            y: `${(50 / 100) * height}`,
            width: `${(50 / 100) * width}`,
          },
    },
    motorcycle: {
      view: isMobile ? "272 850 390 220" : "262 850 200 180",
      textPosition: isMobile
        ? {
            x: 16,
            y: 16,
            width: `${width - 16}`,
          }
        : {
            x: `${(50 / 100) * width}`,
            y: `${(50 / 100) * height}`,
            width: `${(50 / 100) * width}`,
          },
    },
    garden: {
      view: isMobile ? "1258 600 600 420" : "1258 600 600 420",
      textPosition: {
        x: 16,
        y: 16,
        width: `${width - 16}`,
      },
    },
    mountain: {
      view: isMobile ? "1000 220 600 420" : "888 150 600 420",
      textPosition: {
        x: 16,
        y: 16,
        width: `${width - 16}`,
      },
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
  let limitedScroll = scroll - sceneNumber * scrollStage;
  switch (sceneNumber) {
    case 0:
      IntroTextAnimations().introScene();
      if (scrollDir === "down") {
        scrollIconHandler(
          ".scroll",
          ".scrollIcon",
          ".scrollResume",
          scroll,
          scrollStage,
          0,
          sceneNumber,
          scrollStage / 2,
          () => {
            state.push(library.laptopAlone);
          },
          () => {
            state.push(library.laptop);
            animate("FirstFace");
          }
        );
      } else {
        state.push(library.laptop);
        animate("FirstFace");
      }
      break;
    case 1:
      state.push(library.notebookOne);
      break;
    case 2:
      state.push(library.notebookTwo);
      break;
    case 3:
      state.push(library.degree);
      break;
    case 4:
      state.push(library.os);
      break;
    case 5:
      state.push(library.frontEndOne);
      break;
    case 6:
      state.push(library.frontEndTwo);
      break;
    case 7:
      state.push(library.backEndOne);
      break;
    case 8:
      // hobbies
      if (scrollDir === "down" && limitedScroll > scrollStage / 4) {
        scrollIconHandler(
          ".scroll",
          ".scrollIcon",
          ".scrollHobbies",
          scroll,
          scrollStage,
          0,
          sceneNumber,
          scrollStage / 2,
          () => {
            state.push(library.backEndOneAlone);
          },
          () => {
            state.push(library.microphone);
          }
        );
      } else {
        state.push(library.microphone);
      }
      break;
    case 9:
      // change faces for variety
      animate("SecondFace");
      state.push(library.motorcycle);
      break;
    case 10:
      animate("night");
      state.push(library.door);
      break;
    case 11:
      animate("day");
      state.push(library.general);
      break;
    case 12:
      // walking and car animation
      animate("WalkingAnimations");
      state.push(library.walking);
      break;
    case 13:
      // tree shaking animation
      animate("TreeAnimations");
      state.push(library.garden);
      break;
    case 14:
      animate("FlagAnimations");
      state.push(library.mountain);
      break;
    default:
      state.push("end");
      break;
  }
  if (state.length > 2) {
    if (
      JSON.stringify(state[state.length - 1]) ===
      JSON.stringify(state[state.length - 2])
    ) {
      // remove last duplication
      state.pop();
    } else {
      // allow animations
      enteredOnce = false;
    }
    try {
      currentView = calculateView();
      Camera(".page", currentView, "linear");

      let approached = areClose(
        stringToArray(currentView),
        stringToArray(state[state.length - 1].view),
        closeToViewAccuracy
      );
      approached &&
        Typewriter(
          "article",
          "text-background",
          50,
          state[state.length - 1].text,
          state[state.length - 1].textPosition
        );
    } catch (e) {
      console.error("is it first render?\n" + e);
    }
  }
  function animate(animation = null) {
    if (!enteredOnce) {
      if (animation) {
        enteredOnce = true;
        switch (animation) {
          case "FirstFace":
            isMobile
              ? FaceAnimations("#pokerFace", "#smileFace").poker()
              : FaceAnimations("#pokerFace", "#smileFace").smile();
            break;
          case "SecondFace":
            isMobile
              ? FaceAnimations("#pokerFace", "#smileFace").smile()
              : FaceAnimations("#pokerFace", "#smileFace").poker();
            break;
          case "WalkingAnimations":
            WalkingAnimations(CarAnimations);
            break;
          case "night":
            console.log("night");
            BackgroundAnimations().night();
            break;
          case "day":
            console.log("day");
            BackgroundAnimations().day();
            break;
          case "TreeAnimations":
            TreeAnimations();
            break;
          case "FlagAnimations":
            FlagAnimations();
            break;
          default:
            console.error("Provided animation does not exist");
            break;
        }
      }
    }
  }
  function calculateView() {
    if (state[state.length - 1] === "end") return;
    let from = stringToArray(state[state.length - 2].view);
    let to = stringToArray(state[state.length - 1].view);
    if (scrollDir === "up") {
      [from, to] = [to, from];
    }
    if (from.length !== to.length) {
      return console.error("Arrays don't match!");
    }
    let currentView = [];
    for (let i = 0; i < from.length; i++) {
      let sub = (to[i] - from[i]) / scrollStage;
      currentView.push(limitedScroll * sub + from[i]);
    }
    for (let i = 0; i < from.length; i++) {
      if (isNaN(from[i]) || isNaN(to[i]) || isNaN(currentView[i])) {
        return console.error("Arrays don't have valid values!");
      }
    }
    return arrayToString(currentView);
  }

  function areClose(par1, par2, accuracy) {
    let closeArray = [];
    //check x and y of view port to be close
    for (let i = 0; i < 2; i++) {
      if (par1[i] + accuracy >= par2[i] && par1[i] - accuracy <= par2[i]) {
        closeArray.push(true);
      } else {
        closeArray.push(false);
      }
    }
    return closeArray.filter((t) => t === true).length === 2;
  }
  function arrayToString(array) {
    let result = "";
    array.forEach((element) => {
      result += element + " ";
    });
    result = result.trim();
    return result;
  }
  function stringToArray(string) {
    if (string) {
      return string.split(" ").map(Number);
    }
  }
}
export default Play;

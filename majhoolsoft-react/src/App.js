import "./App.css";
import { useEffect, useState } from "react";
import useWindowDimensions from "./components/GetWindowDimensions";
import Car from "./components/Car";
import Sideview from "./components/faces/Sideview";
import Background from "./components/Background";
import Darkness from "./components/Darkness";
import LightBeam from "./components/LightBeam";
import GarageDoor from "./components/GarageDoor";
import ScrollDown from "./components/ScrollDown";
import useScroll from "./helpers/GetScroll";
import Garage from "./components/Garage";
import Play from "./Play";
import GetTextArray from "./components/GetTextArray";
import CheckScroll from "./helpers/CheckScroll";
const texts = GetTextArray();
function App() {
  // get window properties
  const { height, width } = useWindowDimensions();
  const mobile = width < height;
  const size = mobile
    ? {
        height: height,
      }
    : {
        width: width,
      };
  // get scroll properties
  let scrollY = useScroll().scrollY;
  let scrollDirection = useScroll().scrollDirection;
  // scenes activation
  let [allowScroll, setAllowScroll] = useState(true);
  let [showIntro, setShowIntro] = useState(true);
  let [showGarage, setShowGarage] = useState(false);
  let [showHobbies, setShowHobbies] = useState(false);
  useEffect(() => {
    !allowScroll && window.scrollTo(0, 0);
    if (showIntro) {
      // play intro
      setShowIntro(false);
      setAllowScroll(false);
      Play(mobile, width, height, texts).introScene(initGarage);
      function initGarage() {
        setAllowScroll(true);
      }
    } else if (showGarage) {
      // play garage
      CheckScroll(scrollY, scrollDirection, allowScroll, startGarage); // to remove scroll icon
      function startGarage() {
        Play().removeScrollIcon();
        setShowGarage(false);
        setAllowScroll(false);
        Play(mobile, width, height, texts).garageScene(initHobbies);
      }
      function initHobbies() {
        setAllowScroll(true);
        setShowHobbies(true);
      }
    } else if (showHobbies) {
      // play hobbies
      CheckScroll(scrollY, scrollDirection, allowScroll, startHobbies);
      function startHobbies() {
        Play().removeScrollIcon();
        setAllowScroll(false);
        setShowHobbies(false);
        Play(mobile, width, height, texts).hobbiesScene(finish);
      }
      function finish() {
        console.log("the end");
        setAllowScroll(false);
      }
    }
  }, [
    height,
    width,
    mobile,
    allowScroll,
    showHobbies,
    showGarage,
    showIntro,
    scrollY,
    scrollDirection,
  ]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="container">
        <svg className="page" xmlns="http://www.w3.org/2000/svg" style={size}>
          <Background />
          <Garage />
          <GarageDoor
            scrollY={scrollDirection === "up" && allowScroll && scrollY}
            doorOpened={(e) => {
              e && setShowGarage(true);
            }}
          />
          <Darkness />
          <Sideview />
          <Car />
          <LightBeam />
          <ScrollDown />
        </svg>
        <div className="decorative">
          <div className="intro">
            <p className="hi">
              Hi,
              <br /> I'm Yousef Fatouraee
            </p>
            <p className="welcome">Ride with me to my world!</p>
            <p className="download">
              or <a href="/">Download</a> resume
            </p>
          </div>
          <p className="scrollResume scrollText">Scroll Down</p>
          <p className="scrollHobbies scrollText">
            Scroll Down to see my hobbies
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

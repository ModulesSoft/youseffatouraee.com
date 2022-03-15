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
import getScroll from "./helpers/GetScroll";
import Garage from "./components/Garage";
import Play from "./Play";
import GetTextArray from "./components/GetTextArray";
import scrollToTop from "./helpers/lib/ScrollToTop";
const scrollStage = 20;
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
  let [scroll, setScroll] = useState(0);
  let [scene, setScene] = useState(0);
  useEffect(() => {
    // when component did mount:
    scrollToTop();
    Play(scroll, scrollStage, scene, mobile, width, height, texts).initCamera();
    getScroll(setScroll, setScene, scrollStage);
  }, []); //Be carefull - scroll must not be a dependency!
  // play using scrolling
  Play(scroll, scrollStage, scene, mobile, width, height, texts);
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="container">
        <svg className="page" xmlns="http://www.w3.org/2000/svg" style={size}>
          <Background />
          <Garage />
          {/* <GarageDoor
            scrollY={scrollDirection === "up" && allowScroll && scrollY}
            doorOpened={(e) => {
              e && setShowGarage(true);
            }}
          /> */}
          <Sideview />
          <Car />
          {/* <Darkness /> */}
          <LightBeam />
        </svg>
        <div className="decorative">
          <div className="intro">
            <p className="hi">
              Hi,
              <br /> I'm Yousef Fatouraee
            </p>
            <p className="welcome">Ride with me to my world!</p>
            <p className="download">
              or <a href="/">download</a> resume
            </p>
          </div>
          <div className="scroll">
            <ScrollDown />
            <p className="scrollResume scrollText">Scroll Down</p>
            <p className="scrollHobbies scrollText">
              Scroll Down to see my hobbies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

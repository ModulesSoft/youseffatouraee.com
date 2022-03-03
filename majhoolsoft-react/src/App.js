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
  let scrollY = useScroll().scrollY / 10;
  let scrollDirection = useScroll().scrollDirection;
  let [allowScroll, setAllowScroll] = useState(false);
  let [showHobbies, setShowHobbies] = useState(false);
  useEffect(() => {
    // remove scroll instruction whenever scrolled enough ( 140px)
    if (scrollY > 10 && scrollDirection === "up" && allowScroll) {
      Play().removeScrollIcon();
      // if it's hobbies scene
      if (showHobbies) {
        Play(mobile, width, height).hobbiesScene();
        setShowHobbies(false);
        setAllowScroll(false);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [scrollY, scrollDirection, allowScroll, showHobbies]);

  // play intro
  useEffect(() => {
    Play(mobile, width, height).introScene(() => setAllowScroll(true));
    // playGarage();
  }, []);
  function playGarage() {
    setShowHobbies(false);
    setAllowScroll(false);
    window.scrollTo(0, 0);
    Play(mobile, width, height).garageScene(startHobbies);
    function startHobbies() {
      setAllowScroll(true);
      setShowHobbies(true);
    }
  }
  // play garage
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
              e && playGarage();
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
            <p className="hi">Hi</p>
            <p className="welcome">Ride with me to my world!</p>
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

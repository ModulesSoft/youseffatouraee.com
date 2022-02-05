import "./App.css";
import { useEffect } from "react";
import Car from "./components/Car";
import Background from "./components/Background";
import anime from "animejs";
import Darkness from "./components/Darkness";
import LightBeam from "./components/LightBeam";
import Sun from "./components/Sun";
import Clouds from "./components/Clouds";
import useWindowDimensions from "./components/GetWindowDimensions";
import GarageDoor from "./components/GarageDoor";
function App() {
  const { height, width } = useWindowDimensions();
  let desktopSize;
  if (width > height) {
    // it's not a mobile
    desktopSize = {
      width: width,
    };
  } else {
    desktopSize = {
      height: height,
    };
  }
  let generalView = "0 0 1920 1080";
  let beginView = "-1000 650 900 500";
  let doorView = "1002.43 900.24 384.26 136.1";
  let carView = "0 650 900 400";
  // Hi text fades in and out
  useEffect(() => {
    anime({
      targets: ".hi",
      opacity: [
        { value: 1, duration: 1000 },
        { value: 0, delay: 6000 },
      ],
      easing: "easeInExpo",
      delay: 0,
    });
  }, []);
  // welcome text fades in and out
  useEffect(() => {
    anime({
      targets: ".welcome",
      opacity: [
        { value: 1, duration: 1000 },
        { value: 0, delay: 6000 },
      ],
      easing: "easeInExpo",
      delay: 1000,
    });
  }, []);

  // camera transition
  useEffect(() => {
    anime({
      targets: ".page",
      duration: 4000,
      keyframes: [
        // camera transition from the car in the way home to the background
        { viewBox: [beginView, generalView], delay: 5000 },
        // camera transition to garage door
        { viewBox: [generalView, doorView], delay: 5000 },
        {},
      ],
      easing: "easeOutQuad",
      // delay: 5000,
    });
  }, []);
  // sun sets
  useEffect(() => {
    anime({
      targets: "#sun",
      duration: 3000,
      translateY: "-650px",
      easing: "easeOutQuad",
      delay: 6000,
    });
  }, []);
  // clouds come up
  useEffect(() => {
    anime({
      targets: "#clouds",
      duration: 1000,
      translateY: "-300px",
      // easing: "easeOutQuad",
      delay: 9000,
    });
  }, []);
  // fade away the darkness to brightness
  useEffect(() => {
    anime({
      targets: "#darkness",
      duration: 3000,
      opacity: 0,
      easing: "linear",
      delay: 7000,
    });
  }, []);
  // debug for top gap
  useEffect(() => {
    anime({
      targets: ".container",
      duration: 3000,
      backgroundColor: "#87ceeb",
      easing: "linear",
      delay: 7000,
    });
  }, []);
  // background color fades to blue
  useEffect(() => {
    anime({
      targets: "container",
      backgroundImage: "linear-gradient (#87CEEB, #034b04)",
      duration: 5000,
      opacity: 1,
      delay: 8000,
    });
  }, []);
  // turn off the head lights
  useEffect(() => {
    anime({
      targets: "#beam",
      duration: 500,
      opacity: 0,
      easing: "easeOutQuad",
      delay: 8000,
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <div className="container">
          <svg className="page" style={desktopSize}>
            <Sun />
            <Clouds />
            <Background />
            <GarageDoor />
            <Darkness />
            <Car />
            <LightBeam />
          </svg>
          <article>
            <p className="hi">Hi</p>
            <p className="welcome">Ride with me to my world!</p>
          </article>
        </div>
      </body>
    </div>
  );
}

export default App;

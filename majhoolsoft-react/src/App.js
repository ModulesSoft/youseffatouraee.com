import "./App.css";
import { useEffect } from "react";
import Car from "./components/Car";
import Background from "./components/Background";
import anime from "animejs";
import Darkness from "./components/Darkness";
import LightBeam from "./components/LightBeam";
function App() {
  let generalView = "0 0 1920 1080";
  let beginView = "400 0 200 200";
  let doorView = "1002.43 900.24 384.26 136.1";
  let carView = "0 650 900 400";
  // camera transition from the car to the background
  useEffect(() => {
    anime({
      targets: "#page",
      duration: 4000,
      viewBox: ["0 650 900 500", "1000 0 2240 1080"],
      easing: "easeOutQuad",
      delay: 5000,
      // delay: 500,
    });
  }, []);
  // fade darkness to brightness
  useEffect(() => {
    anime({
      targets: "#darkness",
      duration: 10000,
      translateY: "5000px",
      easing: "easeOutQuad",
      delay: 9000,
      // delay: 500,
    });
  }, []);
  // turn off the head lights
  useEffect(() => {
    anime({
      targets: "#beam",
      duration: 500,
      opacity: 0,
      easing: "easeOutQuad",
      delay: 10000,
      // delay: 500,
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <svg className="page" id="page">
          <Background />
          <Car />
          <Darkness />
          <LightBeam />
        </svg>
      </header>
    </div>
  );
}

export default App;

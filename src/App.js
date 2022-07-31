import "./App.css";
import useWindowDimensions from "./components/GetWindowDimensions";
import Car from "./components/Car";
import Sideview from "./components/faces/Sideview";
import Background from "./components/Background";
import Darkness from "./components/Darkness";
import LightBeam from "./components/LightBeam";
import GarageDoor from "./components/GarageDoor";
import Garage from "./components/Garage";
import GetTextArray from "./components/GetTextArray";
import Render from "./Render";
import { useRef } from "react";
const texts = GetTextArray();
function App() {
  // get window properties
  const { height, width } = useWindowDimensions();
  const mobile = width < height;
  const size = mobile ? { height: height } : { width: width };
  const pageRef = useRef();
  Render(pageRef, mobile, width, height, texts);
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="container">
        <svg
          className="page"
          xmlns="http://www.w3.org/2000/svg"
          style={size}
          ref={pageRef}
        >
          <Background />
          <Garage />
          <GarageDoor />
          <Sideview />
          <Car />
          <Darkness />
          <LightBeam />
        </svg>
      </div>
    </div>
  );
}

export default App;

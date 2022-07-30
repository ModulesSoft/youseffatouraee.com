import "./App.css";
import { useEffect, useState } from "react";
import useWindowDimensions from "./components/GetWindowDimensions";
import Car from "./components/Car";
import Sideview from "./components/faces/Sideview";
import Background from "./components/Background";
import Darkness from "./components/Darkness";
import LightBeam from "./components/LightBeam";
import GarageDoor from "./components/GarageDoor";
import Garage from "./components/Garage";
import Play from "./Play";
import GetTextArray from "./components/GetTextArray";
import scrollToTop from "./helpers/lib/ScrollToTop";
const scrollStage = 10;
var lastScrl = 0;
const texts = GetTextArray();
function App() {
  // get window properties
  const { height, width } = useWindowDimensions();
  const mobile = width < height;
  const size = mobile ? { height: height } : { width: width };
  let [scroll, setScroll] = useState(0);
  let [scrollDir, setScrollDir] = useState("down");
  let [scene, setScene] = useState(0);
  // when component did mount:
  useEffect(() => {
    scrollToTop();
    if (document.getElementById("darkness"))
      document.getElementById("darkness").style.visibility = "hidden";
  }, []);
  useEffect(() => {
    const getScroll = () => {
      let scrl =
        (window.pageYOffset || document.documentElement.scrollTop) / 50;
      setScroll(Number.parseFloat(scrl).toFixed(2));
      setScene(Math.floor(scrl / scrollStage));
      if (scrl > lastScrl) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }
      lastScrl = scrl;
    };
    window.addEventListener("scroll", getScroll, { passive: true });
    // clean up code
    return () => window.removeEventListener("scroll", getScroll);
  }, [scrollDir]);
  // play using scrolling
  useEffect(() => {
    Play(scroll, scrollDir, scrollStage, scene, mobile, width, height, texts);
  }, [scroll, height, mobile, scene, scrollDir, width]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="container">
        <svg className="page" xmlns="http://www.w3.org/2000/svg" style={size}>
          <Background />
          <Garage />
          <GarageDoor scrollY={scene >= 10 && scroll - 10 * scrollStage} />
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

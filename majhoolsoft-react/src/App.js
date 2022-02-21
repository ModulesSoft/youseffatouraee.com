import "./App.css";
import { useEffect } from "react";
import useWindowDimensions from "./components/GetWindowDimensions";
import anime from "animejs";
import Car from "./components/Car";
import Background from "./components/Background";
import Darkness from "./components/Darkness";
import LightBeam from "./components/LightBeam";
import Sun from "./components/Sun";
import Clouds from "./components/Clouds";
import GarageDoor from "./components/GarageDoor";
import ScrollDown from "./components/ScrollDown";
import useScroll from "./helpers/GetScroll";
import Garage from "./components/Garage";
import Play from "./Play";

function App() {
  // get window properties
  let scrollY = useScroll().scrollY / 10;
  const { height, width } = useWindowDimensions();
  const mobile = width < height;
  const size = mobile
    ? {
        height: height,
      }
    : {
        width: width,
      };

  // remove scroll instruction whenever scrolled enough ( 140px)
  if (scrollY > 10) {
    removeScroll();
  }

  //play
  useEffect(() => {
    Play(mobile, width, height).HouseScene();
  }, []);

  function playGarage() {
    Play(mobile, width, height).GarageScene();
  }

  function removeScroll() {
    anime.remove([".scrollIcon", "#darkness", ".scroll"]);
    anime({
      targets: [".scrollIcon", "#darkness", ".scroll"],
      opacity: 0,
    });
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="container">
        <svg className="page" xmlns="http://www.w3.org/2000/svg" style={size}>
          <Sun />
          <Clouds />
          <Background />
          <Garage />
          <GarageDoor
            scrollY={scrollY}
            doorOpened={(e) => {
              e && playGarage();
            }}
          />
          <Darkness />
          <Car />
          <LightBeam />
          {/* {scroll && <ScrollDown />} */}
          <ScrollDown />
          {/* <svg x="1325" y="920" className="test">
            <rect width="35" height="65"></rect>
          </svg> */}
        </svg>
        <article className="article">
          <p className="hi">Hi</p>
          <p className="welcome">Ride with me to my world!</p>
          <p className="scroll">Scroll Down</p>
          <p id="resumeOne" className="text-animation">
            I'm a software engineer
          </p>
          <p id="resumeTwo" className="text-animation">
            I was born in Quebec
          </p>
          <p id="degreeOne" className="text-animation">
            I studied CS in <a href="aut.ac.ir">AUT</a> with GPA of B
          </p>
          <p id="degreeTwo" className="text-animation">
            <a href="https://www.usnews.com/education/best-global-universities/amirkabir-university-of-technology-aut-506266">
              See the rank here
            </a>
          </p>
        </article>
      </div>
    </div>
  );
}

export default App;

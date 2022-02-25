import "./App.css";
import { useEffect, useState } from "react";
import useWindowDimensions from "./components/GetWindowDimensions";
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
  // remove scroll instruction whenever scrolled enough ( 140px)
  if (scrollY > 10 && scrollDirection === "up" && allowScroll) {
    Play().removeScrollIcon();
  } else {
    window.scrollTo(0, 0);
  }

  //play
  useEffect(() => {
    Play(mobile, width, height).introScene(() => setAllowScroll(true));
  }, []);

  function playGarage() {
    Play(mobile, width, height).garageScene();
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
            scrollY={scrollDirection === "up" && allowScroll && scrollY}
            doorOpened={(e) => {
              e && playGarage();
            }}
          />
          <Darkness />
          <Car />
          <LightBeam />
          <ScrollDown />
          {/* <svg x="1325" y="920" className="test">
            <rect width="35" height="65"></rect>
          </svg> */}
        </svg>
        <article className="article">
          <p className="hi">Hi</p>
          <p className="welcome">Ride with me to my world!</p>
          <p className="scroll">Scroll Down</p>
          <p id="laptopOne" className="text-animation">
            I'm a software engineer
          </p>
          <p id="laptopTwo" className="text-animation">
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
          <p id="OSOne" className="text-animation">
            I have done my projects using lovely Linux and Windows OS'!
          </p>
          <p id="frontEndOneOne" className="text-animation">
            I have over 4 years of experience with html5 and CSS3
          </p>
          <p id="frontEndOneTwo" className="text-animation">
            I know Javascript as well, and its many libraries and frameworks,
            like React.js and Vue.js.
          </p>
          <p id="frontEndTwoOne" className="text-animation">
            I know Sass
          </p>
          <p id="frontEndTwoTwo" className="text-animation">
            I know GQL TS
          </p>
          <p id="backEndOneOne" className="text-animation">
            I used to use PHP and SQL when I develop as a fullstack
          </p>
          <p id="backEndOneTwo" className="text-animation">
            I taught Java
          </p>
          <p id="notebookOneOne" className="text-animation">
            I have experience with these methodologies in small scales
          </p>
          <p id="notebookTwoOne" className="text-animation">
            These are my public available websites
          </p>
          <p id="notebookTwoTwo" className="text-animation">
            There are more I've done for the companies private projects.
          </p>
        </article>
      </div>
    </div>
  );
}

export default App;

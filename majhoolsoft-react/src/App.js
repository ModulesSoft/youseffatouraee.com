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
    // Play(mobile, width, height).HouseScene();
    Play(mobile, width, height).GarageScene();
  }, []);

  function playGarage() {}

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
          {/* <GarageDoor
            scrollY={scrollY}
            doorOpened={(e) => {
              e && playGarage();
            }}
          /> */}
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

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
import TextAnimation from "./helpers/TextAnimation";

function App() {
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
  const generalView = "0 0 1920 1080";
  const beginView = "-1000 650 900 500";
  const doorViewDesktop = "1000 800 400 240";
  const doorViewMobile = `1000 ${1080 - height} ${width} ${height}`;
  const laptopView = "1328 920 60 60";

  let timeline = 0;

  // remove scroll instruction whenever scrolled enough ( 140px)
  if (scrollY > 10) {
    anime.remove([".scrollIcon", "#darkness", ".scroll"]);
    anime({
      targets: [".scrollIcon", "#darkness", ".scroll"],
      opacity: 0,
    });
  }

  useEffect(() => {
    // Scroll icon
    anime({
      targets: ".scrollIcon",
      translateY: -50,
      direction: "alternate",
      loop: true,
      easing: "spring(1, 80, 10, 0)",
      opacity: 0.3,
    });
    // Hi text fades in and out
    anime({
      targets: ".hi",
      opacity: [
        { value: 1, duration: 1000 },
        { value: 0, delay: 6000 },
      ],
      easing: "easeInExpo",
      delay: 0,
    });
    // welcome text fades in and out
    anime({
      targets: ".welcome",
      opacity: [
        { value: 1, duration: 1000 },
        { value: 0, delay: 6000 },
      ],
      easing: "easeInExpo",
      delay: 1000,
    });
    // camera transition
    anime({
      targets: ".page",
      duration: 4000,
      keyframes: [
        // camera transition from the car in the way home to the background
        { viewBox: [beginView, generalView], delay: 5000 },
        // camera transition to garage door
        {
          viewBox: [generalView, mobile ? doorViewMobile : doorViewDesktop],
          delay: 5000,
        },
      ],
      easing: "easeOutQuad",
      delay: 5000,
    });
    // sun sets
    anime({
      targets: "#sun",
      duration: 3000,
      translateY: "-650px",
      easing: "easeOutQuad",
      delay: 6000,
    });
    // clouds come up
    anime({
      targets: "#clouds",
      duration: 1000,
      translateY: "-300px",
      // easing: "easeOutQuad",
      delay: 9000,
    });
    // fade away the darkness to brightness and vice versa
    anime({
      targets: "#darkness",
      keyframes: [
        // fade in to day
        { opacity: 0, duration: 3000, delay: 7000, easing: "linear" },
        // fade in unless scroll
        {
          opacity: 0.7,
          duration: 1000,
          delay: 4000,
          easing: "linear",
        },
      ],
    });
    // debug for top gap
    anime({
      targets: ".container",
      duration: 3000,
      backgroundColor: "#87ceeb",
      easing: "linear",
      delay: 7000,
    });
    // background color fades to blue
    anime({
      targets: "container",
      backgroundImage: "linear-gradient (#87CEEB, #034b04)",
      duration: 5000,
      opacity: 1,
      delay: 8000,
    });
    // turn off the head lights
    anime({
      targets: "#beam",
      duration: 500,
      opacity: 0,
      easing: "easeOutQuad",
      delay: 8000,
    });
    // scroll text fades in
    anime({
      targets: ".scroll",
      opacity: 0.8,
      delay: 15000,
      duration: 2000,
      easing: "linear",
    });
  }, []);

  function beginResume() {
    anime({
      targets: ".page",
      duration: 4000,
      keyframes: [
        // camera transition from the garage door to the laptop
        {
          viewBox: [mobile ? doorViewMobile : doorViewDesktop, laptopView],
          // viewBox: mobile ? doorViewMobile : doorViewDesktop,
        },
        // camera transition to garage door
        {},
      ],
      easing: "easeOutQuad",
    });

    timeline += 4000;

    //resumeOne text background appearance
    anime({
      targets: "#resumeOne",
      duration: 1000,
      opacity: [0, 1],
      easing: "easeInExpo",
      delay: 2000,
    });
    //resumeTwo text background appearance
    anime({
      targets: "#resumeTwo",
      duration: 1000,
      opacity: [0, 1],
      easing: "easeInExpo",
      delay: 8000,
    });
    TextAnimation("#resumeOne", 4_000, 100, 10000);
    TextAnimation("#resumeTwo", 10_000, 100, 16000);
    timeline += 4000;
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
              e && beginResume();
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
        <article>
          <p className="hi text">Hi</p>
          <p className="welcome text">Ride with me to my world!</p>
          <p className="scroll text">Scroll Down</p>
          <p id="resumeOne" className="text-animation">
            I'm a software engineer
          </p>
          <p id="resumeTwo" className="text-animation">
            I was born in Canada
          </p>
        </article>
      </div>
    </div>
  );
}

export default App;

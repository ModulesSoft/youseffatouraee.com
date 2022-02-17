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
import ScrollDown from "./components/ScrollDown";
import useScroll from "./helpers/GetScroll";
import Garage from "./components/Garage";
function App() {
  let scrollY = useScroll().scrollY / 10;
  const { height, width } = useWindowDimensions();
  let mobile = width < height;
  let size = mobile
    ? {
        height: height,
      }
    : {
        width: width,
      };
  let generalView = "0 0 1920 1080";
  let beginView = "-1000 650 900 500";
  let doorViewDesktop = "1000 800 400 240";
  let doorViewMobile = `1000 ${1080 - height} ${width} ${height}`;
  let carView = "0 650 900 400";
  // const [scroll, showScroll] = useState(false);
  // setTimeout(function () {
  //   showScroll(true); //After 1 second, show the scroll icon
  // }, 100);

  // remove scroll instruction whenever scrolled enough ( 140px)
  if (scrollY > 10) {
    anime.remove([".scrollIcon", "#darkness", ".scroll"]);
    anime({
      targets: [".scrollIcon", "#darkness", ".scroll"],
      opacity: 0,
    });
  }

  // Scroll icon
  useEffect(() => {
    anime({
      targets: ".scrollIcon",
      translateY: -50,
      direction: "alternate",
      loop: true,
      easing: "spring(1, 80, 10, 0)",
      opacity: 0.3,
    });
  }, []);

  useEffect(() => {
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
  }, []);

  // camera transition
  useEffect(
    // (beginView, generalView, mobile, doorViewMobile, doorViewDesktop) => {
    () => {
      anime({
        targets: ".page",
        duration: 4000,
        keyframes: [
          // camera transition from the car in the way home to the background
          { viewBox: [beginView, generalView], delay: 5000 },
          // camera transition to garage door
          {
            viewBox: [generalView, mobile ? doorViewMobile : doorViewDesktop],
            // scaleY: 2,
            // scaleX: width / 385,
            delay: 5000,
          },
        ],
        easing: "easeOutQuad",
        delay: 5000,
      });
    },
    []
  );
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
  // fade away the darkness to brightness and vice versa
  useEffect(() => {
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

  useEffect(() => {
    // scroll text fades in
    anime({
      targets: ".scroll",
      opacity: 0.8,
      delay: 15000,
      duration: 2000,
      easing: "linear",
    });
  }, []);

  function beginResume() {}
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="container">
        <svg className="page" style={size}>
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
        </svg>
        <article>
          <p className="hi text">Hi</p>
          <p className="welcome text">Ride with me to my world!</p>
          <p className="scroll text">Scroll Down</p>
        </article>
      </div>
    </div>
  );
}

export default App;

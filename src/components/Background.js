import House from "./House";
import Walking from "./walk/Walking";
import Sun from "./Sun";
import Clouds from "./Clouds";
import Flag from "./Flag";
import Trees from "./Trees";
import Mountains from "./Mountains";
import Car from "./Car";
import Sideview from "./faces/Sideview";
import Darkness from "./Darkness";
import LightBeam from "./LightBeam";
import GarageDoor from "./GarageDoor";
import Garage from "./Garage";
function Background() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1920"
      height="1080"
      viewBox="0 0 1920 1080"
    >
      <Sun />
      <Clouds />
      <Mountains />
      <Trees />
      <Walking />
      <House />
      <Flag />
      <Garage />
      <GarageDoor />
      <Sideview />
      <Car />
      <Darkness />
      <LightBeam />
    </svg>
  );
}

export default Background;

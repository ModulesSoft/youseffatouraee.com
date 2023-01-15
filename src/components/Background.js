import House from "./House";
import Walking from "./walk/Walking";
import Sun from "./Sun";
import Clouds from "./Clouds";
import Flag from "./Flag";
import Trees from "./Trees";
import Mountains from "./Mountains";
import Car from "./Car";
import Sideview from "./faces/Sideview";
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
      <Sun loading="lazy" />
      <Clouds loading="lazy" />
      <Mountains loading="lazy" />
      <Trees loading="lazy" />
      <Walking loading="lazy" />
      <House loading="lazy" />
      <Flag loading="lazy" />
      <Garage loading="lazy" />
      <GarageDoor loading="lazy" />
      <Sideview loading="lazy" />
      <Car loading="lazy" />
      <LightBeam loading="lazy" />
    </svg>
  );
}

export default Background;

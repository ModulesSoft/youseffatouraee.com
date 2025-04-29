import House from "./House";
import Walking from "./walk/Walking.jsx";
import Sun from "./Sun";
import Clouds from "./Clouds";
import Flag from "./Flag";
import Trees from "./Trees";
import Mountains from "./Mountains";
import Car from "./Car";
import GarageDoor from "./GarageDoor";
import Garage from "./Garage";
import Sky from "./Sky";
function Background() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1920"
      height="1080"
      viewBox="0 0 1920 1080"
    >
      <Sky loading="lazy" />
      <Sun loading="lazy" />
      <Clouds loading="lazy" />
      <Mountains loading="lazy" />
      <Trees loading="lazy" />
      <Walking loading="lazy" />
      <House loading="lazy" />
      <Flag loading="lazy" />
      <Garage loading="lazy" />
      <GarageDoor loading="lazy" />
      <Car loading="lazy" />
    </svg>
  );
}

export default Background;

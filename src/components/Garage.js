import Desk from "./Desk";
import PokerFace from "./faces/Poker";
import SmileFace from "./faces/Smile";
import Library from "./Library";
import Microphone from "./Microphone";
import Motorcycle from "./Motorcycle";
import Window from "./Window";
import Pump from "./Pump";
import Tools from "./Tools";
import GarageBackground from "./GarageBackground";
function Garage() {
  return (
    <svg
      width="384.264"
      height="136.105"
      viewBox="0 0 384.264 136.105"
      x="265"
      y="900"
    >
      <g id="garage">
        <GarageBackground />
        <Window />
        <Tools />
        <a href="https://www.youtube.com/playlist?list=PLfEf_Hlj0AEmg3p82mr6h09pByA1qbUft">
          <Motorcycle />
        </a>
        <Pump />
        <Library />
        <a href="https://www.youtube.com/playlist?list=PLfEf_Hlj0AEmtzksQp5IjbJV5k_rNS7Q5">
          <Microphone />
        </a>
        <SmileFace />
        <PokerFace />
        <Desk />
      </g>
    </svg>
  );
}

export default Garage;

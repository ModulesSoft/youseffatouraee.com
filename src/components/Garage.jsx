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
        <Motorcycle />
        <Pump />
        <Library />
        <Microphone />
        <SmileFace />
        <PokerFace />
        <Desk />
      </g>
    </svg>
  );
}

export default Garage;

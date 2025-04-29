import First from "./cycle/First";
import Second from "./cycle/Second";
import Third from "./cycle/Third";
import Fourth from "./cycle/Fourth";
import Fifth from "./cycle/Fifth";
import Sixth from "./cycle/Sixth";
import Seventh from "./cycle/Seventh";
import Eighth from "./cycle/Eighth";

function Walking({ cycle = 1 }) {
  return (
    <svg x="-160" y="430">
      <g id="walking">
        <First />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
        <Sixth />
        <Seventh />
        <Eighth />
      </g>
    </svg>
  );
}

export default Walking;

import useWindowDimensions from "./lib/useWindowDimensions";
import Background from "./components/Background";
import GetTextArray from "./lib/GetTextArray";
import useRender from "./lib/useRender";
import { useRef } from "react";
const texts = GetTextArray();
function App() {
  // get window properties
  const { height, width } = useWindowDimensions();
  const mobile = width < height;
  const size = mobile ? { height: height } : { width: width };
  const pageRef = useRef();
  useRender(pageRef, mobile, width, height, texts);
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="container">
        <svg
          className="page"
          xmlns="http://www.w3.org/2000/svg"
          style={size}
          ref={pageRef}
        >
          <Background />
        </svg>
      </div>
    </div>
  );
}

export default App;

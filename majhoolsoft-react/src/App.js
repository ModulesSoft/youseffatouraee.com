import "./App.css";
import { useEffect } from "react";
import Car from "./components/Car";
import Background from "./components/Background";
import anime from "animejs";

function App() {
  let generalView = "0 0 1920 1080";
  let beginView = "400 0 200 200";
  let doorView = "1002.43 900.24 384.26 136.1";
  let carView = "0 650 900 400";

  useEffect(() => {
    anime({
      targets: "#page",
      duration: 3000,
      viewBox: ["0 650 900 500", "1000 0 1940 1080"],
      easing: "easeInOutQuart",
      delay: 500,
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <svg className="page" id="page">
          <Background />
          <Car />
        </svg>
      </header>
    </div>
  );
}

export default App;

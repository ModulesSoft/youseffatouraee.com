import './App.css';
import { useEffect,useRef } from 'react';
import {animate,easeIn} from 'popmotion';
import Car from './components/Car';
import Background from './components/Background';

function App() {

  const svgRef = useRef(null);

  let generalView = "0 0 1920 1080";
  let beginView = "400 0 200 200";
  let doorView = "1002.43 900.24 384.26 136.1";
  let carView = "0 650 900 400";


  useEffect(() => {
    animate({
      elapsed: -1500,
      duration: 2000,
      ease: easeIn,
      to: [
        '0 0 1920 1080',
        "0 650 900 400"
      ],
      repeat: Infinity,
      repeatDelay: 5000,
      onUpdate: (val) => svgRef.current?.setAttribute('viewBox', val),
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <svg ref={svgRef} className="page" width={1920} height={1080}>
          <Background/>
          <Car/>
        </svg>

      </header>
    </div>
  );
}

export default App;

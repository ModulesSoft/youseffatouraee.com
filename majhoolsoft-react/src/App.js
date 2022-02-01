import './App.css';
import { useEffect } from 'react';
import Car from './components/Car';
import Background from './components/Background';
import anime from 'animejs';


function App() {

  let generalView = "0 0 1920 1080";
  let beginView = "400 0 200 200";
  let doorView = "1002.43 900.24 384.26 136.1";
  let carView = "0 650 900 400";

  // useEffect(() => {
  //   anime({
  //     targets:".page",
  //     duration: 20000,
  //     viewBox: ["0 0 1920 1080",carView]
  //   });
  // }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <svg 
            xmlns="http://www.w3.org/2000/svg"
             className="page" 
             width={1920} 
             height={1080}>

          <Background className="background">
          </Background>
          <Car/>
        </svg>

      </header>
    </div>
  );
}

export default App;

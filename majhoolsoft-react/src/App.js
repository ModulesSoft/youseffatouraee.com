import './App.css';
import Car from './components/Car.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Car />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

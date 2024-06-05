
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Kyiv" />
      <footer>
        <center>This project was made by Mariana Marynchenko and it's open-sourced on <a href="https://github.com/Mariana-Kyiv/weather-react-app-1" target='_blank' rel="noreferrer">GitHub</a></center>
      </footer>
    </div>
    </div>
  );
}

export default App;

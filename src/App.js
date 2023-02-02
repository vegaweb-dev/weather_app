import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=82a8404a413a55f0e86b63db9115879a';

  const searchLocation = () => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response);
        console.log(response);
      });
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="city">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <p className="city-name">65 F</p>
          </div>
        </div>
        <div className="botton">
          <div className="feels">
            <p className="bold">65 F</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p className="bold">20 %</p>
            <p>humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

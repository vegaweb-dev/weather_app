function App() {
  return (
    <div className="app">
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
            <p>65 F</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p>20 %</p>
            <p>humidity</p>
          </div>
          <div className="speed">
            <p>12 MPH</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

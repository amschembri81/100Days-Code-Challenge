import React from "react";
import DayInfoComponent from "../DayInfoComponent";
import ErrorBoundary from "../ErrorBoundary";
import withWeatherData from "../../UniqueComponents/withWeatherData";
import "./Challenge4.css";

function Day23({ weather, bgColor, zipCode, handleZipCodeChange, toggleUnit, unit }) {
  const element = (
    <h1>
      {" "}
      <i>Hello from Day 23!</i> {"\u{1F44B}"}
    </h1>
  );

  const happyEmoji = "\u{1F60A}"; 
  const message = "This is the challenge message for Day 23!";
  const codingEmoji = "👩🏻‍💻"; 
  const coffeeEmoji = "☕";

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 23 - React Portals</h1>
      {element}
      <DayInfoComponent
        date="August 15, 2024"
        dayNumber="Day 23"
        challenge="Use portals to render children outside their parent DOM hierarchy."
        message={message}
        codingEmoji={codingEmoji}
        coffeeEmoji={coffeeEmoji}
        happyEmoji={happyEmoji}
        weather={weather}
      />
      <div className="zip-code-container">
        <label>
          <h5>
            <strong>Enter your zip code:</strong>
          </h5>
          <input
            className="zipcode"
            type="text"
            value={zipCode}
            onChange={handleZipCodeChange}
            maxLength="5"
            placeholder="Zip Code"
          />
        </label>
      </div>
      <button className="button" onClick={toggleUnit}>
        Switch to {unit === "imperial" ? "Celsius" : "Fahrenheit"}
      </button>
      <h4 className="explanation">Explanation: </h4>
      <p><i>The challenge for today is solved by using React Portals to render the WeatherModal outside the parent DOM hierarchy, directly into document.body. The withWeatherData HOC is used to handle the weather fetching logic, while the portal enables displaying a modal with weather-related information or a fun fact without disrupting the component’s layout.</i></p>
    </div>
  );
}

const Day23WithWeatherData = withWeatherData(Day23);

export default function Day23WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day23WithWeatherData />
    </ErrorBoundary>
  );
}
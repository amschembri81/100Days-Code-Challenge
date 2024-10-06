import React, { useRef } from "react";
import DayInfoComponent from "../DayInfoComponent";
import ErrorBoundary from "../ErrorBoundary";
import withWeatherData from "../../UniqueComponents/withWeatherData";
import "./Challenge4.css";

function Day26({
  weather,
  bgColor,
  zipCode,
  handleZipCodeChange,
  toggleUnit,
  unit,
}) {
  const element = (
    <h1>
      {" "}
      <i>Day 26 is here!</i> {"\u{1F44B}"}
    </h1>
  );

  const happyEmoji = "\u{1F60A}";
  const message = "This is the challenge message for Day 26!";
  const codingEmoji = "👩🏻‍💻";
  const coffeeEmoji = "☕";

  // Ref for the box element
  const boxRef = useRef(null);

  // Function to change the background color of the box
  const changeBoxColor = () => {
    if (boxRef.current) {
      boxRef.current.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16); // random hex color
    }
  };

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 26 - Refs in React</h1>
      {element}
      <DayInfoComponent
        date="August 18, 2024"
        dayNumber="Day 26"
        challenge="Use refs to interact with the DOM."
        message={message}
        codingEmoji={codingEmoji}
        coffeeEmoji={coffeeEmoji}
        happyEmoji={happyEmoji}
        weather={weather}
      />

      <h4>Enter your zipcode: </h4>
      <div className="center-container">
        <div className="input-button-container">
          <input
            type="text"
            className="zipcode"
            value={zipCode}
            onChange={handleZipCodeChange}
            maxLength="5"
            placeholder="Zip Code"
          />
          <button className="button" onClick={toggleUnit}>
            Switch to {unit === "imperial" ? "Celsius" : "Fahrenheit"}
          </button>
        </div>
      </div>

      {/* Box that changes color */}
      <div className="box-container">
        <div
          ref={boxRef}
          className="color-box"
          style={{
            width: "200px",
            height: "125px",
            backgroundColor: "#f0f0f0",
            margin: "20px auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          <p>Click to change my color!</p>
        </div>
        <button className="button" onClick={changeBoxColor}>
          Change Color
        </button>
      </div>
      <h4 className="explanation">Explanation: </h4>
        <p><i>The challenge for today is solved by using React refs to interact with a DOM element, allowing a color box to change its background color when clicked, demonstrating how refs can directly manipulate the DOM.</i></p>
    </div>
  );
}

const Day26WithWeatherData = withWeatherData(Day26);

export default function Day26WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day26WithWeatherData />
    </ErrorBoundary>
  );
}

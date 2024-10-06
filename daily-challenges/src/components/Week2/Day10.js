import React, { useState } from "react"; // Import React and useState hook for state management
import DayInfoComponent from "../DayInfoComponent"; // Import DayInfoComponent for displaying day-specific information
import "../../Challenges.css"; // Import global CSS for styling
import "./Challenge2.css"; // Import specific CSS for Day 10

function Day10() {
  // useState hooks to manage temperature value and unit (Celsius/Fahrenheit)
  const [temperature, setTemperature] = useState(20); // Initial temperature in Celsius
  const [unit, setUnit] = useState("C"); // State to track the current temperature unit (C for Celsius, F for Fahrenheit)

  // Function to convert temperature between Celsius and Fahrenheit
  const convertTemperature = () => {
    if (unit === "C") {
      // Convert Celsius to Fahrenheit and update the unit
      setTemperature((temp) => (temp * 9) / 5 + 32);
      setUnit("F");
    } else {
      // Convert Fahrenheit to Celsius and update the unit
      setTemperature((temp) => ((temp - 32) * 5) / 9);
      setUnit("C");
    }
  };

  return (
    <div className="day-container"> {/* Main container for Day 10 challenge */}
      <h1>Day 10 - Lifting State Up</h1> {/* Challenge title */}

      {/* Display day-specific information using DayInfoComponent */}
      <DayInfoComponent
        date="August 2, 2024" // Date of the challenge
        dayNumber="Day 10" // Day number
        challenge="Lift state and pass it to components" // Description of the challenge
        message="Control state from a common ancestor!" // Message for the challenge
      />

      {/* Render TemperatureDisplay component, passing down the temperature and unit as props */}
      <TemperatureDisplay temperature={temperature} unit={unit} />

      {/* Button to trigger temperature conversion */}
      <button className="button" onClick={convertTemperature}>
        {/* Display the text based on the current unit */}
        Convert to {unit === "C" ? "Fahrenheit" : "Celsius"}
      </button>
    </div>
  );
}

// Functional component to display the current temperature and unit
function TemperatureDisplay({ temperature, unit }) {
  return (
    <div>
      <h3>
        {/* Display the temperature rounded to one decimal place, followed by the unit (°C or °F) */}
        Temperature: {temperature.toFixed(1)}°{unit}
      </h3>
    </div>
  );
}

export default Day10; 
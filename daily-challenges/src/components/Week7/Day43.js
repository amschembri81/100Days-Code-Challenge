import React, { useContext } from "react";
import DayInfoComponent from "../DayInfoComponent"; // Component to display day-specific information
import ErrorBoundary from "../ErrorBoundary"; // Component to catch runtime errors
import withWeatherData from "../../UniqueComponents/withWeatherData"; // Higher-order component for providing weather data
import "./Challenge7.css"; // Import custom styles

// Create a context to share data across components without passing props
const MyContext = React.createContext();

function Day43({ weather, bgColor, zipCode, handleZipCodeChange }) {
  // Access the value provided by MyContext using useContext hook
  const contextValue = useContext(MyContext);
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>; // 👋 emoji for greeting
  const happyEmoji = "\u{1F60A}"; // 😊 emoji

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}> {/* Apply background color */}
      <h1>Day 43 - React Hooks (useContext)</h1> {/* Title for the challenge */}
      {element} {/* Greeting message */}

      {/* DayInfoComponent to show day number, date, and challenge details */}
      <DayInfoComponent
        date="September 4, 2024" // Current date
        dayNumber="Day 43" // Day number of the challenge
        challenge="Using useContext for simpler context handling" // Challenge description
        weather={weather} // Display weather data
        happyEmoji={happyEmoji} // Pass happy emoji
      />

      {/* Zip Code Input */}
      <div className="zip-code-container">
        <label>
          <strong>Enter your ZIP code:</strong>
        </label>
        <div className="input-button-container">
          <input
            className="zipcode"
            type="text"
            value={zipCode} // Controlled input for ZIP code
            onChange={handleZipCodeChange} // Handle ZIP code change
            maxLength="5"
            placeholder="ZIP Code" // Placeholder text
          />
        </div>
      </div>

      <p>
        <strong>ZIP Code Entered:</strong> {zipCode} {/* Display the entered ZIP code */}
      </p>

      {/* Context value displayed here */}
      <div className="context-container">
        <h3>Context Value:</h3> {/* Header for context value */}
        <p>{contextValue}</p> {/* Display the context value */}
      </div>

      {/* Challenge explanation */}
      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I used the `useContext` hook to simplify context handling and added functionality to update the weather based on the zip code entered.
      </p>
    </div>
  );
}

// Wrap Day43 with withWeatherData HOC to provide weather data
const Day43WithWeatherData = withWeatherData(Day43);

// Export Day43 wrapped in ErrorBoundary to catch runtime errors and provide context
export default function Day43WithErrorBoundary() {
  return (
    <ErrorBoundary>
      {/* Provide context value for the component using MyContext.Provider */}
      <MyContext.Provider value="Hello from Context!">
        <Day43WithWeatherData />
      </MyContext.Provider>
    </ErrorBoundary>
  );
}

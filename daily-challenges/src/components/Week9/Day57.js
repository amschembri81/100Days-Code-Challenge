import React, { useState } from "react"; // Import React and useState for managing component state
import DayInfoComponent from "../DayInfoComponent"; // Import component for displaying day info
import ErrorBoundary from "../ErrorBoundary"; // Import ErrorBoundary to handle errors
import withWeatherData from "../../UniqueComponents/withWeatherData"; // Higher-order component for weather data
import "./Challenge9.css"; // Import the corresponding CSS file for styling

// Mock component to simulate a Storybook-like environment
function MockStorybookComponent() {
  const [variant, setVariant] = useState("primary"); // State to track the button variant (primary or secondary)

  return (
    <div className="storybook-container">
      <h3>Mock Storybook</h3>
      <div className="storybook-preview">
        {/* Button with dynamic className based on the current variant */}
        <button className={`storybook-button ${variant}`}>
          {variant === "primary" ? "Primary Button" : "Secondary Button"}
        </button>
      </div>
      <div className="storybook-controls">
        {/* Buttons to change the variant state */}
        <button onClick={() => setVariant("primary")}>Primary</button>
        <button onClick={() => setVariant("secondary")}>Secondary</button>
      </div>
    </div>
  );
}

// Main component for Day 57
function Day57({ weather, bgColor }) {
  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 57 - Storybook for React</h1>
      <DayInfoComponent
        date="September 18, 2024" // Date for Day 57
        dayNumber="Day 57" // Day number
        challenge="Use Storybook for component development and testing" // Challenge description
        weather={weather} // Weather data passed as prop
      />

      {/* Include the Mock Storybook Component for testing and development */}
      <MockStorybookComponent />

      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I used Storybook to develop and test React components in isolation, 
        providing a visual interface to toggle between different component states.
      </p>
    </div>
  );
}

// Wrap the Day57 component with weather data HOC to provide weather context
const Day57WithWeatherData = withWeatherData(Day57);

// Export the component wrapped in ErrorBoundary for error handling
export default function Day57WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day57WithWeatherData />
    </ErrorBoundary>
  );
}

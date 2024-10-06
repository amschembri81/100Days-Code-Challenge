import React, { useState } from "react"; // Import React and useState for state management
import DayInfoComponent from "../DayInfoComponent"; // Import component for displaying day info
import ErrorBoundary from "../ErrorBoundary"; // Import ErrorBoundary for error handling
import withWeatherData from "../../UniqueComponents/withWeatherData"; // HOC for weather data
import "./Challenge9.css"; // Import corresponding CSS file for styles

// Simulated Screen Reader Announcement
const ScreenReader = ({ message }) => (
  <div className="screen-reader">{message}</div> // Component to display messages for screen readers
);

function Day61({ weather, bgColor }) {
  const [highContrast, setHighContrast] = useState(false); // State to track if high contrast mode is enabled
  const [screenReaderMessage, setScreenReaderMessage] = useState(""); // State to manage messages for screen reader

  // Function to toggle high contrast mode
  const toggleContrast = () => {
    setHighContrast(!highContrast); // Toggle the highContrast state
    // Set the screen reader message based on the current state
    setScreenReaderMessage("High contrast mode " + (!highContrast ? "enabled" : "disabled"));
  };

  return (
    <div
      className={`day-container2 ${highContrast ? "high-contrast" : ""}`} // Apply high-contrast class if enabled
      style={{ backgroundColor: bgColor }} // Set background color based on prop
    >
      <h1>Day 61 - Web Accessibility (A11y)</h1>
      <DayInfoComponent
        date="September 22, 2024" // Date for Day 61
        dayNumber="Day 61" // Day number
        challenge="Ensure accessibility in a React application" // Challenge description
        weather={weather} // Weather data passed as prop
      />
      <button
        aria-label="Toggle High Contrast Mode" // Accessible label for screen readers
        className="a11y-button"
        onClick={toggleContrast} // Toggle high contrast mode on button click
      >
        {highContrast ? "Disable" : "Enable"} High Contrast Mode {/* Button text changes based on state */}
      </button>

      {/* Simulated Screen Reader Announcement */}
      <ScreenReader message={screenReaderMessage} /> {/* Display message for screen readers */}

      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I ensured my React app meets web accessibility (A11y)
        standards, improving usability for users with disabilities. Try enabling
        high-contrast mode to see how users with visual impairments might
        experience the site.
      </p>
    </div>
  );
}

const Day61WithWeatherData = withWeatherData(Day61); // Wrap Day61 with weather data HOC

// Export the component wrapped in ErrorBoundary for error handling
export default function Day61WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day61WithWeatherData />
    </ErrorBoundary>
  );
}

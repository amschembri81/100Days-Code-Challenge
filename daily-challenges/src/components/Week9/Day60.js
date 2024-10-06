import React, { useState } from "react"; // Import React and useState for state management
import DayInfoComponent from "../DayInfoComponent"; // Import component for displaying day info
import ErrorBoundary from "../ErrorBoundary"; // Import ErrorBoundary for error handling
import withWeatherData from "../../UniqueComponents/withWeatherData"; // HOC for weather data
import "./Challenge9.css"; // Import corresponding CSS file for styles

// Fallback content for non-JS environments
function FallbackContent() {
  return (
    <div className="fallback-container">
      <h3>Limited Version: No JavaScript Detected</h3>
      <p>Your browser is not supporting JavaScript, but you can still see core content like this.</p>
    </div>
  );
}

function Day60({ weather, bgColor }) {
  const [enhanced, setEnhanced] = useState(false); // State to track if enhanced version is enabled

  // Toggle enhanced version
  const toggleEnhancement = () => {
    setEnhanced(!enhanced); // Toggle the enhanced state
  };

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 60 - Progressive Enhancement in React</h1>
      <DayInfoComponent
        date="September 21, 2024" // Date for Day 60
        dayNumber="Day 60" // Day number
        challenge="Implement progressive enhancement strategies" // Challenge description
        weather={weather} // Weather data passed as prop
      />

      {/* Fallback content for non-JS environments */}
      <noscript>
        <FallbackContent />
      </noscript>

      {/* Progressive enhancement feature */}
      <div className="enhancement-container">
        {enhanced ? (
          <>
            <h3>Enhanced Version Enabled</h3>
            <p>This is the enhanced version of the app with full interactivity.</p>
            <button onClick={toggleEnhancement}>Disable Enhanced Version</button>
          </>
        ) : (
          <>
            <h3>Basic Version</h3>
            <p>This version works without JavaScript for core functionality.</p>
            <button onClick={toggleEnhancement}>Enable Enhanced Version</button>
          </>
        )}
      </div>

      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I implemented progressive enhancement strategies by providing a fallback for non-JS environments and allowing users to toggle between basic and enhanced versions.
      </p>
    </div>
  );
}

const Day60WithWeatherData = withWeatherData(Day60); // Wrap Day60 with weather data HOC

// Export the component wrapped in ErrorBoundary for error handling
export default function Day60WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day60WithWeatherData />
    </ErrorBoundary>
  );
}

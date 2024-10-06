import React, { useState } from "react"; // Import React and useState for state management
import DayInfoComponent from "../DayInfoComponent"; // Import the component for displaying day info
import ErrorBoundary from "../ErrorBoundary"; // Import ErrorBoundary for error handling
import withWeatherData from "../../UniqueComponents/withWeatherData"; // HOC for weather data
import "./Challenge9.css"; // Import CSS for styling

// Simulate how Server-Side Rendering (SSR) vs Client-Side Rendering (CSR) works
function SSRVisualizer({ mode }) {
  return (
    <div className="ssr-visualizer">
      {mode === "SSR" ? (
        // Content displayed when SSR mode is active
        <div className="ssr-box">
          <h2>SSR Mode</h2>
          <p>
            Server pre-renders HTML and sends it to the client. The content is immediately visible.
          </p>
        </div>
      ) : (
        // Content displayed when CSR mode is active
        <div className="csr-box">
          <h2>CSR Mode</h2>
          <p>
            JavaScript is loaded first, and then the content appears. Initial content may be delayed.
          </p>
        </div>
      )}
    </div>
  );
}

function Day62({ weather, bgColor }) {
  const [renderMode, setRenderMode] = useState("CSR"); // State to track the current rendering mode

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 62 - Server-Side Rendering (SSR)</h1>
      <DayInfoComponent
        date="September 23, 2024" // Date for Day 62
        dayNumber="Day 62" // Day number
        challenge="Set up server-side rendering for a React app" // Challenge description
        weather={weather} // Weather data passed as prop
      />

      {/* Toggle between SSR and CSR mode */}
      <div className="toggle-buttons">
        <button
          className={`toggle-button ${renderMode === "SSR" ? "active" : ""}`} // Highlight active button
          onClick={() => setRenderMode("SSR")} // Set render mode to SSR
        >
          SSR Mode
        </button>
        <button
          className={`toggle-button ${renderMode === "CSR" ? "active" : ""}`} // Highlight active button
          onClick={() => setRenderMode("CSR")} // Set render mode to CSR
        >
          CSR Mode
        </button>
      </div>

      {/* Visualization of SSR vs CSR */}
      <SSRVisualizer mode={renderMode} /> {/* Pass the current render mode to the visualizer */}

      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I set up server-side rendering (SSR) in my React app to improve
        performance and SEO. Toggle between SSR and CSR to see the difference in how content
        is rendered.
      </p>
    </div>
  );
}

const Day62WithWeatherData = withWeatherData(Day62); // Wrap Day62 with weather data HOC

// Export the component wrapped in ErrorBoundary for error handling
export default function Day62WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day62WithWeatherData />
    </ErrorBoundary>
  );
}

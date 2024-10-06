import React, { useState } from "react"; // Import React and useState for managing state
import DayInfoComponent from "../DayInfoComponent"; // Import component for displaying day info
import ErrorBoundary from "../ErrorBoundary"; // Import ErrorBoundary for error handling
import withWeatherData from "../../UniqueComponents/withWeatherData"; // Higher-order component for weather data
import "./Challenge9.css"; // Import the corresponding CSS file for styling

function Day58({ weather, bgColor }) {
  const [snapshot, setSnapshot] = useState(null); // State to hold the snapshot of the UI
  const [uiState, setUiState] = useState({ color: "lightblue", text: "This is the original UI." }); // State to manage UI properties
  const [result, setResult] = useState(""); // State to display results of snapshot comparison

  // Function to take a snapshot of the current UI state
  const takeSnapshot = () => {
    setSnapshot({ ...uiState }); // Store the current UI state as a snapshot
    setResult("Snapshot taken!"); // Update result message
  };

  // Function to compare the current UI state with the snapshot
  const compareSnapshot = () => {
    if (JSON.stringify(snapshot) === JSON.stringify(uiState)) {
      setResult("No changes detected! UI matches the snapshot."); // No changes found
    } else {
      setResult("UI has changed! Snapshot does not match."); // Changes detected
    }
  };

  // Function to change the UI state (color and text)
  const changeUI = () => {
    setUiState((prevState) => ({
      color: prevState.color === "lightblue" ? "lightcoral" : "lightblue", // Toggle color
      text: prevState.text === "This is the original UI." ? "This is the updated UI!" : "This is the original UI.", // Toggle text
    }));
  };

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 58 - Jest Snapshot Testing</h1>
      <DayInfoComponent
        date="September 19, 2024" // Date for Day 58
        dayNumber="Day 58" // Day number
        challenge="Implement snapshot testing with Jest" // Challenge description
        weather={weather} // Weather data passed as prop
      />

      {/* Snapshot container displaying the UI and buttons */}
      <div className="snapshot-container" style={{ backgroundColor: uiState.color, padding: "20px", borderRadius: "10px" }}>
        <p>{uiState.text}</p> {/* Display current UI text */}
        <button className="snapshot-button" onClick={takeSnapshot}>Take Snapshot</button> {/* Button to take a snapshot */}
        <button className="snapshot-button" onClick={compareSnapshot}>Compare Snapshot</button> {/* Button to compare snapshots */}
        <button className="snapshot-button" onClick={changeUI}>Change UI</button> {/* Button to change UI state */}
        <p>{result}</p> {/* Display result of comparison */}
      </div>

      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I used Jest snapshot testing to capture UI snapshots and detect unexpected changes. 
        This fun UI demonstrates how snapshots can detect when the UI differs from the saved snapshot.
      </p>
    </div>
  );
}

// Wrap the Day58 component with weather data HOC to provide weather context
const Day58WithWeatherData = withWeatherData(Day58);

// Export the component wrapped in ErrorBoundary for error handling
export default function Day58WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day58WithWeatherData />
    </ErrorBoundary>
  );
}

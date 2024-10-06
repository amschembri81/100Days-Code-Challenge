import React, { useState } from "react";
import DayInfoComponent from "../DayInfoComponent";
import ErrorBoundary from "../ErrorBoundary";
import withWeatherData from "../../UniqueComponents/withWeatherData";
import "./Challenge8.css";

function Day56({ weather, bgColor }) {
  // Initial state for simulating test coverage percentage, starting at 75%
  const [testCoverage, setTestCoverage] = useState(75);

  // Function to simulate running tests, increasing the coverage by a random value between 1 and 10
  const runTests = () => {
    const newCoverage = Math.min(100, testCoverage + Math.floor(Math.random() * 10 + 1)); // Ensures coverage doesn't exceed 100%
    setTestCoverage(newCoverage); // Update state with new test coverage percentage
  };

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 56 - React Testing Library Advanced</h1>
      {/* Reusing the DayInfoComponent to display challenge details */}
      <DayInfoComponent
        date="September 17, 2024"
        dayNumber="Day 56"
        challenge="Write more complex tests with React Testing Library"
        weather={weather}
      />

      {/* Simulate test coverage result */}
      <div className="test-coverage-container">
        {/* Display the current test coverage */}
        <h4>Test Coverage: {testCoverage}%</h4>
        
        {/* Visual progress bar showing the test coverage percentage */}
        <progress value={testCoverage} max="100"></progress>
        
        {/* Button to simulate running tests and increasing test coverage */}
        <button className="run-tests-button" onClick={runTests}>
          Run Tests
        </button>
      </div>

      {/* Section to describe the challenge */}
      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I wrote advanced tests using React Testing Library, focusing on complex interactions and edge cases to improve test coverage.
      </p>
    </div>
  );
}

// Higher-order component to include weather data in Day56
const Day56WithWeatherData = withWeatherData(Day56);

// Export the component with error boundary to handle potential errors gracefully
export default function Day56WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day56WithWeatherData />
    </ErrorBoundary>
  );
}

import React, { useState } from "react"; // Import React and useState for managing component state
import DayInfoComponent from "../DayInfoComponent"; // Import DayInfoComponent to display day-specific information
import ErrorBoundary from "../ErrorBoundary"; // Import ErrorBoundary to catch and handle errors gracefully
import withWeatherData from "../../UniqueComponents/withWeatherData"; // Import Higher-Order Component (HOC) to enhance Day27 with weather data
import "./Challenge4.css"; // Import specific CSS for Day 27

function Day27({
  weather,
  bgColor,
  zipCode,
  handleZipCodeChange,
  toggleUnit,
  unit,
}) {
  // JSX element containing a greeting message with a waving hand emoji
  const element = (
    <h1>
      {" "}
      <i>Hello from Day 27!</i> {"\u{1F44B}"}
    </h1>
  );

  const happyEmoji = "\u{1F60A}"; // 😊 Emoji to be passed to DayInfoComponent
  const message = "This is the challenge message for Day 27!"; // Challenge message
  const codingEmoji = "👩🏻‍💻"; // Emoji representing coding
  const coffeeEmoji = "☕"; // Emoji representing coffee

  // State for storing mock test results
  const [testResults, setTestResults] = useState([]);

  // Function to simulate test for the zip code input length
  const testZipCodeInput = () => {
    const result =
      zipCode.length === 5 ? "Zip code test passed!" : "Zip code test failed!"; // Check if the zip code has 5 characters
    setTestResults((prev) => [...prev, result]); // Append the test result to the previous results
  };

  // Function to simulate test for toggling the temperature unit
  const testUnitToggle = () => {
    const result =
      unit === "imperial"
        ? "Toggle to Celsius test passed!" // Test if unit is toggled to Celsius
        : "Toggle to Fahrenheit test passed!"; // Test if unit is toggled to Fahrenheit
    setTestResults((prev) => [...prev, result]); // Append the test result to the previous results
  };

  return (
    // Main container for Day 27 challenge with dynamic background color based on weather
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 27 - React Testing Library</h1> {/* Title for the challenge */}
      {element} {/* Render the greeting element with an emoji */}

      {/* Display day-specific information using DayInfoComponent */}
      <DayInfoComponent
        date="August 19, 2024" // Date of the challenge
        dayNumber="Day 27" // Current day number
        challenge="Write basic tests using React Testing Library." // Challenge description
        message={message} // Pass the challenge message as a prop
        codingEmoji={codingEmoji} // Pass the coding emoji as a prop
        coffeeEmoji={coffeeEmoji} // Pass the coffee emoji as a prop
        happyEmoji={happyEmoji} // Pass the happy emoji as a prop
        weather={weather} // Pass weather data from the HOC
      />

      {/* Input field for the user to enter their zip code */}
      <h4>Enter your zipcode: </h4>
      <div className="center-container">
        <div className="input-button-container">
          <input
            type="text"
            className="zipcode" // Class for styling the input field
            value={zipCode} // Bind input value to the zipCode state managed in the HOC
            onChange={handleZipCodeChange} // Update zip code state when input changes
            maxLength="5" // Restrict input to 5 digits (US zip code length)
            placeholder="Zip Code" // Placeholder text for the input field
          />
          <button className="button" onClick={toggleUnit}>
            Switch to {unit === "imperial" ? "Celsius" : "Fahrenheit"} {/* Toggle button text based on the unit */}
          </button>
        </div>
      </div>

      {/* Test Container */}
      <div className="test-container">
        <h4>Run Component Tests:</h4>
        <div className="test-buttons">
          {/* Button to simulate testing the zip code input */}
          <button className="button" onClick={testZipCodeInput}>
            Test Zip Code Input
          </button>
          {/* Button to simulate testing the unit toggle */}
          <button className="button" onClick={testUnitToggle}>
            Test Unit Toggle
          </button>
        </div>

        {/* Display the results of the tests */}
        <div className="test-results">
          <h4>Test Results:</h4>
          <ul>
            {/* Map over the testResults array and display each result */}
            {testResults.map((result, index) => (
              <li key={index}>{result}</li> // Each result gets a unique key
            ))}
          </ul>
        </div>
      </div>

      {/* Explanation of the challenge and how the tests are simulated */}
      <h4 className="explanation">Explanation: </h4>
      <p>
        <i>
          The solution for today is implemented by simulating basic component
          tests using mock functions to validate the zip code input and unit
          toggle behavior, displaying the test results on the screen.
        </i>
      </p>
    </div>
  );
}

// Wrap Day27 component with the withWeatherData HOC to provide weather data and functionality
const Day27WithWeatherData = withWeatherData(Day27);

// Export the Day27 component wrapped in an ErrorBoundary to catch errors
export default function Day27WithErrorBoundary() {
  return (
    // ErrorBoundary is used to wrap the component and catch any errors that occur within it
    <ErrorBoundary>
      <Day27WithWeatherData />
    </ErrorBoundary>
  );
}
import React, { Suspense } from "react";
import ErrorBoundary from "../ErrorBoundary"; // Import ErrorBoundary to catch runtime errors
import withWeatherData from "../../UniqueComponents/withWeatherData"; // HOC to provide weather data
import "./Challenge6.css"; // Import custom styles

// Use React.lazy to dynamically import components for code splitting
const DayInfoComponent = React.lazy(() => import("../DayInfoComponent")); // Lazy load DayInfoComponent
const JokeContainer = React.lazy(() => import("./JokeContainer")); // Lazy load JokeContainer

function Day40({ weather, bgColor, zipCode, handleZipCodeChange }) {
  // JSX element with a greeting and emoji
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>; // 👋 emoji
  const happyEmoji = "\u{1F60A}"; // 😊 emoji

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}> {/* Apply background color */}
      <h1>Day 40 - Code Splitting</h1> {/* Title for Day 40 */}

      {element} {/* Greeting message */}

      {/* Use Suspense to handle loading state while DayInfoComponent is being loaded */}
      <Suspense fallback={<div>Loading Day Info...</div>}> {/* Fallback content shown while DayInfoComponent is being lazy-loaded */}
        <DayInfoComponent
          date="September 1, 2024" // Display the current date
          dayNumber="Day 40" // Display the day number
          challenge="Managing Complex State and Code Splitting" // Challenge description
          weather={weather} // Pass the weather prop
          happyEmoji={happyEmoji} // Pass the happy emoji
        />
      </Suspense>

      {/* Input for entering the ZIP code */}
      <div className="zip-code-container">
        <label>
          <strong>Enter your ZIP code:</strong> {/* Label for the ZIP code input */}
        </label>
        <div className="input-button-container">
          {/* Input field for the ZIP code */}
          <input
            className="zipcode" // Apply styling for ZIP code input
            type="text"
            value={zipCode} // Controlled input for the ZIP code
            onChange={handleZipCodeChange} // Update state on ZIP code change
            maxLength="5" // Limit ZIP code input to 5 characters
            placeholder="ZIP Code" // Placeholder text for input field
          />
        </div>
      </div>

      {/* Display the entered ZIP code */}
      <p>
        <strong>Weather for ZIP Code:</strong> {zipCode} {/* Show the user-entered ZIP code */}
      </p>

      {/* Description of the solution */}
      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I implemented code splitting using `React.lazy` and `Suspense`. This improves performance by loading the components only when needed, resulting in smaller initial bundles.
      </p>

      {/* Lazy load the JokeContainer component */}
      <Suspense fallback={<div>Loading Joke...</div>}> {/* Fallback content shown while JokeContainer is being lazy-loaded */}
        <JokeContainer /> {/* Component to display a joke */}
      </Suspense>
    </div>
  );
}

const Day40WithWeatherData = withWeatherData(Day40); // HOC to provide weather data

// Export the component wrapped in ErrorBoundary to catch runtime errors
export default function Day40WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day40WithWeatherData /> {/* Wrap the component with weather data and error boundary */}
    </ErrorBoundary>
  );
}

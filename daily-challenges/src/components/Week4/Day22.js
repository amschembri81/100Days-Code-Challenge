import React from "react"; // Import React for functional components
import DayInfoComponent from "../DayInfoComponent"; // Import DayInfoComponent to display day-specific information
import ErrorBoundary from "../ErrorBoundary"; // Import ErrorBoundary component to catch and handle errors
import withWeatherData from "../../UniqueComponents/withWeatherData"; // Import Higher-Order Component (HOC) to enhance Day22 with weather data
import "./Challenge4.css"; // Import specific CSS for Day 22

// Day22 component that receives weather data and handlers from the withWeatherData HOC
function Day22({ weather, bgColor, zipCode, handleZipCodeChange, toggleUnit, unit }) {
  // JSX element containing a greeting message with a waving hand emoji
  const element = (
    <h1>
      {" "}
      <i>Nice to see you!</i> {"\u{1F44B}"}
    </h1>
  );

  const happyEmoji = "\u{1F60A}"; // 😊 Emoji to be passed to DayInfoComponent
  const message = "This is the challenge message for Day 22!"; // Challenge message
  const codingEmoji = "👩🏻‍💻"; // Example emoji for coding
  const coffeeEmoji = "☕"; // Example emoji for coffee

  return (
    // Main container for Day 22 challenge with dynamic background color based on weather
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 22 - Error Boundaries</h1> {/* Title for the challenge */}
      {element} {/* Render the greeting element with an emoji */}

      {/* Display day-specific information using DayInfoComponent */}
      <DayInfoComponent
        date="August 14, 2024" // Date of the challenge
        dayNumber="Day 22" // Current day number
        challenge="Implement error boundaries to handle errors gracefully." // Challenge description
        message={message} // Pass the challenge message as a prop
        codingEmoji={codingEmoji} // Pass the coding emoji as a prop
        coffeeEmoji={coffeeEmoji} // Pass the coffee emoji as a prop
        happyEmoji={happyEmoji} // Pass the happy emoji as a prop
        weather={weather} // Pass weather data from the HOC
      />

      {/* Input field for the user to enter their zip code */}
      <div className="zip-code-container">
        <label>
          <h5>
            <strong>Enter your zip code:</strong>
          </h5>
          <input
            className="zipcode" // Class for styling the input field
            type="text"
            value={zipCode} // Bind input value to the zipCode state managed in the HOC
            onChange={handleZipCodeChange} // Update zip code state when input changes
            maxLength="5" // Restrict input to 5 digits (US zip code length)
            placeholder="Zip Code" // Placeholder text for the input field
          />
        </label>
      </div>

      {/* Button to toggle between Celsius and Fahrenheit */}
      <button className="button" onClick={toggleUnit}>
        Switch to {unit === "imperial" ? "Celsius" : "Fahrenheit"} {/* Toggle button text based on the unit */}
      </button>

      {/* Explanation of the challenge and how the ErrorBoundary is used */}
      <h4 className="explanation">Explanation: </h4>
      <p>
        <i>
          The challenge for today is solved by using an ErrorBoundary to gracefully catch and handle any errors within the Day22 component, ensuring the app doesn’t crash. Additionally, the withWeatherData HOC is used to fetch weather data and pass it to Day22, allowing the component to focus on rendering the UI while managing dynamic weather updates.
        </i>
      </p>
    </div>
  );
}

// Wrap Day22 component with the withWeatherData HOC to provide weather data and functionality
const Day22WithWeatherData = withWeatherData(Day22);

// Export the Day22 component wrapped in an ErrorBoundary to catch errors
export default function Day22WithErrorBoundary() {
  return (
    // ErrorBoundary is used to wrap the component and catch any errors that occur within it
    <ErrorBoundary>
      <Day22WithWeatherData />
    </ErrorBoundary>
  );
}
import React, { useState } from "react"; // Import React and useState for managing component state
import DayInfoComponent from "../DayInfoComponent"; // Import DayInfoComponent to display day-specific information
import ErrorBoundary from "../ErrorBoundary"; // Import ErrorBoundary to catch and handle errors gracefully
import withWeatherData from "../../UniqueComponents/withWeatherData"; // Import Higher-Order Component (HOC) to enhance Day24 with weather data
import "./Challenge4.css"; // Import specific CSS for Day 24

// HeavyComponent is optimized using React.memo to prevent unnecessary re-renders
const HeavyComponent = React.memo(({ color }) => {
  console.log("Rendering HeavyComponent with color:", color); // Log rendering to the console
  return (
    // Render the heavy component with the selected background color
    <div className="heavy-item" style={{ backgroundColor: color, padding: '10px', margin: '10px' }}>
      Heavy Component with Color: {color} {/* Display the selected color */}
    </div>
  );
});

function Day24({ weather, bgColor, zipCode, handleZipCodeChange, toggleUnit, unit }) {
  // JSX element containing a greeting message with a waving hand emoji
  const element = (
    <h1>
      {" "}
      <i>Welcome!</i> {"\u{1F44B}"}
    </h1>
  );

  const happyEmoji = "\u{1F60A}"; // 😊 Emoji to be passed to DayInfoComponent
  const message = "This is the challenge message for Day 24!"; // Challenge message
  const codingEmoji = "👩🏻‍💻"; // Emoji representing coding
  const coffeeEmoji = "☕"; // Emoji representing coffee

  // useState hook to manage the background color of the heavy component
  const [color, setColor] = useState('#ff6347'); // Initial color for the heavy component (Tomato)

  // Function to handle changes in the color picker input
  const handleColorChange = (event) => {
    setColor(event.target.value); // Update the color state when the user selects a new color
  };

  return (
    // Main container for Day 24 challenge with dynamic background color based on weather
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 24 - Optimizing Performance</h1> {/* Title for the challenge */}
      {element} {/* Render the greeting element with an emoji */}

      {/* Display day-specific information using DayInfoComponent */}
      <DayInfoComponent
        date="August 16, 2024" // Date of the challenge
        dayNumber="Day 24" // Current day number
        challenge="Optimize rendering using PureComponent and memo." // Challenge description
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

      {/* Color Picker to dynamically change HeavyComponent's background color */}
      <div className="color-picker-container">
        <h3>Select a Color for the Heavy Component:</h3>
        <input
          type="color" // Color input field
          value={color} // Bind input value to the color state
          onChange={handleColorChange} // Update color state when input changes
          className="color-picker" // Class for styling the color picker
        />
      </div>

      {/* Render the HeavyComponent with the selected color */}
      <div className="heavy-container">
        <HeavyComponent color={color} /> {/* Pass the color state as a prop to HeavyComponent */}
      </div>

      {/* Explanation of the challenge and how React.memo is used to optimize performance */}
      <h4 className="explanation">Explanation: </h4>
      <p>
        <i>
          The solution for day 24 uses React.memo to optimize the rendering of a heavy component by preventing unnecessary re-renders. This allows the user to choose a color that updates the component efficiently without performance issues.
        </i>
      </p>
    </div>
  );
}

// Wrap Day24 component with the withWeatherData HOC to provide weather data and functionality
const Day24WithWeatherData = withWeatherData(Day24);

// Export the Day24 component wrapped in an ErrorBoundary to catch errors
export default function Day24WithErrorBoundary() {
  return (
    // ErrorBoundary is used to wrap the component and catch any errors that occur within it
    <ErrorBoundary>
      <Day24WithWeatherData />
    </ErrorBoundary>
  );
}
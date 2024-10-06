import React from "react"; // Import React for functional components
import DayInfoComponent from "../DayInfoComponent"; // Import DayInfoComponent to display day-specific information
import withWeatherData from "../../UniqueComponents/withWeatherData"; // Import the Higher-Order Component (HOC) to enhance Day21 with weather data logic
import "../../Challenges.css"; // Import global CSS for styling
import "./Challenge3.css"; // Import specific CSS for Day 21

// Day21 component that receives props from the withWeatherData HOC
function Day21({ weather, bgColor, zipCode, handleZipCodeChange, toggleUnit, unit }) {
  // JSX element containing a greeting message with a waving hand emoji
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;

  const happyEmoji = "\u{1F60A}"; // 😊 Emoji to be passed to DayInfoComponent

  return (
    // Main container for Day 21 challenge with dynamic background color based on weather
    <div className="day-container" style={{ backgroundColor: bgColor }}> 
      <h1>Day 21 - Higher Order Components (HOC)</h1> {/* Title for the challenge */}
      {element} {/* Render the greeting element with an emoji */}

      {/* Display day-specific information using DayInfoComponent */}
      <DayInfoComponent
        date="August 13, 2024" // Date of the challenge
        dayNumber="Day 21" // Current day number
        challenge="Create and use a higher-order component" // Challenge description
        happyEmoji={happyEmoji} // Pass the happyEmoji to the component
        weather={weather} // Pass fetched weather data from the HOC
      />

      {/* Input field for the user to enter their zip code */}
      <div className="zip-code-container">
        <label>
          <h5><strong>Enter your zip code:</strong></h5>
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

      {/* Explanation of the challenge and how the HOC is used */}
      <h4 className="explanation">Explanation: </h4>
      <p>
        <i>
          The challenge for day 21 is solved by using a Higher-Order Component (HOC) withWeatherData to handle weather fetching logic and pass down the weather data, background color, and user input handlers to the Day21 component. This allows Day21 to display weather information and dynamically change the background color based on the current weather conditions while the HOC abstracts the logic.
        </i>
      </p>
    </div>
  );
}

// Export the Day21 component wrapped in the withWeatherData HOC
export default withWeatherData(Day21);
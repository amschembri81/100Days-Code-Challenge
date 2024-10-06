import React, { useState } from "react"; // Import React and useState for managing component state
import axios from "axios"; // Import Axios for making HTTP requests
import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import DayInfoComponent from "../DayInfoComponent"; // Import DayInfoComponent to display day-specific information
import ErrorBoundary from "../ErrorBoundary"; // Import ErrorBoundary to catch and handle errors gracefully
import withWeatherData from "../../UniqueComponents/withWeatherData"; // Import Higher-Order Component (HOC) to enhance Day29 with weather data
import "./Challenge5.css"; // Import specific CSS for Day 29

function Day29({ weather, bgColor, zipCode, handleZipCodeChange, unit }) {
  // JSX element containing a greeting message with a waving hand emoji
  const element = (
    <h1>
      {" "}
      <i>Welcome to Day 29!</i> {"\u{1F44B}"}
    </h1>
  );

  const happyEmoji = "\u{1F60A}"; // 😊 Emoji to be passed to DayInfoComponent
  const message = "This is the challenge message for Day 29!"; // Challenge message
  const codingEmoji = "👩🏻‍💻"; // Emoji representing coding
  const coffeeEmoji = "☕"; // Emoji representing coffee

  // Access theme from Redux state (e.g., dark or light theme)
  const theme = useSelector((state) => state.weather.theme); // Access theme from the Redux weather slice

  // State to hold success or error messages when fetching weather data
  const [fetchStatusMessage, setFetchStatusMessage] = useState("");

  // Custom hook logic for validating ZIP code input
  const isValidZipCode = zipCode.length === 5 && !isNaN(zipCode); // ZIP code is valid if it's a 5-digit number

  // Function to make an API call using Axios
  const fetchWeatherData = async () => {
    // If the ZIP code is not valid, show an error message
    if (!isValidZipCode) {
      setFetchStatusMessage("Please enter a valid 5-digit ZIP code.");
      return;
    }

    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY; // Use API key from .env file for security
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=${unit}`; // API URL with zip code and unit parameters

    try {
      // Make the API request and handle response
      const response = await axios.get(url);
      if (response.status === 200) {
        // If the response status is 200 (OK), show success message
        setFetchStatusMessage("Good news! Weather fetched correctly.");
      } else {
        // If the response status is not 200, show an error message
        setFetchStatusMessage("Oh, no! Failed to fetch weather data. Please check the zip code and try again.");
      }
    } catch (error) {
      // Catch and log any errors that occur during the API request
      console.error("Error fetching weather data:", error);
      setFetchStatusMessage("We're sorry! Please check the zip code and try again."); // Show error message
    }
  };

  return (
    // Main container for Day 29 challenge with dynamic background color based on weather
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 29 - Custom Hooks for Validation</h1> {/* Title for the challenge */}
      {element} {/* Render the greeting element with an emoji */}

      {/* Display day-specific information using DayInfoComponent */}
      <DayInfoComponent
        date="August 21, 2024" // Date of the challenge
        dayNumber="Day 29" // Current day number
        challenge="Use custom hooks for ZIP code validation." // Challenge description
        message={message} // Pass the challenge message as a prop
        codingEmoji={codingEmoji} // Pass the coding emoji as a prop
        coffeeEmoji={coffeeEmoji} // Pass the coffee emoji as a prop
        happyEmoji={happyEmoji} // Pass the happy emoji as a prop
        weather={weather} // Pass weather data from the HOC
        theme={theme} // Pass the theme prop to the component
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
          <button className="button" onClick={fetchWeatherData}>
            Get Weather {/* Button to fetch weather data */}
          </button>
        </div>
      </div>

      {/* Display the status of the weather data fetch operation */}
      <div className="weather-display">
        <h3>Weather Data Status:</h3>
        <p>{fetchStatusMessage}</p> {/* Display success or error message */}
      </div>

      {/* Explanation of the challenge and how custom hooks are used */}
      <h4 className="explanation">Explanation: </h4>
      <p>
        <i>
          The solution for today demonstrates how to create a custom hook for ZIP code validation, ensuring the user input
          is a valid 5-digit number before making the API call.
        </i>
      </p>
    </div>
  );
}

// Wrap Day29 component with the withWeatherData HOC to provide weather data and functionality
const Day29WithWeatherData = withWeatherData(Day29);

// Export the Day29 component wrapped in an ErrorBoundary to catch errors
export default function Day29WithErrorBoundary() {
  return (
    // ErrorBoundary is used to wrap the component and catch any errors that occur within it
    <ErrorBoundary>
      <Day29WithWeatherData />
    </ErrorBoundary>
  );
}
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, addSearchHistory } from "../redux/week6Slice"; // Import the thunk action to fetch weather and the action to add to search history
import DayInfoComponent from "../DayInfoComponent"; // Component to display day-specific information
import ErrorBoundary from "../ErrorBoundary"; // Error boundary component to handle runtime errors
import withWeatherData from "../../UniqueComponents/withWeatherData"; // Higher-order component to provide weather data
import "./Challenge6.css"; // Import custom styles

function Day38({ weather, bgColor }) {
  // JSX element for greeting and emojis
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>; // 👋 emoji for interaction
  const happyEmoji = "\u{1F60A}"; // 😊 emoji for happy greeting

  const dispatch = useDispatch(); // Hook to dispatch actions to Redux
  const [zipCode, setZipCode] = useState(""); // State to store the user's ZIP code input
  const { loading, error, searchHistory } = useSelector((state) => state.week6); // Extract loading, error, and search history from Redux state

  // Function to fetch weather on ZIP code submission
  const handleFetchWeather = () => {
    if (zipCode.length === 5) { // Ensure the ZIP code is valid (5 digits)
      dispatch(fetchWeather(zipCode)); // Dispatch action to fetch weather data based on the ZIP code
      dispatch(addSearchHistory(zipCode)); // Dispatch action to add the ZIP code to the search history in Redux state
      setZipCode(""); // Clear the input field after submitting the ZIP code
    }
  };

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 38 - Redux DevTools</h1> {/* Day title */}
      {element} {/* Greeting message */}
      <DayInfoComponent
        date="August 30, 2024" // Current date
        dayNumber="Day 38" // Day number of the challenge
        challenge="Redux DevTools for Tracking Weather Search History" // Challenge description
        weather={loading ? "Loading weather..." : weather} // Display loading message or weather data
        happyEmoji={happyEmoji} // Pass the happy emoji for display
      />
      {/* Display error message if there's an error fetching weather data */}
      {error && <p className="error">{error}</p>}

      {/* ZIP Code Input and Button Section */}
      <div className="zip-code-container">
        <label>
          <h5>Enter your ZIP code:</h5> {/* Label for ZIP code input */}
        </label>
        <div className="input-button-container">
          {/* Input field for ZIP code */}
          <input
            className="zipcode" // Class for styling
            type="text"
            value={zipCode} // Controlled input for ZIP code
            onChange={(e) => setZipCode(e.target.value)} // Update ZIP code state on input change
            maxLength="5" // Limit input to 5 characters
            placeholder="ZIP Code" // Placeholder text
          />
          {/* Button to fetch weather data */}
          <button className="weatherbutton" onClick={handleFetchWeather}>
            Fetch Weather
          </button>
        </div>
      </div>

      {/* Search History Section */}
      <div className="search-history-container">
        <h3>Search History</h3> {/* Title for the search history section */}
        <ul className="search-history-list"> {/* Unordered list of search history */}
          {/* Render each ZIP code from the search history */}
          {searchHistory.map((zip, index) => (
            <li key={index}>{zip}</li> // Display each ZIP code in the history
          ))}
        </ul>
      </div>

      {/* Explanation section */}
      <h4 className="explanation">Explanation:</h4>
      <p>
        In this challenge, I used Redux DevTools to observe the search history
        of weather queries. As you fetch weather for different ZIP codes, the
        search history is updated in the Redux state. You can track the changes
        in real-time using Redux DevTools, making it easier to debug and
        understand how the state evolves.
      </p> {/* Explanation about how Redux DevTools is used */}
    </div>
  );
}

const Day38WithWeatherData = withWeatherData(Day38); // HOC to provide weather data to the component

export default function Day38WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day38WithWeatherData /> {/* ErrorBoundary to catch runtime errors */}
    </ErrorBoundary>
  );
}

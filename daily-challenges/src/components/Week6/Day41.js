import React, { useState, useCallback, memo } from "react";
import DayInfoComponent from "../DayInfoComponent"; // Component to display day-specific information
import ErrorBoundary from "../ErrorBoundary"; // Component to catch runtime errors
import withWeatherData from "../../UniqueComponents/withWeatherData"; // Higher-order component for providing weather data
import "./Challenge6.css"; // Import custom styles

// Memoized component to display the weather comparison result
const ComparisonResult = memo(({ temp1, temp2, zip1, zip2 }) => {
  // Function to compare the weather between two ZIP codes
  const compareWeather = () => {
    if (temp1 === temp2) {
      return `The temperatures in ${zip1} and ${zip2} are the same.`; // Return if temperatures are the same
    }
    return temp1 > temp2
      ? `${zip1} is warmer than ${zip2}.` // Return if the first ZIP code is warmer
      : `${zip2} is warmer than ${zip1}.`; // Return if the second ZIP code is warmer
  };

  return (
    <div className="comparison-result">
      <h3>Weather Comparison:</h3> {/* Title for the weather comparison */}
      <p>{compareWeather()}</p> {/* Display the result of the weather comparison */}
    </div>
  );
});

function Day41({ weather, temp1, bgColor }) {
  const [zipCode1, setZipCode1] = useState(""); // State for the first ZIP code input
  const [weather1, setWeather1] = useState(null); // Weather data for the first ZIP code
  const [temp1State, setTemp1State] = useState(null); // Temperature for the first ZIP code
  const [zipCode2, setZipCode2] = useState(""); // State for the second ZIP code input
  const [weather2, setWeather2] = useState(null); // Weather data for the second ZIP code
  const [temp2, setTemp2] = useState(null); // Temperature for the second ZIP code
  const [error, setError] = useState(null); // State to store error messages

  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>; // 👋 emoji for greeting
  const happyEmoji = "\u{1F60A}"; // 😊 emoji for a positive greeting

  // Function to fetch weather for the first ZIP code
  const handleFetchWeather1 = useCallback(() => {
    if (zipCode1.length === 5) { // Ensure ZIP code is valid
      const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode1},us&appid=${apiKey}&units=imperial`; // API URL for the first ZIP code

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.cod === 200) { // Check if the API response is successful
            const description = data.weather[0].description;
            const temp = data.main.temp;
            setWeather1(`${description}, ${temp}°F`); // Set weather description and temperature
            setTemp1State(temp); // Store temperature for comparison
            setError(null); // Clear any previous errors
          } else {
            setError("Invalid ZIP code. Please try again."); // Show error for invalid ZIP code
            setWeather1(null); // Clear weather if there's an error
            setTemp1State(null); // Reset temperature for the first ZIP code
          }
        })
        .catch((error) => {
          console.error("Error fetching weather for zip1:", error);
          setError("Failed to fetch weather. Please try again later."); // Handle fetch errors
        });
    } else {
      setError("Please enter a valid 5-digit ZIP code."); // Error if ZIP code is not valid
    }
  }, [zipCode1]);

  // Function to fetch weather for the second ZIP code
  const handleFetchWeather2 = useCallback(() => {
    if (zipCode2.length === 5) { // Ensure ZIP code is valid
      const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode2},us&appid=${apiKey}&units=imperial`; // API URL for the second ZIP code

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.cod === 200) { // Check if the API response is successful
            const description = data.weather[0].description;
            const temp = data.main.temp;
            setWeather2(`${description}, ${temp}°F`); // Set weather description and temperature
            setTemp2(temp); // Store temperature for comparison
            setError(null); // Clear any previous errors
          } else {
            setError("Invalid ZIP code. Please try again."); // Show error for invalid ZIP code
            setWeather2(null); // Clear weather if there's an error
            setTemp2(null); // Reset temperature for the second ZIP code
          }
        })
        .catch((error) => {
          console.error("Error fetching weather for zip2:", error);
          setError("Failed to fetch weather. Please try again later."); // Handle fetch errors
        });
    } else {
      setError("Please enter a valid 5-digit ZIP code."); // Error if ZIP code is not valid
    }
  }, [zipCode2]);

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}> {/* Apply background color */}
      <h1>Day 41 - Performance Optimization</h1> {/* Title for the challenge */}
      {element} {/* Greeting message */}
      <DayInfoComponent
        date="September 2, 2024" // Display the current date
        dayNumber="Day 41" // Day number of the challenge
        challenge="Optimizing Performance" // Description of the challenge
        weather={weather} // Pass the weather prop
        happyEmoji={happyEmoji} // Pass the happy emoji
      />

      {/* Weather comparison container */}
      <div className="weather-comparison-container">
        <h3>Compare Weather</h3> {/* Title for the comparison section */}

        {/* Inputs for the first and second ZIP codes */}
        <div className="zip-code-pair">
          {/* Input for the first ZIP code */}
          <div className="zip-code-container">
            <label>
              <h5>Enter the first ZIP code:</h5> {/* Label for the first ZIP code */}
            </label>
            <div className="input-button-container">
              <input
                className="zipcode" // Apply styling for ZIP code input
                type="text"
                value={zipCode1} // Controlled input for the first ZIP code
                onChange={(e) => setZipCode1(e.target.value)} // Update state on input change
                maxLength="5" // Limit ZIP code input to 5 characters
                placeholder="ZIP Code" // Placeholder text for input field
              />
              {/* Button to fetch weather for the first ZIP code */}
              <button className="weatherbutton" onClick={handleFetchWeather1}>
                Weather 1
              </button>
            </div>
          </div>

          {/* Input for the second ZIP code */}
          <div className="zip-code-container">
            <label>
              <h5>Enter the second ZIP code:</h5> {/* Label for the second ZIP code */}
            </label>
            <div className="input-button-container">
              <input
                className="zipcode" // Apply styling for ZIP code input
                type="text"
                value={zipCode2} // Controlled input for the second ZIP code
                onChange={(e) => setZipCode2(e.target.value)} // Update state on input change
                maxLength="5" // Limit ZIP code input to 5 characters
                placeholder="ZIP Code" // Placeholder text for input field
              />
              {/* Button to fetch weather for the second ZIP code */}
              <button className="weatherbutton" onClick={handleFetchWeather2}>
                Weather 2
              </button>
            </div>
          </div>
        </div>

        {/* Display weather for the first ZIP code */}
        {weather1 && (
          <div>
            <h3>Weather for ZIP Code {zipCode1}:</h3> {/* Title for weather data */}
            <p>{weather1}</p> {/* Display the weather data */}
          </div>
        )}

        {/* Display weather for the second ZIP code */}
        {error && <p className="error">{error}</p>} {/* Display any error messages */}
        {weather2 && (
          <div>
            <h3>Weather for ZIP Code {zipCode2}:</h3> {/* Title for weather data */}
            <p>{weather2}</p> {/* Display the weather data */}
          </div>
        )}

        {/* Show the comparison result when both weather data are available */}
        {weather1 && weather2 && temp1State !== null && temp2 !== null && (
          <ComparisonResult temp1={temp1State} temp2={temp2} zip1={zipCode1} zip2={zipCode2} />
        )}
      </div>

      {/* Explanation section */}
      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I optimized the performance of a weather comparison tool using React.memo and useCallback.
        The user can compare temperatures between two ZIP codes, and React.memo prevents unnecessary re-renders of the comparison component.
      </p>
    </div>
  );
}

const Day41WithWeatherData = withWeatherData(Day41); // Higher-order component to provide weather data

// Wrap the component in ErrorBoundary to catch runtime errors
export default function Day41WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day41WithWeatherData /> {/* Wrap the component with ErrorBoundary */}
    </ErrorBoundary>
  );
}

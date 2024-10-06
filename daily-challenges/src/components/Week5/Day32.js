import React, { useState, useCallback, useMemo, useEffect } from "react";
import axios from "axios"; // Axios is used for making API requests
import { useSelector } from "react-redux"; // useSelector is used to access Redux state
import DayInfoComponent from "../DayInfoComponent";
import ErrorBoundary from "../ErrorBoundary"; // ErrorBoundary ensures graceful error handling
import "./Challenge5.css";

function Day32() {
  // JSX element for greeting
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;
  
  // Emojis used in the app
  const happyEmoji = "\u{1F60A}"; // 😊
  const codingEmoji = "\u{1F4BB}"; // 💻
  const coffeeEmoji = "\u{2615}"; // ☕
  
  // Message for the day
  const message = "Today's challenge is about error handling!";

  // Access the theme from Redux
  const theme = useSelector((state) => state.weather.theme);

  // Local state for weather, background color, ZIP code, and units
  const [weather, setWeather] = useState(""); // Weather description
  const [bgColor, setBgColor] = useState("#ffffff"); // Background color based on weather
  const [zipCode, setZipCode] = useState(""); // ZIP code input
  const [unit, setUnit] = useState("imperial"); // Unit for temperature (imperial/metric)
  const [zipError, setZipError] = useState(""); // Error message for invalid ZIP code
  const [apiError, setApiError] = useState(""); // Error message for failed API requests

  // Memoize weather emojis based on weather conditions to avoid recalculating
  const weatherEmojis = useMemo(
    () => ({
      clear: "☀️",
      clouds: "☁️",
      rain: "🌧️",
      thunderstorm: "⛈️",
      snow: "❄️",
      mist: "🌫️",
    }),
    []
  );

  // Memoize background colors for specific weather conditions to avoid recalculating
  const weatherColors = useMemo(
    () => ({
      clear: "#f7d358", // Yellow for clear skies
      clouds: "#d3d3d3", // Gray for cloudy skies
      rain: "#a4a4a4", // Dark gray for rain
      thunderstorm: "#616161", // Dark gray for thunderstorms
      snow: "#f2f2f2", // White for snow
      mist: "#c0c0c0", // Light gray for mist
    }),
    []
  );

  // Function to fetch weather data from the OpenWeather API
  const fetchWeather = useCallback(
    async (zip, unit) => {
      // Validate the ZIP code length and ensure it's numeric
      if (zip.length !== 5 || isNaN(zip)) {
        setZipError("ZIP code must be exactly 5 digits.");
        setApiError(""); // Clear API error when zip error is set
        return;
      }

      setZipError(""); // Clear ZIP code error if valid ZIP code

      // Construct API URL with the provided ZIP code and temperature unit
      const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=${unit}`;

      try {
        // Fetch data from the OpenWeather API
        const response = await axios.get(url);
        const description = response.data.weather[0].description; // Get weather description
        const temp = response.data.main.temp; // Get temperature
        const mainWeather = response.data.weather[0].main.toLowerCase(); // Main weather condition
        const tempUnit = unit === "imperial" ? "°F" : "°C"; // Set temperature unit based on selected unit

        // Get corresponding emoji for weather condition
        const emoji = weatherEmojis[mainWeather] || "";
        
        // Format the weather data
        const weatherData = `${description}, ${temp}${tempUnit} ${emoji}`;
        
        // Set background color based on weather condition
        const color = weatherColors[mainWeather] || "#ffffff";

        setWeather(weatherData); // Set the weather data in state
        setBgColor(color); // Set background color in state
        setApiError(""); // Clear API error on success
      } catch (error) {
        console.error("Error fetching weather data:", error); // Log any errors
        setApiError("Failed to fetch weather data. Please try again later."); // Set error message for API failures
      }
    },
    [weatherEmojis, weatherColors] // Dependencies for useCallback to avoid recalculating
  );

  // Effect to automatically fetch weather when ZIP code or unit changes
  useEffect(() => {
    if (zipCode.length === 5) {
      fetchWeather(zipCode, unit); // Fetch weather if ZIP code is valid
    }
  }, [zipCode, unit, fetchWeather]); // Run the effect when zipCode or unit changes

  // Handle ZIP code input changes
  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value); // Update ZIP code in state
  };

  // Toggle between Fahrenheit and Celsius
  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "imperial" ? "metric" : "imperial")); // Toggle temperature unit
  };

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 32 - Error Handling</h1>
      {element}
      
      {/* Day info component */}
      <DayInfoComponent
        date="August 24, 2024"
        dayNumber="Day 32"
        challenge="Implement error handling in your application."
        happyEmoji={happyEmoji}
        codingEmoji={codingEmoji}
        coffeeEmoji={coffeeEmoji}
        message={message}
        weather={weather} // Pass weather data to DayInfoComponent
        theme={theme} // Pass theme from Redux
      />

      {/* Input field and button to fetch weather */}
      <div className="center-container">
        <div className="input-button-container">
          <form className="zip-code-form h5">
            <label>
              <h5>Enter your zip code:</h5>
              <input
                className="zipcode"
                type="text"
                value={zipCode} // Controlled input for ZIP code
                onChange={handleZipCodeChange} // Handle input change
                maxLength="5"
                placeholder="Zip Code"
              />
            </label>
            <button
              type="button"
              className="button fetch-button"
              onClick={() => fetchWeather(zipCode, unit)} // Fetch weather when button is clicked
            >
              Fetch Weather
            </button>
          </form>
        </div>
      </div>

      {/* Error messages for invalid ZIP code or failed API requests */}
      {zipError && <p className="error">{zipError}</p>}
      {apiError && <p className="error">{apiError}</p>}

      {/* Button to toggle between Fahrenheit and Celsius */}
      <button className="button" onClick={toggleUnit}>
        Switch to {unit === "imperial" ? "Celsius" : "Fahrenheit"}
      </button>

      {/* Explanation of today's challenge */}
      <h3 className="explanation">Explanation: </h3>
      <p>
        <i>
          In today's challenge, I added error handling for both invalid ZIP codes and API failures. 
          If the ZIP code isn't a 5-digit number, the user is notified. If the API request fails, 
          the app displays an error message explaining the issue. The app also allows the user to switch 
          between Fahrenheit and Celsius. Weather data is fetched using the OpenWeather API, and the 
          background color of the app dynamically changes based on the current weather conditions.
        </i>
      </p>
    </div>
  );
}

// Wrap Day32 component with ErrorBoundary for better error handling
export default function Day32WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day32 />
    </ErrorBoundary>
  );
}

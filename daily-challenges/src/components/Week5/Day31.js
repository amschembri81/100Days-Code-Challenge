import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios"; // Axios is used for API calls
import { useDispatch, useSelector } from "react-redux"; // Used for dispatching actions and accessing Redux state
import { incrementCounter, decrementCounter } from '../redux/actions'; // Import Redux actions for incrementing and decrementing the counter
import DayInfoComponent from "../DayInfoComponent";
import ErrorBoundary from "../ErrorBoundary";
import "./Challenge5.css";

function Day31() {
  const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store

  // Accessing state from Redux store
  const unit = useSelector((state) => state.weather.unit); // Unit for temperature (imperial/metric) from weather slice
  const counter = useSelector((state) => state.weather.counter); // Counter value from Redux
  const theme = useSelector((state) => state.weather.theme); // Theme from Redux

  // Local state for weather information, background color, and ZIP code
  const [weather, setWeather] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff"); // Default background color
  const [zipCode, setZipCode] = useState(""); // ZIP code input
  const [zipError, setZipError] = useState(""); // ZIP code error message

  // Memoize weather emojis for specific weather conditions
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

  // Memoize background colors for specific weather conditions
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

  // Fetch weather data using the OpenWeather API based on the ZIP code and unit
  const fetchWeather = useCallback(
    async (zip, unit) => {
      if (zip.length !== 5) {
        setZipError("ZIP code must be exactly 5 digits.");
        return;
      }

      const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY; // API key from environment variables
      const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=${unit}`;

      try {
        const response = await axios.get(url); // Make an API request to OpenWeather
        const description = response.data.weather[0].description; // Weather description (e.g., clear sky)
        const temp = response.data.main.temp; // Temperature
        const mainWeather = response.data.weather[0].main.toLowerCase(); // Main weather condition
        const tempUnit = unit === "imperial" ? "°F" : "°C"; // Unit for temperature (°F or °C)
        const emoji = weatherEmojis[mainWeather] || ""; // Get corresponding emoji for weather condition
        const weatherData = `${description}, ${temp}${tempUnit} ${emoji}`; // Format the weather data

        setWeather(weatherData); // Update weather state
        setBgColor(weatherColors[mainWeather] || "#ffffff"); // Set background color based on weather
        setZipError(""); // Clear any existing ZIP code error
      } catch (error) {
        setZipError("Failed to fetch weather data. Please try again."); // Set error message if API request fails
      }
    },
    [weatherEmojis, weatherColors] // Dependencies for useCallback
  );

  // Effect to fetch weather data when ZIP code or unit changes
  useEffect(() => {
    if (zipCode.length === 5) {
      fetchWeather(zipCode, unit); // Fetch weather if ZIP code is valid (5 digits)
    }
  }, [zipCode, unit, fetchWeather]); // Trigger effect when zipCode or unit changes

  // Handle changes in the ZIP code input
  const handleZipCodeChange = (event) => {
    const { value } = event.target;
    if (/^\d{0,5}$/.test(value)) {
      setZipCode(value); // Update ZIP code state if it's a valid 5-digit number
      setZipError(""); // Clear any existing ZIP code error
    } else {
      setZipError("ZIP code must be a 5-digit number."); // Set error if input is invalid
    }
  };

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 31 - Redux Basics</h1>

      {/* Day information component */}
      <DayInfoComponent
        date="August 23, 2024"
        dayNumber="Day 31"
        challenge="Set up Redux in a React application."
        weather={weather || "Loading..."} // Show loading if weather data is not yet available
        happyEmoji={"😊"}
        message="Today's weather and coding challenge!"
        codingEmoji="💻"
        coffeeEmoji="☕"
        theme={theme} // Pass the theme prop
      />

      {/* Zip code input section */}
      <div className="zip-code-container">
        <label>
          <h5>
            <strong>Enter your zip code:</strong>
          </h5>
          <input
            className="zipcode"
            type="text"
            value={zipCode} // Controlled input for ZIP code
            onChange={handleZipCodeChange} // Handle input change
            maxLength="5"
            placeholder="Zip Code"
          />
        </label>
        {zipError && <p className="error">{zipError}</p>} {/* Display error if ZIP code is invalid */}
      </div>

      {/* Counter section with Redux-managed global counter */}
      <div className="counter-container">
        <div className="counter-box">
          <h3>Global Counter</h3>
          <p>Counter: {counter}</p>
          {/* Dispatch actions to increment and decrement the counter */}
          <button className="button" onClick={() => dispatch(incrementCounter())}>
            Increment
          </button>
          <button className="button" onClick={() => dispatch(decrementCounter())}>
            Decrement
          </button>
        </div>

        {/* Explanation of the solution */}
        <h4 className="explanation">Explanation: </h4>
        <p>
          This counter is managed with Redux and accessible globally. In this challenge, Redux is used to manage both the weather data, fetched via an API based on ZIP code input, and a global counter.
        </p>
      </div>
    </div>
  );
}

// Wrap Day31 component with ErrorBoundary for error handling
export default function Day31WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day31 />
    </ErrorBoundary>
  );
}

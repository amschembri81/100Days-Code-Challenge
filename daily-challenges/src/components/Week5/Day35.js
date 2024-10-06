import React, { useState, useCallback, useMemo } from "react";
import axios from "axios"; // Used to fetch weather data from the OpenWeather API
import { useDispatch, useSelector } from "react-redux"; // Hooks to interact with the Redux store
import { setWeather, toggleTheme } from "../redux/weatherSlice"; // Actions for setting weather and toggling theme
import DayInfoComponent from "../DayInfoComponent"; // Custom component to display daily challenge info
import "./Challenge5.css"; // Import custom styles

function Day35() {
  // JSX elements and emojis displayed at the top
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>; // Wave emoji
  const happyEmoji = "\u{1F60A}"; // 😊 emoji
  const codingEmoji = "\u{1F4BB}"; // 💻 emoji
  const coffeeEmoji = "\u2615"; // ☕ emoji for coffee
  const message = "Connecting React with Redux"; // Message for the day

  // Hook to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Access weather data, background color, and theme from the Redux store
  const weather = useSelector((state) => state.weather.weather || "Loading..."); // Get weather data from Redux, defaulting to "Loading..."
  const bgColor = useSelector((state) => state.weather.bgColor || "#ffffff"); // Get background color from Redux
  const theme = useSelector((state) => state.weather.theme); // Get the current theme (light/dark) from Redux

  // Local state for managing the ZIP code input and error messages
  const [zipCode, setZipCode] = useState(""); // Input for ZIP code
  const [zipError, setZipError] = useState(""); // Error message for invalid ZIP codes

  // Memoized object for weather-related emojis to avoid unnecessary re-renders
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

  // Memoized object for background colors based on weather conditions
  const weatherColors = useMemo(
    () => ({
      clear: "#f7d358", // Yellow for clear weather
      clouds: "#d3d3d3", // Gray for clouds
      rain: "#a4a4a4", // Dark gray for rain
      thunderstorm: "#616161", // Darker gray for thunderstorms
      snow: "#f2f2f2", // White for snow
      mist: "#c0c0c0", // Light gray for mist
    }),
    []
  );

  // Function to fetch weather data using Axios
  const fetchWeather = useCallback(async () => {
    // Validate the ZIP code input (must be exactly 5 digits)
    if (zipCode.length !== 5) {
      setZipError("ZIP code must be exactly 5 digits.");
      return;
    }

    setZipError(""); // Clear previous error if valid ZIP code is entered

    // Build the API URL for fetching weather data
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=imperial`;

    try {
      // Fetch weather data from the OpenWeather API
      const response = await axios.get(url);
      const { description } = response.data.weather[0]; // Get the weather description
      const temp = response.data.main.temp; // Get the temperature
      const mainWeather = response.data.weather[0].main.toLowerCase(); // Main weather condition
      const tempUnit = "°F"; // Set the temperature unit (Fahrenheit)
      const emoji = weatherEmojis[mainWeather] || ""; // Get corresponding emoji for weather
      const weatherData = `${description}, ${temp}${tempUnit} ${emoji}`; // Format weather data
      const color = weatherColors[mainWeather] || "#ffffff"; // Get corresponding background color

      // Dispatch weather data and background color to the Redux store
      dispatch(setWeather({ weather: weatherData, bgColor: color }));
      setZipError(""); // Clear error if successful
    } catch (error) {
      console.error("Error fetching weather data:", error); // Log errors for debugging
      setZipError("Failed to fetch weather data. Please try again."); // Display error message to the user
    }
  }, [dispatch, weatherEmojis, weatherColors, zipCode]);

  // Handle changes in the ZIP code input field
  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value); // Update ZIP code state
  };

  // Handle the theme toggle (switch between light and dark modes)
  const handleToggleTheme = () => {
    dispatch(toggleTheme()); // Dispatch the toggleTheme action to Redux
  };

  // Apply styles dynamically based on the current theme (light or dark)
  const containerStyle = {
    backgroundColor: theme === "light" ? bgColor : "#333333", // Background color changes for dark theme
    color: theme === "light" ? "#000000" : "#ffffff", // Text color changes for dark theme
  };

  return (
    <div className="day-container" style={containerStyle}>
      <h1>Day 35 - Connecting React and Redux</h1>
      {element}
      {/* Component that displays the day's challenge information */}
      <DayInfoComponent
        date="August 27, 2024"
        dayNumber="Day 35"
        challenge="Connect React components to the Redux store."
        happyEmoji={happyEmoji}
        codingEmoji={codingEmoji}
        coffeeEmoji={coffeeEmoji}
        weather={weather} // Pass weather data to DayInfoComponent
        message={message} // Pass message to DayInfoComponent
        theme={theme} // Pass theme to DayInfoComponent
      />

      {/* Section for ZIP code input */}
      <div className="zip-code-container">
        <label>
          <h5>
            <strong>Enter your zip code:</strong>
          </h5>
          <input
            className="zipcode"
            type="text"
            value={zipCode} // Controlled input for ZIP code
            onChange={handleZipCodeChange} // Handle ZIP code changes
            maxLength="5"
            placeholder="Zip Code"
          />
        </label>

        {/* Buttons for fetching weather and toggling theme */}
        <div className="button-container">
          <button className="button" onClick={fetchWeather}>
            Fetch Weather
          </button>
          <button className="button" onClick={handleToggleTheme}>
            Toggle {theme === "light" ? "Dark" : "Light"} Theme
          </button>
        </div>
      </div>

      {/* Display error message if ZIP code input is invalid */}
      {zipError && <p className="error">{zipError}</p>}

      {/* Explanation section */}
      <h3 className="explanation">Explanation of the Solution:</h3>
      <p>
        This component demonstrates how to connect React components to a Redux
        store. The user can toggle between light and dark themes, with the
        selected theme stored in the Redux state. Weather data is fetched and
        displayed, showing how global state management can enhance user
        experience.
      </p>
    </div>
  );
}

export default Day35;

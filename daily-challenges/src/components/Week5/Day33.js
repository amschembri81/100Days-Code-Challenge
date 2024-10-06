import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios"; // Axios is used for making API requests
import { useDispatch, useSelector } from "react-redux"; // Hooks to interact with Redux
import { setWeather } from "../redux/weatherSlice"; // Action to set weather in Redux
import DayInfoComponent from "../DayInfoComponent"; // Component to display the day's info
import ErrorBoundary from "../ErrorBoundary"; // Component for error handling
import "./Challenge5.css"; // Custom styles

function Day33() {
  // JSX element and emojis to be displayed on the page
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;
  const happyEmoji = "\u{1F60A}"; // 😊 emoji
  const codingEmoji = "\u{1F4BB}"; // 💻 emoji
  const coffeeEmoji = "\u2615"; // ☕

  const dispatch = useDispatch(); // Hook to dispatch actions to Redux

  // Access Redux state for weather, background color, and theme
  const weather = useSelector((state) => state.weather.weather); // Get weather data from Redux
  const bgColor = useSelector((state) => state.weather.bgColor); // Get background color from Redux
  const theme = useSelector((state) => state.weather.theme); // Get theme from Redux

  // Local state for managing the ZIP code and error messages
  const [zipCode, setZipCode] = useState(""); // Input for ZIP code
  const [zipError, setZipError] = useState(""); // Error message for invalid ZIP codes

  // Memoize emojis for different weather conditions to optimize performance
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

  // Memoize background colors for different weather conditions to avoid recalculating them
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

  // Function to fetch weather data from the OpenWeather API using the given ZIP code
  const fetchWeather = useCallback(
    async (zip) => {
      // Validate the ZIP code length
      if (zip.length !== 5) {
        setZipError("ZIP code must be exactly 5 digits.");
        return;
      }

      setZipError(""); // Clear any previous error messages

      // Construct the API URL with the given ZIP code and an API key
      const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=imperial`;

      try {
        // Make the API request to fetch the weather data
        const response = await axios.get(url);
        const description = response.data.weather[0].description; // Get weather description
        const temp = response.data.main.temp; // Get temperature
        const mainWeather = response.data.weather[0].main.toLowerCase(); // Main weather condition
        const tempUnit = "°F"; // Temperature unit is fixed to Fahrenheit

        // Get the corresponding emoji for the weather condition
        const emoji = weatherEmojis[mainWeather] || "";
        // Format the weather data string
        const weatherData = `${description}, ${temp}${tempUnit} ${emoji}`;
        // Set the background color based on the weather condition
        const color = weatherColors[mainWeather] || "#ffffff";

        // Dispatch the weather data and background color to Redux
        dispatch(setWeather({ weather: weatherData, bgColor: color }));
      } catch (error) {
        console.error("Error fetching weather data:", error); // Log any errors
        setZipError("Failed to fetch weather data. Please try again."); // Display an error message
      }
    },
    [dispatch, weatherEmojis, weatherColors] // Dependencies for useCallback
  );

  // Effect to fetch weather data whenever the ZIP code changes
  useEffect(() => {
    if (zipCode.length === 5) {
      fetchWeather(zipCode); // Fetch weather if ZIP code is valid (5 digits)
    }
  }, [zipCode, fetchWeather]); // Dependencies for useEffect

  // Handle changes in the ZIP code input
  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value); // Update the ZIP code state
  };

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 33 - Redux Reducers</h1>
      {element}
      {/* DayInfoComponent to display day information */}
      <DayInfoComponent
        date="August 25, 2024"
        dayNumber="Day 33"
        challenge="Write reducers to handle actions in Redux."
        happyEmoji={happyEmoji}
        codingEmoji={codingEmoji}
        coffeeEmoji={coffeeEmoji}
        weather={weather || "No data available"} // Show weather or a default message
        message="This is the challenge for Day 33!"
        theme={theme} // Pass the theme to DayInfoComponent
      />

      {/* ZIP code input field and submit button */}
      <div className="center-container">
        <div className="input-button-container">
          <label>
            <h5>Enter your zip code:</h5>
            <input
              className="zipcode"
              type="text"
              value={zipCode} // Controlled input for ZIP code
              onChange={handleZipCodeChange} // Handle ZIP code changes
              maxLength="5"
              placeholder="Zip Code"
            />
          </label>
        </div>
      </div>

      {/* Error message for invalid ZIP code */}
      {zipError && <p className="error">{zipError}</p>}

      {/* Explanation section to explain the challenge solution */}
      <h3 className="explanation">Explanation: </h3>
      <p>
        This component demonstrates how to connect React components to a Redux
        store using reducers. The weather data is fetched from an external API,
        stored in Redux, and managed globally. When a valid ZIP code is entered,
        the weather data and background color are dynamically updated based on
        the weather conditions.
      </p>
    </div>
  );
}

// Wrap Day33 component with ErrorBoundary to handle any runtime errors
export default function Day33WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day33 />
    </ErrorBoundary>
  );
}

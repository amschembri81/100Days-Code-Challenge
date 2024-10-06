import React, { useState, useCallback, useMemo } from "react";
import axios from "axios"; // Axios for API requests
import { useDispatch, useSelector } from "react-redux"; // Hooks to interact with Redux
import { setWeather, addFavorite, removeFavorite } from "../redux/actions"; // Import Redux actions
import DayInfoComponent from "../DayInfoComponent"; // Component to display day info
import "./Challenge5.css"; // Import custom styles

function Day34() {
  const dispatch = useDispatch(); // Hook to dispatch actions to Redux

  // Define the emojis and element to be displayed at the top of the component
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>; // Wave emoji
  const happyEmoji = "\u{1F60A}"; // 😊
  const codingEmoji = "\u{1F4BB}"; // 💻
  const coffeeEmoji = "\u2615"; // ☕

  // Memoized selectors for weather data, background color, favorites, and theme
  const weather = useSelector((state) => state.weather.weather || "Loading..."); // Default to "Loading..." if no weather data
  const bgColor = useSelector((state) => state.weather.bgColor || "#ffffff"); // Default background color is white
  const favorites = useSelector((state) => state.weather.favorites || []); // Default to an empty array for favorites
  const theme = useSelector((state) => state.weather.theme); // Retrieve theme from Redux

  // Local state for managing the ZIP code input and errors
  const [zipCode, setZipCode] = useState(""); // Input for ZIP code
  const [zipError, setZipError] = useState(""); // Error message for invalid ZIP codes

  // Memoized weather emojis and colors to avoid recalculating on every render
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

  // Fetch weather data using Axios and dispatch it to Redux
  const fetchWeather = useCallback(
    async (zip) => {
      // Validate the ZIP code (must be 5 digits)
      if (zip.length !== 5) {
        setZipError("ZIP code must be exactly 5 digits.");
        return;
      }

      setZipError(""); // Clear any previous errors

      // Fetch weather data from OpenWeather API
      const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=imperial`;

      try {
        const response = await axios.get(url); // Make the API request
        const description = response.data.weather[0].description; // Get weather description
        const temp = response.data.main.temp; // Get temperature
        const mainWeather = response.data.weather[0].main.toLowerCase(); // Main weather condition
        const tempUnit = "°F"; // Use Fahrenheit by default

        // Format the weather data string with description, temperature, and emoji
        const emoji = weatherEmojis[mainWeather] || "";
        const weatherData = `${description}, ${temp}${tempUnit} ${emoji}`;
        const color = weatherColors[mainWeather] || "#ffffff"; // Default to white background color

        // Dispatch the weather data and background color to Redux
        dispatch(setWeather({ weather: weatherData, bgColor: color }));
      } catch (error) {
        console.error("Error fetching weather data:", error); // Log any errors
        setZipError("Failed to fetch weather data. Please try again."); // Show error message
      }
    },
    [dispatch, weatherEmojis, weatherColors] // Dependencies for the fetchWeather function
  );

  // Handle changes in the ZIP code input
  const handleZipCodeChange = (event) => {
    const { value } = event.target;
    // Ensure the ZIP code is a 5-digit number
    if (/^\d{0,5}$/.test(value)) {
      setZipCode(value); // Update ZIP code state
      setZipError(""); // Clear any error messages
    } else {
      setZipError("ZIP code must be a 5-digit number."); // Show error message if input is invalid
    }
  };

  // Handle adding the ZIP code to favorites
  const handleAddFavorite = () => {
    // Ensure the ZIP code is valid and not already in the favorites list
    if (zipCode.length === 5 && !favorites.includes(zipCode)) {
      dispatch(addFavorite(zipCode)); // Dispatch action to add favorite
    } else if (favorites.includes(zipCode)) {
      setZipError("This ZIP code is already in favorites."); // Show error if ZIP code is already in favorites
    } else {
      setZipError("ZIP code must be exactly 5 digits."); // Show error if ZIP code is invalid
    }
  };

  // Handle removing the ZIP code from favorites
  const handleRemoveFavorite = (zip) => {
    dispatch(removeFavorite(zip)); // Dispatch action to remove favorite
  };

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 34 - Redux Store</h1>
      {element}
      {/* Component to display day info, weather data, and theme */}
      <DayInfoComponent
        date="August 26, 2024"
        dayNumber="Day 34"
        challenge="Configure and use the Redux store."
        happyEmoji={happyEmoji}
        codingEmoji={codingEmoji}
        coffeeEmoji={coffeeEmoji}
        weather={typeof weather === "string" ? weather : "Loading..."} // Display weather or loading message
        message="Redux state management challenge"
        theme={theme} // Pass theme to DayInfoComponent
      />

      {/* Input field for ZIP code and buttons to fetch weather and add to favorites */}
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

        {/* Buttons for fetching weather and adding the ZIP code to favorites */}
        <div className="button-container">
          <button
            className="weatherbutton"
            onClick={() => fetchWeather(zipCode)} // Fetch weather when clicked
          >
            Fetch Weather
          </button>
          <button className="button-favorite" onClick={handleAddFavorite}>
            Add to Favorites
          </button>
        </div>
      </div>

      {/* Display error message if ZIP code is invalid or duplicate */}
      {zipError && <p className="error">{zipError}</p>}

      {/* List of favorite ZIP codes with remove buttons */}
      <div className="favorites-container">
        <h3>Favorite Zip Codes</h3>
        <ul>
          {favorites &&
            favorites.map((zip, index) => (
              <li key={index}>
                {zip}
                <button
                  className="button-remove"
                  onClick={() => handleRemoveFavorite(zip)} // Remove favorite when clicked
                >
                  Remove
                </button>
              </li>
            ))}
        </ul>
      </div>

      {/* Explanation of the solution */}
      <h3 className="explanation">Explanation of the Solution:</h3>
      <p>
        This component demonstrates how to connect React components to a Redux
        store. The weather data and background color are managed globally using
        Redux, and users can add and remove ZIP codes from their favorites,
        showcasing centralized state management.
      </p>
    </div>
  );
}

export default Day34;

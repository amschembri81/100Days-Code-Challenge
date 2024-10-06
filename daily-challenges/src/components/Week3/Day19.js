import React, { useState, useEffect, useCallback, useMemo } from "react"; // Import React and hooks for managing state and side effects
import axios from "axios"; // Import axios for making HTTP requests
import DayInfoComponent from "../DayInfoComponent"; // Import DayInfoComponent for displaying day-specific information
import "../../Challenges.css"; // Import global CSS for styling
import "./Challenge3.css"; // Import specific CSS for Day 19

function Day19() {
  // JSX element containing a greeting message with a waving hand emoji
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;

  const happyEmoji = "\u{1F60A}"; // 😊 Emoji to be passed to DayInfoComponent
  
  // useState hooks to manage the weather data, background color, zip code, and temperature unit
  const [weather, setWeather] = useState(""); // State for storing fetched weather data
  const [bgColor, setBgColor] = useState("#ffffff"); // State for managing background color based on weather
  const [zipCode, setZipCode] = useState("60601"); // State for storing the zip code (default is Chicago's zip code)
  const [unit, setUnit] = useState("imperial"); // State for managing temperature unit (default is Fahrenheit)

  // useMemo hook to memoize the mapping of weather conditions to emojis
  const weatherEmojis = useMemo(() => ({
    clear: "☀️",
    clouds: "☁️",
    rain: "🌧️",
    thunderstorm: "⛈️",
    snow: "❄️",
    mist: "🌫️",
  }), []); // Empty dependency array ensures the object is only created once

  // useMemo hook to memoize the mapping of weather conditions to background colors
  const weatherColors = useMemo(() => ({
    clear: "#f7d358", // Yellow for clear weather
    clouds: "#d3d3d3", // Gray for clouds
    rain: "#a4a4a4", // Darker gray for rain
    thunderstorm: "#616161", // Dark gray for thunderstorm
    snow: "#f2f2f2", // Light gray for snow
    mist: "#c0c0c0", // Light gray for mist
  }), []);

  // useCallback hook to memoize the fetchWeather function to prevent unnecessary re-creations
  const fetchWeather = useCallback(async (zip, unit) => {
    const apiKey = "81079bc3172b71333817eb0e8ca71bf5"; // API key for OpenWeather
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=${unit}`; // API URL with zip code and unit parameters

    try {
      // Make the API request and get weather data
      const response = await axios.get(url);
      const description = response.data.weather[0].description; // Get weather description
      const temp = response.data.main.temp; // Get temperature
      const mainWeather = response.data.weather[0].main.toLowerCase(); // Get main weather type (e.g., clear, clouds)
      const tempUnit = unit === "imperial" ? "°F" : "°C"; // Set temperature unit based on selected unit

      // Get corresponding emoji for the weather condition
      const emoji = weatherEmojis[mainWeather] || ""; 
      const weatherData = `${description}, ${temp}${tempUnit} ${emoji}`; // Format the weather data with emoji
      
      setWeather(weatherData); // Update weather state with fetched data
      setBgColor(weatherColors[mainWeather] || "#ffffff"); // Update background color based on weather
    } catch (error) {
      console.error("Error fetching weather data:", error); // Handle error if API request fails
    }
  }, [weatherEmojis, weatherColors]); // Dependencies to ensure the function is recreated only when necessary

  // useEffect hook to trigger fetching of weather data when zipCode or unit changes
  useEffect(() => {
    fetchWeather(zipCode, unit); // Fetch weather data when zipCode or unit changes
  }, [zipCode, unit, fetchWeather]); // Dependencies to track zipCode, unit, and fetchWeather function

  // Function to handle changes in the zip code input
  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value); // Update zip code state when input changes
  };

  // Function to toggle between Celsius and Fahrenheit
  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "imperial" ? "metric" : "imperial")); // Switch between imperial (Fahrenheit) and metric (Celsius)
  };

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}> {/* Container for Day 19 with dynamic background color */}
      <h1>Day 19 - React Hooks (useEffect)</h1> {/* Title for the challenge */}
      {element} {/* Render the greeting element with an emoji */}

      {/* Display day-specific information using DayInfoComponent */}
      <DayInfoComponent
        date="August 10, 2024" // Date of the challenge
        dayNumber="Day 19" // Current day number
        challenge="Use useEffect hook for side effects." // Challenge description
        happyEmoji={happyEmoji} // Pass the happyEmoji to the component
        weather={weather} // Display fetched weather data
      />

      {/* Description of the background color change */}
      <p><i>The background color changes with the weather {happyEmoji} </i></p>

      {/* Input for zip code with label */}
      <div className="zip-code-container">
        <label>
          <h5><strong>Enter your zip code:</strong></h5>
          <input
            className="zipcode" // Class for styling the input field
            type="text"
            value={zipCode} // Bind input value to the zipCode state
            onChange={handleZipCodeChange} // Update zipCode state when input changes
            maxLength="5" // Restrict zip code to 5 digits
            placeholder="Zip Code" // Placeholder text for the input field
          />
        </label>
      </div>

      {/* Button to toggle between Celsius and Fahrenheit */}
      <button className="button" onClick={toggleUnit}>
        Switch to {unit === "imperial" ? "Celsius" : "Fahrenheit"} {/* Toggle button text based on unit */}
      </button>
    </div>
  );
}

export default Day19;
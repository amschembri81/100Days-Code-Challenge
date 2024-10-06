import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWeather } from "../redux/weatherSlice"; // Action to set weather in Redux
import DayInfoComponent from "../DayInfoComponent";
import "./Challenge5.css";

function Day30() {
  // Use dispatch to send actions to Redux
  const dispatch = useDispatch();

  // Access weather-related state from Redux store
  const weather = useSelector((state) => state.weather.weather); // Current weather description
  const bgColor = useSelector((state) => state.weather.bgColor); // Background color based on weather
  const unit = useSelector((state) => state.weather.unit); // Unit for temperature (imperial/metric)
  const theme = useSelector((state) => state.weather.theme); // Theme of the app (accessed from Redux)

  // Local state for ZIP code, loading status, and error messages
  const [zipCode, setZipCode] = useState(""); // Store the ZIP code input
  const [loading, setLoading] = useState(false); // Loading status during the weather fetch
  const [error, setError] = useState(""); // Error message in case of fetch failure

  // Define a mapping of weather conditions to background colors
  const weatherColors = {
    clear: "#f7d358", // Yellow for clear skies
    clouds: "#d3d3d3", // Gray for cloudy weather
    rain: "#a4a4a4", // Dark gray for rain
    thunderstorm: "#616161", // Even darker gray for thunderstorms
    snow: "#f2f2f2", // White for snow
    mist: "#c0c0c0", // Light gray for mist
  };

  // Function to fetch weather data from OpenWeather API based on ZIP code
  const fetchWeather = async () => {
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY; // API key from environment variables
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=${unit}`;

    try {
      setLoading(true); // Start loading
      setError(""); // Clear any previous error messages

      // Fetch weather data from the API
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error fetching weather data"); // Handle errors

      const data = await response.json(); // Parse the response JSON
      console.log("API response data:", data); // Log the API data for debugging

      // Extract weather description, main condition, and temperature from the response
      const description = data.weather[0].description;
      const mainWeather = data.weather[0].main.toLowerCase(); // Main weather condition (lowercased)
      const temp = data.main.temp; // Temperature value
      const tempUnit = unit === "imperial" ? "°F" : "°C"; // Set the temperature unit based on the selected unit

      // Format the weather data as a string to display
      const weatherString = `${description}, ${temp}${tempUnit}`;

      // Set the background color based on the main weather condition
      const color = weatherColors[mainWeather] || "#ffffff"; // Default to white if no match

      // Dispatch the weather and background color to Redux store
      dispatch(setWeather({ weather: weatherString, bgColor: color }));

      setLoading(false); // Stop loading after success
    } catch (error) {
      console.error("Error fetching weather data:", error); // Log any errors for debugging
      setError("Failed to load weather data. Please try again."); // Display error message
      setLoading(false); // Stop loading after failure
    }
  };

  // Handle ZIP code input change and update the state
  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value); // Update the ZIP code input value
  };

  // Handle form submission to fetch weather data
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from reloading the page
    if (zipCode.length === 5 && /^\d+$/.test(zipCode)) {
      fetchWeather(); // Fetch weather data if the ZIP code is valid (5 digits)
    } else {
      setError("Please enter a valid 5-digit ZIP code."); // Show error if ZIP code is invalid
    }
  };

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 30 - Weather Fetching with Redux</h1>

      {/* Display loading, error, or weather data */}
      {loading ? (
        <p>Loading weather data...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <DayInfoComponent
          date="August 22, 2024"
          dayNumber="Day 30"
          challenge="Redux State Management"
          happyEmoji="😊"
          weather={weather || "No data available"} // Display weather or fallback
          message="This is the message for Day 30!"
          codingEmoji="👨‍💻"
          coffeeEmoji="☕"
          theme={theme} // Pass theme prop to DayInfoComponent
        />
      )}

      {/* Input and button to fetch weather data */}
      <h4>Enter your zipcode: </h4>
      <div className="center-container">
        <div className="input-button-container">
          <input
            type="text"
            className="zipcode"
            value={zipCode} // Controlled input for ZIP code
            onChange={handleZipCodeChange} // Handle ZIP code change
            maxLength="5"
            placeholder="Zip Code"
          />
          <button className="button" onClick={handleSubmit}>
            Fetch Weather
          </button>
        </div>
      </div>

      {/* Explanation of how the challenge was solved */}
      <h3 className="explanation">Explanation of the Solution:</h3>
      <p>
        <i>
          I solved today's challenge by using Redux to manage application state for fetching and displaying weather data. 
          The user enters a valid 5-digit ZIP code, and the app fetches the weather data from the OpenWeather API, 
          displaying it along with a dynamically changing background color based on the weather. 
          Redux centralizes the management of both weather data and background color, making it accessible to any component across the app.
        </i>
      </p>
    </div>
  );
}

export default Day30;

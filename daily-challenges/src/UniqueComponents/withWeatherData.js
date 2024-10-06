import React, { useState, useEffect, useCallback, useMemo } from "react"; // Import necessary React hooks
import axios from "axios"; // Import axios for making HTTP requests

// Higher-order component to provide weather data to wrapped components
const withWeatherData = (WrappedComponent) => {
  return function WeatherComponent(props) {
    const [weather, setWeather] = useState(""); // State to store weather data
    const [bgColor, setBgColor] = useState("#ffffff"); // State for background color
    const [zipCode, setZipCode] = useState("60601"); // Default ZIP code
    const [unit, setUnit] = useState("imperial"); // Default temperature unit (Fahrenheit)

    // Memoize weather emojis to avoid recalculating on every render
    const weatherEmojis = useMemo(() => ({
      clear: "☀️",
      clouds: "☁️",
      rain: "🌧️",
      thunderstorm: "⛈️",
      snow: "❄️",
      mist: "🌫️",
    }), []);

    // Memoize weather colors to avoid recalculating on every render
    const weatherColors = useMemo(() => ({
      clear: "#f7d358",
      clouds: "#d3d3d3",
      rain: "#a4a4a4",
      thunderstorm: "#616161",
      snow: "#f2f2f2",
      mist: "#c0c0c0",
    }), []);

    // Function to fetch weather data from the OpenWeather API
    const fetchWeather = useCallback(async (zip) => {
      const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY; // Retrieve API key from environment variables
      const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=${unit}`; // Construct API URL

      try {
        const response = await axios.get(url); // Make GET request to fetch weather data
        const description = response.data.weather[0].description; // Extract weather description
        const temp = response.data.main.temp; // Extract temperature
        const mainWeather = response.data.weather[0].main.toLowerCase(); // Extract main weather condition
        const tempUnit = unit === "imperial" ? "°F" : "°C"; // Determine the temperature unit
        const weatherData = `${description}, ${temp}${tempUnit} ${weatherEmojis[mainWeather] || ""}`; // Format weather data

        setWeather(weatherData); // Update weather state
        setBgColor(weatherColors[mainWeather] || "#ffffff"); // Update background color based on weather
      } catch (error) {
        console.error("Error fetching weather data:", error); // Log error if the fetch fails
      }
    }, [unit, weatherEmojis, weatherColors]); // Dependencies for the useCallback hook

    // Effect to fetch weather data whenever ZIP code or unit changes
    useEffect(() => {
      fetchWeather(zipCode); // Call fetchWeather with the current ZIP code
    }, [zipCode, unit, fetchWeather]);

    // Handle change in ZIP code input
    const handleZipCodeChange = (event) => {
      setZipCode(event.target.value); // Update ZIP code state
    };

    // Toggle between imperial and metric units
    const toggleUnit = () => {
      setUnit((prevUnit) => (prevUnit === "imperial" ? "metric" : "imperial")); // Switch unit state
    };

    return (
      <WrappedComponent
        weather={weather} // Pass weather data to the wrapped component
        bgColor={bgColor} // Pass background color to the wrapped component
        zipCode={zipCode} // Pass current ZIP code to the wrapped component
        handleZipCodeChange={handleZipCodeChange} // Pass handler to change ZIP code
        toggleUnit={toggleUnit} // Pass unit toggle function
        unit={unit} // Pass current unit to the wrapped component
        {...props} // Spread other props to the wrapped component
      />
    );
  };
};

export default withWeatherData; 

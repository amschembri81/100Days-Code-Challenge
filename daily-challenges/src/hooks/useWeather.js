import { useState, useEffect, useCallback, useMemo } from "react"; // Import necessary React hooks
import axios from "axios"; // Import axios for making HTTP requests

const useWeather = (initialZipCode = "60601", initialUnit = "imperial") => {
  // Initialize state for weather data, background color, zip code, unit, loading status, and errors
  const [weather, setWeather] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [zipCode, setZipCode] = useState(initialZipCode); // Default ZIP code
  const [unit, setUnit] = useState(initialUnit); // Default temperature unit
  const [loading, setLoading] = useState(false); // Loading state for weather fetch
  const [error, setError] = useState(null); // Error state

  // Memoize weather emojis to prevent unnecessary recalculations
  const weatherEmojis = useMemo(() => ({
    clear: "☀️",
    clouds: "☁️",
    rain: "🌧️",
    thunderstorm: "⛈️",
    snow: "❄️",
    mist: "🌫️",
  }), []);

  // Memoize weather colors for background based on conditions
  const weatherColors = useMemo(() => ({
    clear: "#f7d358",
    clouds: "#d3d3d3",
    rain: "#a4a4a4",
    thunderstorm: "#616161",
    snow: "#f2f2f2",
    mist: "#c0c0c0",
  }), []);

  // Function to fetch weather data based on current zip code and unit
  const fetchWeather = useCallback(async () => {
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY; // API key from environment variables
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=${unit}`;

    setLoading(true); // Set loading state
    setError(null); // Clear previous errors

    try {
      const response = await axios.get(url); // Fetch weather data
      const description = response.data.weather[0].description; // Get weather description
      const temp = response.data.main.temp; // Get temperature
      const mainWeather = response.data.weather[0].main.toLowerCase(); // Get main weather type
      const tempUnit = unit === "imperial" ? "°F" : "°C"; // Set temperature unit
      const weatherData = `${description}, ${temp}${tempUnit} ${weatherEmojis[mainWeather] || ""}`; // Format weather data

      setWeather(weatherData); // Update weather state
      setBgColor(weatherColors[mainWeather] || "#ffffff"); // Update background color based on weather
    } catch (err) {
      setError("Error fetching weather data"); // Handle error if fetching fails
    } finally {
      setLoading(false); // Set loading state to false after fetch
    }
  }, [zipCode, unit, weatherEmojis, weatherColors]); // Dependencies for the fetchWeather function

  // Effect to fetch weather data whenever zipCode or unit changes
  useEffect(() => {
    fetchWeather();
  }, [zipCode, unit, fetchWeather]); // Dependencies for the useEffect

  // Function to toggle between temperature units
  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "imperial" ? "metric" : "imperial"));
  };

  // Return necessary states and functions for use in components
  return {
    weather,
    bgColor,
    zipCode,
    setZipCode,
    toggleUnit,
    unit,
    loading,
    error,
  };
};

export default useWeather; // Export the custom hook for use in components

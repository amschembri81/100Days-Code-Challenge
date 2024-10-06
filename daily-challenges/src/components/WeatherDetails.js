import React, { useEffect } from "react"; // Import necessary React functions
import { useParams } from "react-router-dom"; // Import useParams for accessing URL parameters
import useWeather from "../hooks/useWeather"; // Ensure the correct path to your useWeather hook

function WeatherDetails() {
  const { zipCode } = useParams(); // Get the ZIP code from the URL parameters
  const {
    weather,
    bgColor,
    setZipCode,
    toggleUnit,
    unit,
    loading,
    error,
  } = useWeather(); // Use the custom useWeather hook to manage weather state

  // Update the ZIP code in the useWeather hook whenever the zipCode param changes
  useEffect(() => {
    setZipCode(zipCode); // Update the ZIP code to trigger a new weather fetch
  }, [zipCode, setZipCode]); // Dependencies: zipCode and setZipCode

  return (
    <div className="weather-details" style={{ backgroundColor: bgColor }}>
      <h2>Weather Details for {zipCode}</h2>
      {loading && <p>Loading weather details for {zipCode}...</p>} {/* Show loading message */}
      {error && <p className="error">{error}</p>} {/* Display error message if any */}
      {weather && !loading && !error && ( // Render weather details if available
        <>
          <p>{weather}</p>
          <button className="weatherbutton" onClick={toggleUnit}>
            Switch to {unit === "imperial" ? "Celsius" : "Fahrenheit"} {/* Toggle temperature unit */}
          </button>
        </>
      )}
    </div>
  );
}

export default WeatherDetails; // Export the WeatherDetails component

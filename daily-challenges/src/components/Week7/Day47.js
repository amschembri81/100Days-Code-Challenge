import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios for making API requests
import DayInfoComponent from "../DayInfoComponent"; // Component to display day-specific information
import ErrorBoundary from "../ErrorBoundary"; // Component to catch runtime errors
import withWeatherData from "../../UniqueComponents/withWeatherData"; // Higher-order component for providing weather data
import "./Challenge7.css";  // Import custom CSS for styling

function Day47({ weather, bgColor }) {
  // State to store fetched data, loading state, and error state
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Initially set to true since data is loading
  const [error, setError] = useState(null); // State to handle any errors

  // useEffect to fetch data from the REST API when the component mounts
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all") // Axios GET request to fetch data from REST API
      .then((response) => {
        setData(response.data); // Update data state with the response
        setLoading(false); // Set loading to false since data has been loaded
      })
      .catch((err) => {
        setError(err); // Update error state if there is an error
        setLoading(false); // Stop loading when an error occurs
      });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Return loading state, error state, or the main component depending on the current state
  if (loading) return <p>Loading...</p>; // Show loading message while data is being fetched
  if (error) return <p>Error: {error.message}</p>; // Display error message if there is an error

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}> {/* Set background color dynamically */}
      <h1>Day 47 - Axios in React</h1> {/* Title for the challenge */}
      
      {/* Component to show day information, weather data, and challenge details */}
      <DayInfoComponent
        date="September 8, 2024" // The current date
        dayNumber="Day 47" // Day number of the challenge
        challenge="Using Axios to fetch data in React" // Challenge description
        weather={weather} // Display the weather information
      />

      {/* Display a list of countries */}
      <h3>Country Data:</h3>
      <ul className="country-list">
        {/* Map through the data array and display the first 10 countries with their names and regions */}
        {data.slice(0, 10).map((country) => (
          <li key={country.cca3}> {/* Use the unique cca3 code as the key */}
            {country.name.common} - {country.region} {/* Display country name and region */}
          </li>
        ))}
      </ul>

      {/* Explanation of the challenge */}
      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I used Axios to fetch data from a REST API and displayed the first 10 countries with their names and regions.
      </p>
    </div>
  );
}

// Wrap Day47 component with withWeatherData HOC to provide weather data
const Day47WithWeatherData = withWeatherData(Day47);

// Export Day47 component wrapped in ErrorBoundary to catch any runtime errors
export default function Day47WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day47WithWeatherData />
    </ErrorBoundary>
  );
}

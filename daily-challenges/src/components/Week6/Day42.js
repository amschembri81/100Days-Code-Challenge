import React, { useState, useEffect, useCallback } from "react";
import DayInfoComponent from "../DayInfoComponent"; // Component to display day-specific information
import ErrorBoundary from "../ErrorBoundary"; // Component to catch runtime errors
import withWeatherData from "../../UniqueComponents/withWeatherData"; // Higher-order component for providing weather data
import "./Challenge6.css"; // Import custom styles

// Simulate an API call that sometimes fails
function simulateApiCall() {
  return new Promise((resolve, reject) => {
    const randomOutcome = Math.random() < 0.5; // 50% chance of success or failure
    setTimeout(() => {
      if (randomOutcome) {
        resolve("Data fetched successfully!"); // Resolve if success
      } else {
        reject("API call failed!"); // Reject if failure
      }
    }, 1000); // Simulate network delay
  });
}

function Day42({ weather, bgColor }) {
  const [apiData, setApiData] = useState(null); // State to hold API data
  const [error, setError] = useState(null); // State to hold error message
  const [retryCount, setRetryCount] = useState(0); // State to count retries
  const [loading, setLoading] = useState(true); // State to show loading status

  // Function to fetch data from the simulated API with retry logic
  const fetchApiData = useCallback(async () => {
    setLoading(true); // Set loading state to true while fetching
    setError(null); // Clear previous errors before fetching

    try {
      const data = await simulateApiCall(); // Simulate API call
      console.log("API call success:", data); // Log success for debugging
      setApiData(data); // Store fetched data in state
    } catch (err) {
      console.error("Error fetching API data:", err); // Log error for debugging
      setError(err); // Store error message in state
      if (retryCount < 3) { // Retry logic: attempt up to 3 times
        setRetryCount(retryCount + 1); // Increment retry count
        console.log(`Retrying... Attempt ${retryCount + 1}`);
      } else {
        console.error("Max retry attempts reached."); // Max retry attempts reached
      }
    } finally {
      setLoading(false); // Set loading state to false after fetch
    }
  }, [retryCount]); // Re-run when retryCount changes

  // Automatically run the API call on component mount or retry
  useEffect(() => {
    fetchApiData(); // Call the fetch function
  }, [fetchApiData]);

  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>; // 👋 emoji for greeting
  const happyEmoji = "\u{1F60A}"; // 😊 emoji

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}> {/* Apply background color */}
      <h1>Day 42 - Debugging Strategies</h1> {/* Title for the challenge */}
      {element} {/* Greeting message */}
      <DayInfoComponent
        date="September 3, 2024" // Display the current date
        dayNumber="Day 42" // Day number of the challenge
        challenge="Debugging and Troubleshooting" // Challenge description
        weather={weather} // Pass the weather prop
        happyEmoji={happyEmoji} // Pass the happy emoji
      />

      {/* Show loading message while fetching data */}
      {loading && <p>Loading data...</p>}

      {/* Display the fetched API data */}
      {apiData && (
        <div className="api-data-container">
          <h3>API Data:</h3>
          <p>{apiData}</p> {/* Display API success message */}
        </div>
      )}

      {/* Display error message if the API call fails */}
      {error && (
        <div className="error-container">
          <h3>Error occurred:</h3> {/* Title for error */}
          <p>{error}</p> {/* Display error message */}
        </div>
      )}

      {/* Retry button to retry the API call */}
      {!loading && retryCount < 3 && error && (
        <button className="retry-button" onClick={() => setRetryCount(0)}> {/* Reset retry count */}
          Retry API Call
        </button>
      )}

      {/* Explanation section */}
      <h4 className="description">Description:</h4>
      <p>
        In this challenge, we implemented a simulated API call that randomly fails. We employed debugging strategies like logging errors, retrying failed requests, and visualizing the error or success response on the screen.
        You can see how error states are handled, logged in the console, and how retry logic works.
      </p>
    </div>
  );
}

const Day42WithWeatherData = withWeatherData(Day42); // Higher-order component to provide weather data

// Wrap the component in ErrorBoundary to catch runtime errors
export default function Day42WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day42WithWeatherData /> {/* Wrap the component with weather data and error boundary */}
    </ErrorBoundary>
  );
}

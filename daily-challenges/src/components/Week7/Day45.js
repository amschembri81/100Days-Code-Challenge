import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectData, selectError } from "../redux/selectors"; // Import memoized selectors for optimized state selection
import DayInfoComponent from "../DayInfoComponent"; // Component to display day-specific information
import ErrorBoundary from "../ErrorBoundary"; // Component to catch runtime errors
import withWeatherData from "../../UniqueComponents/withWeatherData"; // Higher-order component for providing weather data
import "./Challenge7.css"; // Import custom styles

function Day45({ weather, bgColor }) {
  const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store
  const data = useSelector(selectData); // Use memoized selector to select data from Redux state
  const error = useSelector(selectError); // Use memoized selector to select error from Redux state

  // Fetch data when the component mounts
  useEffect(() => {
    dispatch({ type: "FETCH_DATA" }); // Dispatch an action to fetch data
  }, [dispatch]); // Only re-run effect if dispatch changes

  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>; // 👋 emoji for greeting
  const happyEmoji = "\u{1F60A}"; // 😊 emoji

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}> {/* Apply background color */}
      <h1>Day 45 - Error Handling in Redux</h1> {/* Title for the challenge */}
      {element} {/* Greeting message */}

      {/* DayInfoComponent to show day number, date, and challenge details */}
      <DayInfoComponent
        date="September 6, 2024" // Current date
        dayNumber="Day 45" // Day number of the challenge
        challenge="Implement error handling in a Redux application" // Challenge description
        weather={weather} // Display weather data
        happyEmoji={happyEmoji} // Pass happy emoji
      />

      {/* Conditionally display error or data */}
      {error ? (
        <p className="error">Error: {error}</p> // Show error message if there's an error
      ) : (
        <p>Data: {data}</p> // Otherwise, display the data
      )}

      {/* Challenge explanation */}
      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I implemented error handling in a Redux application.
      </p>
    </div>
  );
}

// Wrap Day45 with withWeatherData HOC to provide weather data
const Day45WithWeatherData = withWeatherData(Day45);

// Export Day45 wrapped in ErrorBoundary to catch runtime errors
export default function Day45WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day45WithWeatherData />
    </ErrorBoundary>
  );
}

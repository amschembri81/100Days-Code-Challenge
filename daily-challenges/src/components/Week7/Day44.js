import React, { useState } from "react";
import DayInfoComponent from "../DayInfoComponent"; // Component to display day-specific information
import ErrorBoundary from "../ErrorBoundary"; // Component to catch runtime errors
import withWeatherData from "../../UniqueComponents/withWeatherData"; // Higher-order component for providing weather data
import "./Challenge7.css"; // Import custom styles

// Custom hook to manage a simple counter state
function useCounter() {
  const [count, setCount] = useState(0); // State to store the current count
  const increment = () => setCount(count + 1); // Function to increment the count
  return { count, increment }; // Return the current count and the increment function
}

function Day44({ weather, bgColor }) {
  // Use the custom hook to get the count and increment function
  const { count, increment } = useCounter();
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>; // 👋 emoji for greeting
  const happyEmoji = "\u{1F60A}"; // 😊 emoji

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}> {/* Apply background color */}
      <h1>Day 44 - Custom Hooks</h1> {/* Title for the challenge */}
      {element} {/* Greeting message */}

      {/* DayInfoComponent to show day number, date, and challenge details */}
      <DayInfoComponent
        date="September 5, 2024" // Current date
        dayNumber="Day 44" // Day number of the challenge
        challenge="Create and use custom hooks" // Challenge description
        weather={weather} // Display weather data
        happyEmoji={happyEmoji} // Pass happy emoji
      />

      {/* Counter section */}
      <div className="counter-container">
        <h3>Counter: {count}</h3> {/* Display current count */}
        <button className="increment" onClick={increment}>Increment</button> {/* Increment button */}
      </div>

      {/* Challenge explanation */}
      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I created and used a custom hook to manage a simple counter state.
      </p>
    </div>
  );
}

// Wrap Day44 with withWeatherData HOC to provide weather data
const Day44WithWeatherData = withWeatherData(Day44);

// Export Day44 wrapped in ErrorBoundary to catch runtime errors
export default function Day44WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day44WithWeatherData />
    </ErrorBoundary>
  );
}

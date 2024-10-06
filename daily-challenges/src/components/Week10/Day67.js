// Day67.js
import React from "react";
import DayInfoComponent from "../DayInfoComponent";
import ErrorBoundary from "../ErrorBoundary";
import withWeatherData from "../../UniqueComponents/withWeatherData";

function Day67({ weather, bgColor }) {

  const happyEmoji = "😊"; // Define the happy emoji or fetch it from your emoji list

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 67 - Internationalization (i18n) in React</h1>
      <DayInfoComponent
        date="September 27, 2024"
        dayNumber="Day 67"
        challenge="Add internationalization support to a React app"
        weather={weather}
        happyEmoji={happyEmoji} // Pass the happy emoji
      />
      <p>In this challenge, I added internationalization support to my React application.</p>
    </div>
  );
}

const Day67WithWeatherData = withWeatherData(Day67);
export default function Day67WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day67WithWeatherData />
    </ErrorBoundary>
  );
}

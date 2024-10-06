// Day68.js
import React from "react";
import DayInfoComponent from "../DayInfoComponent";
import ErrorBoundary from "../ErrorBoundary";
import withWeatherData from "../../UniqueComponents/withWeatherData";

function Day68({ weather, bgColor }) {

  const happyEmoji = "😊"; // Define the happy emoji or fetch it from your emoji list

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 68 - React and Material-UI</h1>
      <DayInfoComponent
        date="September 28, 2024"
        dayNumber="Day 68"
        challenge="Integrate Material-UI for UI components"
        weather={weather}
        happyEmoji={happyEmoji} // Pass the happy emoji
      />
      <p>In this challenge, I integrated Material-UI into my React project for UI components.</p>
    </div>
  );
}

const Day68WithWeatherData = withWeatherData(Day68);
export default function Day68WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day68WithWeatherData />
    </ErrorBoundary>
  );
}

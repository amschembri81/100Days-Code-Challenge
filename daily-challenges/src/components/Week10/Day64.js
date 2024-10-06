import React from "react";
import DayInfoComponent from "../DayInfoComponent";
import ErrorBoundary from "../ErrorBoundary";
import withWeatherData from "../../UniqueComponents/withWeatherData";

function Day64({ weather, bgColor }) {
  const happyEmoji = "😊"; // Define the happy emoji or fetch it from your emoji list

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 64 - React and Electron</h1>
      <DayInfoComponent
        date="September 24, 2024"
        dayNumber="Day 64"
        challenge="Build a desktop application using React and Electron"
        weather={weather}
        happyEmoji={happyEmoji} // Pass the happy emoji
      />
      <p>In this challenge, I built a desktop application using React and Electron.</p>
    </div>
  );
}

const Day64WithWeatherData = withWeatherData(Day64);

export default function Day64WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day64WithWeatherData />
    </ErrorBoundary>
  );
}


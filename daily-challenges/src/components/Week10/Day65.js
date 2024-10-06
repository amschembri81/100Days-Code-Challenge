import React from "react";
import DayInfoComponent from "../DayInfoComponent";
import ErrorBoundary from "../ErrorBoundary";
import withWeatherData from "../../UniqueComponents/withWeatherData";

function Day65({ weather, bgColor }) {
  const happyEmoji = "😊"; // Define the happy emoji or fetch it from your emoji list

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 65 - React and Webpack</h1>
      <DayInfoComponent
        date="September 25, 2024"
        dayNumber="Day 65"
        challenge="Customize Webpack configuration for a React project"
        weather={weather}
        happyEmoji={happyEmoji} // Pass the happy emoji
      />
      <p>In this challenge, I customized the Webpack configuration for my React project.</p>
    </div>
  );
}

const Day65WithWeatherData = withWeatherData(Day65);

export default function Day65WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day65WithWeatherData />
    </ErrorBoundary>
  );
}


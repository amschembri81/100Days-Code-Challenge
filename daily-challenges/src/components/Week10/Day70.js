// Day70.js
import React from "react";
import DayInfoComponent from "../DayInfoComponent";
import ErrorBoundary from "../ErrorBoundary";
import withWeatherData from "../../UniqueComponents/withWeatherData";

function Day70({ weather, bgColor }) {

  const happyEmoji = "😊"; // Define the happy emoji or fetch it from your emoji list

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 70 - React and Headless CMS</h1>
      <DayInfoComponent
        date="September 30, 2024"
        dayNumber="Day 70"
        challenge="Integrate a headless CMS with a React app"
        weather={weather}
        happyEmoji={happyEmoji} // Pass the happy emoji
      />
      <p>In this challenge, I integrated a headless CMS to manage content in my React application.</p>
    </div>
  );
}

const Day70WithWeatherData = withWeatherData(Day70);
export default function Day70WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day70WithWeatherData />
    </ErrorBoundary>
  );
}

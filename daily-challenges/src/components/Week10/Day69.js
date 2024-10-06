// Day69.js
import React from "react";
import DayInfoComponent from "../DayInfoComponent";
import ErrorBoundary from "../ErrorBoundary";
import withWeatherData from "../../UniqueComponents/withWeatherData";

function Day69({ weather, bgColor }) {

  const happyEmoji = "😊"; // Define the happy emoji or fetch it from your emoji list

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 69 - Serverless Functions with React</h1>
      <DayInfoComponent
        date="September 29, 2024"
        dayNumber="Day 69"
        challenge="Deploy serverless functions with a React app"
        weather={weather}
        happyEmoji={happyEmoji} // Pass the happy emoji
      />
      <p>In this challenge, I deployed serverless functions to be used with my React application.</p>
    </div>
  );
}

const Day69WithWeatherData = withWeatherData(Day69);
export default function Day69WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day69WithWeatherData />
    </ErrorBoundary>
  );
}

// Day66.js
import React, { Suspense } from "react";
import DayInfoComponent from "../DayInfoComponent";
import ErrorBoundary from "../ErrorBoundary";
import withWeatherData from "../../UniqueComponents/withWeatherData";

const SuspenseComponent = React.lazy(() => import("./SuspenseComponent")); // Adjust import for your lazy-loaded component

function Day66({ weather, bgColor }) {

  const happyEmoji = "😊"; // Define the happy emoji or fetch it from your emoji list

  
  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 66 - React Suspense with Concurrent Mode</h1>
      <DayInfoComponent
        date="September 26, 2024"
        dayNumber="Day 66"
        challenge="Explore Concurrent Mode with React Suspense"
        weather={weather}
        happyEmoji={happyEmoji} // Pass the happy emoji
      />
      <Suspense fallback={<div>Loading...</div>}>
        <SuspenseComponent />
      </Suspense>
    </div>
  );
}

const Day66WithWeatherData = withWeatherData(Day66);
export default function Day66WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day66WithWeatherData />
    </ErrorBoundary>
  );
}

import React, { Suspense, lazy } from "react"; // Use lazy from 'react'
import DayInfoComponent from "../DayInfoComponent";
import ErrorBoundary from "../ErrorBoundary";
import withWeatherData from "../../UniqueComponents/withWeatherData";
import "./Challenge8.css";

// Lazy load the LazyComponent
const LazyComponent = lazy(() => import("./LazyComponent")); // Dynamically load LazyComponent only when required

function Day54({ weather, bgColor }) {
  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 54 - React Suspense and Lazy</h1>
      
      {/* Display basic weather information and challenge details */}
      <DayInfoComponent
        date="September 15, 2024"
        dayNumber="Day 54"
        challenge="Implement React Suspense and Lazy for data fetching"
        weather={weather}
      />

      {/* Suspense wrapper for LazyComponent */}
      {/* React Suspense is used here to display a fallback message while LazyComponent is being loaded */}
      <Suspense fallback={<div>Loading the surprise component...</div>}>
        <LazyComponent /> {/* LazyComponent will only load when this part of the code is reached */}
      </Suspense>

      {/* Challenge explanation */}
      <h4 className="description">Description:</h4>
      <p>
        In this challenge, React Suspense and lazy loading were used to dynamically load a component only when it’s needed, improving performance by splitting the code. 
        The LazyComponent is wrapped inside the Suspense component, displaying a fallback message while the component is being loaded.
      </p>
    </div>
  );
}

// Wrap Day54 with weather data logic
const Day54WithWeatherData = withWeatherData(Day54);

// Export the component, wrapped in an ErrorBoundary to catch any errors that might occur during lazy loading
export default function Day54WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day54WithWeatherData />
    </ErrorBoundary>
  );
}

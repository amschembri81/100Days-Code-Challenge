import React from "react";
import DayInfoComponent from "../DayInfoComponent";
import ErrorBoundary from "../ErrorBoundary";
import withWeatherData from "../../UniqueComponents/withWeatherData";
import TypeScriptComponent from "./TypeScriptComponent"; // Import the TypeScript component
import "./Challenge8.css";

// List of fun facts to pass to the TypeScript component
const funFacts = [
  "Honey never spoils.",
  "Bananas are berries, but strawberries aren’t.",
  "A group of flamingos is called a 'flamboyance'.",
  "Octopuses have three hearts.",
  "Wombat poop is cube-shaped.",
  "Sharks existed before trees.",
  "There are more stars in the universe than grains of sand on Earth."
];

// Day52 component handles the integration of TypeScript
function Day52({ weather, bgColor }) {
  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      {/* Page heading */}
      <h1>Day 52 - React and TypeScript</h1>
      
      {/* Display daily information like the challenge, date, and weather */}
      <DayInfoComponent
        date="September 13, 2024"
        dayNumber="Day 52"
        challenge="Set up a React project with TypeScript"
        weather={weather} // Weather data injected by the HOC (higher-order component)
      />

      {/* Add the fun interactive fact generator */}
      <TypeScriptComponent facts={funFacts} /> {/* Pass the list of fun facts to TypeScriptComponent */}

      {/* Description of the challenge */}
      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I installed TypeScript dependencies and configured my existing React project to support TypeScript by adding a .tsx file. 
        I created an interactive fun fact generator component using TypeScript, demonstrating type safety, state management, and prop handling within a React project.
      </p>
    </div>
  );
}

// Wrap Day52 component with weather data handling logic
const Day52WithWeatherData = withWeatherData(Day52);

// Export the component wrapped in an ErrorBoundary to handle any runtime errors
export default function Day52WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day52WithWeatherData />
    </ErrorBoundary>
  );
}

import React, { useEffect } from "react";
import * as d3 from "d3"; // Import D3.js for data visualization
import DayInfoComponent from "../DayInfoComponent"; // Component for displaying day-specific info
import ErrorBoundary from "../ErrorBoundary"; // Error boundary to catch runtime errors
import withWeatherData from "../../UniqueComponents/withWeatherData"; // HOC for injecting weather data
import "./Challenge7.css"; // Importing custom CSS for styling

function Day48({ weather, bgColor }) {
  // useEffect to run D3-related code when the component mounts
  useEffect(() => {
    const data = [10, 20, 30, 40, 50]; // Sample data for the bar chart

    // Clear any existing SVG element in case of a rerender to prevent duplication
    d3.select("#d3-chart").select("svg").remove();

    // Create an SVG container with specified width and height
    const svg = d3
      .select("#d3-chart")
      .append("svg")
      .attr("width", 500) // Set the width of the SVG
      .attr("height", 300); // Set the height of the SVG

    // Create and append bars to the SVG based on the data array
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 60) // Set x position for each bar based on index
      .attr("y", (d) => 300 - d * 5) // Set y position, positioning from the bottom
      .attr("width", 50) // Set the width of each bar
      .attr("height", (d) => d * 5) // Set the height of the bars based on data
      .attr("fill", (d) => `rgb(0, 0, ${d * 10})`); // Set color of the bars with a blue gradient

    // Add text labels above each bar to display the data value
    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d, i) => i * 60 + 25) // Center the text above each bar
      .attr("y", (d) => 300 - d * 5 - 10) // Position the text above the bars
      .attr("text-anchor", "middle") // Align text in the center
      .attr("fill", "black") // Set text color to black
      .text((d) => d); // Display the value of each bar
  }, []); // Empty dependency array ensures this effect runs only on mount

  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>; // JSX for greeting
  const happyEmoji = "\u{1F60A}"; // 😊 emoji

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}> {/* Container with dynamic background */}
      <h1>Day 48 - React and D3 Integration</h1>
      {element}
      <DayInfoComponent
        date="September 9, 2024" // The current date
        dayNumber="Day 48" // The day number for the challenge
        challenge="Integrate D3.js for data visualization" // Challenge description
        weather={weather} // Display the weather data
        happyEmoji={happyEmoji} // 😊 emoji
      />

      <div id="d3-chart"></div> {/* The div where D3 will render the chart */}

      <h4 className="description">Description:</h4>
      <p>In this challenge, I integrated D3.js with React to create data visualizations.</p>
      <p>This graph visualizes the data array [10, 20, 30, 40, 50], where each number represents the height of a bar.</p>
    </div>
  );
}

// Wrap the component with withWeatherData HOC to inject weather data
const Day48WithWeatherData = withWeatherData(Day48);

// Export the component wrapped in ErrorBoundary to handle any runtime errors
export default function Day48WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day48WithWeatherData />
    </ErrorBoundary>
  );
}

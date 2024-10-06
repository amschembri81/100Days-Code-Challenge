import React, { useMemo, useState } from "react";
import DayInfoComponent from "../DayInfoComponent";
import ErrorBoundary from "../ErrorBoundary";
import withWeatherData from "../../UniqueComponents/withWeatherData";
import "./Challenge8.css";

function Day55({ weather, bgColor }) {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]); // Initial state with an array of numbers

  // Function to generate an array of 5 random numbers and update the state
  const generateRandomNumbers = () => {
    const randomNums = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)); // Generates 5 random numbers
    setNumbers(randomNums); // Updates the numbers state with the new random values
  };

  // Memoize the sum of the numbers array using useMemo to avoid recalculating it unless the numbers array changes
  const sum = useMemo(() => numbers.reduce((acc, num) => acc + num, 0), [numbers]); 
  // This will recalculate the sum only when the 'numbers' state changes

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 55 - React Performance Optimization</h1>
      <DayInfoComponent
        date="September 16, 2024"
        dayNumber="Day 55"
        challenge="Optimize performance using React.memo and useMemo"
        weather={weather}
      />
      
      {/* Display the current array of numbers */}
      <h4>Current Numbers: {numbers.join(", ")}</h4>
      
      {/* Display the memoized sum of the numbers */}
      <h4>Sum of numbers: {sum}</h4>

      {/* Button to generate a new set of random numbers */}
      <button className="random-button" onClick={generateRandomNumbers}>
        Generate Random Numbers
      </button>

      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I optimized the performance of the React app using <strong>React.memo</strong> and <strong>useMemo</strong> by recalculating the sum of randomly generated numbers only when the array changes. 
        The useMemo hook prevents unnecessary re-renders and recalculations by memoizing the computed value (sum).
      </p>
    </div>
  );
}

// HOC to include weather data in Day55
const Day55WithWeatherData = withWeatherData(Day55);

// Export the component with an error boundary wrapper to handle any potential errors
export default function Day55WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day55WithWeatherData />
    </ErrorBoundary>
  );
}

import React, { useState } from "react"; // Import React and useState for state management
import styled from "styled-components"; // Import styled-components for CSS-in-JS
import DayInfoComponent from "../DayInfoComponent"; // Import component for displaying day info
import ErrorBoundary from "../ErrorBoundary"; // Import ErrorBoundary for error handling
import withWeatherData from "../../UniqueComponents/withWeatherData"; // Higher-order component for weather data
import "./Challenge9.css"; // Import the corresponding CSS file for additional styling

// Styled components for dynamic button styling
const StyledButton = styled.button.attrs((props) => ({
  // Do not pass the 'primary' prop to the DOM
  primary: undefined,
}))`
  background-color: ${(props) => (props.isPrimary ? "#ff6f61" : "#4b8b3b")}; // Conditional background color based on isPrimary prop
  color: white; // Text color
  border: none; // No border
  padding: 10px 20px; // Padding around the button
  border-radius: 5px; // Rounded corners
  cursor: pointer; // Change cursor on hover
  margin: 10px; // Margin around the button
  transition: background-color 0.3s ease; // Smooth transition for background color on hover
  &:hover {
    background-color: ${(props) => (props.isPrimary ? "#ff4b3a" : "#3b6e2b")}; // Change background on hover
  }
`;

const StyledContainer = styled.div`
  padding: 20px; // Padding inside the container
  background-color: #f7f7f7; // Light gray background
  border-radius: 10px; // Rounded corners
  text-align: center; // Centered text
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
`;

function Day59({ weather, bgColor }) {
  const [isPrimary, setIsPrimary] = useState(true); // State to track the button style

  // Toggle button theme between primary and secondary
  const toggleButtonStyle = () => {
    setIsPrimary((prev) => !prev); // Toggle the isPrimary state
  };

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 59 - CSS-in-JS Libraries</h1>
      <DayInfoComponent
        date="September 20, 2024" // Date for Day 59
        dayNumber="Day 59" // Day number
        challenge="Use CSS-in-JS libraries like styled-components" // Challenge description
        weather={weather} // Weather data passed as prop
      />

      <StyledContainer>
        <p>Click the button to change its style!</p> {/* Instruction for user */}
        <StyledButton isPrimary={isPrimary} onClick={toggleButtonStyle}>
          {isPrimary ? "Primary Style" : "Secondary Style"} {/* Button text based on current style */}
        </StyledButton>
      </StyledContainer>

      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I used the styled-components library to apply CSS
        styles directly within my JavaScript components. The button dynamically
        changes style based on user interaction.
      </p>
    </div>
  );
}

// Wrap the Day59 component with weather data HOC to provide weather context
const Day59WithWeatherData = withWeatherData(Day59);

// Export the component wrapped in ErrorBoundary for error handling
export default function Day59WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day59WithWeatherData />
    </ErrorBoundary>
  );
}

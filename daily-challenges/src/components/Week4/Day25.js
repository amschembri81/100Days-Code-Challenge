import React from "react"; // Import React for functional components
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import DayInfoComponent from "../DayInfoComponent"; // Import DayInfoComponent to display day-specific information
import ErrorBoundary from "../ErrorBoundary"; // Import ErrorBoundary to catch and handle errors gracefully
import withWeatherData from "../../UniqueComponents/withWeatherData"; // Import Higher-Order Component (HOC) to enhance Day25 with weather data
import "./Challenge4.css"; // Import specific CSS for Day 25

// Task component that demonstrates PropTypes validation
function Task({ title, description, isCompleted }) {
  return (
    // Container for the Task component
    <div className="task-container">
      <h3>Task</h3>
      {/* Display task title */}
      <p>
        <strong>Title:</strong> {title}
      </p>
      {/* Display task description */}
      <p>
        <strong>Description:</strong> {description}
      </p>
      {/* Display task completion status */}
      <p>
        <strong>Status:</strong> {isCompleted ? "Completed" : "Incomplete"}
      </p>
    </div>
  );
}

// Defining PropTypes for Task component to validate props
Task.propTypes = {
  title: PropTypes.string.isRequired, // title must be a string and is required
  description: PropTypes.string.isRequired, // description must be a string and is required
  isCompleted: PropTypes.bool.isRequired, // isCompleted must be a boolean and is required
};

function Day25({ weather, bgColor, zipCode, handleZipCodeChange, toggleUnit, unit }) {
  // JSX element containing a greeting message with a waving hand emoji
  const element = (
    <h1>
      {" "}
      <i>Welcome to Day 25!</i> {"\u{1F44B}"}
    </h1>
  );

  const happyEmoji = "\u{1F60A}"; // 😊 Emoji to be passed to DayInfoComponent
  const message = "This is the challenge message for Day 25!"; // Challenge message
  const codingEmoji = "👩🏻‍💻"; // Emoji representing coding
  const coffeeEmoji = "☕"; // Emoji representing coffee

  return (
    // Main container for Day 25 challenge with dynamic background color based on weather
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 25 - PropTypes</h1> {/* Title for the challenge */}
      {element} {/* Render the greeting element with an emoji */}

      {/* Display day-specific information using DayInfoComponent */}
      <DayInfoComponent
        date="August 17, 2024" // Date of the challenge
        dayNumber="Day 25" // Current day number
        challenge="Add PropTypes to validate component props." // Challenge description
        message={message} // Pass the challenge message as a prop
        codingEmoji={codingEmoji} // Pass the coding emoji as a prop
        coffeeEmoji={coffeeEmoji} // Pass the coffee emoji as a prop
        happyEmoji={happyEmoji} // Pass the happy emoji as a prop
        weather={weather} // Pass weather data from the HOC
      />

      {/* Input field for the user to enter their zip code */}
      <div className="zip-code-container">
        <label>
          <h5>
            <strong>Enter your zip code:</strong>
          </h5>
          <input
            className="zipcode" // Class for styling the input field
            type="text"
            value={zipCode} // Bind input value to the zipCode state managed in the HOC
            onChange={handleZipCodeChange} // Update zip code state when input changes
            maxLength="5" // Restrict input to 5 digits (US zip code length)
            placeholder="Zip Code" // Placeholder text for the input field
          />
        </label>
      </div>

      {/* Task component wrapped in a container to demonstrate PropTypes validation */}
      <div className="center-container">
        <div className="task-wrapper">
          {/* Task component with title, description, and isCompleted props */}
          <Task title="Finish React Project" description="Complete all remaining tasks" isCompleted={false} />
        </div>

        {/* Explanation of the challenge and how PropTypes are used */}
        <h4 className="explanation">Explanation: </h4>
        <p>
          <i>
            The solution for today demonstrates how to use PropTypes by creating a Task component that displays a task’s title, description, and completion status while validating the props to ensure they are passed correctly.
          </i>
        </p>
      </div>
    </div>
  );
}

// Wrap Day25 component with the withWeatherData HOC to provide weather data and functionality
const Day25WithWeatherData = withWeatherData(Day25);

// Export the Day25 component wrapped in an ErrorBoundary to catch errors
export default function Day25WithErrorBoundary() {
  return (
    // ErrorBoundary is used to wrap the component and catch any errors that occur within it
    <ErrorBoundary>
      <Day25WithWeatherData />
    </ErrorBoundary>
  );
}
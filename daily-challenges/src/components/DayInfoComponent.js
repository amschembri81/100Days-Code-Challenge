import React from 'react'; // Import React for component creation
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import './DayInfoComponent.css'; // Import CSS for styling the component

// Define the DayInfoComponent function
function DayInfoComponent({
  date,
  dayNumber,
  challenge,
  message,
  codingEmoji,
  coffeeEmoji,
  happyEmoji,
  partyEmoji,
  weather,
  theme, // Add theme as a prop for dynamic styling
}) {
  return (
    <div className={`day-info ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      {/* Render the date */}
      <h3>{date}</h3>
      <p>
        This is <strong>{dayNumber}</strong> of <strong>100 Days of Code</strong> 
        <span className="happy-emoji"> {happyEmoji}</span>! {/* Display happy emoji */}
      </p>
      {/* Conditionally render the party message if partyEmoji is provided */}
      {partyEmoji && (
        <p>
          <strong>One week down!!</strong> <span className="party-emoji">{partyEmoji}</span>
        </p>
      )}
      {/* Display the challenge title */}
      <p>
        <strong>Challenge: </strong> {challenge}
      </p>
      {/* Display the main message with coding and coffee emojis */}
      <p>
        <strong>{message}</strong> {codingEmoji} {coffeeEmoji}
      </p>
      {/* Conditionally render the weather information if provided */}
      {weather && (
        <p>
          <strong>Weather: </strong> {weather}
        </p>
      )}
    </div>
  );
}

// Define prop types for the component
DayInfoComponent.propTypes = {
  date: PropTypes.string.isRequired, // date is required and should be a string
  dayNumber: PropTypes.string.isRequired, // dayNumber is required and should be a string
  challenge: PropTypes.string.isRequired, // challenge is required and should be a string
  weather: PropTypes.string, // weather is optional and should be a string
  happyEmoji: PropTypes.string.isRequired, // happyEmoji is required and should be a string
  codingEmoji: PropTypes.string, // codingEmoji is optional and should be a string
  coffeeEmoji: PropTypes.string, // coffeeEmoji is optional and should be a string
  theme: PropTypes.string,       // theme is optional and should be a string
};

// Export the component for use in other parts of the application
export default DayInfoComponent;

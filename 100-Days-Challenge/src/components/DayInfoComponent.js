import React from 'react';
import PropTypes from 'prop-types';
import './DayInfoComponent.css';

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
}) {
  return (
    <div className="day-info">
      <h3>{date}</h3>
      <p>
        This is <strong>{dayNumber}</strong> of <strong>100 Days of Code</strong> 
        <span className="happy-emoji"> {happyEmoji}</span>!
      </p>
      {partyEmoji && (
        <p>
          <strong>One week down!!</strong> <span className="party-emoji">{partyEmoji}</span>
        </p>
      )}
      <p>
        <strong>Challenge: </strong> {challenge}
      </p>
      <p>
        <strong>{message}</strong> {codingEmoji} {coffeeEmoji}
      </p>
      {weather && (
        <p>
          <strong>Weather: </strong> {weather}
        </p>
      )}
    </div>
  );
}

DayInfoComponent.propTypes = {
  date: PropTypes.string.isRequired,
  dayNumber: PropTypes.string.isRequired,
  challenge: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  codingEmoji: PropTypes.string.isRequired,
  coffeeEmoji: PropTypes.string.isRequired,
  happyEmoji: PropTypes.string.isRequired,
  partyEmoji: PropTypes.string,
  weather: PropTypes.string,
};

export default DayInfoComponent;
import React, { useState } from "react";
import "./Challenge8.css";

function LazyComponent() {
  // State to manage the visibility of the surprise message
  const [showSurprise, setShowSurprise] = useState(false);

  // Function to handle the button click and show the surprise message
  const handleClick = () => {
    setShowSurprise(true);
  };

  return (
    <div className="lazy-container">
      <h2>
        Surprise! You've loaded the Lazy Component! 
        {/* Emoji indicating a surprise, wrapped in span for accessibility */}
        <span role="img" aria-label="Party popper">🎉</span>
      </h2>
      <p>
        This component was lazily loaded just for you. 
        {/* Emoji for a cool demeanor, wrapped in span for accessibility */}
        <span role="img" aria-label="Smiling face with sunglasses">😎</span>
      </p>

      {/* Button to trigger the surprise message */}
      <button className="surprise-button" onClick={handleClick}>
        Click for a Surprise!
      </button>

      {/* Conditionally render the surprise message when showSurprise is true */}
      {showSurprise && (
        <div className="surprise-message">
          <h3>
            {/* Emojis indicating celebration, wrapped in spans for accessibility */}
            <span role="img" aria-label="Balloons">🎈</span> Ta-da! 
            <span role="img" aria-label="Balloons">🎈</span>
          </h3>
          <p>
            Here's your surprise: You are awesome! 
            {/* Emoji indicating a rocket, wrapped in span for accessibility */}
            <span role="img" aria-label="Rocket">🚀</span>
          </p>
          <img
            src="https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif"
            alt="Surprise gif"
            className="surprise-gif"
          />
        </div>
      )}
    </div>
  );
}

export default LazyComponent;

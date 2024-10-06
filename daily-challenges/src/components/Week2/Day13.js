import React, { useState } from "react"; // Import React and useState for managing component state
import DayInfoComponent from "../DayInfoComponent"; // Import DayInfoComponent to display day-specific information
import "../../Challenges.css"; // Import global CSS for styling
import "./Challenge2.css"; // Import specific CSS for Day 13

function Day13() {
  // useState hook to track which language card is currently being hovered
  const [hovered, setHovered] = useState(null);

  // Array of programming languages with their respective color for styling
  const languages = [
    { name: "JavaScript", color: "#f0db4f" }, // Yellow for JavaScript
    { name: "Python", color: "#306998" }, // Blue for Python
    { name: "Java", color: "#b07219" }, // Brown for Java
    { name: "C++", color: "#004482" }, // Dark blue for C++
  ];

  return (
    <div className="day-container"> {/* Main container for Day 13 challenge */}
      <h1>Day 13 - Styling in React</h1> {/* Title for the challenge */}

      {/* Display day-specific information using DayInfoComponent */}
      <DayInfoComponent
        date="August 5, 2024" // Date of the challenge
        dayNumber="Day 13" // Current day number
        challenge="Apply styles to React components" // Description of the challenge
        message="Learn how to style React components!" // Message for the challenge
      />

      {/* Container to display language cards */}
      <div className="languages-container">
        {languages.map((language, index) => (
          <div
            key={index} // Unique key for each language card
            className="language-card" // Class for styling the card
            style={{
              // Inline styles: Change background color and scale on hover
              backgroundColor: hovered === index ? "lightgray" : language.color, // If hovered, use light gray; otherwise, use the language's color
              transform: hovered === index ? "scale(1.05)" : "scale(1)", // Slightly enlarge the card on hover
            }}
            onMouseEnter={() => setHovered(index)} // Set the hovered card index on mouse enter
            onMouseLeave={() => setHovered(null)} // Reset hovered state on mouse leave
          >
            {language.name} {/* Display the name of the programming language */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Day13;
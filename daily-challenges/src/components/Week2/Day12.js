import React from "react"; // Import React for functional components and React Fragments
import DayInfoComponent from "../DayInfoComponent"; // Import DayInfoComponent for displaying day-specific information
import "../../Challenges.css"; // Import global CSS for styling
import "./Challenge2.css"; // Import specific CSS for Day 12

function Day12() {
  return (
    <div className="day-container"> {/* Main container for Day 12 challenge */}
      <h1>Day 12 - React Fragments</h1> {/* Title for the challenge */}

      {/* Display day-specific information using DayInfoComponent */}
      <DayInfoComponent
        date="August 4, 2024" // Date of the challenge
        dayNumber="Day 12" // Current day number
        challenge="Use fragments to group elements" // Description of the challenge
        message="Use React Fragments for multiple child elements!" // Message for the challenge
      />
      
      {/* Container for React skills list */}
      <div className="skills-container">
        <h2 className="skills-heading">My React Skills:</h2> {/* Heading for skills section */}
        
        {/* Using React.Fragment to group multiple Skill components without adding extra DOM nodes */}
        <React.Fragment>
          <Skill name="JSX" /> {/* Display JSX skill */}
          <Skill name="State Management" /> {/* Display State Management skill */}
          <Skill name="Event Handling" /> {/* Display Event Handling skill */}
          <Skill name="Props" /> {/* Display Props skill */}
        </React.Fragment>
      </div>

      {/* Separate container for additional information about React Fragments */}
      <div className="additional-text-container">
        {/* Using React.Fragment to group related elements */}
        <React.Fragment>
          <h2 className="additional-heading">About React Fragments</h2> {/* Heading about React Fragments */}
          <p>This is an additional text grouped with Fragments.</p> {/* Description of React Fragments */}
          <p>Fragments allow grouping without adding extra nodes to the DOM.</p> {/* Explanation of Fragments usage */}
        </React.Fragment>
      </div>
    </div>
  );
}

// Functional component to display individual skills
function Skill({ name }) {
  return (
    <div className="skill-item"> {/* Container for each skill item */}
      <p>{name}</p> {/* Display the skill name passed via props */}
    </div>
  );
}

export default Day12;
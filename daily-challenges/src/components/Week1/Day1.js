import React from "react";
import "../../Challenges.css"; 
import "./Challenge1.css";

function Day1() {
  // Defining a checkmark symbol using a string
  const checkmark = "✔"; 

  // Array containing a list of goals or items for the day
  const items = [
    "Learn React",        // Item 1: Learning React
    "Practice Javascript",// Item 2: Practicing JavaScript
    "Build Projects",     // Item 3: Building projects
    "Have Fun!",          // Item 4: Having fun while coding
  ];

  return (
    <div className="day-container">
      {/* Main heading for Day 1 */}
      <h1>Day 1 - Introduction to React</h1>

      {/* A friendly greeting with a waving hand emoji */}
      <h1>Hello, World! {"\u{1F44B}"}</h1>

      {/* Subheading welcoming the reader */}
      <h2>Welcome!</h2>

      {/* Date of the challenge day */}
      <h3>July 25, 2024</h3>

      {/* Describing the day and challenge */}
      <p>
        This is <strong>Day 1</strong> of <strong>100 Days of Code</strong>{" "}
        {"\u263A"}! {/* Smile emoji */}
      </p>

      {/* Briefly explaining the coding challenge for Day 1 */}
      <p>
        <strong>Challenge: </strong>Create a React App and modify code to return
        "Hello, World".
      </p>

      {/* Section heading for personal goals */}
      <h2>My Goals:</h2>

      {/* Iterating through the 'items' array and displaying each goal */}
      <div className="goals-list">
        {items.map((item, index) => (
          <p key={index}>
            {checkmark} {item} {/* Displaying the checkmark next to each item */}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Day1;
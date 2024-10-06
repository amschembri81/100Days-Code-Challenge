import React, { useState, useEffect } from "react";
import "../../Challenges.css"; 
import "./Challenge1.css";

function Day2() {
  // Setting up a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // JSX element containing a greeting with a waving hand emoji
  const element = <h1>Hello, world! {"\u{1F44B}"}</h1>;

  // Defining emoji variables for coding (💻) and coffee (☕)
  const codingEmoji = "\u{1F4BB}"; 
  const coffeeEmoji = "\u{2615}"; 

  // Function to handle button clicks and increment the counter
  const handleButtonClick = () => {
    setCount(count + 1);
  };

  // useEffect hook to log messages when the component renders and unmounts
  useEffect(() => {
    // This runs after the component is rendered
    console.log("Component rendered");

    // Cleanup function that runs before the next effect or when the component unmounts
    return () => {
      console.log("Cleanup on unmount or before the next effect");
    };
  }, []); // Empty dependency array means this runs only on mount and unmount

  return (
    <div className="day-container">
      {/* Header for Day 2 */}
      <h1>Day 2 - JSX Basics</h1>

      {/* Rendering the 'element' variable, which contains a greeting */}
      {element}

      {/* Displaying the current date */}
      <h3>July 26, 2024</h3>

      {/* Describing the day and challenge */}
      <p>
        This is <strong>Day 2</strong> of <strong>100 Days of Code</strong>{" "}
        {"\u263A"}! {/* Smile emoji */}
      </p>

      {/* Brief explanation of the challenge for Day 2 */}
      <p>
        <strong>Challenge: </strong>Understand and use JSX to render elements.
      </p>

      {/* Displaying some motivational text with coding and coffee emojis */}
      <p>
        <strong>Let's code!</strong> {codingEmoji} {coffeeEmoji}
      </p>

      {/* Header for the click counter */}
      <h2>Click Counter:</h2>

      {/* Displaying the current count of button clicks */}
      <p>You have clicked the button {count} times.</p>

      {/* Button to increment the count when clicked */}
      <button className="button" onClick={handleButtonClick}>
        Click me!
      </button>
    </div>
  );
}

export default Day2;
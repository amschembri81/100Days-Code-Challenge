import React, { useState, useEffect } from "react";
import '../Challenges.css';

function Day2() {
  const [count, setCount] = useState(0);

  const element = <h1>Hello, world! {"\u{1F44B}"}</h1>;
  const codingEmoji = "\u{1F4BB}"; // 💻
  const coffeeEmoji = "\u{2615}"; // ☕

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Component rendered");
    return () => {
      console.log("Cleanup on unmount or before the next effect");
    };
  }, []);

  return (
    <div className="day-container">
      <h1>Day 2 - JSX Basics</h1>
      {element}
      <h3>July 26, 2024</h3>
      <p>
        This is <strong>Day 2</strong> of <strong>100 Days of Code</strong>{" "}
        {"\u263A"}!
      </p>
      <p>
        <strong>Challenge: </strong>Understand and use JSX to render elements.
      </p>
      <p>
        <strong>Let's code!</strong> {codingEmoji} {coffeeEmoji}
      </p>
      <h2>Click Counter:</h2>
      <p>You have clicked the button {count} times.</p>
      <button onClick={handleButtonClick}>Click me!</button>
    </div>
  );
}

export default Day2;

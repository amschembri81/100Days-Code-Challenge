import React from "react";
import '../Challenges.css';

function Day1() {
  const checkmarkEmoji = "\u2714"; // ✔

  const items = [
    "Learn React",
    "Practice Javascript",
    "Build Projects",
    "Have Fun!",
  ];

  return (
    <div className="day-container">
      <h1>Day 1 - Introduction to React</h1>
      <h1>Hello, World! {"\u{1F44B}"}</h1>
      <h2>Welcome!</h2>
      <h3>July 25, 2024</h3>
      <p>
        This is <strong>Day 1</strong> of <strong>100 Days of Code</strong>{" "}
        {"\u263A"} !
      </p>
      <p>
        <strong>Challenge: </strong>Create a React App and modify code to return
        "Hello, World".
      </p>
      <h2>My Goals:</h2>
      <ul className="goals-list">
        {items.map((item, index) => (
          <li key={index}>
            {checkmarkEmoji} {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Day1;

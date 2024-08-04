import React, { useEffect } from "react";
import '../../App.css';
import DayInfoComponent from "../DayInfoComponent";
import JokeGenerator from "../JokeGenerator";

function Day4() {
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;

  const codingEmoji = "\u{1F4BB}"; // 💻
  const coffeeEmoji = "\u{2615}"; // ☕
  const happyEmoji = "\u{1F60A}"; // 😊

  useEffect(() => {
    console.log("App component rendered");
    return () => {
      console.log("App component cleanup");
    };
  }, []);

  return (
    <div className="day-container">
      <h1>Day 4 - Props</h1>
      {element}
      <DayInfoComponent
        date="July 28, 2024"
        dayNumber="Day 4"
        challenge="Pass data to a component using props."
        message="Let's code!"
        codingEmoji={codingEmoji}
        coffeeEmoji={coffeeEmoji}
        happyEmoji={happyEmoji}
      />
      <JokeGenerator />
    </div>
  );
}

export default Day4;

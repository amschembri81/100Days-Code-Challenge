import React, { useEffect } from "react";
import '../Challenges.css';
import DayInfoComponent from "../DayInfoComponent";
import QuoteGenerator from "../QuoteGenerator";

function Day3() {
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;

  useEffect(() => {
    console.log("App component rendered");
    return () => {
      console.log("App component cleanup");
    };
  }, []);

  return (
    <div className="day-container">
      <h1>Day 3 - Functional Components</h1>
      {element}
      <DayInfoComponent
        date="July 27, 2024"
        dayNumber="Day 3"
        challenge="Create a functional component and render it."
        message="Let's code!"
        codingEmoji={"\u{1F4BB}"}
        coffeeEmoji={"\u{2615}"}
        happyEmoji={"\u{1F60A}"}
      />
      <QuoteGenerator />
    </div>
  );
}

export default Day3;

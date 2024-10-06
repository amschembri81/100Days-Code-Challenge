import React, { useEffect } from "react";
import DayInfoComponent from "../DayInfoComponent"; // Importing reusable DayInfoComponent
import JokeGenerator from "../../UniqueComponents/JokeGenerator"; // Importing JokeGenerator component for jokes
import "../../Challenges.css"; // Import global styles
import "./Challenge1.css"; // Import specific CSS for this challenge

function Day4() {
  // JSX element to display a greeting with a waving hand emoji
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;

  // Emojis for coding, coffee, and happy expressions
  const codingEmoji = "\u{1F4BB}"; // 💻
  const coffeeEmoji = "\u{2615}";  // ☕
  const happyEmoji = "\u{1F60A}";  // 😊

  // useEffect hook to log messages when the component is mounted and unmounted
  useEffect(() => {
    console.log("App component rendered"); // Logs when the component is rendered (mounted)
    return () => {
      console.log("App component cleanup"); // Logs during cleanup (before unmounting)
    };
  }, []); // Empty dependency array ensures this runs only on mount/unmount

  return (
    <div className="day-container">
      {/* Heading for Day 4 challenge */}
      <h1>Day 4 - Props</h1>

      {/* Render the greeting element */}
      {element}

      {/* Rendering the DayInfoComponent and passing multiple props */}
      <DayInfoComponent
        date="July 28, 2024"
        dayNumber="Day 4"
        challenge="Pass data to a component using props."
        message="Let's code!"
        codingEmoji={codingEmoji}   // 💻 Emoji for coding
        coffeeEmoji={coffeeEmoji}   // ☕ Emoji for coffee
        happyEmoji={happyEmoji}     // 😊 Emoji for happy
      />

      {/* Rendering JokeGenerator component which fetches and displays jokes */}
      <JokeGenerator />
    </div>
  );
}

export default Day4;
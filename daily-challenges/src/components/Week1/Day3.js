import React, { useEffect } from "react";
import DayInfoComponent from "../DayInfoComponent";
import ProfileComponent from "./ProfileComponent"; // Import the ProfileComponent to pass props
import "../../Challenges.css"; // Import global CSS for styles
import "./Challenge1.css"; // Import specific CSS for this challenge

function Day3() {
  // JSX element for greeting with a waving hand emoji
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;

  // Defining user object with properties: name, job, and location
  const user = {
    name: "John Doe",
    job: "Software Engineer",
    location: "New York",
  };

  // useEffect hook to log messages when the component renders and unmounts
  useEffect(() => {
    console.log("App component rendered"); // Logs when the component is mounted
    return () => {
      console.log("App component cleanup"); // Logs when the component is unmounted
    };
  }, []); // Empty dependency array makes it run only on mount/unmount

  return (
    <div className="day-container">
      {/* Heading for Day 3 challenge */}
      <h1>Day 3 - Functional Components & Passing Props</h1>

      {/* Render the greeting element */}
      {element}

      {/* Rendering the DayInfoComponent and passing necessary props */}
      <DayInfoComponent
        date="July 27, 2024"
        dayNumber="Day 3"
        challenge="Create a functional component and render it."
        message="Let's code!"
        codingEmoji={"\u{1F4BB}"}  // 💻
        coffeeEmoji={"\u{2615}"}   // ☕
        happyEmoji={"\u{1F60A}"}   // 😊
      />

      {/* Rendering the ProfileComponent and passing user details as props */}
      <ProfileComponent 
        name={user.name} 
        job={user.job} 
        location={user.location} 
      />
    </div>
  );
}

export default Day3;
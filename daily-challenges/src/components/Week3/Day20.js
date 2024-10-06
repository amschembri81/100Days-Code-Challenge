import React, { useState, useContext } from "react"; // Import React, useState, and useContext hooks
import { UserProfileProvider, UserProfileContext } from "../../UniqueComponents/UserProfileContext"; // Import UserProfileProvider and context
import DayInfoComponent from "../DayInfoComponent"; // Import DayInfoComponent to display day-specific information
import "../../Challenges.css"; // Import global CSS for styling
import "./Challenge3.css"; // Import specific CSS for Day 20

function Day20() {
  // JSX element containing a greeting message with a waving hand emoji
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;

  const happyEmoji = "\u{1F60A}"; // 😊 Emoji to be passed to DayInfoComponent
  const [weather] = useState(""); // State for weather data, although not used in this example

  // Access userProfile, updateUserProfile, and getColorName functions from the UserProfileContext using useContext
  const { userProfile, updateUserProfile, getColorName } = useContext(UserProfileContext);

  // Handler to update the user's name in the context
  const handleNameChange = (e) => {
    updateUserProfile({ name: e.target.value }); // Update name in the user profile context
  };

  // Handler to update the user's favorite color in the context
  const handleColorChange = (e) => {
    updateUserProfile({ favoriteColor: e.target.value }); // Update favorite color in the user profile context
  };

  // Retrieve the human-readable color name from the favorite color value
  const favoriteColorName = getColorName(userProfile.favoriteColor);

  return (
    <div className="day-container" style={{ backgroundColor: userProfile.favoriteColor }}> {/* Dynamic background color based on favorite color */}
      <h1>Day 20 - Context API</h1> {/* Title for the challenge */}
      {element} {/* Render the greeting element with an emoji */}

      {/* Display day-specific information using DayInfoComponent */}
      <DayInfoComponent
        date="August 12, 2024" // Date of the challenge
        dayNumber="Day 20" // Current day number
        challenge="Implement a simple context provider and consumer." // Challenge description
        happyEmoji={happyEmoji} // Pass the happyEmoji to the component
        weather={weather} // Pass weather data (empty in this case)
      />

      {/* Profile section where users can update their name and favorite color */}
      <div className="profile-container">
        <h2 className="userprofile">User Profile</h2> {/* User profile heading */}
        
        {/* Input for user's name */}
        <label className="label">
          <strong>Your Name: </strong>
          <input
            className="input-field2" // Class for styling the input field
            type="text"
            value={userProfile.name} // Bind input value to userProfile name
            onChange={handleNameChange} // Update name when input changes
          />
        </label>

        {/* Input for user's favorite color */}
        <label className="label">
          <strong>Select Your Favorite Color: </strong>
          <input
            className="input-field2" // Class for styling the input field
            type="color"
            value={userProfile.favoriteColor} // Bind input value to userProfile favorite color
            onChange={handleColorChange} // Update favorite color when input changes
          />
        </label>

        {/* Display the user's name and favorite color */}
        <p className="userprofile">
          Hello, {userProfile.name}! 👋🏻 Your favorite color is{" "}
          <span style={{ color: userProfile.favoriteColor }}>{favoriteColorName}</span>. {/* Display color name */}
        </p>

        {/* Circle showing the user's favorite color */}
        <div
          className="userprofile"
          style={{
            backgroundColor: userProfile.favoriteColor, // Dynamic background color
            width: "70px",
            height: "70px",
            borderRadius: "50%", // Make the div a circle
            display: "inline-block",
          }}
        ></div>
      </div>
    </div>
  );
}

export default function Day20WithProvider() {
  return (
    // Wrap Day20 component with UserProfileProvider to provide context values
    <UserProfileProvider>
      <Day20 />
    </UserProfileProvider>
  );
}
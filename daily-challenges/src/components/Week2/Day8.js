import React, { useState } from "react"; // Import React and useState hook for state management
import DayInfoComponent from "../DayInfoComponent"; // Import DayInfoComponent for displaying day-specific information
import "../../Challenges.css"; // Import global CSS for styling
import "./Challenge2.css"; // Import specific CSS for Day 8

function Day8() {
  // useState hook to manage the current index of the messages array
  const [messageIndex, setMessageIndex] = useState(0);

  // Array of messages
  const messages = [
    "Let's code!",
    "Keep going, you're doing great!",
    "Don't give up!",
    "You're making progress!",
    "Stay focused and keep coding!",
  ];

  // Array of my favorite books to be displayed as a list
  const favoriteBooks = [
    "Pride and Prejudice",
    "A Court of Thorns and Roses",
    "The Handmaid's Tale",
    "Great Expectations",
    "The Goldfinch",
  ];

  return (
    <div className="day-container"> {/* Main container for the Day 8 challenge */}
      <h1>Day 8 - Lists and Keys</h1> {/* Challenge title */}

      {/* Display day info using DayInfoComponent */}
      <DayInfoComponent
        date="July 31, 2024" // Date of the challenge
        dayNumber="Day 8" // Day number
        challenge="Render a list of items using the map function" // Description of the challenge
        message={messages[messageIndex]} // Pass the current message based on messageIndex
      />

      {/* Button to cycle through the messages array */}
      <button className="button" onClick={() => setMessageIndex((prev) => (prev + 1) % messages.length)}>
        Change Message
      </button>

      {/* Section to display a list of favorite books */}
      <h2 className="header">My Favorite Books</h2> {/* Header for the book list */}
      <ul className="bullet-list2"> {/* Unordered list for displaying the favorite books */}
        {favoriteBooks.map((book, index) => (
          // Map through favoriteBooks array and display each book as a list item
          // Use index as the key for each list item
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

export default Day8;
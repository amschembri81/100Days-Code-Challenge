import React, { useState } from "react";

// Array of jokes to display
const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the computer go to the doctor? It had a virus!",
  "Why was the math book sad? Because it had too many problems.",
  "What’s a skeleton’s least favorite room in the house? The living room!",
  "Why don't some fish play piano? Because you can’t tuna fish!"
];

function JokeContainer() {
  // State to track the index of the current joke
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);

  // Function to show the next joke
  const handleNextJoke = () => {
    // Update the joke index, cycling back to the first joke after the last one
    setCurrentJokeIndex((prevIndex) => (prevIndex + 1) % jokes.length);
  };

  return (
    <div className="joke-container">
      <h3>Here’s a fun joke for you!</h3> {/* Title for the joke section */}
      <p>{jokes[currentJokeIndex]}</p> {/* Display the current joke */}
      <button onClick={handleNextJoke} className="joke-button"> {/* Button to get the next joke */}
        Show Another Joke
      </button>
    </div>
  );
}

export default JokeContainer;

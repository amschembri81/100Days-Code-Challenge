import React, { useState, useEffect } from 'react'; // Import necessary React hooks

function JokeGenerator() {
  const [joke, setJoke] = useState(''); // State to hold the fetched joke

  // Function to fetch a random joke from the API
  const fetchJoke = async () => {
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json', // Specify that we want a JSON response
        },
      });
      const data = await response.json(); // Parse the JSON response
      setJoke(data.joke); // Update the joke state with the fetched joke
    } catch (error) {
      console.error('Error fetching the joke', error); // Log any errors encountered during the fetch
    }
  };

  // useEffect hook to fetch a joke when the component mounts
  useEffect(() => {
    fetchJoke(); // Fetch a joke on initial render
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="joke-generator">
      <h2>Random Joke</h2>
      <button className="button" onClick={fetchJoke}>Get New Joke</button> {/* Button to fetch a new joke */}
      <p>{joke}</p> {/* Display the current joke */}
    </div>
  );
}

export default JokeGenerator; 
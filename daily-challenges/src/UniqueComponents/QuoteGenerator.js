import React, { useState, useEffect } from "react"; // Import React and necessary hooks
import axios from "axios"; // Import axios for making HTTP requests

function QuoteGenerator() {
  const [quote, setQuote] = useState(""); // State to hold the fetched quote
  const [movie, setMovie] = useState(""); // State to hold the movie name

  // Function to fetch a random movie quote from the API
  const fetchQuote = async () => {
    try {
      console.log("Fetching random movie quote..."); // Log fetching action
      const response = await axios.get("https://famous-movie-quotes.p.rapidapi.com/api/random-movie-quote", {
        headers: {
          "x-rapidapi-host": "famous-movie-quotes.p.rapidapi.com", // Specify the API host
          "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY, // Use the API key from the environment variables
        },
      });

      const randomQuote = response.data; // Assuming the response contains the quote and movie
      setQuote(randomQuote.quote); // Set the quote state
      setMovie(randomQuote.movie); // Set the movie state
    } catch (error) {
      console.error("Error fetching the quote:", error); // Log any error encountered
    }
  };

  // Fetch a quote when the component mounts
  useEffect(() => {
    fetchQuote(); // Call fetchQuote function
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div className="quote-generator">
      <h2>Random Movie Quote</h2>
      <p>"{quote}"</p> {/* Display the fetched quote */}
      <p><strong>- {movie}</strong></p> {/* Display the movie name */}
      <button onClick={fetchQuote} className="fetch-button"> {/* Button to fetch a new quote */}
        Get New Quote
      </button>
    </div>
  );
}

export default QuoteGenerator; 

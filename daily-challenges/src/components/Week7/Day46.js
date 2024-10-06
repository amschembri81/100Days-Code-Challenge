import React, { useEffect, useState, useCallback } from "react";
import DayInfoComponent from "../DayInfoComponent"; // Component to display day-specific information
import ErrorBoundary from "../ErrorBoundary"; // Component to catch runtime errors
import withWeatherData from "../../UniqueComponents/withWeatherData"; // Higher-order component for providing weather data
import "./Challenge7.css"; // Import custom styles

function Day46({ weather, bgColor }) {
  const [pokemon, setPokemon] = useState(null); // State to store the fetched Pokémon data
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0); // State to track the current Pokémon index
  const [error, setError] = useState(null); // State to store any error that occurs during data fetching

  // List of Pokémon names for cycling through
  const pokemonNames = [
    "Pikachu", "Bulbasaur", "Charmander", "Squirtle", "Eevee", 
    "Snorlax", "Jigglypuff", "Meowth", "Psyduck", "Gengar"
  ];

  // Function to fetch Pokémon data from the GraphQL API
  const fetchPokemonData = useCallback(() => {
    const currentPokemonName = pokemonNames[currentPokemonIndex]; // Get the current Pokémon based on index

    // Send GraphQL query to fetch the Pokémon's name and types
    fetch("https://graphql-pokemon2.vercel.app/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{ pokemon(name: "${currentPokemonName}") { name types } }`, // GraphQL query to get the Pokémon data
      }),
    })
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => setPokemon(data.data.pokemon)) // Update state with the fetched Pokémon data
      .catch(() => setError("Error fetching Pokémon data")); // Handle errors during the fetch process
  }, [currentPokemonIndex, pokemonNames]); // The fetch function depends on the current Pokémon index and names list

  // Effect to fetch Pokémon data whenever the index changes
  useEffect(() => {
    fetchPokemonData(); // Fetch data when the component mounts or the Pokémon index changes
  }, [fetchPokemonData]); // Only re-run effect when fetchPokemonData changes

  // Function to load the next Pokémon in the list
  const loadNextPokemon = () => {
    setCurrentPokemonIndex((prevIndex) => (prevIndex + 1) % pokemonNames.length); // Cycle through the Pokémon list
  };

  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>; // 👋 emoji for greeting
  const happyEmoji = "\u{1F60A}"; // 😊 emoji

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}> {/* Apply background color */}
      <h1>Day 46 - GraphQL Basics</h1> {/* Title for the challenge */}
      {element} {/* Greeting message */}

      {/* DayInfoComponent to show day number, date, and challenge details */}
      <DayInfoComponent
        date="September 7, 2024" // Current date
        dayNumber="Day 46" // Day number of the challenge
        challenge="Understand the basics of GraphQL" // Challenge description
        weather={weather} // Display weather data
        happyEmoji={happyEmoji} // Pass happy emoji
      />

      {/* Conditionally display Pokémon data or loading/error messages */}
      {error ? (
        <p className="error">{error}</p> // Show error message if there's an error
      ) : pokemon ? (
        <div className="graphql-container">
          <h3>Pokemon Name: {pokemon.name}</h3> {/* Display Pokémon name */}
          <p>Types: {pokemon.types.join(", ")}</p> {/* Display Pokémon types */}
        </div>
      ) : (
        <p>Loading...</p> // Show loading message while fetching data
      )}

      {/* Button to load the next Pokémon */}
      <div className="load-more-container">
        <button className="load-more-button" onClick={loadNextPokemon}>
          Load Next Pokémon
        </button>
      </div>

      {/* Challenge explanation */}
      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I explored the basics of GraphQL by querying data for one Pokémon at a time from an API. 
        The user can load a new Pokémon by clicking a button.
      </p>
    </div>
  );
}

// Wrap Day46 with withWeatherData HOC to provide weather data
const Day46WithWeatherData = withWeatherData(Day46);

// Export Day46 wrapped in ErrorBoundary to catch runtime errors
export default function Day46WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day46WithWeatherData />
    </ErrorBoundary>
  );
}

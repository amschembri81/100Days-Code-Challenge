import React, { useState, useEffect } from 'react';

function JokeGenerator() {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
        },
      });
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error('Error fetching the joke', error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="joke-generator">
      <h2>Random Joke</h2>
      <button className="button" onClick={fetchJoke}>Get New Joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default JokeGenerator;
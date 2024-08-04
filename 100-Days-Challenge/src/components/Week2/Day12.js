import React, { useState } from "react";
import axios from "axios";
import DayInfoComponent from "../DayInfoComponent";
import '../Challenges.css';

function Day11() {
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;

  const codingEmoji = "\u{1F4BB}"; // 💻
  const coffeeEmoji = "\u{2615}"; // ☕
  const happyEmoji = "\u{1F60A}"; // 😊
  const partyEmoji = "\u{1F389}"; // 🎉

  const messages = [
    "Let's code!",
    "Keep going, you're doing great!",
    "Don't give up!",
    "You're making progress!",
    "Stay focused and keep coding!",
  ];

  const [messageIndex, setMessageIndex] = useState(0);
  const [weather, setWeather] = useState("");
  const [showDayInfo, setShowDayInfo] = useState(true);

  const updateMessage = () => {
    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  const fetchWeather = async () => {
    const apiKey = "81079bc3172b71333817eb0e8ca71bf5";
    const city = "Chicago";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      const weatherData = `${response.data.weather[0].description}, ${response.data.main.temp}°C`;
      setWeather(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="day-container">
      <h1>Day 12 - React Fragments</h1> 
      {element}
      {showDayInfo && (
        <DayInfoComponent
          date="August 4, 2024"
          dayNumber="Day 11"
          challenge="Use fragments to group multiple elements"
          message={messages[messageIndex]}
          codingEmoji={codingEmoji}
          coffeeEmoji={coffeeEmoji}
          happyEmoji={happyEmoji}
          partyEmoji={partyEmoji}
          weather={weather}
        />
      )}
      <button className="button" onClick={() => setShowDayInfo(!showDayInfo)}>
        Toggle Day Info
      </button>
      <button className="button" onClick={updateMessage}>
        Update Message
      </button>
      <button className="button" onClick={fetchWeather}>
        Fetch Weather
      </button>
      <h2>Code Snippets:</h2>
      <CodeSnippets />
    </div>
  );
}

function CodeSnippets() {
  const snippets = [
    {
      title: "Snippet 1",
      description: "This is the first code snippet.",
      code: `const greeting = "Hello, World!";
console.log(greeting);`,
    },
    {
      title: "Snippet 2",
      description: "This is the second code snippet.",
      code: `const add = (a, b) => a + b;
console.log(add(2, 3));`,
    },
    {
      title: "Snippet 3",
      description: "This is the third code snippet.",
      code: `const square = (x) => x * x;
console.log(square(4));`,
    },
  ];

  return (
    <div className="code-snippets">
      {snippets.map((snippet, index) => (
        <React.Fragment key={index}>
          <h3>{snippet.title}</h3>
          <p>{snippet.description}</p>
          <pre>{snippet.code}</pre>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Day11;

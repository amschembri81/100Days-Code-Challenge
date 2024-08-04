import React, { useState } from 'react';
import axios from 'axios';
import DayInfoComponent from '../DayInfoComponent';
import '../../App.css';

function Day13() {
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
      <h1>Day 13 - Styling in React</h1>
      <ul className="bullet-list">
        <li>Apply styles to React components</li>
      </ul>
      {element}
      {showDayInfo && (
        <DayInfoComponent
          date="August 5, 2024"
          dayNumber="Day 13"
          challenge="Apply styles to React components"
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
      <h2>Programming Languages:</h2>
      <ProgrammingLanguages />
    </div>
  );
}

function ProgrammingLanguages() {
  const languages = [
    {
      name: 'JavaScript',
      description: 'A versatile scripting language used primarily for web development.',
      color: '#f0db4f',
    },
    {
      name: 'Python',
      description: 'A popular language known for its readability and broad applicability.',
      color: '#306998',
    },
    {
      name: 'Java',
      description: 'A high-level language widely used for building enterprise-scale applications.',
      color: '#b07219',
    },
    {
      name: 'C++',
      description: 'A powerful language often used in systems programming and game development.',
      color: '#004482',
    },
    {
      name: 'Ruby',
      description: 'A dynamic, open-source language with a focus on simplicity and productivity.',
      color: '#cc342d',
    },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <div className="languages-container">
      {languages.map((language, index) => (
        <div
          key={index}
          className="language-card"
          style={{
            backgroundColor: hovered === index ? 'lightgray' : language.color,
            transform: hovered === index ? 'scale(1.05)' : 'scale(1)',
          }}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <h3>{language.name}</h3>
          <p>{language.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Day13;
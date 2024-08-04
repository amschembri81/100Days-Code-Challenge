import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import DayInfoComponent from '../DayInfoComponent';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import '../Challenges.css';

function Day14() {
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

  const learned = [
    "Conditional Rendering",
    "Lists and Keys",
    "Forms",
    "Lifting State Up",
    "Component Lifecycle",
    "React Fragments",
    "Styling in React",
    "React Router Basics",
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
      <h1>Day 14 - React Router Basics</h1>
      {element}
      {showDayInfo && (
        <DayInfoComponent
          date="August 5, 2024"
          dayNumber="Day 14"
          challenge="Set up and use React Router for navigation"
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
      <div className="router-example">
        <nav className="navbar">
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about">About</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes className="routes">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <h2>What I have practiced so far:</h2>
      <ul className="learned-list">
        {learned.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Day14;
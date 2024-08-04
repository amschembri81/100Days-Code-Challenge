import React, { useState } from "react";
import axios from "axios";
import DayInfoComponent from "../DayInfoComponent";
import '../Challenges.css';

function Day16() {
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;

  const codingEmoji = "\u{1F4BB}"; // 💻
  const coffeeEmoji = "\u{2615}"; // ☕
  const happyEmoji = "\u{1F60A}"; // 😊

  const messages = [
    "Let's code!",
    "Keep going, you're doing great!",
    "Don't give up!",
    "You're making progress!",
    "Stay focused and keep coding!",
  ];

  const [messageIndex, setMessageIndex] = useState(0);
  const [weather, setWeather] = useState("");

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
      <h1>Day 16 - Title Here</h1>
      {element}
      <DayInfoComponent
        date="Date Here"
        dayNumber="Day 16"
        challenge="Challenge description here."
        message={messages[messageIndex]}
        codingEmoji={codingEmoji}
        coffeeEmoji={coffeeEmoji}
        happyEmoji={happyEmoji}
        weather={weather}
      />
      <button className="button" onClick={updateMessage}>
        Update Message
      </button>
      <button className="button" onClick={fetchWeather}>
        Fetch Weather
      </button>
    </div>
  );
}

export default Day16;
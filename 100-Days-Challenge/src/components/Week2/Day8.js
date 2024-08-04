import React, { useState } from "react";
import axios from "axios";
import DayInfoComponent from "../DayInfoComponent";
import '../Challenges.css';

function Day8() {
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

  const favoriteBooks = [
    "Pride and Prejudice",
    "A Court of Thorns and Roses",
    "The Handmaid's Tale",
    "Great Expectations",
    "The Goldfinch",
  ];

  return (
    <div className="day-container">
      <h1>Day 8 - Lists and Keys</h1>
      {element}

      {showDayInfo && (
        <DayInfoComponent
          date="July 31, 2024"
          dayNumber="Day 8"
          challenge="Render a list of items using the map function"
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
      <div className="content-container2">
        <h2>My Favorite Books:</h2>
        <ul className="bullet-list2">
          {favoriteBooks.map((book, index) => (
            <li key={index} className="list-item">
              {book}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Day8;
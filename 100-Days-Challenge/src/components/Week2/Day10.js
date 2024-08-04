import React, { useState } from "react";
import axios from "axios";
import DayInfoComponent from "../DayInfoComponent";
import '../../App.css';

function Day10() {
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
  const [temperature, setTemperature] = useState(0);
  const [unit, setUnit] = useState("C");

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
      setTemperature(response.data.main.temp);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const toggleUnit = () => {
    if (unit === "C") {
      setTemperature((temp) => (temp * 9) / 5 + 32);
      setUnit("F");
    } else {
      setTemperature((temp) => ((temp - 32) * 5) / 9);
      setUnit("C");
    }
  };

  return (
    <div className="day-container">
      <h1>Day 10 - Lifting State Up</h1>
      {element}
      {showDayInfo && (
        <DayInfoComponent
          date="August 2, 2024"
          dayNumber="Day 10"
          challenge="Lift state to a common ancestor component"
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
      <div className="temperature-container">
        <TemperatureDisplay temperature={temperature} unit={unit} />
        <button className="button toggle-unit-button" onClick={toggleUnit}>
          {unit === "C" ? "°C to °F" : "°F to °C"}
        </button>
      </div>
    </div>
  );
}

function TemperatureDisplay({ temperature, unit }) {
  return (
    <div>
      <h2>
        Current Temperature: {temperature.toFixed(1)}°{unit}
      </h2>
    </div>
  );
}

export default Day10;

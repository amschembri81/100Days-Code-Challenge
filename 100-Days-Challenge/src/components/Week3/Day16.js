import React, { useState } from "react";
import axios from "axios";
import DayInfoComponent from "../DayInfoComponent";
import '../Challenges.css';

function Day16() {
  const [weather, setWeather] = useState("");
  const [logs, setLogs] = useState([]);
  const happyEmoji = "\u{1F60A}"; // 😊

  const fetchWeather = async () => {
    const apiKey = '81079bc3172b71333817eb0e8ca71bf5';
    const city = 'Chicago';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      const weatherData = `${response.data.weather[0].description}, ${response.data.main.temp}°C`;
      setWeather(weatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const addLog = (message) => {
    setLogs((prevLogs) => [...prevLogs, message]);
  };

  const handleParentClick = (e) => {
    addLog("Parent clicked - bubbling phase");
  };

  const handleParentCaptureClick = (e) => {
    addLog("Parent clicked - capturing phase");
  };

  const handleChildClick = (e) => {
    addLog("Child clicked - bubbling phase");
    e.stopPropagation(); // Stop propagation to see effect
  };

  const handleChildCaptureClick = (e) => {
    addLog("Child clicked - capturing phase");
  };

  return (
    <div className="day-container">
      <div className="container">
        <h1>Day 16 - Event Propagation</h1>
        <DayInfoComponent
          date="August 7, 2024"
          dayNumber="Day 16"
          challenge="Understand event propagation in React."
          happyEmoji={happyEmoji}
          weather={weather}
        />
        <button className="button" onClick={fetchWeather}>
          Fetch Weather
        </button>
        <div className="parent" onClickCapture={handleParentCaptureClick} onClick={handleParentClick}>
          <div className="child" onClickCapture={handleChildCaptureClick} onClick={handleChildClick}>
            <strong>Click me to see event propagation</strong>
          </div>
        </div>
        <div className="logs">
          {logs.map((log, index) => (
            <p key={index}>{log}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Day16;
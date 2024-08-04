import React, { useState } from "react";
import axios from "axios";
import DayInfoComponent from "../DayInfoComponent";
import '../../App.css';

function Day9() {
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;

  const codingEmoji = "\u{1F4BB}"; // 💻
  const coffeeEmoji = "\u{2615}"; // ☕
  const happyEmoji = "\u{1F60A}"; // 😊
  const partyEmoji = "\u{1F389}"; // 🎉
  const mailEmoji = "\u{1F4E8}"; // 📨

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
  const [name, setName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [submittedData, setSubmittedData] = useState({ name: "", message: "" });

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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSubmittedData({ name, message: userMessage });
  };

  return (
    <div className="day-container">
      <h1>Day 9 - User Input Form</h1>
      {element}
      {showDayInfo && (
        <DayInfoComponent
          date="August 1, 2024"
          dayNumber="Day 9"
          challenge="Create a simple form and handle user input"
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
      <div className="form-container">
        <h2>User Input Form</h2>
        <form onSubmit={handleFormSubmit} className="input-form">
          <div className="form-group">
            <label>
              <strong> Name:</strong>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <strong>Message: </strong>
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className="input-field"
              />
            </label>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <div className="submitted-data">
          {submittedData.name && (
            <div>
              <h3>Your Message: {mailEmoji}</h3>
              <p>
                <strong>My name is </strong> {submittedData.name}
              </p>
              <p>
                <strong>I would like to say: </strong> {submittedData.message}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Day9;

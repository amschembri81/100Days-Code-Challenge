import React, { useState } from "react";
import axios from "axios";
import DayInfoComponent from "../DayInfoComponent";
import '../Challenges.css';

function Day17() {
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;

  const happyEmoji = "\u{1F60A}"; // 😊

  const [weather, setWeather] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      setFormMessage("Please fill out all fields. \u{1F641}"); // 😡
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setFormMessage("Please enter a valid email. \u{1F615}"); // 😟
    } else {
      setFormMessage(`Form submitted successfully! Thank you, ${name}. \u{1F389}`); // 🎉
    }
  };

  return (
    <div className="day-container">
      <h1>Day 17 - Handling Forms</h1>
      {element}
      <DayInfoComponent
        date="August 8, 2024"
        dayNumber="Day 17"
        challenge="Validate and handle form submissions."
        happyEmoji={happyEmoji}
        weather={weather}
      />
      <button className="button" onClick={fetchWeather}>
        Fetch Weather
      </button>
      <form className="input-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button2">
          Submit
        </button>
      </form>
      {formMessage && <div className="form-message">{formMessage}</div>}
    </div>
  );
}

export default Day17;

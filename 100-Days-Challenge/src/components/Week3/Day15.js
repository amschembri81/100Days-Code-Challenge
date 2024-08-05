import React, { useState } from 'react';
import axios from 'axios';
import DayInfoComponent from '../DayInfoComponent';
import LifecycleDemo from '../LifecycleDemo'; // Import the LifecycleDemo component
import '../Challenges.css';

function Day15() {
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;

  const happyEmoji = '\u{1F60A}'; // 😊

  const [weather, setWeather] = useState('');
  const [showLifecycleDemo, setShowLifecycleDemo] = useState(false);


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

  return (
    <div className="day-container">
      <h1>Day 15 - Class Components</h1>
      {element}
      <DayInfoComponent
        date="August 6, 2024"
        dayNumber="Day 15"
        challenge="Understand class components and their lifecycle."
        happyEmoji={happyEmoji}
        weather={weather}
      />
      <button className="button2" onClick={fetchWeather}>
        Fetch Weather
      </button>
      <button
        className="lifecyclebutton"
        onClick={() => setShowLifecycleDemo((prev) => !prev)}
      >
        {showLifecycleDemo ? 'Hide' : 'Show'} Lifecycle Demo
      </button>
      {showLifecycleDemo && <LifecycleDemo />}
      <div classname="lifecycle">
        <p><strong>This class component includes:</strong></p>
        <p><i>constructor</i>, <i>componentDidMount</i>, <i>componentDidUpdate</i>, and <i>componentWillUnmount</i></p>
        <p>lifecycle methods, and logs messages to the console during each phase.</p>
      </div>
    </div>
  );
}

export default Day15;
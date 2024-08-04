import React, { Component } from 'react';
import axios from 'axios';
import DayInfoComponent from '../DayInfoComponent';
import '../Challenges.css';

class Day11 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageIndex: 0,
      weather: '',
      showDayInfo: true,
      activityLog: [],
      codingEmoji: "\u{1F4BB}", // 💻
      coffeeEmoji: "\u{2615}", // ☕
      happyEmoji: "\u{1F60A}", // 😊
      partyEmoji: "\u{1F389}", // 🎉
      messages: [
        "Let's code!",
        "Keep going, you're doing great!",
        "Don't give up!",
        "You're making progress!",
        "Stay focused and keep coding!",
      ],
    };
  }

  componentDidMount() {
    this.logActivity('Component did mount');
    this.fetchWeather();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.messageIndex !== this.state.messageIndex) {
      this.logActivity('Message index updated');
    }
  }

  componentWillUnmount() {
    this.logActivity('Component will unmount');
  }

  logActivity = (activity) => {
    this.setState((prevState) => ({
      activityLog: [...prevState.activityLog, `${activity} at ${new Date().toLocaleTimeString()}`],
    }));
  };

  updateMessage = () => {
    this.setState((prevState) => ({
      messageIndex: (prevState.messageIndex + 1) % prevState.messages.length,
    }), () => this.logActivity('Message updated'));
  };

  fetchWeather = async () => {
    const apiKey = "81079bc3172b71333817eb0e8ca71bf5";
    const city = "Chicago";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      const weatherData = `${response.data.weather[0].description}, ${response.data.main.temp}°C`;
      this.setState({ weather: weatherData });
      this.logActivity('Fetched weather data');
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  toggleDayInfo = () => {
    this.setState((prevState) => ({ showDayInfo: !prevState.showDayInfo }));
  };

  render() {
    const { messageIndex, weather, showDayInfo, activityLog, codingEmoji, coffeeEmoji, happyEmoji, partyEmoji, messages } = this.state;

    console.log('showDayInfo:', showDayInfo);
    console.log('messages[messageIndex]:', messages[messageIndex]);
    console.log('weather:', weather);

    return (
      <div className="day-container">
        <h1>Day 11 - Component Lifecycle</h1>
        <h1>Hello, everyone! {"\u{1F44B}"}</h1>
        {showDayInfo && (
          <DayInfoComponent
            date="August 3, 2024"
            dayNumber="Day 11"
            challenge="Understand and use lifecycle methods"
            message={messages[messageIndex]}
            codingEmoji={codingEmoji}
            coffeeEmoji={coffeeEmoji}
            happyEmoji={happyEmoji}
            partyEmoji={partyEmoji}
            weather={weather}
          />
        )}
        <button className="button" onClick={this.toggleDayInfo}>
          Toggle Day Info
        </button>
        <button className="button" onClick={this.updateMessage}>
          Update Message
        </button>
        <button className="button" onClick={this.fetchWeather}>
          Fetch Weather
        </button>
        <h2>Activity Log:</h2>
        <ul className="activity-log">
          {activityLog.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Day11;
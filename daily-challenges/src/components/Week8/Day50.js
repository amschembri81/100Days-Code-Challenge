import React, { useState, useEffect } from "react";
import DayInfoComponent from "../DayInfoComponent";
import ErrorBoundary from "../ErrorBoundary";
import withWeatherData from "../../UniqueComponents/withWeatherData";
import "./Challenge8.css";

// Component to display the current online/offline status
function PWAStatus() {
  // State to track whether the app is online or offline
  const [isOnline, setIsOnline] = useState(navigator.onLine); // Initialize with the current online status

  useEffect(() => {
    // Event listener for when the app goes online
    const handleOnline = () => setIsOnline(true);
    // Event listener for when the app goes offline
    const handleOffline = () => setIsOnline(false);

    // Add event listeners to detect online/offline status changes
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []); // Empty dependency array ensures the effect runs only once (on mount)

  return (
    <div className="pwa-status-container">
      {/* Display whether the app is online or offline */}
      <h3>PWA Status: {isOnline ? "Online" : "Offline"}</h3>
      <p>Your app is currently running in {isOnline ? "online" : "offline"} mode.</p>
      {isOnline ? (
        // If the app is online, show that all features are available
        <p>All features are fully available.</p>
      ) : (
        // If the app is offline, show that some features may be unavailable
        <p>You are offline. Some features may be unavailable.</p>
      )}
    </div>
  );
}

// Main component for Day 50, which integrates PWA features
function Day50({ weather, bgColor }) {
  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      {/* Display the title and weather information */}
      <h1>Day 50 - Progressive Web Apps (PWA)</h1>
      <DayInfoComponent
        date="September 11, 2024"
        dayNumber="Day 50"
        challenge="Convert a React app into a Progressive Web App"
        weather={weather}
      />

      {/* Display the PWA status (online/offline) */}
      <PWAStatus />

      {/* Description of the challenge */}
      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I converted a React app into a Progressive Web App (PWA) by adding a service worker and enabling offline capabilities. The app now detects whether it is online or offline and provides feedback to the user.
      </p>
    </div>
  );
}

// Higher-order component to inject weather data into the Day50 component
const Day50WithWeatherData = withWeatherData(Day50);

// Error boundary to catch errors in Day50 component
export default function Day50WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day50WithWeatherData />
    </ErrorBoundary>
  );
}

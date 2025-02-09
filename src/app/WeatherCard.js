// components/WeatherCard.js
import React from "react";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  // Convert localtime to a Date object
  const localTime = new Date(weatherData.location.localtime);
  const dayOfWeek = localTime.toLocaleDateString("en-US", { weekday: "long" }); // Get day of the week
  const time = localTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }); // Get time

  return (
    <div style={styles.card}>
      <h2 style={styles.city}>{weatherData.location.name}</h2>
      <p style={styles.dayTime}>
        {dayOfWeek}, {time}
      </p>
      <p style={styles.temp}>{weatherData.current.temp_c}°C</p>
      <p style={styles.condition}>{weatherData.current.condition.text}</p>
      <img src={weatherData.current.condition.icon} alt="Weather Icon" style={styles.icon} />
      <p style={styles.details}>Humidity: {weatherData.current.humidity}%</p>
      <p style={styles.details}>Wind: {weatherData.current.wind_kph} km/h</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#2b3137",
    color: "#ffffff",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "300px",
    margin: "20px auto",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  city: {
    fontSize: "24px",
    margin: "0 0 10px",
  },
  dayTime: {
    fontSize: "18px",
    margin: "0 0 10px",
    color: "#0d74e7",
  },
  temp: {
    fontSize: "48px",
    margin: "0",
  },
  condition: {
    fontSize: "18px",
    margin: "10px 0",
  },
  icon: {
    width: "64px",
    height: "64px",
  },
  details: {
    fontSize: "14px",
    margin: "5px 0",
  },
};

export default WeatherCard;
// components/WeatherCard.js
import React from "react";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const localTime = new Date(weatherData.location.localtime);
  const dayOfWeek = localTime.toLocaleDateString("en-US", { weekday: "long" });
  const time = localTime.toLocaleTimeString("en-US", { 
    hour: "2-digit", 
    minute: "2-digit" 
  });

  return (
    <div className="weather-card">
      <h2 className="city">{weatherData.location.name}</h2>
      <p className="day-time">
        {dayOfWeek}, {time}
      </p>
      <p className="temperature">{weatherData.current.temp_c}°C</p>
      <p className="condition">{weatherData.current.condition.text}</p>
      <img 
        src={weatherData.current.condition.icon} 
        alt="Weather Icon" 
        className="weather-icon" 
      />
      <div className="weather-details">
        <p>Humidity: {weatherData.current.humidity}%</p>
        <p>Wind: {weatherData.current.wind_kph} km/h</p>
      </div>
    </div>
  );
};

export default WeatherCard;
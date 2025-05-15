
"use client" ;
import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import "./style.css"; // We'll create this CSS file

const Home = () => {
  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=47e8d70bc6f64998aea60630250802&q=${city}&aqi=yes`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) fetchWeather();
  };

  return (
    <div className="app-container">
      <h1 className="app-title">ClimaX</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="search-input"
          required
        />
        <button type="submit" className="search-button" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
      {loading && <p className="loading-message">Loading weather data...</p>}
      {error && <p className="error-message">{error}</p>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default Home;
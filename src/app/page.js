"use client";

import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

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
    fetchWeather();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>ClimaX</h1>
      <form onSubmit={handleSearch} style={styles.form}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>
      {loading && <p style={styles.loading}>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#24292d",
    minHeight: "100vh",
    padding: "20px",
    color: "#ffffff",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  form: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #0d74e7",
    marginRight: "10px",
    backgroundColor: "#2b3137",
    color: "#ffffff",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#0d74e7",
    color: "#ffffff",
    cursor: "pointer",
  },
  loading: {
    fontSize: "18px",
  },
  error: {
    fontSize: "18px",
    color: "#ff6b6b",
  },
};

export default Home;
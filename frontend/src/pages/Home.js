import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch weather data from backend API
    const fetchWeather = async () => {
      try {
        setLoading(true);
        // Using axios to fetch from our backend API
        const response = await axios.get("/api/weather");
        setWeather(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching weather data:", err);
        setError(err.message || "Failed to fetch weather data");
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  // Weather icon mapping
  const getWeatherIcon = (description) => {
    const icons = {
      "Clear": "☀️",
      "Sunny": "☀️",
      "Partly Cloudy": "⛅",
      "Cloudy": "☁️",
      "Rain": "🌧️",
      "Showers": "🌦️",
      "Snow": "❄️",
      "Thunderstorm": "⛈️",
      "Fog": "🌫️"
    };
    
    return icons[description] || "🌡️";
  };

  return (
    <main>
      <section className="hero-section">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">Hi, I'm Yahya Al Salmi</h1>
          <p className="lead mb-4">
            Computer Science Student at Dalhousie University
          </p>
          <div className="d-flex justify-content-center">
            <Link to="/about" className="btn btn-light me-3">
              About Me
            </Link>
            <Link to="/projects" className="btn btn-outline-light">
              My Projects
            </Link>
          </div>
        </div>
      </section>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8 mb-4">
            <div className="row">
              <div className="col-md-8 mb-4">
                <h2 className="section-title">Welcome to My Portfolio</h2>
                <p>
                  Hello! I'm a Computer Science student passionate about data
                  science, machine learning, and full-stack development. I'm
                  currently pursuing my Bachelor's degree at Dalhousie University.
                </p>
                <p>
                  My portfolio showcases my education, projects, and technical
                  skills. Feel free to explore and learn more about my work!
                </p>
                <Link to="/about" className="btn btn-primary mt-3">
                  Learn More About Me
                </Link>
              </div>
              
              {/* Weather Widget */}
              <div className="col-md-4">
                <div className="weather-widget h-100">
                  <h3 className="h5 mb-3">Current Weather</h3>
                  
                  {loading && (
                    <div className="text-center">
                      <div className="spinner-border spinner-border-sm text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <p className="mt-2 mb-0">Loading weather data...</p>
                    </div>
                  )}
                  
                  {error && (
                    <div className="alert alert-danger p-2 mb-0" role="alert">
                      <small>Failed to load weather: {error}</small>
                    </div>
                  )}
                  
                  {weather && !loading && !error && (
                    <div>
                      <div className="weather-icon text-center mb-2">
                        {weather.icon || getWeatherIcon(weather.description)}
                      </div>
                      <h4 className="h2 text-center mb-1">{weather.temperature.current}°C</h4>
                      <p className="text-center mb-3">{weather.description}</p>
                      <div className="row">
                        <div className="col-6">
                          <small className="text-muted d-block">Humidity</small>
                          <span>{weather.humidity}%</span>
                        </div>
                        <div className="col-6">
                          <small className="text-muted d-block">Feels Like</small>
                          <span>{weather.temperature.feels_like}°C</span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <small className="text-muted d-block">Location</small>
                        <span>{weather.city}, {weather.country}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Contact Information</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <span className="me-2 text-primary">✉️</span>
                    Email: Yahyaalsalmi961@gmail.com
                  </li>
                  <li className="mb-2">
                    <span className="me-2 text-primary">in</span>
                    LinkedIn:{" "}
                    <a
                      href="https://linkedin.com/in/yahyaalsalmi/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      linkedin.com/in/yahyaalsalmi
                    </a>
                  </li>
                  <li className="mb-2">
                    <span className="me-2 text-primary">GH</span>
                    GitHub:{" "}
                    <a
                      href="https://github.com/EllE961"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/EllE961
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;

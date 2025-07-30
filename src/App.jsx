import React, { useState } from "react";
import SearchBox from "./components/Searchbox";
import WeatherInfo from "./components/WeatherInfo";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import './index.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      // STEP 1: Get lat/lon using Geo API
      const geoRes = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      console.log(`http://api.openweathermap.org/geo/1.0/direct?q=Agra&limit=1&appid=VITE_WEATHER_API_KEY
`);

      if (!geoRes.ok) throw new Error("Unable to find city");

      const geoData = await geoRes.json();
      if (geoData.length === 0) throw new Error("City not found");

      const { lat, lon, name, country } = geoData[0];

      // STEP 2: Fetch weather using lat/lon
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      if (!weatherRes.ok) throw new Error("Weather data not found");

      const weatherData = await weatherRes.json();

      setWeather({
        temp: weatherData.main.temp,
        condition: weatherData.weather[0].main,
        humidity: weatherData.main.humidity,
        name,
        country,
      });
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Weather App</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
          <SearchBox onSearch={fetchWeather} />
          {loading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {weather && <WeatherInfo weather={weather} />}
        </div>
      </div>
    </div>
  );
};

export default App;

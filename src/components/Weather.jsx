import React, { useEffect, useState } from "react";
import { getWeatherUpdate } from "../utils/getWeatherReport";

const Weather = () => {
  const [weather, setWeather] = useState("");
  const getWeatherDetails = async () => {
    try {
      await getWeatherUpdate(setWeather);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getWeatherDetails();
  }, []);

  return (
    <>
      {weather && (
        <div className="weather-container">
          <img src={weather.icon} />
          <div>
            <h2>{weather.temp}</h2>
            <small>{weather.city}</small>
            <p></p>
            <small>{weather.desc}</small>
          </div>
        </div>
      )}
    </>
  );
};

export { Weather };

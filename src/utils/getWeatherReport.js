import axios from "axios";

export const getWeatherUpdate = (setWeather) => {
  const success = async (pos) => {
    try {
      let coordinates = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      };
      let apiURL = `https://fcc-weather-api.glitch.me/api/current?lat=${coordinates.latitude}&lon=${coordinates.longitude}`;
      let { data } = await axios.get(apiURL);
      setWeather({
        city: data.name,
        temp: data.main.temp + "°C",
        icon: data.weather[0].icon,
        desc: data.weather[0].description,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const error = async (err) => {
    try {
      let coordinates = { latitude: "19.075983", longitude: "72.877655" };
      let apiURL = `https://fcc-weather-api.glitch.me/api/current?lat=${coordinates.latitude}&lon=${coordinates.longitude}`;
      let { data } = await axios.get(apiURL);

      setWeather({
        city: data.name,
        temp: data.main.temp + "°C",
        icon: data.weather[0].icon,
        desc: data.weather[0].description,
      });
    } catch (error) {
      console.log(error);
    }
  };

  navigator.geolocation.getCurrentPosition(success, error);
};

import React from 'react';

const CurrentWeather = ({ data }) => {
  const { temperature, description, humidity, windSpeed, pressure, icon } = data;

  return (
    <div className="current-weather">
      <h2>Current Weather</h2>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
      <p>{description}</p>
      <p>Temperature: {temperature}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} m/s</p>
      <p>Pressure: {pressure} hPa</p>
    </div>
  );
};

export default CurrentWeather;

import React from 'react';

const WeatherTable = ({ data }) => {
  return (
    <div className="table-container">
      <h2>Weather Table</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature (°C)</th>
            <th>Humidity (%)</th>
            <th>Wind Speed (m/s)</th>
            <th>Pressure (hPa)</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.temperature}</td>
              <td>{item.humidity}</td>
              <td>{item.windSpeed}</td>
              <td>{item.pressure}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherTable;

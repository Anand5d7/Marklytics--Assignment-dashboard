import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import TemperatureChart from './components/TemperatureChart';
import HumidityChart from './components/HumidityChart';
import WeatherTable from './components/WeatherTable';
import Dropdown from './components/Dropdown';
import CurrentWeather from './components/CurrentWeather';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});
  const [city, setCity] = useState('London');
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const forecastResponse = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=1307028bcd9336d689ec3a2fcfed288b&units=metric`);
      const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1307028bcd9336d689ec3a2fcfed288b&units=metric`);

      const formattedData = forecastResponse.data.list.map(item => ({
        date: item.dt_txt,
        temperature: item.main.temp,
        humidity: item.main.humidity,
        windSpeed: item.wind.speed,
        pressure: item.main.pressure,
        description: item.weather[0].description
      }));

      setData(formattedData);
      setCurrentWeather({
        temperature: weatherResponse.data.main.temp,
        description: weatherResponse.data.weather[0].description,
        humidity: weatherResponse.data.main.humidity,
        windSpeed: weatherResponse.data.wind.speed,
        pressure: weatherResponse.data.main.pressure,
        icon: weatherResponse.data.weather[0].icon
      });

      setLoading(false);
    };
    fetchData();
  }, [city]);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Dropdown options={['Andhra Pradesh', 'Nandyal', 'Anantapur', 'Kerala', 'India', 'Karnataka', 'Hyderabad', 'Bengaluru', 'Tamilnadu', 'Chennai', 'Tirupati', 'Maharastra', 'Eluru', 'Guntur', 'Kakinada', 'Kurnool' ]} onChange={setCity} />
      {loading ? <p>Loading...</p> : (
        <div className="container">
          <div className='charts-container'>
            <CurrentWeather data={currentWeather} />
            <div className="chart-container">
              <TemperatureChart data={data} />
            </div>
            <div className="chart-container">
              <HumidityChart data={data} />
            </div>
          </div>
          <div className="table-container">
            <WeatherTable data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

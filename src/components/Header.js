import React from 'react';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header>
      <h1>Weather Dashboard</h1>
      <p>An interactive dashboard displaying weather data</p>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;

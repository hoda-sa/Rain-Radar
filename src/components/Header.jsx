import React from 'react';
import WeatherIcon from './WeatherIcon';

const Header = () => {
  return (
    <header className="bg-primary text-white py-3">
      <div className="container">
        <div className="d-flex align-items-center">
          <WeatherIcon iconCode="01d" size="2x" />
          <h1 className="mb-0 ms-3">Weather Forecasting App</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
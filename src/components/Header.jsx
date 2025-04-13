import React from 'react';
import WeatherIcon from './WeatherIcon';

const Header = () => {
  return (
    <header className="bg-primary text-white py-3">
      <div className="container d-flex flex-row">
        <div>
          <WeatherIcon iconCode="09d" size="3x" />
        </div>
        <div>
          <h1 className="mb-0 ms-3 ">Rain Radar</h1>
          <p className="mb-0 ms-3">Rain or shine, always keeping you prepared</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
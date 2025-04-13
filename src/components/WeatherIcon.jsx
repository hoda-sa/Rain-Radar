import React from 'react';
import { getWeatherIconUrl } from '../utils/weatherApi';

const WeatherIcon = ({ iconCode, size = "1x", alt = "Weather icon" }) => {
  const iconUrl = getWeatherIconUrl(iconCode);
  
  const sizeClass = {
    "1x": "weather-icon-sm",
    "2x": "weather-icon-md",
    "3x": "weather-icon-lg"
  };
  
  return (
    <img 
      src={iconUrl} 
      alt={alt} 
      className={`weather-icon ${sizeClass[size] || ""}`} 
    />
  );
};

export default WeatherIcon;
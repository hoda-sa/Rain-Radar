import React from 'react';
import { getWeatherIconUrl } from '../utils/weatherApi';

const ForecastItem = ({ forecast, units }) => {
  const date = new Date(forecast.dt * 1000);
  const day = date.toLocaleDateString('en-US', { weekday: 'short' });
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const dayNum = date.getDate();

  const temp = Math.round(forecast.main.temp);
  const description = forecast.weather[0].description;
  const iconCode = forecast.weather[0].icon;
  const iconUrl = getWeatherIconUrl(iconCode);

  const tempUnit = units === 'metric' ? '°C' : '°F';

  // Get min and max temp if available
  const minTemp = forecast.main.temp_min ? Math.round(forecast.main.temp_min) : null;
  const maxTemp = forecast.main.temp_max ? Math.round(forecast.main.temp_max) : null;

  // Get weather condition based on icon code
  const getWeatherConditionClass = (code) => {
    if (code.includes('01') || code.includes('02')) return 'sunny';
    if (code.includes('03') || code.includes('04')) return 'cloudy';
    if (code.includes('09') || code.includes('10')) return 'rainy';
    if (code.includes('11')) return 'stormy';
    if (code.includes('13')) return 'snowy';
    return '';
  };

  const conditionClass = getWeatherConditionClass(iconCode);

  return (
    <div className={`forecast-item h-100 text-center ${conditionClass}`}>
      <div className="date-section border-bottom pb-2 mb-2">
        <h5 className="fw-bold mb-0">{day}</h5>
        <small className="text-muted">{month} {dayNum}</small>
      </div>

      <img
        src={iconUrl}
        alt={description}
        className="forecast-icon my-2"
        width="70"
        height="70"
      />

      <div className="temp-container mb-2">
        <h4 className="mb-0 fw-bold">{temp}{tempUnit}</h4>

        {minTemp && maxTemp && minTemp !== maxTemp && (
          <div className="min-max small mt-1">
            <span className="text-primary">{maxTemp}{tempUnit}</span>
            <span className="text-muted mx-1">/</span>
            <span className="text-secondary">{minTemp}{tempUnit}</span>
          </div>
        )}
      </div>

      <p className="mb-0 text-capitalize fw-light">
        {description}
      </p>
    </div>
  );
};

export default ForecastItem;
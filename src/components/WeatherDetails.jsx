import React from 'react';

const WeatherDetails = ({ 
  feelsLike, 
  humidity, 
  windSpeed, 
  pressure, 
  visibility, 
  tempUnit, 
  windUnit 
}) => {
  return (
    <div className="weather-details">
      <h4 className="mb-3">Weather Details</h4>
      <div className="row">
        <div className="col-6 mb-3">
          <div className="detail-item">
            <span className="detail-label">Feels Like</span>
            <span className="detail-value">{feelsLike}{tempUnit}</span>
          </div>
        </div>
        <div className="col-6 mb-3">
          <div className="detail-item">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{humidity}%</span>
          </div>
        </div>
        <div className="col-6 mb-3">
          <div className="detail-item">
            <span className="detail-label">Wind</span>
            <span className="detail-value">{windSpeed} {windUnit}</span>
          </div>
        </div>
        <div className="col-6 mb-3">
          <div className="detail-item">
            <span className="detail-label">Pressure</span>
            <span className="detail-value">{pressure} hPa</span>
          </div>
        </div>
        <div className="col-6 mb-3">
          <div className="detail-item">
            <span className="detail-label">Visibility</span>
            <span className="detail-value">{visibility.toFixed(1)} km</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
import React from 'react';
import { getWeatherIconUrl } from '../utils/weatherApi';
import WeatherDetails from './WeatherDetails';

const CurrentWeather = ({ data, units }) => {
  if (!data) return null;

  const {
    name,
    sys: { country },
    weather,
    main: { temp, feels_like, humidity, pressure, temp_min, temp_max },
    wind: { speed },
    visibility,
    timezone // Timezone offset in seconds from UTC
  } = data;

  const weatherDescription = weather[0].description;
  const iconCode = weather[0].icon;
  const iconUrl = getWeatherIconUrl(iconCode);
  const tempUnit = units === 'metric' ? '°C' : '°F';
  const windUnit = units === 'metric' ? 'm/s' : 'mph';

  // Calculate city's local time using timezone offset
  const cityDate = new Date();
  // Adjust for the city's timezone
  // First get UTC time in ms
  const utcTime = cityDate.getTime() + (cityDate.getTimezoneOffset() * 60000);
  // Then add the city's timezone offset (converting from seconds to milliseconds)
  const cityTime = new Date(utcTime + (timezone * 1000));
  
  // Format date for the city
  const formattedDate = cityTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  // Format time for the city
  const formattedTime = cityTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
  
  // Determine time of day for background styling based on city's local time
  const hour = cityTime.getHours();
  let timeClass = '';
  
  if (hour >= 5 && hour < 12) {
    timeClass = 'morning-bg';
  } else if (hour >= 12 && hour < 18) {
    timeClass = 'afternoon-bg';
  } else if (hour >= 18 && hour < 21) {
    timeClass = 'evening-bg';
  } else {
    timeClass = 'night-bg';
  }

  // Determine background based on weather condition
  const getWeatherClass = (iconCode) => {
    if (iconCode.includes('01')) return 'clear-bg';
    if (iconCode.includes('02') || iconCode.includes('03') || iconCode.includes('04')) return 'cloud-bg';
    if (iconCode.includes('09') || iconCode.includes('10')) return 'rain-bg';
    if (iconCode.includes('11')) return 'thunder-bg';
    if (iconCode.includes('13')) return 'snow-bg';
    if (iconCode.includes('50')) return 'fog-bg';
    return '';
  };
  
  const weatherClass = getWeatherClass(iconCode);

  return (
    <div className={`weather-card fade-in ${timeClass} ${weatherClass}`}>
      <div className="card-body p-4">
        <div className="row">
          <div className="col-md-6">
            <div className="location-info">
              <h2 className="mb-2 fw-bold">
                {name}, {country}
              </h2>
              <p className="text-muted mb-1">{formattedDate}</p>
              <p className="text-muted mb-3">
                <i className="bi bi-clock me-1"></i> {formattedTime} <small>(Local Time)</small>
              </p>
            </div>
            
            <div className="current-weather d-flex align-items-center mt-4">
              <img 
                src={iconUrl} 
                alt={weatherDescription} 
                className="weather-icon me-3" 
                width="100"
                height="100"
              />
              <div>
                <h3 className="current-temp mb-0">{Math.round(temp)}{tempUnit}</h3>
                <p className="mb-1 text-capitalize fw-light">{weatherDescription}</p>
                
                {temp_min && temp_max && Math.round(temp_min) !== Math.round(temp_max) && (
                  <p className="text-muted">
                    <span>
                      <i className="bi bi-thermometer-high text-danger me-1"></i>
                      H: {Math.round(temp_max)}{tempUnit}
                    </span>
                    <span className="ms-3">
                      <i className="bi bi-thermometer-low text-primary me-1"></i>
                      L: {Math.round(temp_min)}{tempUnit}
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <WeatherDetails 
              feelsLike={Math.round(feels_like)}
              humidity={humidity}
              windSpeed={speed}
              pressure={pressure}
              visibility={visibility / 1000} // Convert to km
              tempUnit={tempUnit}
              windUnit={windUnit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
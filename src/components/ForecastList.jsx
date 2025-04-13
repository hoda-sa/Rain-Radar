import React from 'react';
import ForecastItem from './ForecastItem';

const ForecastList = ({ data, units }) => {
  if (!data || !data.list) return null;

  // Group forecast data by day
  const dailyForecast = data.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000);
    const day = date.toISOString().split('T')[0];
    
    // Skip today's remaining forecasts
    if (date.getDate() === new Date().getDate()) {
      return acc;
    }
    
    // Take only one forecast per day (around noon)
    if (!acc[day] && date.getHours() >= 11 && date.getHours() <= 14) {
      acc[day] = item;
    }
    
    return acc;
  }, {});

  // Convert to array and limit to 5 days
  const forecastArray = Object.values(dailyForecast).slice(0, 5);

  return (
    <div className="forecast-container fade-in mt-4">
      <h3 className="mb-3">5-Day Forecast</h3>
      <div className="row">
        {forecastArray.map((forecast, index) => (
          <div className="col-md-4 col-lg mb-3" key={forecast.dt}>
            <ForecastItem forecast={forecast} units={units} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastList;
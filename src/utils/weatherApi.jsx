
const API_KEY = import.meta.env.VITE_API_KEY;
// Base URL for all OpenWeatherMap API endpoints
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeatherByCity = async (city, units = "metric") => {
  try {
    // Make API request to get current weather
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=${units}`
    );

    if (!response.ok) {
      throw new Error("Weather data not found!");
    }

    return await response.json();
  } catch (error) {
    // Re-throw any errors for handling in the component
    throw error;
  }
};

export const fetchForecastByCity = async (city, units = "metric") => {
  try {
    // Make API request to get 5-day forecast
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=${units}`
    );

    if (!response.ok) {
      throw new Error("Forecast data not found!");
    }
   
    return await response.json();
  } catch (error) {
    // Re-throw any errors for handling in the component
    throw error;
  }
};

/**
 * This function generates a URL for weather icons based on the icon code
 * @param {string} iconCode - The icon code from OpenWeatherMap (e.g., "01d", "10n")
 * @returns {string} - The complete URL to fetch the weather icon
 * 
 * Example icon codes:
 * - 01d: clear sky (day)
 * - 02d: few clouds (day)
 * - 10d: rain (day)
 * - 01n: clear sky (night)
 * 
 * The @2x part of the URL requests a larger icon size.
 */
export const getWeatherIconUrl = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};
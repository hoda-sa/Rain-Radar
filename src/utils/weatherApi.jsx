const API_KEY = import.meta.env.VITE_API_KEY || "52619a520cebfbf1411d80c82205fd69";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeatherByCity = async (city, units = "metric") => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=${units}`
    );

    if (!response.ok) {
      throw new Error("Weather data not found!");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchForecastByCity = async (city, units = "metric") => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=${units}`
    );

    if (!response.ok) {
      throw new Error("Forecast data not found!");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getWeatherIconUrl = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};
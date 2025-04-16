import { useState, useEffect } from 'react';
import { fetchWeatherByCity, fetchForecastByCity } from './weatherApi';

// Creating a hook that accepts a default city (New York if none provided)
const useWeather = (defaultCity = 'vancouver') => {
    // Setting up state variables to store information
    const [weatherData, setWeatherData] = useState(null);  // Current weather
    const [forecastData, setForecastData] = useState(null);  // 5-day forecast
    const [loading, setLoading] = useState(false);  // Is data currently loading?
    const [error, setError] = useState(null);  // Any errors that occurred
    const [city, setCity] = useState(defaultCity);  // Current city being displayed
    const [units, setUnits] = useState('metric');  // Temperature units (Celsius by default)

    // Function to fetch weather data from the API
    const fetchWeatherData = async (searchCity) => {
        setLoading(true);
        setError(null);

        try {
            // Make API calls to get both current weather and forecast
            const weather = await fetchWeatherByCity(searchCity, units);
            const forecast = await fetchForecastByCity(searchCity, units);

            // Store the results in state
            setWeatherData(weather);
            setForecastData(forecast);
            setCity(searchCity);
        } catch (err) {
            setError(`Error fetching weather data: ${err.message}`);
            setWeatherData(null);
            setForecastData(null);
        } finally {
            setLoading(false);
        }
    };

    // Function that components can call to search for a city
    const handleSearch = (searchCity) => {
        if (searchCity) {
            fetchWeatherData(searchCity);
        }
    };

    // Function that components can call to change units
    const handleUnitChange = (newUnit) => {
        setUnits(newUnit);
    };

    // Fetch weather data when units change or initial load
    useEffect(() => {
        if (city) {
            fetchWeatherData(city);
        }
    }, [units]);

    // Initial fetch on component mount
    useEffect(() => {
        fetchWeatherData(defaultCity); // Load initial weather data
    }, []); // Empty dependency array means "run once on mount"

    return {
        weatherData,
        forecastData,
        loading,
        error,
        city,
        units,
        handleSearch,
        handleUnitChange
    };
};

export default useWeather;
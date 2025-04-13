import { useState, useEffect } from 'react';
import { fetchWeatherByCity, fetchForecastByCity } from './weatherApi';

const useWeather = (defaultCity = 'New York') => {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [city, setCity] = useState(defaultCity);
    const [units, setUnits] = useState('metric');

    const fetchWeatherData = async (searchCity) => {
        setLoading(true);
        setError(null);

        try {
            const weather = await fetchWeatherByCity(searchCity, units);
            const forecast = await fetchForecastByCity(searchCity, units);

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

    const handleSearch = (searchCity) => {
        if (searchCity) {
            fetchWeatherData(searchCity);
        }
    };

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
        fetchWeatherData(defaultCity);
    }, []);

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
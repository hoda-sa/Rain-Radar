import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import ForecastList from './components/ForecastList';
import UnitToggle from './components/UnitToggle';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorAlert from './components/ErrorAlert';
import Footer from './components/Footer';
import useWeather from './utils/useWeather';

function App() {
  const {
    weatherData,
    forecastData,
    loading,
    error,
    units,
    handleSearch,
    handleUnitChange
  } = useWeather('Vancouver');

  return (
    <div className="app-container">
      <Header />
      <main className="container py-4">
        <div className="row justify-content-center mb-4">
          <div className="col-md-8 my-2">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="col-md-4 my-2 d-flex align-items-center justify-content-end">
            <UnitToggle units={units} onUnitChange={handleUnitChange} />
          </div>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorAlert message={error} />
        ) : (
          <div className="weather-content fade-in">
            {weatherData && <CurrentWeather data={weatherData} units={units} />}
            {forecastData && <ForecastList data={forecastData} units={units} />}
          </div>
        )}

        <hr className='mt-5' />
        <div className="features-section mt-5 mb-4">
          <h2 className='text-center pb-3'>WHAT THIS APP OFFERS</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-globe text-primary fs-1 mb-3"></i>
                  <h4>Global Coverage</h4>
                  <p className="text-muted">
                    Access real-time weather data for cities worldwide with our comprehensive coverage.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-graph-up text-success fs-1 mb-3"></i>
                  <h4>5-Day Forecast</h4>
                  <p className="text-muted">
                    Plan ahead with accurate 5-day weather forecasts for your location.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-lightning text-warning fs-1 mb-3"></i>
                  <h4>Fast & Intuitive</h4>
                  <p className="text-muted">
                    Experience our lightning-fast, intuitive design that works smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <div className="container text-center">
        <p className="mb-0">
          Weather Forecasting App &copy; Hoda Aghaei {new Date().getFullYear()} | Powered by{' '}
          <a
            href="https://openweathermap.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            OpenWeatherMap API
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
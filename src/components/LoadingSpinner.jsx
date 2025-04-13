import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="text-center my-5">
      <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-3">Loading weather data...</p>
    </div>
  );
};

export default LoadingSpinner;
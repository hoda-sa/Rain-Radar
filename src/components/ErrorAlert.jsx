import React from 'react';

const ErrorAlert = ({ message }) => {
  return (
    <div className="alert alert-danger my-4 fade-in" role="alert">
      <div className="d-flex align-items-center">
        <i className="bi bi-exclamation-triangle-fill me-3 fs-2 text-danger"></i>
        <div>
          <h4 className="alert-heading fw-bold">Weather Data Not Found</h4>
          <p className="mb-1">{message}</p>
          <hr />
          <p className="mb-0">
            <small>
              <i className="bi bi-info-circle me-1"></i>
              Please try searching for a different city name, check your spelling, or verify your internet connection.
            </small>
          </p>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-outline-danger mt-3"
        onClick={() => window.location.reload()}
      >
        <i className="bi bi-arrow-clockwise me-2"></i>
        Reload Application
      </button>
    </div>
  );
};

export default ErrorAlert;
import React from 'react';

const UnitToggle = ({ units, onUnitChange }) => {
  const handleToggle = () => {
    const newUnit = units === 'metric' ? 'imperial' : 'metric';
    onUnitChange(newUnit);
  };

  return (
    <div className="unit-toggle">
      <div className="btn-group" role="group" aria-label="Temperature unit toggle">
        <button
          type="button"
          className={`btn ${units === 'metric' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => onUnitChange('metric')}
        >
          °C
        </button>
        <button
          type="button"
          className={`btn ${units === 'imperial' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => onUnitChange('imperial')}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default UnitToggle;
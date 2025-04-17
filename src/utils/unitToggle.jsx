
import React from 'react';

/**
 * UnitToggle functional component
 * 
 * @param {Object} props - Component props
 * @param {string} props.units - Current unit system ('metric' or 'imperial')
 * @param {Function} props.onUnitChange - Callback function to handle unit changes
 * @returns {JSX.Element} - Rendered toggle button component
 */
const UnitToggle = ({ units, onUnitChange }) => {

  /**
   * Toggles between metric and imperial units
   * Switches from the current unit to the alternative
   */
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
import React from 'react';

const Dropdown = ({ options, onChange }) => {
  return (
    <div className='dropdown'>
      <label htmlFor="city-select">Select City: </label>
      <select onChange={(e) => onChange(e.target.value)} className='select-option'>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

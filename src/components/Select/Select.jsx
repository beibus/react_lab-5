import React from 'react'

function Select({ name, label, options, onSelect}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>

      <select name={name} id={name} onChange={onSelect}>
      <option value='all'>All</option>
        {options.map(o =>
          <option
            value={o.value}
          >
            {o.label}
          </option>
        )}
        </select>
      </>
      );
}

      export default Select;
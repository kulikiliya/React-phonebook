import React from 'react';

export const Filter = ({ takeData, filterValue }) => {
  return (
    <label>
      Filter
      <input
        onChange={e => takeData(e.target.value)}
        type="text"
        name="filter"
        value={filterValue}
      ></input>
    </label>
  );
};

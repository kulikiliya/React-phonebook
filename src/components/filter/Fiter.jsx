import React from 'react';
import styled from 'styled-components';

export const Filter = ({ takeData, filterValue }) => {
  return (
    <label>
      Filter
      <FilerInput
        onChange={e => takeData(e.target.value)}
        type="text"
        name="filter"
        value={filterValue}
      ></FilerInput>
    </label>
  );
};

const FilerInput = styled.input`
  margin-left: 10px;
`;

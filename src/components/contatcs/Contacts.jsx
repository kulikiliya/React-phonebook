import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Contacts = ({ filter, deleteData }) => {
  return (
    <ContainerDiv>
      <Ul>
        {filter.map(item => (
          <li key={item.id}>
            {item.name}: {item.number}
            <Button onClick={() => deleteData(item.id)}>Delete</Button>
          </li>
        ))}
      </Ul>
    </ContainerDiv>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
};

const ContainerDiv = styled.div`
  width: 350px;
  margin-top: 10px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid grey;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-self: start;

  gap: 10px;
`;

const Button = styled.button`
  margin-left: 10px;
`;

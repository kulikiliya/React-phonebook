import React from 'react';
import PropTypes from 'prop-types';

export const Contacts = ({ filter, deleteData }) => {
  return (
    <div>
      <ul>
        {filter.map(item => (
          <li key={item.id}>
            {item.name}: {item.number} -
            <button onClick={() => deleteData(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
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

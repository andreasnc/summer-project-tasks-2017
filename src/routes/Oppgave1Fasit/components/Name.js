import React from 'react';
import PropTypes from 'prop-types';

const Name = ({
  firstname,
  lastname
}) =>
  <div>
    <h3>First name: {firstname}</h3>
    <span>Last name: {lastname}</span>
  </div>;

Name.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string
};

export default Name;

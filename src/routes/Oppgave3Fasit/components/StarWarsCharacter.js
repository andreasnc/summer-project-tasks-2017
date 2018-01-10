import React from 'react';
import PropTypes from 'prop-types';

const StarWarsCharacter = (
  {
    firstname,
    lastname,
    height,
    imageUrl
  }) =>
  <div className="star-wars-character">
    <h3>First name: {firstname}</h3>
    <span>Last name: {lastname}</span>
    <span>Height: {height}</span>
    <span><img className="img-icon" src={imageUrl} /></span>
  </div>;

StarWarsCharacter.propTypes = {
  character: PropTypes.shape()
};

export default StarWarsCharacter;

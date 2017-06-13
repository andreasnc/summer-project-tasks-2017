import React from 'react';
import PropTypes from 'prop-types';

const StarWarsCharacter = (
  {
    character
  }) =>
  <div className="star-wars-character">
    <h3>First name:</h3>
    <span>Last name:</span>
    <span>Height:</span>
    <span><img className="img-icon" src={character.imageUrl} /></span>
  </div>;

StarWarsCharacter.propTypes = {
  character: PropTypes.shape()
};

export default StarWarsCharacter;

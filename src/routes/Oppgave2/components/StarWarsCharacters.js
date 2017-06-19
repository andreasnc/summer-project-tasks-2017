import React from 'react';
import PropTypes from 'prop-types';

const StarWarsCharacters = ({
    characters
  }) =>
  <div className="star-wars-characters">
    {/*  create a list of StarWarsCharacter here */ }
  </div>;

StarWarsCharacters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape())
};

export default StarWarsCharacters;

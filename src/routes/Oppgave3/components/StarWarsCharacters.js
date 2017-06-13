import React from 'react';
import PropTypes from 'prop-types';
import StarWarsCharacter from './StarWarsCharacter';

const StarWarsCharacters = ({}) =>
  <div className="star-wars-characters">
    {/* add missing code here */}
  </div>;

StarWarsCharacters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape())
};

export default StarWarsCharacters;

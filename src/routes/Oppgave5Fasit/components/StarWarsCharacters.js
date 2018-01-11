import React from 'react';
import PropTypes from 'prop-types';
import StarWarsCharacter from './StarWarsCharacter';

const StarWarsCharacters = ({
  characters
}) =>
  <div className="star-wars-characters">
    {characters.map(character =>
        <StarWarsCharacter
          key={character.firstname}
          {...character}
        />
      )}
  </div>;

StarWarsCharacters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape())
};

export default StarWarsCharacters;

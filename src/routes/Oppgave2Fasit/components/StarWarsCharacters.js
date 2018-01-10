import React from 'react';
import PropTypes from 'prop-types';
import StarWarsCharacter from '../../Oppgave2/components/StarWarsCharacter';

const StarWarsCharacters = ({
    characters
  }) =>
  <div className="star-wars-characters">
    {characters.filter(character1 => parseInt(character1.height) > 180)
      .map(character2 =>
      <StarWarsCharacter
        key={character2.firstname}
        {...character2}
      />
    )}
  </div>;

StarWarsCharacters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape())
};

export default StarWarsCharacters;

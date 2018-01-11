import React from 'react';
import PropTypes from 'prop-types';
import StarWarsCharacters from './StarWarsCharacters';
import Oppgave5Text from './Oppgave5Text';

const Oppgave5View = ({
  fetchCharacters,
  characters
}) => (
  <div>
    <h4>Oppgave 5</h4>
    <Oppgave5Text />
    <div className="button-row">
      <button className='btn btn-primary btn-row' onClick={fetchCharacters}>
        Hent alle karakterer
      </button>
    </div>
    <StarWarsCharacters
      characters={characters}
    />
  </div>
);

Oppgave5View.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape()),
  fetchCharacters: PropTypes.func
};

export default Oppgave5View;

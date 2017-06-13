import React from 'react';
import PropTypes from 'prop-types';
import StarWarsCharacters from './StarWarsCharacters';
import Oppgave3Text from './Oppgave3Text';

const Oppgave3View = ({
  fetchCharacters
}) => (
  <div>
    <h4>Oppgave 3</h4>
    <Oppgave3Text />
    <div className="button-row">
      <button className='btn btn-primary btn-row' onClick={fetchCharacters}>
        Hent alle karakterer
      </button>
      {' '}
      <button className='btn btn-primary btn-row' onClick={() => console.log('Missing function!!')}>
        Hent ekstra karakter
      </button>
    </div>
    <StarWarsCharacters
      characters={[]}
    />
  </div>
);

Oppgave3View.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape()),
  fetchCharacters: PropTypes.func,
  fetchAdditionalCharacters: PropTypes.func
};

export default Oppgave3View;

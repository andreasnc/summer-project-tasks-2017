import React from 'react';
import StarWarsCharacters from './StarWarsCharacters';
import Opppgave2Text from './Oppgave2Text';
const characters = require('../data.json');

const Oppgave2View = () => (
  <div>
    <h4>Oppgave 2</h4>
    <Opppgave2Text />
    <StarWarsCharacters
      characters={characters}
    />
  </div>
);

export default Oppgave2View;

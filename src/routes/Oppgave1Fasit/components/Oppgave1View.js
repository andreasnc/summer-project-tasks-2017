import React from 'react';
import StarWarsCharacter from './StarWarsCharacter';
import Oppgave1Text from './Oppgave1Text';
const character = require('../data.json');

const Oppgave1View = () => (
  <div>
    <h4>Oppgave 1</h4>
    <Oppgave1Text />
    <StarWarsCharacter
      {...character}
    />
  </div>
);

export default Oppgave1View;

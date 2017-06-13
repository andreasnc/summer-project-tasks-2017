import React from 'react';
import PropTypes from 'prop-types';
import Oppgave4Text from './Oppgave4Text';


export const Oppgave4 = () => (
  <div style={{ margin: '0 auto' }} >
    <h4>Oppgave 4</h4>
    <Oppgave4Text />
    <h2>Counter: </h2>
    {/* add missing code here */}
  </div>
);

Oppgave4.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default Oppgave4;

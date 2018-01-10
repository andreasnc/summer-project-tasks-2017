import React from 'react';
import PropTypes from 'prop-types';
import Oppgave4Text from './Oppgave4Text';


export const Oppgave4 = ({
  counter,
  theNumber
}) => (
  <div style={{ margin: '0 auto' }} >
    <h4>Oppgave 4</h4>
    <Oppgave4Text />
    <h2>Counter: </h2>
    <button className='btn btn-primary btn-row' onClick={() => counter(theNumber)}>
      Counter
    </button>
    <h3>{theNumber}</h3>
  </div>
);

Oppgave4.propTypes = {
  theNumber: PropTypes.number.isRequired,
};

export default Oppgave4;

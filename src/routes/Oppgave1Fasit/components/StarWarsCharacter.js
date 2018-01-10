import React from 'react';
import PropTypes from 'prop-types';
import Name from './Name';

const StarWarsCharacter = (
  {
    firstname,
    lastname,
    height,
    imageUrl
  }) =>
  <div className="star-wars-character">
    <Name
      firstname={firstname}
      lastname={lastname}
    />
    <span>Height: {`${height} cm `}</span>
    <span><img className="img-icon" src={imageUrl} /></span>
  </div>;

StarWarsCharacter.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  height: PropTypes.string,
  imageUrl: PropTypes.string
};

export default StarWarsCharacter;

import React from 'react';
import PropTypes from 'prop-types';

const StarWarsCharacter = (
  {
    firstname,
    lastname,
    height,
    imageUrl,
    movies
  }) =>
  <div className="star-wars-character">
    <h3>First name: {firstname}</h3>
    <span>Last name: {lastname}</span>
    <span>Height: {height}</span>
    <span><img className="img-icon" src={imageUrl} /></span>
    {movies.map(movie =>
      <span key={movie}>{movie}</span>
    )}
  </div>;

StarWarsCharacter.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  height: PropTypes.string,
  imageUrl: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.string)
};

export default StarWarsCharacter;

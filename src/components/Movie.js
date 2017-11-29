import React from 'react';
import PropTypes from 'prop-types';

const divStyle = {
    marginBottom: 100,
    padding: 20,
    background: 'white'
};

const imgStyle = {
    width: '50%'
};

const Movie = ({title, year, poster}) => (
    <div style={divStyle}>
        <h2>{title}</h2>
        <h3>{year}</h3>
        <img style={imgStyle} src={poster} alt={title}/>
    </div>
);

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;

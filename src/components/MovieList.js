import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

const divStyle = {
    textAlign: 'center',
    width: '50%',
    margin: 40
};

const MovieList = ({movies}) => (
    <div style={divStyle}>
        {movies.map((movie, i) => (
            <Movie
                key={i}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}/>
        ))}
    </div>
);

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            Title: PropTypes.string.isRequired,
            Year: PropTypes.string.isRequired,
            Poster: PropTypes.string.isRequired
        })
    ).isRequired
};

export default MovieList;

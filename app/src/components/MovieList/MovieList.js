import React from 'react';
import movieData from '../../movies.json';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = () => {
  return (
    <section className='movie-list-container'>
      {movieData.Search.map((movie, index) => {
        return (
          <MovieCard movie={movie} key={index}/>
        )
      })}
    </section>
  )
};

export default MovieList;

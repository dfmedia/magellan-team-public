import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = (props) => {
  const movieList = () => {
    return props.movies.map((movie, index) => {
      let favoriteStatus = 'not-favorite';

      if(props.favorites.length) {
        favoriteStatus = props.favorites.includes(movie.Title) ? 'favorite' : 'not-favorite';
      }
      return (
        <MovieCard
          movie={movie}
          key={index}
          favoriteMovie={props.favoriteMovie}
          removeFavorite={props.removeFavorite}
          favoriteStatus={favoriteStatus}
        />
      )
    })
  }

  return (
    <section className='movie-list-container'>
      {movieList()}
    </section>
  )
};

export default MovieList;

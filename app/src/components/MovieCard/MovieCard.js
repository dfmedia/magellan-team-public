import React from 'react';

const MovieCard = ({movie}) => {
  return (
    <article className='movie-card-container'>
      <h3>{movie.Title}</h3>
      <section className='movie-info'>
        <p>Release Year:  {movie.Year}</p>
        <img className='movie-poster' src={movie.Poster} />
        <p className='imdb-id'>IMDB ID:  {movie.imdbID}</p>
      </section>
    </article>
  )
}
export default MovieCard;

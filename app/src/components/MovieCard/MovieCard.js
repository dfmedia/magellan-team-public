import React from 'react';

const MovieCard = ({movie, favoriteMovie, removeFavorite, favoriteStatus }) => {
  let buttonColor = '';

  const determineFavoriteStatus = () => {
    if(favoriteStatus === 'not-favorite') {
      favoriteMovie(movie.Title);
      buttonColor = 'favorite';
    } else {
      removeFavorite(movie.Title)
      buttonColor = 'not-favorite'
    }
  }

  return (
    <article className='movie-card-container'>
      <h3>{movie.Title}</h3>
      <section className='movie-info'>
        <p>Release Year:  {movie.Year}</p>
        <p className='imdb-id'>IMDB ID:  {movie.imdbID}</p>
        <img className='movie-poster' src={movie.Poster} alt={movie.Title} />
      </section>
      <button onClick={()=>{determineFavoriteStatus()}} className={buttonColor}>Favorite</button>
    </article>
  )
}
export default MovieCard;

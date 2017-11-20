import { connect } from 'react-redux';

import { favoriteMovie, removeFavorite } from '../../actions'
import MovieList from './MovieList'

const mapStateToProps = (state) => {
  return { movies: state.movieReducer, favorites: state.favoritesReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    favoriteMovie: (Title) => {
      dispatch(favoriteMovie(Title))
    },
    removeFavorite: (Title) => {
      dispatch(removeFavorite(Title))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)

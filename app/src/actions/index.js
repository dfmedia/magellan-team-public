export const loadMovies = (response) => {
  return {
    type: 'LOAD_MOVIES',
    payload: response
  }
};

export const favoriteMovie = (Title) => {
  return {
    type:'ADD_FAVORITE',
    Title
  }
};

export const removeFavorite = (Title) => {
  return {
    type:'REMOVE_FAVORITE',
    Title
  }
};

export const clearFavorites = () => {
  return {
    type:'CLEAR_FAVORITES'
  }
};

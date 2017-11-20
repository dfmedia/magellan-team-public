const favoritesReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
      return [action.Title, ...state];

    case 'REMOVE_FAVORITE':
    let newState = state;
    newState.splice(newState.indexOf(action.Title), 1);
      return [...newState];

    case 'CLEAR_FAVORITES':
      return [];

    default:
      return state;
  }
};

export default favoritesReducer;

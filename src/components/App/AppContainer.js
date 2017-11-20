import { connect } from 'react-redux';

import App from './App';
import { loadMovies } from '../../actions'


function mapDispatchToProps(dispatch) {
  return {
    loadMovies: payload => {
      dispatch(loadMovies(payload))
    },
  };
}

const mapStateToProps = (state) => {
  return {
    state: state
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

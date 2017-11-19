import React, { Component } from 'react';
import './App.css';

import MovieListContainer from '../MovieList/MovieListContainer';
import movieData from '../../movies.json';

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadMovies(movieData.Search);
  }

  render() {
    return (
      <main className="App">
        <h1>Star Wars Equals Rad</h1>
        <MovieListContainer />
      </main>
    );
  }
}

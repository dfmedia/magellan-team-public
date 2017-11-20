import React, { Component } from 'react';
import './App.css';

import MovieListContainer from '../MovieList/MovieListContainer';
import movieData from '../../movies.json';

export default class App extends Component {

  componentWillMount() {
    fetch('http://localhost:3001/api/movies')
      .then(res => res.json())
      .then(res => {
        this.props.loadMovies(res);
      })
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

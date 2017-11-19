import React, { Component } from 'react';
import './App.css';

import MovieList from '../MovieList/MovieList';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <MovieList />
      </main>
    );
  }
}

import React, { Component } from 'react';
import './App.css';

import MovieList from '../MovieList/MovieList';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <h1>Star Wars Equals Rad</h1>
        <MovieList />
      </main>
    );
  }
}

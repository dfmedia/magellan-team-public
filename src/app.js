import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';
import { MovieTable } from './components/movie-table';

const data = require('./movies');

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        <div className="container">
          <MovieTable movies={data.Search} />
        </div>
      </div>
    );
  }
}

export default App;

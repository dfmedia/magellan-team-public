'use strict';
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const movieSchema = new schema({
  Title: String,
  Year: String,
  imdbID: String,
  Type: String,
  Poster: String
});

module.exports = mongoose.model('Movie', movieSchema);

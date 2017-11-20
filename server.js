'use strict'

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Movie = require('./model/movies');

const app = express();
const router = express.Router();

const port = 3001;

mongoose.connect('mongodb://jpeavler:pinball@ds113636.mlab.com:13636/dfm-test')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});

router.route('/movies')
  .get((req, res) => {
    Movie.find((err, movies) => {
      if(err) {
        res.send(err)
      }
      res.json(movies)
    });
  })
  .post((req, res) => {
    let movie = new Movie();
    movie.Title = req.body.Title;
    movie.Year = req.body.Year;
    movie.imdbID = req.body.imdbID;
    movie.Type = req.body.Type;
    movie.Poster = req.body.Poster;

    movie.save(err => {
      if(err) {
        res.send(err);
      }
      res.json({ message: 'Movie added dude' })
    });
  });

app.use('/api', router);

app.listen(port, function() {
 console.log(`api running on port ${port}`);
});

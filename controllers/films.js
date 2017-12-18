//since we don't have a database we'll use our front end models at the moment
const express = require('express');
const filmRouter = new express.Router();
const Film = require('../client/src/models/film');
const Review = require('../client/src/models/review');
const getFilms = require('../client/src/models/films');
const films = getFilms();

filmRouter.get('/', function(req, res) {
  res.json({films});
});

filmRouter.get('/:id', function(req, res){
  res.json({film : films[req.params.id]});
  //wrapped in object
});

module.exports = filmRouter;

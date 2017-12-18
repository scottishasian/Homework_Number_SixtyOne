//since we don't have a database we'll use our front end models at the moment
const Film = require('../client/src/models/film');
const Review = require('../client/src/models/review');
const getFilms = require('../client/src/models/films');
const filmRouter = new express.Router();
const films = getFilms();
const filmsArray = []

filmRouter.get('/:id', function(req, res) {
  filmsArray.push(films);
  const selectedFilm = filmsArray[req.params.id];
  res.json({film: selectedFilm});
});

const Film = require('./film');
const Review = require('./review');

const getFilms = function () {
  const review1 = new Review({
    comment: "It's not even a thing. What just happened. I want my life back.",
    rating: 1,
    author: "Val"

  });

  const review2 = new Review({
    comment: "Pew pew pew lightsabers space cowboys whoot what's not to love",
    rating: 100,
    author: "Val"

  });

  const review3 = new Review({
    comment: "This homework is perplexing.",
    rating: 1,
    author: "Kynan"

  });

  const film1 = new Film({
    title: "Now You See Me",
    actors: ["Woody Harrelson", "Jesse Eisenberg"],
    genre: "Action"
  });

  const film2 = new Film({
    title: "Star Wars Episode IV: A New Hope",
    actors: ["Harrison Ford", "Alec Guiness"],
    genre: "Space odyssey"
  });

  const film3 = new Film({
    title: "The JavaScript Files: Day 61 Homework",
    actors: ["John Duncan", "Marta Dabrowka", "Daniel Colyer"],
    genre: "Coding Extravaganza"
  });

  film1.addReview(review1);
  film2.addReview(review2);
  film3.addReview(review3);

  return [film1, film2, film3];
}

module.exports = getFilms;

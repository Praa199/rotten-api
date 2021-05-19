const { Router } = require("express");
const Movie = require("../models/Movie.model");

const router = Router();

router.get("/", (req, res, next) => {
  Movie.find({}).then((allMovies) => {
    res.json(allMovies);
  });
});

router.get("/:allTheSingleMovies", (req, res) => {
  Movie.findById(req.params.allTheSingleMovies).then((singleMovie) => {
    res.json(singleMovie);
  });
});

module.exports = router;

const router = require("express").Router();

/* GET home page */
//replaced res.render with res.json and commented out require("./error-handling")(app); from app.js
//res.render was specific for handlebars
// .json returns data as objects
router.get("/", (req, res, next) => {
  // Movie.find({}).then((allMovies) => {
  res.json({ who: "Aldo", where: "Berlin" });
  //   res.json(allMovies);
  // }); // for testing purposes
});

const moviesRouter = require("./movies");

router.use("/movies", moviesRouter);

module.exports = router;

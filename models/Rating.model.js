const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const ratingSchema = new Schema({});

const Rating = model("Rating", ratingSchema);

module.exports = Rating;

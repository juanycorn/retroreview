const mongoose = require('mongoose');
const review = require('./Review');
const { Schema } = mongoose;


const gameSchema = new Schema({
  title: {
    type: String
  },
  reviews: [review]
});


const Game = mongoose.model('game', gameSchema);

module.exports = Game;

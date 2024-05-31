const mongoose = require('mongoose');
const Review = require('./Review');
const { Schema } = mongoose;


const gameSchema = new Schema({
  title: {
    type: String
  },
  reviews: [
    {
     type: Schema.Types.ObjectId,
     ref: 'Review'
    }
  ]
});


const Game = mongoose.model('game', gameSchema);

module.exports = Game;

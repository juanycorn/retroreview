const mongoose = require('mongoose');

const { Schema } = mongoose;


const saveSchema = new Schema({
  data: {
    type: String
  }
});

// Set up pre-save middleware to create password
const Save = mongoose.model('Save', saveSchema);

module.exports = Save;

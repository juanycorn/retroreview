const mongoose = require('mongoose');

const { Schema } = mongoose;


const saveSchema = new Schema({
  data: {
    type: String
  }
});


const Save = mongoose.model('Save', saveSchema);

module.exports = Save;

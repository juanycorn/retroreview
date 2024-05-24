//Required Files
const mongoose = require('mongoose');

//Items
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters'],
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },
  romUrl: {
    type: String,
    required: [true, 'ROM URL is required'],
    trim: true,
  },
  core: {
    type: String,
    required: [true, 'Core is required'],
    trim: true,
    enum: ['nes', 'snes', 'genesis', 'gb', 'gba', 'n64', 'psx'], // Example cores
  },
  metadata: {
    type: Map,
    of: String, // Additional metadata can be stored as key-value pairs
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Item', itemSchema);
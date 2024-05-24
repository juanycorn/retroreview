const mongoose = require('mongoose');
const Item = require('./path/to/your/itemModel');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
    const newItem = new Item({
      name: 'Super Mario Bros',
      description: 'Classic NES game',
      romUrl: 'https://example.com/roms/super-mario-bros.zip',
      core: 'nes',
      metadata: {
        publisher: 'Nintendo',
        releaseYear: '1985'
      }
    });

    return newItem.save();
  })
  .then(item => {
    console.log('Item saved:', item);
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
    mongoose.connection.close();
  });
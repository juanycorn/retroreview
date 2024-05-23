// server.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const { buildSchema } = require('graphql');
const itemRoutes = require('./routes/itemRoutes');
require('dotenv').config();
const path = require('path');

const app = express();
const port = process.env.PORT || 3003;

//Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
  type Mutation {
    _: Boolean
  }
`);

// Define root resolvers
const root = {
  hello: () => 'Hello, world!',
};

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

// Serve static files for EmulatorJS
app.use('/emulatorjs', express.static(path.join(__dirname, 'path-to-emulatorjs')));

// Route to serve the EmulatorJS interface
app.get('/emulator', (req, res) => {
  res.sendFile(path.join(__dirname, 'path-to-emulatorjs', 'index.html'));
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', itemRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

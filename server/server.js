// server.js
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const mongoose = require('mongoose');
const { expressMiddleware } = require('@apollo/server/express4');
require('dotenv').config();
const { typeDefs, resolvers } = require('./schemas');
//authmidlleware needed
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB todo: create separate config file
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};



// Start the server
startApolloServer();
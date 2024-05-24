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

// declare MongoDB connection
const db = require('./config/connection');

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

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};



// Start the server
startApolloServer();
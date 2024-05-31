const typeDefs = `
  type Review {
    _id: ID
    author: String
    content: String
    DatePosted: String
  }
  type Game {
    _id: ID
    title: String
    review: [Review]
  }
  type User {
    _id: ID
    userName: String
    email: String
    review: [Review]
  }

  type Auth {
    token: ID
    user: User
  }
  type Query { 
    user: User
    game: Game
    games: [Game]
    reviews: [Review]!
  }

  type Mutation {
    addUser(
        userName: String!
        email: String!
        password: String!
    ): Auth
    addGame(
      title: String!
    ): Game
    updateUser(
        firstName: String
        lastName: String
        email: String
        password: String
      ): User

    postReview(author: String!, content: String!): Review

    login(email: String!, password: String!): Auth
  }
  `;
  module.exports = typeDefs;
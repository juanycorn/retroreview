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
  type Details {
    id: ID
    name: String
    description: String
    background_image:String
    released: String
    rating: Float
    platforms: [Platforms]
    genres: [Genre]
  }
type Coureseldata {
  id: ID
  name: String
  background_image: String
  slug: String
}
  type Platforms {
    platform: Platform
  }
  type Platform {
    name: String
  }
  type Results {
    id: ID
    name: String
    background_image: String
    slug: String
  }
  type Genre {
    name: String
  }
  type User {
    _id: ID
    userName: String
    email: String
    review: [Review]
  }

  type Auth {
    token: ID!
    user: User
  }
  type Query { 
    user: User
    game: Game
    games: [Game]
    reviews: [Review]
    gameDetails(slug: String!): Details
    getCouresel: [Coureseldata]
    searchGames(page: Int, search: String): [Results]
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

    postReview(author: String!, content: String!): Review

    login(email: String!, password: String!): Auth
  }
  `;
  module.exports = typeDefs;
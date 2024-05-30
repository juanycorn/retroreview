const typeDefs = `
  type Save {
    _id: ID
    data: String
  }
  
  type User {
    _id: ID
    userName: String
    email: String
    review: [Review]
  }

  type: Auth {
    token: ID
    user: User
  }
  type Query { 
    user: User
    reviews: [Review]!
  }

  type Mutation {
    addUser(
        userName: String!
        email: String!
        password: String!
    ): Auth
    updateUser(
        firstName: String
        lastName: String
        email: String
        password: String
      ): User
    postReview(author: String!, content: String!): Review
    login(email: String!, password: String!): Auth
  }
  `
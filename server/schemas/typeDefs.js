const typeDefs = `
  type Save {
    _id: ID
    data: String
  }
  
  type User {
    _id: ID
    userName: String
    email: String
    storedSaves: [Save]
  }

  type: Auth {
    token: ID
    user: User
  }
  type Query { 
    user: User
    save(_id: ID!): Save
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
    addSave( data: String!): Save
    login(email: String!, password: String!): Auth
  }
  `
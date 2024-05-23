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
  `
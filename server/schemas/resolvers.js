
const {Save, User} = require("../models");
const { signToken, AuthenticationError } = require('../utils/auth');
//const { signToken, AuthenticationError } = require('../utils/auth'); to be implemented

const resolvers = {
    Query: {
        // find User req context

        // findbyPk the save 
    },
    Mutation: {
        // create User returns a token

        // updateUser reqcontext

        // create a Save

        //login returns a token
    }
}
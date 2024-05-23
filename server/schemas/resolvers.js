const { query } = require("express");
const {Save, User} = require("../models");
const { Query } = require("mongoose");
//const { signToken, AuthenticationError } = require('../utils/auth'); to be implemented

const resolvers = {
    Query: {
        // find User req context

        // findbyPk the save 
    },
    Mutatuoin: {
        // create User returns a token

        // updateUser reqcontext

        // create a Save

        //login returns a token
    }
}
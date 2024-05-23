
const {Save, User} = require("../models");
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        // find User req context
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user.id).populate({
                path: 'orders.products',
                populate: 'category',
              });
      
              user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
      
              return user;
            }
            throw AuthenticationError;
        },
        // findbyPk the save 
        save: async (parent, { id }, context) => {
            if (context.user) {
              const save = await Save.findById(id);
      
              return save.data;
            }
      
            throw AuthenticationError;
          },
    },
    Mutation: {
        // create User returns a token
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
        },
        // updateUser reqcontext
        updateUser: async (parent, args, context) => {
            if (context.user) {
              return User.findByIdAndUpdate(context.user.id, args, {
                new: true,
              });
            }
      
            throw AuthenticationError;
          },
        // create a Save
        addSave: async (parent, args) => {
            const save = await Save.create(args);
      
            return save;
        },
        //login returns a token
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
    }
}

const {Review, User, Game} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const axios = require('axios');
const resolvers = {
    Query: {
        // find User req context
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user.id).populate({
                path: 'reviews',
                populate: 'review',
              });
      
              return user;
            }
            throw AuthenticationError;
        },
            gameDetails: async (_, { slug }) => {
              try {
                const response = await axios.get(`https://api.rawg.io/api/games/${slug}?key=9f4cf210f2d444348491d5c9b6de68b3`);
                return response.data;
              } catch (error) {
                console.error('Error fetching game details:', error);
                throw new Error('Failed to fetch game details');
              }
            },
            getCouresel: async () => {
              try {
                const response = await axios.get(`https://api.rawg.io/api/games?key=9f4cf210f2d444348491d5c9b6de68b3&page_size=5&ordering=-added`);
                return response.data.results;
              } catch (error) {
                console.error('Error fetching game couresel:', error);
                throw new Error('Failed to fetch couresel details');
              }
            },
            searchGames: async (_,{page, search}) => {
              try {
                console.log(page);
                console.log(search);
                const response = await axios.get(`https://api.rawg.io/api/games?key=9f4cf210f2d444348491d5c9b6de68b3&page_size=40&page=${page}&search=${search}`);
                return response.data.results;
              } catch (error) {
                console.error('Error fetching games:', error);
                throw new Error('Failed to fetch search Games');
              }
            },
        game: async (parent, {gameId}) => {
          return Game.findById({ _id: gameId }).populate({
            path: 'reviews',
            populate: 'review',
          })
        },
        games: async () => {
          return Game.find();
        },
        reviews: async () => {
          return Review.find().sort({datePosted: -1});
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
        postReview: async (parent, {content, gameId}, context) => {
          if (context.user) {
          const review = await Review.create({author: context.user.username, content})

          await Game.findOneAndUpdate(
            {_id: gameId}, 
            {
              $addToSet: {reviews: review}
            },
            {
              new: true,
              runValidators: true,
            }
          )
          return review
          }throw AuthenticationError;
        },
        addGame: async (parent, args) => {
          return Game.create(args);
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

module.exports = resolvers;
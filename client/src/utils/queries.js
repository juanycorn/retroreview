import { gql } from '@apollo/client';
//TODO adjust to new project requirements
//TODO game for one game so that it can populate reviews, games for all games, reviews to get all reviews
export const QUERY_USER = gql`
    {
        user {
            userName
            storedSaves {
                _id
            }
        }
    }`
import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    {
        user {
            userName
            storedSaves {
                _id
            }
        }
    }`
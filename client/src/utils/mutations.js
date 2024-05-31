import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        userName
      }
    }
  }
`;

export const ADD_USER = gql`
mutation Mutation($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        email
        userName
        _id
      }
    }
  }
`;

export const ADD_GAME = gql`
mutation Mutation($title: String!) {
    addGame(title: $title) {
      title
    }
  }`

export const ADD_REVIEW = gql`
mutation Mutation($author: String!, $content: String!) {
    postReview(author: $author, content: $content) {
      _id
      DatePosted
      author
      content
    }
  }`


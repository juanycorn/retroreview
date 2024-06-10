import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query User {
    user {
      userName
      review {
        DatePosted
        author
        content
      }
    }
  }`;

export const QUERY_DETAILS = gql`
query GameDetails($slug: String!) {
    gameDetails(slug: $slug) {
      background_image
      description
      name
      rating
      released
      platforms {
        platform {
          name
        }
      }
      genres {
        name
      }
    }
  }`;

  export const QUERY_GAME = gql`
  query Game {
    game {
      _id
      title
      review {
        _id
        DatePosted
        author
        content
      }
    }
  }`;

export const QUERY_GAMES = gql`
query Games {
    games {
      _id
      title
      review {
        _id
        DatePosted
        author
        content
      }
    }
  }`;

export const QUERY_REVIEWS = gql`
query Reviews {
    reviews {
      DatePosted
      _id
      author
      content
    }
  }`;

export const QUERY_COURESEL = gql`
query GetCouresel {
  getCouresel {
    background_image
    id
    name
    slug
  }
}`;

export const QUERY_SEARCH = gql`
query SearchGames($page: Int, $search: String) {
  searchGames(page: $page, search: $search) {
    id
    background_image
    name
    slug
  }
}`;
import { gql } from "@apollo/client";

// export const LOGIN_USER = gql``;

// export const ADD_USER = gql``;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: Book!) {
    saveBook(bookId: $String) {
      _id
      bookId
      description
      title
      image
      link
      authors {
        _id
      }
    }
  }
`;

// export const REMOVE_BOOK = gql``;

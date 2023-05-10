import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
  
    }
  }
`;

export const ADD_USER = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {

    }
  }
`;

export const SAVE_BOOK = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {

    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
    
    }
  }
`;

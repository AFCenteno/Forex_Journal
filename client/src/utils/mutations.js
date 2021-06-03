import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_TRADE = gql`
  mutation addTrade($name: String!, $description: String!, $entryprice: Float!, $exitprice: Float, $sL: Float, $tP: Float, $winLose: String) {
      addTrade(name: $name, description: $description, entryprice: $entryprice, exitprice: $exitprice, sL: $sL, tP: $tP, winLose: $winLose)
    }
`;
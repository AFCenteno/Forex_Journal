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
  mutation addTrade($name: String!, $description: String!, $entryPrice: Float!, $exitPrice: Float, $sL: Float, $tP: Float, $winLose: String) {
      addTrade(name: $name, description: $description, entryPrice: $entryPrice, exitPrice: $exitPrice, sL: $sL, tP: $tP, winLose: $winLose)
    }
`;
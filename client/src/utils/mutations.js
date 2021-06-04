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
  mutation addTrade($tradeId: Float!, $name: String!, $description: String!, $entryPrice: String!, $exitPrice: String, $sL: String, $tP: String, $winLose: String) {
      addTrade(tradeId: $tradeId, name: $name, description: $description, entryPrice: $entryPrice, exitPrice: $exitPrice, sL: $sL, tP: $tP, winLose: $winLose) {
            trades{
          tradeId
          name
          description
          entryPrice
          exitPrice
          sL
          tP
          winLose
          }
      }
  }
`;

  export const REMOVE_TRADE = gql`
  mutation removeTrade($tradeId: Float!) {
      removeTrade(tradeId: $tradeId) {
          trades{
          tradeId
          name
          description
          entryPrice
          exitPrice
          sL
          tP
          winLose
          }
      }
  }
`;
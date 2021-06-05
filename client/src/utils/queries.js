import gql from 'graphql-tag';

export const QUERY_TRADE = gql`
{
  user {
    trades {
      tradeId
      name
      description
      entryPrice
      exitPrice
      sL
      tP
      winLose
      dateEnter
      dateExit
    }
  }
}
`;

export const QUERY_USER = gql`
{
  user {
    firstName
    lastName
  }
}
`;
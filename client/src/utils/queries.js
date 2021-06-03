import gql from 'graphql-tag';

export const QUERY_TRADE = gql`
{
  user {
    trades {
      name
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
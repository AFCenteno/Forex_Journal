import gql from 'graphql-tag';

export const QUERY_TRADE = gql`
{
  trade {
    _Id
    name
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
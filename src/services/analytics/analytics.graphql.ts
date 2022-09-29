import { gql } from 'graphql-request';

export const FB_CONVERSION_PAGE_VIEW = gql`
  mutation pageView($input: PageViewInput!) {
    pageView(input: $input)
  }
`
import { gql } from 'graphql-request';

export const GET_BOOKREVIEWS = gql`
  query bookreviews($limit: Int!, $offset: Int!, $where: BookreviewsWhereInput!) {
    bookreviews(limit: $limit, offset: $offset, where: $where) {
      id
    }
  }
`;

export const GET_BOOKREVIEW = gql`
  query bookreview($id: String!) {
    bookreview(id: $id) {
      id
      content
      title
      userID
      clubID
      likeUserIDs
      order
      role
      isPublic
      publishedAt
      fileUrl
      commentCount
      club {
        name
        id
      }
      contents {
        imageUrl
      }
      meeting {
        id
        bookreviewDeadline
        startedAt
      }
      user {
        id
        name
        profileImageUrl
        email
      }
      comments {
        id
        content
        createdAt
        userID
        user {
          id
          name
          email
          profileImageUrl
        }
        replies {
          id
          bookreviewID
          userID
          user {
            id
            name
            email
            description
            profileImageUrl
            instagram
            facebook
            isPublicProfile
          }
          content
          parentID
          createdAt
        }
      }
    }
  }
`;

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

export const CREATE_BOOKREVIEW_COMMENT = gql`
  mutation createBookreviewComment($input: CreateBookreviewCommentInput!) {
    createBookreviewComment(input: $input) {
      bookreviewComment {
        id
        parentID
        bookreviewID
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
            profileImageUrl
          }
          content
          parentID
          createdAt
        }
      }
    }
  }
`;

export const UPDATE_BOOKREVIEW_COMMENT = gql`
  mutation updateBookreviewComment($input: UpdateBookreviewCommentInput!) {
    updateBookreviewComment(input: $input) {
      bookreviewComment {
        id
        bookreviewID
        content
        createdAt
        userID
        user {
          id
          name
        }
      }
    }
  }
`;

export const DELETE_BOOKREVIEW_COMMENT = gql`
  mutation deleteBookreviewComment($id: String!) {
    deleteBookreviewComment(id: $id)
  }
`;

export const TOGGLE_LIKE_BOOKREVIEW_COMMENT = gql`
  mutation toggleLikeOnBookreviewComment($id: String!, userID: String!) {
    toggleLikeOnBookreviewComment(id: $id, userID, $userID)
  }
`;

export const REPORT_BOOKREVIEW_COMMENT = gql`
  mutation reportOnBookreviewComment($id: String!, userID: String, reason: String!) {
    reportOnBookreviewComment(id: $id, userID: $userID, reason: $reason)
  }
`;

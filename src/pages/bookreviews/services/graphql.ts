import { gql } from 'graphql-request';

export const GET_BOOKREVIEWS_TEMP = gql`
  query bookreviewsTemp($options: BookreviewsOptions) {
    bookreviewsTemp(options: $options) {
      count
      bookreviews {
        id
        title
        content
        isPublic
        publishedAt
        status
        role
        userID
        commentCount
        likeUserIDs
        updatedAt
        user {
          name
          profileImageUrl
          email
          id
        }
        club {
          season
          name
        }
        contents {
          imageUrl
        }
        fileUrl
      }
    }
  }
`;

export const GET_BOOKREVIEWS = gql`
  query bookreviewsV2($limit: Int!, $offset: Int!, $userID: String!) {
    bookreviewsV2(limit: $limit, offset: $offset, userID: $userID) {
      count
      bookreviews {
        id
        title
        content
        isPublic
        publishedAt
        status
        role
        userID
        commentCount
        likeUserIDs
        updatedAt
        user {
          name
          profileImageUrl
          email
          id
        }
        club {
          season
          name
        }
        contents {
          imageUrl
          type
          title
          author
        }
        fileUrl
      }
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
        type
        title
        author
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
        deletedAt
        userID
        user {
          id
          name
          email
          profileImageUrl
        }
        likeUserIDs
        reportUserIDs
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
          deletedAt
          likeUserIDs
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

export const DELETE_BOOKREVIEW_COMMENT = gql`
  mutation deleteBookreviewComment($id: String!) {
    deleteBookreviewComment(id: $id)
  }
`;

export const TOGGLE_LIKE_BOOKREVIEW_COMMENT = gql`
  mutation toggleLikeOnBookreviewComment($id: String!, $userID: String!) {
    toggleLikeOnBookreviewComment(id: $id, userID: $userID) {
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

export const REPORT_BOOKREVIEW_COMMENT = gql`
  mutation reportOnBookreviewComment($id: String!, $userID: String!) {
    reportOnBookreviewComment(id: $id, userID: $userID) {
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

export const TOGGLE_LIKE_BOOKREVIEW = gql`
  mutation toggleLikeOnBookreviewTemp($id: String!, $userID: String!) {
    toggleLikeOnBookreviewTemp(id: $id, userID: $userID) {
      bookreview {
        likeUserIDs
      }
    }
  }
`;

export const GET_BOOKREIVEW_LIKEUSERS = gql`
  query bookreviewLikeUsers($id: String!) {
    bookreviewLikeUsers(id: $id) {
      id
      name
      email
      profileImageUrl
      role
    }
  }
`;
export const GET_BOOKREVIEW_COMMENT_LIKEUSERS = gql`
  query bookreviewCommentLikeUsers($id: String!) {
    bookreviewCommentLikeUsers(id: $id) {
      id
      name
      profileImageUrl
      role
    }
  }
`;

export const DELETE_BOOKREVIEW = gql`
  mutation deleteBookreview($id: String!) {
    deleteBookreview(id: $id)
  }
`;

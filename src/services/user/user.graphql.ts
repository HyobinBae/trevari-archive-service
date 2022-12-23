import { gql } from 'graphql-request';

export const GET_USER = gql`
  query user($id: String!) {
    user(id: $id) {
      id
      name
      birthday
      gender
      interests
      email
      password
      hasAuthenticatedPhoneNumber
      facebookID
      appleID
      phoneNumber
      countryCode
      isAgreedToMarketingSms
      isAgreedToAllMarketing
      point
      noExchangeablePoint
      readingVolume
      profileImageUrl
      description
      instagram
      facebook
      isPublicProfile
      isPublicAge
      isPublicGender
      isPublicClubActivity
      isPublicBookreview
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      user {
        id
        gender
        birthday
        phoneNumber
        readingVolume
        isPublicAge
        countryCode
        hasAuthenticatedPhoneNumber
      }
    }
  }
`;

export const GET_CLUB_ROLES = gql`
  query clubRoles($limit: Int, $offset: Int, $where: ClubRolesWhereInput) {
    clubRoles(limit: $limit, offset: $offset, where: $where) {
      id
      userID
      clubID
      clubApplicationID
      replacementPartnerMeetingOrder
      role
      season
      seasonID
      refundStatus
      refundedAt
      createdAt
      updatedAt
      type
      experiencedSeasonCount
      seasonData {
        openStatus
        startedAt
        endedAt
        nextSeasonData {
          id
          openStatus
        }
      }
      club {
        id
        season
        seasonID
        clubGroupID
        clubHistoryID
        name
        option
        options
        type
        place {
          name
          mapUrl
          address
        }
        notice
        coverUrl
        dayOfSchedule
        weekOfSchedule
        timeOfSchedule
        minBookreviewLength
        isClosed
        endedAt
        meetings {
          id
          clubID
          contents {
            title
            author
            imageUrl
            link
            type
          }
          bookreviewDeadline
          startedAt
          endedAt
          order
          club {
            name
            minBookreviewLength
          }
        }
        clubPosts {
          id
          createdAt
        }
        applicationDeadline
      }
      clubApplication {
        id
        method
      }
    }
  }
`;

export const HAS_MEMBERSHIP = gql`
  query hasMembership($userID: String!, $seasons: [String], $checkDate: String, $roles: [String], $serviceID: String) {
    hasMembership(userID: $userID, seasons: $seasons, checkDate: $checkDate, roles: $roles, serviceID: $serviceID)
  }
`;

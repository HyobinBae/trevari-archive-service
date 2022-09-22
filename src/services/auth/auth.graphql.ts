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

import { gql } from 'graphql-request';

export const GET_BANNERS = gql`
  query banners($limit: Int, $offset: Int, $where: BannersWhereInput) {
    banners(limit: $limit, offset: $offset, where: $where) {
      id
      order
      title
      pcImageUrl
      mobileImageUrl
      linkUrl
      isClosed
      createdAt
    }
  }
`;

export const GET_WISH_CLUBS = gql`
  query clubs(
    $limit: Int
    $offset: Int
    $where: ClubsWhereInput
    $order: String
    $randomSeed: Float
    $mostFullClubConditionPercent: Int
    $isTopAllMostFullClubs: Boolean
    $containsFullClub: Boolean
    $searchByLeaderName: Boolean
  ) {
    clubs(
      limit: $limit
      offset: $offset
      where: $where
      order: $order
      randomSeed: $randomSeed
      mostFullClubConditionPercent: $mostFullClubConditionPercent
      isTopAllMostFullClubs: $isTopAllMostFullClubs
      containsFullClub: $containsFullClub
      searchByLeaderName: $searchByLeaderName
    ) {
      id
      description
      clubGroup {
        description
      }
      coverUrl
      leaderTitle
      wishedCount
      name
      price
      type
      season
      seasonID
      runningTime
      weekOfSchedule
      dayOfSchedule
      timeOfSchedule
      memberCount
      clubGroupID
      maxMemberCount
      leaders {
        name
      }
      option
      options
      openedAt
      applicationDeadline
      subCoverUrl
      subHashTag
      seasonData {
        mostFullClubConditionPercent
        allOpenStartedAt
      }
      place {
        name
      }
      meetings {
        order
        startedAt
        endedAt
      }
    }
  }
`;

export const GET_CLUBS_FOR_LISTS = gql`
  query clubs(
    $limit: Int
    $offset: Int
    $where: ClubsWhereInput
    $order: String
    $randomSeed: Float
    $mostFullClubConditionPercent: Int
    $isTopAllMostFullClubs: Boolean
    $containsFullClub: Boolean
    $searchByLeaderName: Boolean
  ) {
    clubs(
      limit: $limit
      offset: $offset
      where: $where
      order: $order
      randomSeed: $randomSeed
      mostFullClubConditionPercent: $mostFullClubConditionPercent
      isTopAllMostFullClubs: $isTopAllMostFullClubs
      containsFullClub: $containsFullClub
      searchByLeaderName: $searchByLeaderName
    ) {
      id
      description
      clubGroup {
        description
      }
      coverUrl
      leaderTitle
      wishedCount
      name
      price
      type
      season
      seasonID
      runningTime
      weekOfSchedule
      dayOfSchedule
      timeOfSchedule
      memberCount
      clubGroupID
      maxMemberCount
      leaders {
        name
      }
      option
      options
      openedAt
      applicationDeadline
      subCoverUrl
      subHashTag
      seasonData {
        mostFullClubConditionPercent
        allOpenStartedAt
      }
      place {
        name
      }
      meetings {
        order
        startedAt
        endedAt
      }
    }
  }
`;

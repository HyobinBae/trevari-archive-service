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
export const GET_CURATION_DISPLAY_ORDERS = gql`
  query displayOrders($limit: Int, $offset: Int, $where: DisplayOrdersWhereInput) {
    displayOrders(limit: $limit, offset: $offset, where: $where) {
      id
      type
      isDisplayed
      order
      itemID
    }
  }
`;

export const GET_CURATION_LIST = gql`
  query clubWithTagDatas($options: ClubWithTagDatasInput) {
    clubWithTagDatas(options: $options) {
      clubs {
        id
        name
        season
        seasonID
        coverUrl
        type
        leaderIDs
        dayOfSchedule
        weekOfSchedule
        timeOfSchedule
        memberCount
        maxMemberCount
        leaderImageUrl
        leaderTitle
        description
        option
        options
        openedAt
        subDescription
        subHashTag
        subCoverUrl
        applicationDeadline
        price
        clubGroup {
          description
        }
        leaders {
          name
        }
        place {
          name
        }
        seasonData {
          mostFullClubConditionPercent
          allOpenStartedAt
        }
        meetings {
          order
          startedAt
          endedAt
        }
      }
      tag {
        id
        name
        description
        clubGroupId
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

export const GET_MAIN_POSTS = gql`
  query mainPosts($offset: Int, $limit: Int, $excludeClosedPost: Boolean) {
    mainPosts(offset: $offset, limit: $limit, excludeClosedPost: $excludeClosedPost) {
      title
      content
      id
      createdAt
      updatedAt
      category
      isClosed
      description
      thumbnailUrl
      viewCount
    }
  }
`;

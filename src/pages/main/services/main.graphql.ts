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
  query wishClubs($limit: Int, $offset: Int, $where: WishClubsWhereInput) {
    wishClubs(limit: $limit, offset: $offset, where: $where) {
      clubID
      userID
      season
      club {
        id
        season
        seasonID
        name
        coverUrl
        price
        type
        dayOfSchedule
        weekOfSchedule
        timeOfSchedule
        placeID
        partnerIDs
        leaderIDs
        isClosed
        partnerApplicationCount
        memberCount
        maxMemberCount
        minBookreviewLength
        clubGroupID
        clubHistoryID
        extensionStartedAt
        categoryID
        tagIDs
        information
        leaderDescription
        leaderImageUrl
        leaderTitle
        option
        options
        partnerDescription
        partnerImageUrl
        curriculum
        notice
        description
        openedAt
        meetings {
          order
          startedAt
          endedAt
          contents {
            title
          }
        }
        clubGroup {
          name
          description
        }
        clubHistory {
          sinceSeason
          readContents {
            title
          }
        }
        leaders {
          name
        }
        partners {
          name
        }
        place {
          name
        }
        seasonData {
          openStatus
          allOpenStartedAt
        }
      }
    }
  }
`;

export const CREATE_WISH_CLUB = gql`
  mutation createWishClub($input: CreateWishClubInput!) {
    createWishClub(input: $input) {
      wishClub {
        clubID
        userID
        season
      }
    }
  }
`;
export const DELETE_WISH_CLUB = gql`
  mutation deleteWishClub($clubID: String!, $userID: String!) {
    deleteWishClub(clubID: $clubID, userID: $userID)
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
        isPublic
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

export const GET_NEW_CURATION = gql`
  query curation($id: String!) {
    curation(id: $id) {
      id
      title
      head
      body
      description
      coverUrl
      isDisplay
      order
      lists  {
        clubLists {
          id
          name
          coverUrl
          description, leaderTitle,
          memberCount, maxMemberCount, applicationDeadline, openedAt
          place {
            name
          }
          clubGroup {
            description
          }
          meetings {
            startedAt
          }
          seasonID
        }
        eventLists {
          id
          name
          description
          thumbnailUrl
          memberCount, maxMemberCount
          place {
            name
          }
          hostName
          startedAt
        }
      }  
    }
  }
`
export const GET_NEW_CURATIONS = gql`
  query curations($limit: Int, $offset: Int) {
    curations(limit: $limit, offset: $offset) {
      id
      title
      head
      body
      description
      coverUrl
      isDisplay
      order
      lists  {
        clubLists {
          id
          name
          coverUrl
          description, leaderTitle, partnerDescriptionTitle
          memberCount, maxMemberCount, applicationDeadline, openedAt
          place {
            name
          }
          meetings {
            startedAt
          }
          seasonID
          clubGroup {
            description
          }
        }
        eventLists {
          id
          name
          description
          thumbnailUrl
          memberCount, maxMemberCount
          place {
            name
          }
          hostName
          startedAt
        }
        subscriptionClubLists {
          id
          title
          content {
            detailPageTitleImageUrl
          }
          liveSchedule {
            weekOfLiveSchedule
            dayOfLiveSchedule
            startTimeOfLiveSchedule
          }
        }
      }  
    }
  }
`


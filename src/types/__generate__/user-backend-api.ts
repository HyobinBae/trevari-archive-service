import { INewCuration } from 'pages/main/services/main.types';

/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export type Account = {
  accountNumber: Scalars['String'];
  bankCode: Scalars['String'];
  bankName: Scalars['String'];
  userName: Scalars['String'];
};

export type AddToCartInput = {
  contentID?: InputMaybe<Scalars['String']>;
  contentName?: InputMaybe<Scalars['String']>;
  eventID?: InputMaybe<Scalars['String']>;
  eventSourceUrl?: InputMaybe<Scalars['String']>;
  fbc?: InputMaybe<Scalars['String']>;
  fbp?: InputMaybe<Scalars['String']>;
  pixelIDs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['Int']>;
};

export type Agit = {
  __typename?: 'Agit';
  address: Scalars['String'];
  availableRoomCount: Scalars['Int'];
  holidays: Array<Maybe<Scalars['String']>>;
  id: Scalars['String'];
  name: Scalars['String'];
  openTimetable: Array<Maybe<TypeOpenTimetable>>;
  roomCount: Scalars['Int'];
};

export type B2bClub = {
  __typename?: 'B2bClub';
  b2bClubGroup?: Maybe<B2bClubGroup>;
  b2bClubGroupID?: Maybe<Scalars['String']>;
  b2bClubHistory?: Maybe<B2bClubHistory>;
  b2bClubHistoryID: Scalars['String'];
  b2bCompany?: Maybe<B2bCompany>;
  b2bCompanyID?: Maybe<Scalars['String']>;
  b2bMeetings?: Maybe<Array<Maybe<B2bMeeting>>>;
  category?: Maybe<Category>;
  categoryID?: Maybe<Scalars['String']>;
  closedAt?: Maybe<Scalars['String']>;
  coverUrl?: Maybe<Scalars['String']>;
  curriculum?: Maybe<Scalars['String']>;
  dayOfSchedule: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  firstBookIntro?: Maybe<Scalars['String']>;
  hashTag?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  information?: Maybe<Scalars['String']>;
  isClosed: Scalars['Boolean'];
  leaderDescription?: Maybe<Scalars['String']>;
  leaderIDs: Array<Maybe<Scalars['String']>>;
  leaderImageUrl?: Maybe<Scalars['String']>;
  leaders?: Maybe<Array<Maybe<B2bUser>>>;
  maxMemberCount: Scalars['Int'];
  memberCount: Scalars['Int'];
  minBookreviewLength: Scalars['Int'];
  name: Scalars['String'];
  notice?: Maybe<Scalars['String']>;
  openedAt?: Maybe<Scalars['String']>;
  option?: Maybe<Scalars['String']>;
  options: Array<Maybe<Scalars['String']>>;
  partnerApplicationCount: Scalars['Int'];
  partnerDescription?: Maybe<Scalars['String']>;
  partnerDescriptionTitle?: Maybe<Scalars['String']>;
  partnerIDs: Array<Maybe<Scalars['String']>>;
  partnerImageUrl?: Maybe<Scalars['String']>;
  partnerImageUrlUploadedAt?: Maybe<Scalars['String']>;
  partners?: Maybe<Array<Maybe<B2bUser>>>;
  place?: Maybe<Place>;
  placeID: Scalars['String'];
  price: Scalars['Int'];
  quizUrl?: Maybe<Scalars['String']>;
  runningTime: Scalars['String'];
  seasonData?: Maybe<Season>;
  seasonID: Scalars['String'];
  smsTemplateType?: Maybe<Scalars['String']>;
  subCoverUrl?: Maybe<Scalars['String']>;
  subDescription?: Maybe<Scalars['String']>;
  subHashTag?: Maybe<Scalars['String']>;
  tagIDs: Array<Maybe<Scalars['String']>>;
  timeOfSchedule: Scalars['String'];
  type: Scalars['String'];
  weekOfSchedule: Scalars['Int'];
};

export type B2bClubApplication = {
  __typename?: 'B2bClubApplication';
  afterB2bClubApplicationID?: Maybe<Scalars['String']>;
  b2bClub?: Maybe<B2bClub>;
  b2bClubID: Scalars['String'];
  b2bClubRoleID?: Maybe<Scalars['String']>;
  b2bUser?: Maybe<B2bUser>;
  b2bUserID: Scalars['String'];
  beforeB2bClubApplicationID?: Maybe<Scalars['String']>;
  companionCount: Scalars['Int'];
  confirmedAt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['Int']>;
  iamportUID?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  membershipClosedAt?: Maybe<Scalars['String']>;
  method: Scalars['String'];
  price: Scalars['Int'];
  refundAccountNumber?: Maybe<Scalars['String']>;
  refundApplicatedAt?: Maybe<Scalars['String']>;
  refundBankCode?: Maybe<Scalars['String']>;
  refundBankName?: Maybe<Scalars['String']>;
  refundHolder?: Maybe<Scalars['String']>;
  refundPrice?: Maybe<Scalars['Int']>;
  refundReason?: Maybe<Scalars['String']>;
  refundScore?: Maybe<Scalars['Int']>;
  refundedAt?: Maybe<Scalars['String']>;
  seasonID: Scalars['String'];
  status: Scalars['String'];
  tossCancelRedirectUrl?: Maybe<Scalars['String']>;
  tossPayToken?: Maybe<Scalars['String']>;
  tossRedirectUrl?: Maybe<Scalars['String']>;
  tossRefundNo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  vbankAccountNumber?: Maybe<Scalars['String']>;
  vbankBankCode?: Maybe<Scalars['String']>;
  vbankBankName?: Maybe<Scalars['String']>;
  vbankExpiredAt?: Maybe<Scalars['String']>;
  vbankHolder?: Maybe<Scalars['String']>;
};

export type B2bClubGroup = {
  __typename?: 'B2bClubGroup';
  createdAt: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['String'];
  information?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  notice?: Maybe<Scalars['String']>;
  test_column_1?: Maybe<Scalars['String']>;
  test_column_1_title?: Maybe<Scalars['String']>;
  test_column_2?: Maybe<Scalars['String']>;
  test_column_3?: Maybe<Scalars['String']>;
  test_column_3_title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type B2bClubHistory = {
  __typename?: 'B2bClubHistory';
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  readContentIDs: Array<Maybe<Scalars['String']>>;
  readContents?: Maybe<Array<Maybe<Content>>>;
  sinceSeason: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type B2bCompany = {
  __typename?: 'B2bCompany';
  createdAt: Scalars['String'];
  id: Scalars['String'];
  isClosed: Scalars['Boolean'];
  isPublicB2bBookreviewForInside: Scalars['Boolean'];
  isPublicB2bBookreviewForOutside: Scalars['Boolean'];
  logoUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type B2bEventApplication = {
  __typename?: 'B2bEventApplication';
  b2bEventRoleID?: Maybe<Scalars['String']>;
  b2bUser?: Maybe<B2bUser>;
  b2bUserID: Scalars['String'];
  companionCount: Scalars['Int'];
  confirmedAt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  event?: Maybe<Event>;
  eventID: Scalars['String'];
  iamportUID?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isMember?: Maybe<Scalars['Boolean']>;
  method: Scalars['String'];
  price: Scalars['Int'];
  refundAccountNumber?: Maybe<Scalars['String']>;
  refundApplicatedAt?: Maybe<Scalars['String']>;
  refundBankCode?: Maybe<Scalars['String']>;
  refundBankName?: Maybe<Scalars['String']>;
  refundHolder?: Maybe<Scalars['String']>;
  refundPrice?: Maybe<Scalars['Int']>;
  refundReason?: Maybe<Scalars['String']>;
  refundedAt?: Maybe<Scalars['String']>;
  seasonID: Scalars['String'];
  status: Scalars['String'];
  tossCancelRedirectUrl?: Maybe<Scalars['String']>;
  tossPayToken?: Maybe<Scalars['String']>;
  tossRedirectUrl?: Maybe<Scalars['String']>;
  tossRefundNo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  vbankAccountNumber?: Maybe<Scalars['String']>;
  vbankBankCode?: Maybe<Scalars['String']>;
  vbankBankName?: Maybe<Scalars['String']>;
  vbankExpiredAt?: Maybe<Scalars['String']>;
  vbankHolder?: Maybe<Scalars['String']>;
};

export type B2bMeeting = {
  __typename?: 'B2bMeeting';
  b2bAttendanceCount?: Maybe<Scalars['Int']>;
  b2bClub?: Maybe<B2bClub>;
  b2bClubID: Scalars['String'];
  b2bClubName: Scalars['String'];
  bookreviewDeadline: Scalars['String'];
  contentIDs: Array<Maybe<Scalars['String']>>;
  contents?: Maybe<Array<Maybe<Content>>>;
  endedAt: Scalars['String'];
  id: Scalars['String'];
  notice?: Maybe<Scalars['String']>;
  order: Scalars['Int'];
  place?: Maybe<Place>;
  placeID: Scalars['String'];
  presentNotice?: Maybe<Scalars['String']>;
  presentUrl?: Maybe<Scalars['String']>;
  presenter?: Maybe<B2bUser>;
  presenterID?: Maybe<Scalars['String']>;
  presenterIDs: Array<Maybe<Scalars['String']>>;
  presenters?: Maybe<Array<Maybe<B2bUser>>>;
  roomScheduleIDs: Array<Maybe<Scalars['String']>>;
  roomSchedules?: Maybe<Array<Maybe<RoomSchedule>>>;
  seasonID: Scalars['String'];
  startedAt: Scalars['String'];
  timetable: Array<Maybe<B2bTimetableRow>>;
  topicPages?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type B2bSpaceRental = {
  __typename?: 'B2bSpaceRental';
  b2bUser?: Maybe<B2bUser>;
  b2bUserID: Scalars['String'];
  createdAt: Scalars['String'];
  endedAt: Scalars['String'];
  id: Scalars['String'];
  isAccepted?: Maybe<Scalars['Boolean']>;
  memberCount: Scalars['Int'];
  place?: Maybe<Place>;
  placeID: Scalars['String'];
  reason: Scalars['String'];
  request?: Maybe<Scalars['String']>;
  roomScheduleIDs: Array<Maybe<Scalars['String']>>;
  roomSchedules?: Maybe<Array<Maybe<RoomSchedule>>>;
  smsNotice?: Maybe<Scalars['String']>;
  startedAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type B2bTimetableRow = {
  __typename?: 'B2bTimetableRow';
  startTime: Scalars['String'];
  task: Scalars['String'];
};

export type B2bUser = {
  __typename?: 'B2bUser';
  ads: Array<Maybe<Scalars['String']>>;
  birthday?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  facebook?: Maybe<Scalars['String']>;
  facebookID?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  hasAuthenticatedPhoneNumber: Scalars['Boolean'];
  id: Scalars['String'];
  instagram?: Maybe<Scalars['String']>;
  interests: Array<Maybe<Scalars['String']>>;
  isAgreedToAllMarketing?: Maybe<Scalars['Boolean']>;
  isAgreedToMarketingSms: Scalars['Boolean'];
  isBlocked: Scalars['Boolean'];
  isPublicAge: Scalars['Boolean'];
  isPublicBookreview: Scalars['Boolean'];
  isPublicClubActivity: Scalars['Boolean'];
  isPublicGender: Scalars['Boolean'];
  isPublicProfile?: Maybe<Scalars['Boolean']>;
  kakaoID?: Maybe<Scalars['String']>;
  keywords: Array<Maybe<Scalars['String']>>;
  marketingAgreedAt?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  point: Scalars['Int'];
  profileImageUrl?: Maybe<Scalars['String']>;
  readingVolume?: Maybe<Scalars['Int']>;
  recommender?: Maybe<Scalars['String']>;
  route?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Banner = {
  __typename?: 'Banner';
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isClosed: Scalars['Boolean'];
  linkUrl: Scalars['String'];
  mobileImageUrl: Scalars['String'];
  order: Scalars['Int'];
  pcImageUrl: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type BannersWhereInput = {
  isClosed?: InputMaybe<Scalars['Boolean']>;
};

export type BenefitCompaniesOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BenefitCompaniesWhere>;
};

export type BenefitCompaniesWhere = {
  isClosed?: InputMaybe<Scalars['Boolean']>;
  userID?: InputMaybe<Scalars['String']>;
};

export type BenefitCompany = {
  __typename?: 'BenefitCompany';
  benefit: Scalars['String'];
  categories: Array<Maybe<Scalars['String']>>;
  createdAt: Scalars['String'];
  id: Scalars['String'];
  isClosed: Scalars['Boolean'];
  logoUrl: Scalars['String'];
  manual: Scalars['String'];
  name: Scalars['String'];
  order: Scalars['Int'];
  updatedAt: Scalars['String'];
};

export type Bookreview = {
  __typename?: 'Bookreview';
  club?: Maybe<Club>;
  clubID: Scalars['String'];
  commentCount: Scalars['Int'];
  comments?: Maybe<Array<Maybe<BookreviewComment>>>;
  content?: Maybe<Scalars['String']>;
  contentIDs: Array<Maybe<Scalars['String']>>;
  contents?: Maybe<Array<Maybe<Content>>>;
  createdAt?: Maybe<Scalars['String']>;
  fileUrl?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isPublic: Scalars['Boolean'];
  likeUserIDs: Array<Maybe<Scalars['String']>>;
  meeting?: Maybe<Meeting>;
  order: Scalars['Int'];
  publishedAt?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userID: Scalars['String'];
};

export type BookreviewComment = {
  __typename?: 'BookreviewComment';
  bookreviewID: Scalars['String'];
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  parentID?: Maybe<Scalars['String']>;
  replies?: Maybe<Array<Maybe<BookreviewComment>>>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt: Maybe<Scalars["String"]> | undefined;
  user?: Maybe<User>;
  userID: Scalars['String'];
  likeUserIDs: Array<Scalars['String']>;
  reportUserIDs: Array<Scalars['String']>;
};

export type BookreviewsOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookreviewsWhereInput>;
};

export type BookreviewsWhereInput = {
  clubID?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['String']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type ChangeClubInput = {
  clubRoleID: Scalars['String'];
  nextClubID: Scalars['String'];
};

export type ChangeClubPayload = {
  __typename?: 'ChangeClubPayload';
  clubRole?: Maybe<ClubRole>;
};

export type ChangePasswordOnUserInput = {
  id: Scalars['String'];
  newPassword: Scalars['String'];
  originalPassword: Scalars['String'];
};

export type ChangePasswordOnUserPayload = {
  __typename?: 'ChangePasswordOnUserPayload';
  user?: Maybe<User>;
};

export type Club = {
  __typename?: 'Club';
  applicationDeadline?: Maybe<Scalars['String']>;
  beforeSeasonID?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
  categoryID?: Maybe<Scalars['String']>;
  closedAt?: Maybe<Scalars['String']>;
  clubGroup?: Maybe<ClubGroup>;
  clubGroupID?: Maybe<Scalars['String']>;
  clubHistory?: Maybe<ClubHistory>;
  clubHistoryID: Scalars['String'];
  clubIntroductionCreatedAt?: Maybe<Scalars['String']>;
  clubIntroductionStatus?: Maybe<Scalars['String']>;
  clubIntroductionStatusUpdatedAt?: Maybe<Scalars['String']>;
  clubPosts?: Maybe<Array<Maybe<ClubPost>>>;
  coverUrl?: Maybe<Scalars['String']>;
  curriculum?: Maybe<Scalars['String']>;
  dayOfSchedule: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  endedAt?: Maybe<Scalars['String']>;
  extensionStartedAt?: Maybe<Scalars['String']>;
  firstBookIntro?: Maybe<Scalars['String']>;
  hashTag?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  information?: Maybe<Scalars['String']>;
  isAllowedOutgoing: Scalars['Boolean'];
  isClosed: Scalars['Boolean'];
  leaderDescription?: Maybe<Scalars['String']>;
  leaderIDs: Array<Maybe<Scalars['String']>>;
  leaderImageUrl?: Maybe<Scalars['String']>;
  leaderShare?: Maybe<Scalars['Int']>;
  leaderTitle?: Maybe<Scalars['String']>;
  leaders?: Maybe<Array<Maybe<User>>>;
  maxMemberCount: Scalars['Int'];
  meetings?: Maybe<Array<Maybe<Meeting>>>;
  memberCount: Scalars['Int'];
  minBookreviewLength: Scalars['Int'];
  name: Scalars['String'];
  notice?: Maybe<Scalars['String']>;
  openedAt?: Maybe<Scalars['String']>;
  option?: Maybe<Scalars['String']>;
  options: Array<Maybe<Scalars['String']>>;
  partnerApplicationCount: Scalars['Int'];
  partnerDescription?: Maybe<Scalars['String']>;
  partnerDescriptionTitle?: Maybe<Scalars['String']>;
  partnerIDs: Array<Maybe<Scalars['String']>>;
  partnerImageUrl?: Maybe<Scalars['String']>;
  partnerImageUrlUploadedAt?: Maybe<Scalars['String']>;
  partners?: Maybe<Array<Maybe<User>>>;
  place?: Maybe<Place>;
  placeID: Scalars['String'];
  price: Scalars['Int'];
  quizUrl?: Maybe<Scalars['String']>;
  runningTime: Scalars['String'];
  season: Scalars['String'];
  seasonData?: Maybe<Season>;
  seasonID: Scalars['String'];
  smsTemplateType?: Maybe<Scalars['String']>;
  subCoverUrl?: Maybe<Scalars['String']>;
  subDescription?: Maybe<Scalars['String']>;
  subHashTag?: Maybe<Scalars['String']>;
  tagIDs: Array<Maybe<Scalars['String']>>;
  timeOfSchedule: Scalars['String'];
  type: Scalars['String'];
  weekOfSchedule: Scalars['Int'];
  wishedCount: Scalars['Int'];
};

export type ClubApplication = {
  __typename?: 'ClubApplication';
  afterClubApplicationID?: Maybe<Scalars['String']>;
  beforeClubApplicationID?: Maybe<Scalars['String']>;
  cardName?: Maybe<Scalars['String']>;
  club?: Maybe<Club>;
  clubID: Scalars['String'];
  clubRoleID?: Maybe<Scalars['String']>;
  companionCount: Scalars['Int'];
  confirmedAt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  exchangeableUsedPoint?: Maybe<Scalars['Int']>;
  failReason?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['Int']>;
  iamportUID?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  membershipClosedAt?: Maybe<Scalars['String']>;
  method: Scalars['String'];
  noExchangeableUsedPoint?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  refundAccountNumber?: Maybe<Scalars['String']>;
  refundApplicatedAt?: Maybe<Scalars['String']>;
  refundBankCode?: Maybe<Scalars['String']>;
  refundBankName?: Maybe<Scalars['String']>;
  refundHolder?: Maybe<Scalars['String']>;
  refundPrice?: Maybe<Scalars['Int']>;
  refundReason?: Maybe<Scalars['String']>;
  refundScore?: Maybe<Scalars['Int']>;
  refundedAt?: Maybe<Scalars['String']>;
  refunds?: Maybe<Array<Maybe<Refund>>>;
  season: Scalars['String'];
  seasonID: Scalars['String'];
  status: Scalars['String'];
  tempBookApplication?: Maybe<TempBookApplication>;
  tempCommunityTicket?: Maybe<TempCommunityTicket>;
  tossCancelRedirectUrl?: Maybe<Scalars['String']>;
  tossPayToken?: Maybe<Scalars['String']>;
  tossRedirectUrl?: Maybe<Scalars['String']>;
  tossRefundNo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userID: Scalars['String'];
  vbankAccountNumber?: Maybe<Scalars['String']>;
  vbankBankCode?: Maybe<Scalars['String']>;
  vbankBankName?: Maybe<Scalars['String']>;
  vbankExpiredAt?: Maybe<Scalars['String']>;
  vbankHolder?: Maybe<Scalars['String']>;
};

export type ClubApplicationsWhereInput = {
  clubID?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['String']>;
  seasonID?: InputMaybe<Scalars['String']>;
  secondMeetingStartedAt?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  thirdMeetingStartedAt?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['String']>;
};

export type ClubGroup = {
  __typename?: 'ClubGroup';
  category?: Maybe<Category>;
  categoryID?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['String'];
  information?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  notice?: Maybe<Scalars['String']>;
  test_column_1?: Maybe<Scalars['String']>;
  test_column_1_title?: Maybe<Scalars['String']>;
  test_column_2?: Maybe<Scalars['String']>;
  test_column_3?: Maybe<Scalars['String']>;
  test_column_3_title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type ClubGroupsWhereInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type ClubHistoriesWhereInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type ClubHistory = {
  __typename?: 'ClubHistory';
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  readContentIDs: Array<Maybe<Scalars['String']>>;
  readContents?: Maybe<Array<Maybe<Content>>>;
  sinceSeason: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type ClubPost = {
  __typename?: 'ClubPost';
  clubID: Scalars['String'];
  comments?: Maybe<Array<Maybe<ClubPostComment>>>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  imageUrls: Array<Maybe<Scalars['String']>>;
  isNotice: Scalars['Boolean'];
  likeUserIDs: Array<Maybe<Scalars['String']>>;
  poll?: Maybe<Poll>;
  pollID?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userID: Scalars['String'];
};

export type ClubPostComment = {
  __typename?: 'ClubPostComment';
  clubPostID: Scalars['String'];
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  parentID?: Maybe<Scalars['String']>;
  replies?: Maybe<Array<Maybe<ClubPostComment>>>;
  updatedAt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userID: Scalars['String'];
};

export type ClubPostCommentsWhereInput = {
  clubPostID?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  parentID?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['String']>;
};

export type ClubReview = {
  __typename?: 'ClubReview';
  club?: Maybe<Club>;
  clubGroupID: Scalars['String'];
  clubHistoryID: Scalars['String'];
  clubID: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['String'];
  dummyLikeCount: Scalars['Int'];
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  isClosed: Scalars['Boolean'];
  score?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
  user?: Maybe<User>;
  userID: Scalars['String'];
};

export type ClubReviewsWhereInput = {
  clubGroupID?: InputMaybe<Scalars['String']>;
  clubHistoryID?: InputMaybe<Scalars['String']>;
  clubID?: InputMaybe<Scalars['String']>;
  isClosed?: InputMaybe<Scalars['Boolean']>;
  userID?: InputMaybe<Scalars['String']>;
};

export type ClubRole = {
  __typename?: 'ClubRole';
  club?: Maybe<Club>;
  clubApplication?: Maybe<ClubApplication>;
  clubApplicationID?: Maybe<Scalars['String']>;
  clubID: Scalars['String'];
  createdAt: Scalars['String'];
  experiencedSeasonCount: Scalars['Int'];
  fee?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isFirstSeason?: Maybe<Scalars['Boolean']>;
  isInvited: Scalars['Boolean'];
  partnerAnswer?: Maybe<Scalars['String']>;
  partnerAnswerReason?: Maybe<Scalars['String']>;
  passedQuiz?: Maybe<Scalars['Boolean']>;
  quizPushCount?: Maybe<Scalars['Int']>;
  refundStatus?: Maybe<Scalars['String']>;
  refundedAt?: Maybe<Scalars['String']>;
  replacementPartnerMeetingOrder?: Maybe<Scalars['Int']>;
  respondQuiz?: Maybe<Scalars['Boolean']>;
  role: Scalars['String'];
  season: Scalars['String'];
  seasonData?: Maybe<Season>;
  seasonID: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
  user?: Maybe<User>;
  userID: Scalars['String'];
};

export type ClubRolesWhereInput = {
  clubID?: InputMaybe<Scalars['String']>;
  createdInADay?: InputMaybe<Scalars['String']>;
  includesClosedClubs?: InputMaybe<Scalars['Boolean']>;
  includesRefundedRole?: InputMaybe<Scalars['Boolean']>;
  isOpenPeriodRefundedRole?: InputMaybe<Scalars['Boolean']>;
  isPastSeason?: InputMaybe<Scalars['Boolean']>;
  needsToConfirmSeason?: InputMaybe<Scalars['Boolean']>;
  refundStatuses?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  role?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['String']>;
  seasonID?: InputMaybe<Scalars['String']>;
  seasons?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  userID?: InputMaybe<Scalars['String']>;
};

export type ClubWithTagDatasInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWithTagDatasWhere>;
};

export type ClubWithTagDatasWhere = {
  containsFullClub?: InputMaybe<Scalars['Boolean']>;
  isAppliablePeriod?: InputMaybe<Scalars['String']>;
  isClosed?: InputMaybe<Scalars['Boolean']>;
  isOpenClub?: InputMaybe<Scalars['Boolean']>;
  isTopAllMostFullClubs?: InputMaybe<Scalars['Boolean']>;
  mostFullClubConditionPercent?: InputMaybe<Scalars['Int']>;
  randomSeed?: InputMaybe<Scalars['Float']>;
  seasonID?: InputMaybe<Scalars['String']>;
  tagIDs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ClubsWhereInput = {
  categoryIDs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clubGroupID?: InputMaybe<Scalars['String']>;
  clubHistoryID?: InputMaybe<Scalars['String']>;
  clubIntroductionStatus?: InputMaybe<Scalars['String']>;
  clubStatus?: InputMaybe<Scalars['String']>;
  days?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  extensionStartedAt?: InputMaybe<Scalars['String']>;
  firstMeetingStartedDay?: InputMaybe<Scalars['String']>;
  hasClosedAt?: InputMaybe<Scalars['Boolean']>;
  isAppliablePeriod?: InputMaybe<Scalars['String']>;
  isClosed?: InputMaybe<Scalars['Boolean']>;
  isFullMemberCount?: InputMaybe<Scalars['Boolean']>;
  isOpenClub?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  noHasPartner?: InputMaybe<Scalars['Boolean']>;
  option?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  partnerIDs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  placeIDs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  prices?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  season?: InputMaybe<Scalars['String']>;
  seasonID?: InputMaybe<Scalars['String']>;
  tagID?: InputMaybe<Scalars['String']>;
  tagIDs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  underMemberCount?: InputMaybe<Scalars['Int']>;
  weeks?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ClubsWithTag = {
  __typename?: 'ClubsWithTag';
  clubs?: Maybe<Array<Maybe<Club>>>;
  tag?: Maybe<Tag>;
};

export type ClubsWithTagWhereInput = {
  isClosed: Scalars['Boolean'];
  season?: InputMaybe<Scalars['String']>;
  seasonID?: InputMaybe<Scalars['String']>;
  tagID: Scalars['String'];
};

export type ConfirmPhoneNumberInput = {
  countryCode: Scalars['String'];
  id: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type ConfirmPhoneNumberPayload = {
  __typename?: 'ConfirmPhoneNumberPayload';
  user?: Maybe<User>;
};

export type Content = {
  __typename?: 'Content';
  author?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type Coupon = {
  __typename?: 'Coupon';
  benefitCompany: BenefitCompany;
  benefitCompanyID: Scalars['String'];
  code: Scalars['String'];
  expiredAt: Scalars['String'];
  id: Scalars['String'];
  isUsed: Scalars['String'];
  seasonID?: Maybe<Scalars['String']>;
  userID?: Maybe<Scalars['String']>;
};

export type CouponsOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CouponsOptionsWhere>;
};

export type CouponsOptionsWhere = {
  benefitCompanyID?: InputMaybe<Scalars['String']>;
  isExpired?: InputMaybe<Scalars['Boolean']>;
  seasonID?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['String']>;
};

export type CreateBookreviewCommentInput = {
  bookreviewID: Scalars['String'];
  content: Scalars['String'];
  parentID?: InputMaybe<Scalars['String']>;
  userID: Scalars['String'];
};

export type CreateBookreviewCommentPayout = {
  __typename?: 'CreateBookreviewCommentPayout';
  bookreviewComment?: Maybe<BookreviewComment>;
};

export type CreateBookreviewInput = {
  clubID: Scalars['String'];
  content?: InputMaybe<Scalars['String']>;
  fileUrl?: InputMaybe<Scalars['String']>;
  isPublic: Scalars['Boolean'];
  meetingID?: InputMaybe<Scalars['String']>;
  order: Scalars['Int'];
  publishedAt?: InputMaybe<Scalars['String']>;
  status: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  userID: Scalars['String'];
};

export type CreateBookreviewPayload = {
  __typename?: 'CreateBookreviewPayload';
  bookreview?: Maybe<Bookreview>;
};

export type CreateClubReviewInput = {
  clubGroupID: Scalars['String'];
  clubHistoryID: Scalars['String'];
  clubID: Scalars['String'];
  content: Scalars['String'];
  dummyLikeCount?: InputMaybe<Scalars['Int']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  isClosed: Scalars['Boolean'];
  score?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  userID: Scalars['String'];
};

export type CreateClubReviewPayload = {
  __typename?: 'CreateClubReviewPayload';
  clubReview?: Maybe<ClubReview>;
};

export type CreateDeviceInput = {
  isAgreedToActivityPush: Scalars['Boolean'];
  isAgreedToClubPush: Scalars['Boolean'];
  isAgreedToMarketingPush: Scalars['Boolean'];
  token: Scalars['String'];
  userID: Scalars['String'];
};

export type CreatePushNotificationInput = {
  body: Scalars['String'];
  category: Scalars['String'];
  data?: InputMaybe<Scalars['String']>;
  deviceID: Scalars['String'];
  status: Scalars['String'];
  templateCode?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type CreateSpaceRentalInput = {
  endedAt: Scalars['String'];
  memberCount: Scalars['Int'];
  placeID: Scalars['String'];
  reason: Scalars['String'];
  request?: InputMaybe<Scalars['String']>;
  startedAt: Scalars['String'];
  userID: Scalars['String'];
};

export type CreateSpaceRentalPayload = {
  __typename?: 'CreateSpaceRentalPayload';
  spaceRental?: Maybe<SpaceRental>;
};

export type CreateUcmTestResultInput = {
  answers: Array<InputMaybe<Scalars['String']>>;
  finishedAt: Scalars['String'];
  tagID?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['String']>;
};

export type CreateUcmTestResultPayload = {
  __typename?: 'CreateUcmTestResultPayload';
  ucmTestResult?: Maybe<UcmTestResult>;
};

export type CreateUserInput = {
  ads?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  appleID?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['String']>;
  countryCode: Scalars['String'];
  email: Scalars['String'];
  facebookID?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  interests?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isAgreedToAllMarketing: Scalars['Boolean'];
  isAgreedToMarketingSms: Scalars['Boolean'];
  isPublicAge?: InputMaybe<Scalars['Boolean']>;
  isPublicBookreview?: InputMaybe<Scalars['Boolean']>;
  isPublicClubActivity?: InputMaybe<Scalars['Boolean']>;
  isPublicGender?: InputMaybe<Scalars['Boolean']>;
  kakaoID?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  readingVolume?: InputMaybe<Scalars['Int']>;
  recommender?: InputMaybe<Scalars['String']>;
  route?: InputMaybe<Scalars['String']>;
};

export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type CreateWishClubInput = {
  clubID: Scalars['String'];
  season?: InputMaybe<Scalars['String']>;
  seasonID?: InputMaybe<Scalars['String']>;
  userID: Scalars['String'];
};

export type CreateWishClubPayload = {
  __typename?: 'CreateWishClubPayload';
  wishClub?: Maybe<WishClub>;
};

export type Device = {
  __typename?: 'Device';
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isAgreedToActivityPush: Scalars['Boolean'];
  isAgreedToClubPush: Scalars['Boolean'];
  isAgreedToMarketingPush: Scalars['Boolean'];
  token: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userID: Scalars['String'];
};

export type DevicesWhereInput = {
  id?: InputMaybe<Scalars['String']>;
  isAgreedToActivityPush?: InputMaybe<Scalars['Boolean']>;
  isAgreedToClubPush?: InputMaybe<Scalars['Boolean']>;
  isAgreedToMarketingPush?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['String']>;
};

export type DisplayOrder = {
  __typename?: 'DisplayOrder';
  id: Scalars['String'];
  isDisplayed: Scalars['Boolean'];
  itemID: Scalars['String'];
  order: Scalars['Int'];
  type: Scalars['String'];
};

export type DisplayOrdersWhereInput = {
  isDisplayed?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Event = {
  __typename?: 'Event';
  canApplyNotMember?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endedAt?: Maybe<Scalars['String']>;
  hostDescription?: Maybe<Scalars['String']>;
  hostIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  hostImageUrl?: Maybe<Scalars['String']>;
  hostName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  informations?: Maybe<Array<Maybe<Information>>>;
  introduction?: Maybe<Scalars['String']>;
  isAppliable?: Maybe<Scalars['Boolean']>;
  isClosed?: Maybe<Scalars['Boolean']>;
  isImportant?: Maybe<Scalars['Boolean']>;
  isWide?: Maybe<Scalars['Boolean']>;
  maxCompanionCount?: Maybe<Scalars['Int']>;
  maxMemberCount?: Maybe<Scalars['Int']>;
  memberCount?: Maybe<Scalars['Int']>;
  mobileContent?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notice?: Maybe<Scalars['String']>;
  openStartedAt?: Maybe<Scalars['String']>;
  place?: Maybe<Place>;
  placeID?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  priceForNotMember?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['String']>;
  seasonID?: Maybe<Scalars['String']>;
  smsNotice?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['String']>;
  targetDescription?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  timetable?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  webContent?: Maybe<Scalars['String']>;
};

export type EventApplication = {
  __typename?: 'EventApplication';
  companionCount: Scalars['Int'];
  companionNames?: Maybe<Scalars['String']>;
  confirmedAt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  event?: Maybe<Event>;
  eventID: Scalars['String'];
  eventRoleID?: Maybe<Scalars['String']>;
  exchangeableUsedPoint: Scalars['Int'];
  iamportUID?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isMember?: Maybe<Scalars['Boolean']>;
  method: Scalars['String'];
  noExchangeableUsedPoint: Scalars['Int'];
  price: Scalars['Int'];
  refundAccountNumber?: Maybe<Scalars['String']>;
  refundApplicatedAt?: Maybe<Scalars['String']>;
  refundBankCode?: Maybe<Scalars['String']>;
  refundBankName?: Maybe<Scalars['String']>;
  refundExchangeableUsedPoint?: Maybe<Scalars['Int']>;
  refundHolder?: Maybe<Scalars['String']>;
  refundNoExchangeableUsedPoint?: Maybe<Scalars['Int']>;
  refundPrice?: Maybe<Scalars['Int']>;
  refundReason?: Maybe<Scalars['String']>;
  refundedAt?: Maybe<Scalars['String']>;
  season: Scalars['String'];
  seasonID: Scalars['String'];
  status: Scalars['String'];
  tossCancelRedirectUrl?: Maybe<Scalars['String']>;
  tossPayToken?: Maybe<Scalars['String']>;
  tossRedirectUrl?: Maybe<Scalars['String']>;
  tossRefundNo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userID: Scalars['String'];
  vbankAccountNumber?: Maybe<Scalars['String']>;
  vbankBankCode?: Maybe<Scalars['String']>;
  vbankBankName?: Maybe<Scalars['String']>;
  vbankExpiredAt?: Maybe<Scalars['String']>;
  vbankHolder?: Maybe<Scalars['String']>;
};

export type EventApplicationsWhereInput = {
  eventID?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['String']>;
  seasonID?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['String']>;
};

export type EventRole = {
  __typename?: 'EventRole';
  companionCount: Scalars['Int'];
  createdAt?: Maybe<Scalars['String']>;
  event?: Maybe<Event>;
  eventApplication?: Maybe<EventApplication>;
  eventApplicationID: Scalars['String'];
  eventID: Scalars['String'];
  id: Scalars['String'];
  isMember?: Maybe<Scalars['Boolean']>;
  refundStatus?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  season: Scalars['String'];
  seasonID: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userID: Scalars['String'];
};

export type EventRolesWhereInput = {
  eventID?: InputMaybe<Scalars['String']>;
  includesRefundedRole?: InputMaybe<Scalars['Boolean']>;
  season?: InputMaybe<Scalars['String']>;
  seasonID?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['String']>;
};

export type EventsWhereInput = {
  isAppliable?: InputMaybe<Scalars['Boolean']>;
  isClosed?: InputMaybe<Scalars['Boolean']>;
  isImportant?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['String']>;
  seasonID?: InputMaybe<Scalars['String']>;
  startedDay?: InputMaybe<Scalars['String']>;
};

export type ExtraNotice = {
  __typename?: 'ExtraNotice';
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  informations?: Maybe<Array<Maybe<TypeInformation>>>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Faq = {
  __typename?: 'Faq';
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isClosed?: Maybe<Scalars['Boolean']>;
  order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type FaqsWhereInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type InactiveUser = {
  __typename?: 'InactiveUser';
  ads: Array<Maybe<Scalars['String']>>;
  appleID?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  countryCode: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  facebook?: Maybe<Scalars['String']>;
  facebookID?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  hasAuthenticatedPhoneNumber: Scalars['Boolean'];
  id: Scalars['String'];
  instagram?: Maybe<Scalars['String']>;
  interests: Array<Maybe<Scalars['String']>>;
  isAgreedToAllMarketing?: Maybe<Scalars['Boolean']>;
  isAgreedToMarketingSms: Scalars['Boolean'];
  isBlocked: Scalars['Boolean'];
  isPublicAge: Scalars['Boolean'];
  isPublicBookreview: Scalars['Boolean'];
  isPublicClubActivity: Scalars['Boolean'];
  isPublicGender: Scalars['Boolean'];
  isPublicProfile?: Maybe<Scalars['Boolean']>;
  kakaoID?: Maybe<Scalars['String']>;
  keywords: Array<Maybe<Scalars['String']>>;
  marketingAgreedAt?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  noExchangeablePoint: Scalars['Int'];
  password?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  point: Scalars['Int'];
  profileImageUrl?: Maybe<Scalars['String']>;
  readingVolume?: Maybe<Scalars['Int']>;
  recentLoginedAt?: Maybe<Scalars['String']>;
  recommender?: Maybe<Scalars['String']>;
  route?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type InactiveUsersWhereInput = {
  beforeMarketingAgreedAt?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  isAgreedToMarketingSms?: InputMaybe<Scalars['Boolean']>;
  minRecentLogineAt?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type Information = {
  __typename?: 'Information';
  content?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type InitiateCheckoutInput = {
  contentID?: InputMaybe<Scalars['String']>;
  eventID?: InputMaybe<Scalars['String']>;
  eventSourceUrl?: InputMaybe<Scalars['String']>;
  fbc?: InputMaybe<Scalars['String']>;
  fbp?: InputMaybe<Scalars['String']>;
  pixelIDs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['Int']>;
};

export type IssueCouponsInput = {
  benefitCompanyID: Scalars['String'];
  onGoingSeasons?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  userID: Scalars['String'];
};

export type Leader = {
  __typename?: 'Leader';
  account: Scalars['String'];
  bank: Scalars['String'];
  clubs?: Maybe<Array<Maybe<Club>>>;
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  socialSecurityNumber: Scalars['String'];
  taxType: Scalars['String'];
  updatedAt: Scalars['String'];
  user?: Maybe<User>;
  userID: Scalars['String'];
};

export type LeadersWhereInput = {
  account?: InputMaybe<Scalars['String']>;
  bank?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  socialSecurityNumber?: InputMaybe<Scalars['String']>;
  taxType?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['String']>;
};

export type LinkEmailOnUserInput = {
  id: Scalars['String'];
  password: Scalars['String'];
};

export type LinkEmailOnUserPayload = {
  __typename?: 'LinkEmailOnUserPayload';
  user?: Maybe<User>;
};

export type LinkFacebookOnUserInput = {
  accessToken: Scalars['String'];
  id: Scalars['String'];
};

export type LinkFacebookOnUserPayload = {
  __typename?: 'LinkFacebookOnUserPayload';
  user?: Maybe<User>;
};

export type Meeting = {
  __typename?: 'Meeting';
  attendanceCount?: Maybe<Scalars['Int']>;
  bookreviewDeadline: Scalars['String'];
  club?: Maybe<Club>;
  clubID: Scalars['String'];
  clubName: Scalars['String'];
  contentIDs: Array<Maybe<Scalars['String']>>;
  contents?: Maybe<Array<Maybe<Content>>>;
  endedAt: Scalars['String'];
  id: Scalars['String'];
  isBookreviewRequired?: Maybe<Scalars['Boolean']>;
  notice?: Maybe<Scalars['String']>;
  onlinePlace?: Maybe<OnlinePlace>;
  onlinePlaceID?: Maybe<Scalars['String']>;
  order: Scalars['Int'];
  partnerClubRoles?: Maybe<Array<Maybe<ClubRole>>>;
  place?: Maybe<Place>;
  placeID: Scalars['String'];
  presentNotice?: Maybe<Scalars['String']>;
  presentUrl?: Maybe<Scalars['String']>;
  presenter?: Maybe<User>;
  presenterID?: Maybe<Scalars['String']>;
  presenterIDs: Array<Maybe<Scalars['String']>>;
  presenters?: Maybe<Array<Maybe<User>>>;
  roomScheduleIDs: Array<Maybe<Scalars['String']>>;
  roomSchedules?: Maybe<Array<Maybe<RoomSchedule>>>;
  season: Scalars['String'];
  seasonID: Scalars['String'];
  startedAt: Scalars['String'];
  status: Scalars['String'];
  timetable: Array<Maybe<TimetableRow>>;
  topicPageStatus: Scalars['String'];
  topicPages?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MeetingsWhereInput = {
  bookreviewDeadline?: InputMaybe<Scalars['String']>;
  categoryIDs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clubID?: InputMaybe<Scalars['String']>;
  days?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hasClosedAt?: InputMaybe<Scalars['Boolean']>;
  hasContents?: InputMaybe<Scalars['Boolean']>;
  hasOpenedAt?: InputMaybe<Scalars['Boolean']>;
  isAllowedOutgoing?: InputMaybe<Scalars['Boolean']>;
  isClosed?: InputMaybe<Scalars['Boolean']>;
  isOpened?: InputMaybe<Scalars['Boolean']>;
  isbn?: InputMaybe<Scalars['String']>;
  meetingPlaceIDs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  minStartedAt?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  order?: InputMaybe<Scalars['Int']>;
  period?: InputMaybe<InputPeriod>;
  placeID?: InputMaybe<Scalars['String']>;
  placeIDs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  searchByBook?: InputMaybe<Scalars['Boolean']>;
  searchKeyword?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['String']>;
  seasonID?: InputMaybe<Scalars['String']>;
  startedAt?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MemberInfo = {
  __typename?: 'MemberInfo';
  experience0?: Maybe<Scalars['Int']>;
  experience1?: Maybe<Scalars['Int']>;
  experience2?: Maybe<Scalars['Int']>;
  experience3?: Maybe<Scalars['Int']>;
  experience4?: Maybe<Scalars['Int']>;
  experience5up?: Maybe<Scalars['Int']>;
  experienceAvg?: Maybe<Scalars['Float']>;
  female?: Maybe<Scalars['Int']>;
  fifties?: Maybe<Scalars['Int']>;
  forties?: Maybe<Scalars['Int']>;
  isNotPublicAge?: Maybe<Scalars['Int']>;
  male?: Maybe<Scalars['Int']>;
  memberCount?: Maybe<Scalars['Int']>;
  olders?: Maybe<Scalars['Int']>;
  other?: Maybe<Scalars['Int']>;
  readingVolume0?: Maybe<Scalars['Int']>;
  readingVolume1?: Maybe<Scalars['Int']>;
  readingVolume2?: Maybe<Scalars['Int']>;
  readingVolume3?: Maybe<Scalars['Int']>;
  readingVolume4?: Maybe<Scalars['Int']>;
  readingVolume5up?: Maybe<Scalars['Int']>;
  thirties?: Maybe<Scalars['Int']>;
  twenties?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addToCart: Scalars['Boolean'];
  cancelUser?: Maybe<Scalars['Boolean']>;
  changeClub?: Maybe<ChangeClubPayload>;
  changePasswordOnUser?: Maybe<ChangePasswordOnUserPayload>;
  changeStatusEventApplicationWhenWaitingPayment?: Maybe<UpdateEventApplicationPayload>;
  confirmPartnerApplication?: Maybe<PartnerApplication>;
  confirmPhoneNumber?: Maybe<ConfirmPhoneNumberPayload>;
  createBookreview: CreateBookreviewPayload;
  createBookreviewComment?: Maybe<CreateBookreviewCommentPayout>;
  createClubReview?: Maybe<CreateClubReviewPayload>;
  createDevice?: Maybe<Device>;
  createPushNotification?: Maybe<PushNotification>;
  createSpaceRental?: Maybe<CreateSpaceRentalPayload>;
  createUcmTestResult?: Maybe<CreateUcmTestResultPayload>;
  createUser?: Maybe<CreateUserPayload>;
  createWishClub?: Maybe<CreateWishClubPayload>;
  deleteBookreview: Scalars['Boolean'];
  deleteBookreviewComment?: Maybe<Scalars['Boolean']>;
  deleteClubApplication?: Maybe<Scalars['Boolean']>;
  deleteDevice?: Maybe<Scalars['Boolean']>;
  deletePushNotification?: Maybe<Scalars['Boolean']>;
  deleteWishClub: Scalars['Boolean'];
  generatePreSignedUrl?: Maybe<Scalars['String']>;
  initiateCheckout: Scalars['Boolean'];
  issueCoupons: Scalars['Boolean'];
  linkEmailOnUser?: Maybe<LinkEmailOnUserPayload>;
  linkFacebookOnUser?: Maybe<LinkFacebookOnUserPayload>;
  outgoingCancel?: Maybe<MutationResult>;
  outgoingRequest?: Maybe<MutationResult>;
  pageView: Scalars['Boolean'];
  purchase: Scalars['Boolean'];
  refundEvent?: Maybe<RefundEventPayload>;
  sendPushNotifications?: Maybe<Array<Maybe<PushNotification>>>;
  toggleLikeOnBookreviewTemp?: Maybe<ToggleLikeOnBookreviewPayload>;
  unlinkFacebookOnUser?: Maybe<Scalars['Boolean']>;
  updateBookreview: UpdateBookreviewPayload;
  updateBookreviewComment?: Maybe<UpdateBookreviewCommentPayout>;
  updateClubApplication?: Maybe<UpdateClubApplicationPayload>;
  updateClubReview?: Maybe<UpdateClubReviewPayload>;
  updateDevice?: Maybe<Device>;
  updateFailClubApplication?: Maybe<UpdateClubApplicationPayload>;
  updatePartnerApplication?: Maybe<UpdatePartnerApplicationPayload>;
  updatePushNotification?: Maybe<PushNotification>;
  updateRecentLoginedAt?: Maybe<Scalars['Boolean']>;
  updateUser?: Maybe<UpdateUserPayload>;
  updateVbankOnClubApplication?: Maybe<ClubApplication>;
  viewContent: Scalars['Boolean'];
};

export type MutationAddToCartArgs = {
  input: AddToCartInput;
};

export type MutationCancelUserArgs = {
  id: Scalars['String'];
};

export type MutationChangeClubArgs = {
  input: ChangeClubInput;
};

export type MutationChangePasswordOnUserArgs = {
  input: ChangePasswordOnUserInput;
};

export type MutationChangeStatusEventApplicationWhenWaitingPaymentArgs = {
  input: UpdateEventApplicationInput;
};

export type MutationConfirmPartnerApplicationArgs = {
  id: Scalars['String'];
};

export type MutationConfirmPhoneNumberArgs = {
  input: ConfirmPhoneNumberInput;
};

export type MutationCreateBookreviewArgs = {
  input: CreateBookreviewInput;
  isForced?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateBookreviewCommentArgs = {
  input: CreateBookreviewCommentInput;
};

export type MutationCreateClubReviewArgs = {
  input: CreateClubReviewInput;
};

export type MutationCreateDeviceArgs = {
  input: CreateDeviceInput;
};

export type MutationCreatePushNotificationArgs = {
  input?: InputMaybe<CreatePushNotificationInput>;
};

export type MutationCreateSpaceRentalArgs = {
  input: CreateSpaceRentalInput;
};

export type MutationCreateUcmTestResultArgs = {
  input: CreateUcmTestResultInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationCreateWishClubArgs = {
  input: CreateWishClubInput;
};

export type MutationDeleteBookreviewArgs = {
  id: Scalars['String'];
};

export type MutationDeleteBookreviewCommentArgs = {
  id: Scalars['String'];
};

export type MutationDeleteClubApplicationArgs = {
  id: Scalars['String'];
};

export type MutationDeleteDeviceArgs = {
  id: Scalars['String'];
};

export type MutationDeletePushNotificationArgs = {
  id: Scalars['String'];
};

export type MutationDeleteWishClubArgs = {
  clubID: Scalars['String'];
  userID: Scalars['String'];
};

export type MutationGeneratePreSignedUrlArgs = {
  fileName: Scalars['String'];
};

export type MutationInitiateCheckoutArgs = {
  input: InitiateCheckoutInput;
};

export type MutationIssueCouponsArgs = {
  input: IssueCouponsInput;
};

export type MutationLinkEmailOnUserArgs = {
  input: LinkEmailOnUserInput;
};

export type MutationLinkFacebookOnUserArgs = {
  input: LinkFacebookOnUserInput;
};

export type MutationOutgoingCancelArgs = {
  input: OutgoingCancelInput;
};

export type MutationOutgoingRequestArgs = {
  input: OutgoingRequestInput;
};

export type MutationPageViewArgs = {
  input: PageViewInput;
};

export type MutationPurchaseArgs = {
  input: PurchaseInput;
};

export type MutationRefundEventArgs = {
  input: RefundEventInput;
};

export type MutationSendPushNotificationsArgs = {
  input?: InputMaybe<SendPushNotificationsInput>;
};

export type MutationToggleLikeOnBookreviewTempArgs = {
  id: Scalars['String'];
  userID: Scalars['String'];
};

export type MutationUnlinkFacebookOnUserArgs = {
  id: Scalars['String'];
};

export type MutationUpdateBookreviewArgs = {
  input: UpdateBookreviewInput;
  isForced?: InputMaybe<Scalars['Boolean']>;
};

export type MutationUpdateBookreviewCommentArgs = {
  input: UpdateBookreviewCommentInput;
};

export type MutationUpdateClubApplicationArgs = {
  input: UpdateClubApplicationInput;
};

export type MutationUpdateClubReviewArgs = {
  input: UpdateClubReviewInput;
};

export type MutationUpdateDeviceArgs = {
  input: UpdateDeviceInput;
};

export type MutationUpdateFailClubApplicationArgs = {
  input: UpdateClubApplicationInput;
};

export type MutationUpdatePartnerApplicationArgs = {
  input: UpdatePartnerApplicationInput;
};

export type MutationUpdatePushNotificationArgs = {
  input?: InputMaybe<UpdatePushNotificationInput>;
};

export type MutationUpdateRecentLoginedAtArgs = {
  id: Scalars['String'];
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
  isForced?: InputMaybe<Scalars['Boolean']>;
};

export type MutationUpdateVbankOnClubApplicationArgs = {
  id: Scalars['String'];
};

export type MutationViewContentArgs = {
  input: ViewContentInput;
};

export type MutationResult = {
  __typename?: 'MutationResult';
  code: Scalars['String'];
  msg: Scalars['String'];
};

export type Notice = {
  __typename?: 'Notice';
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isClosed?: Maybe<Scalars['Boolean']>;
  order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type OnlinePlace = {
  __typename?: 'OnlinePlace';
  id: Scalars['String'];
  information?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type OutgoingCancelInput = {
  meetingId: Scalars['String'];
  userId: Scalars['String'];
};

export type OutgoingRequestInput = {
  meetingId: Scalars['String'];
  userId: Scalars['String'];
};

export type OutgoingVoucher = {
  __typename?: 'OutgoingVoucher';
  expiredAt: Scalars['String'];
  id: Scalars['String'];
  state: Scalars['String'];
};

export type PageViewInput = {
  eventID?: InputMaybe<Scalars['String']>;
  eventSourceUrl?: InputMaybe<Scalars['String']>;
  fbc?: InputMaybe<Scalars['String']>;
  fbp?: InputMaybe<Scalars['String']>;
  pixelIDs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PartnerApplication = {
  __typename?: 'PartnerApplication';
  assignedClub?: Maybe<Club>;
  assignedClubID?: Maybe<Scalars['String']>;
  confirmedAt?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  id: Scalars['String'];
  rank: Scalars['Int'];
  score: Scalars['Int'];
  season: Scalars['String'];
  seasonID: Scalars['String'];
  selectedClubIDs: Array<Maybe<Scalars['String']>>;
  selectedClubs?: Maybe<Array<Maybe<Club>>>;
  selectedClubsReason: Array<Maybe<Scalars['String']>>;
  updatedAt: Scalars['String'];
  user?: Maybe<User>;
  userID: Scalars['String'];
};

export type PartnerApplicationsWhereInput = {
  rank?: InputMaybe<Scalars['Int']>;
  season?: InputMaybe<Scalars['String']>;
  seasonID?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['String']>;
};

export type PinNumber = {
  __typename?: 'PinNumber';
  clientName?: Maybe<Scalars['String']>;
  club?: Maybe<Club>;
  clubID?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  pinNumber: Scalars['String'];
  price: Scalars['Int'];
  seasonID?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userID?: Maybe<Scalars['String']>;
};

export type PinNumbersWhereInput = {
  clientName?: InputMaybe<Scalars['String']>;
  clubID?: InputMaybe<Scalars['String']>;
  pinNumber?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  seasonID?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['String']>;
};

export type Place = {
  __typename?: 'Place';
  address?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  mapUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type PointHistoriesWhereInput = {
  category?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['String']>;
};

export type PointHistory = {
  __typename?: 'PointHistory';
  admin?: Maybe<User>;
  adminID: Scalars['String'];
  amount: Scalars['Int'];
  category: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['String'];
  noExchangeableAmount: Scalars['Int'];
  reason: Scalars['String'];
  seasonID?: Maybe<Scalars['String']>;
  signedAt: Scalars['String'];
  subCategory: Scalars['String'];
  updatedAt: Scalars['String'];
  user?: Maybe<User>;
  userID: Scalars['String'];
};

export type Policy = {
  __typename?: 'Policy';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type Poll = {
  __typename?: 'Poll';
  clubID: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  endedAt: Scalars['String'];
  id: Scalars['String'];
  isAnonymous: Scalars['Boolean'];
  isMultipleChoice: Scalars['Boolean'];
  optionIDs: Array<Maybe<Scalars['String']>>;
  pollOptions?: Maybe<Array<Maybe<PollOption>>>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type PollOption = {
  __typename?: 'PollOption';
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  respondUserIDs: Array<Maybe<Scalars['String']>>;
  respondUsers?: Maybe<Array<Maybe<User>>>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  buttonDescription?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
  buttonUrl?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  createdAt: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isClosed: Scalars['Boolean'];
  isPopular: Scalars['Boolean'];
  isShowMainPage: Scalars['Boolean'];
  thumbnailUrl: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
  viewCount: Scalars['Int'];
};

export type PostsWhereInput = {
  category?: InputMaybe<Scalars['String']>;
  isPopular?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PurchaseInput = {
  contentID?: InputMaybe<Scalars['String']>;
  eventID?: InputMaybe<Scalars['String']>;
  eventSourceUrl?: InputMaybe<Scalars['String']>;
  fbc?: InputMaybe<Scalars['String']>;
  fbp?: InputMaybe<Scalars['String']>;
  pixelIDs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['Int']>;
};

export type PushNotification = {
  __typename?: 'PushNotification';
  body: Scalars['String'];
  category: Scalars['String'];
  createdAt: Scalars['String'];
  data?: Maybe<Scalars['String']>;
  device?: Maybe<Device>;
  deviceID: Scalars['String'];
  id: Scalars['String'];
  status: Scalars['String'];
  templateCode?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PushNotificationPayload = {
  bookreviewCommentID?: InputMaybe<Scalars['String']>;
  bookreviewID?: InputMaybe<Scalars['String']>;
  bookreviewTitle?: InputMaybe<Scalars['String']>;
  clubID?: InputMaybe<Scalars['String']>;
  clubName?: InputMaybe<Scalars['String']>;
  clubPostCommentID?: InputMaybe<Scalars['String']>;
  clubPostID?: InputMaybe<Scalars['String']>;
  clubRoleID?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  detailPeriod?: InputMaybe<Scalars['String']>;
  meetingID?: InputMaybe<Scalars['String']>;
  replyText?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  userName?: InputMaybe<Scalars['String']>;
};

export type PushNotificationsWhereInput = {
  category?: InputMaybe<Scalars['String']>;
  deviceID?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  templateCode?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  banners: Array<Maybe<Banner>>;
  benefitCompanies?: Maybe<Array<Maybe<BenefitCompany>>>;
  benefitCompany?: Maybe<BenefitCompany>;
  bookreview?: Maybe<Bookreview>;
  bookreviewByUserIDAndMeetingID?: Maybe<Bookreview>;
  bookreviewComments?: Maybe<Array<Maybe<BookreviewComment>>>;
  bookreviewsTemp: Array<Maybe<Bookreview>>;
  canExtendClub?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<Category>>>;
  category?: Maybe<Category>;
  checkAvailablePhoneNumber?: Maybe<Scalars['Boolean']>;
  club?: Maybe<Club>;
  clubApplication?: Maybe<ClubApplication>;
  clubApplications?: Maybe<Array<Maybe<ClubApplication>>>;
  clubGroup?: Maybe<ClubGroup>;
  clubGroups?: Maybe<Array<Maybe<ClubGroup>>>;
  clubHistories?: Maybe<Array<Maybe<ClubHistory>>>;
  clubHistory?: Maybe<ClubHistory>;
  clubPostComment?: Maybe<ClubPostComment>;
  clubPostComments?: Maybe<Array<Maybe<ClubPostComment>>>;
  clubReview?: Maybe<ClubReview>;
  clubReviews?: Maybe<Array<Maybe<ClubReview>>>;
  clubRole?: Maybe<ClubRole>;
  clubRoles?: Maybe<Array<Maybe<ClubRole>>>;
  clubWithTagDatas?: Maybe<Array<Maybe<ClubsWithTag>>>;
  clubs?: Maybe<Array<Maybe<Club>>>;
  clubsCount?: Maybe<Scalars['Int']>;
  clubsWithTag?: Maybe<ClubsWithTag>;
  coupons: Array<Maybe<Coupon>>;
  currentTime?: Maybe<Scalars['String']>;
  device?: Maybe<Device>;
  devices?: Maybe<Array<Maybe<Device>>>;
  displayOrder?: Maybe<DisplayOrder>;
  displayOrders?: Maybe<Array<Maybe<DisplayOrder>>>;
  event?: Maybe<Event>;
  eventApplication?: Maybe<EventApplication>;
  eventApplications?: Maybe<Array<Maybe<EventApplication>>>;
  eventRole?: Maybe<EventRole>;
  eventRoles?: Maybe<Array<Maybe<EventRole>>>;
  events?: Maybe<Array<Maybe<Event>>>;
  extraNotice?: Maybe<ExtraNotice>;
  extraNotices?: Maybe<Array<Maybe<ExtraNotice>>>;
  faq?: Maybe<Faq>;
  faqs?: Maybe<Array<Maybe<Faq>>>;
  findEmail?: Maybe<Scalars['Boolean']>;
  getAppleID?: Maybe<Scalars['String']>;
  hasExperienceEvent?: Maybe<Scalars['Boolean']>;
  hasExperiencedSeason: Scalars['Boolean'];
  hasIssueableCoupon: Scalars['Boolean'];
  hasMembership?: Maybe<Scalars['Boolean']>;
  hasMembershipByClubID?: Maybe<Scalars['Boolean']>;
  hasPaidClubApplication?: Maybe<Scalars['Boolean']>;
  hasTicket?: Maybe<Scalars['Boolean']>;
  inactiveUsers?: Maybe<Array<Maybe<InactiveUser>>>;
  infoDatasOfMainpage: InfoDatasOfMainpagePayload;
  isAppliableEvent?: Maybe<Scalars['Boolean']>;
  isAppliablePartner: Scalars['Boolean'];
  isAttended: Scalars['Boolean'];
  isKTMembership?: Maybe<Scalars['Boolean']>;
  isLastMeetingOver: Scalars['Boolean'];
  isNewbie?: Maybe<Scalars['Boolean']>;
  isVaildPinNumber?: Maybe<Scalars['Boolean']>;
  issuedCoupons: Array<Maybe<Coupon>>;
  lastMeetingOverUsers?: Maybe<Array<Maybe<User>>>;
  leader?: Maybe<Leader>;
  leaders?: Maybe<Array<Maybe<Leader>>>;
  mainManualPosts?: Maybe<Array<Maybe<Post>>>;
  mainPosts?: Maybe<Array<Maybe<Post>>>;
  curation?: Maybe<INewCuration>;
  curations?: Maybe<Array<INewCuration>>;
  meeting?: Maybe<Meeting>;
  meetingByID?: Maybe<Meeting>;
  meetings?: Maybe<Array<Maybe<Meeting>>>;
  memberCount?: Maybe<Scalars['Int']>;
  memberInfoByClub?: Maybe<MemberInfo>;
  memberInfoBySeasonID?: Maybe<MemberInfo>;
  nextSeasonClub?: Maybe<Club>;
  notice?: Maybe<Notice>;
  notices?: Maybe<Array<Maybe<Notice>>>;
  outgoingVoucher?: Maybe<Array<Maybe<OutgoingVoucher>>>;
  partnerApplication?: Maybe<PartnerApplication>;
  partnerApplications?: Maybe<Array<Maybe<PartnerApplication>>>;
  partnerAssigningSeason?: Maybe<Season>;
  pinNumbers?: Maybe<Array<Maybe<PinNumber>>>;
  place?: Maybe<Place>;
  places?: Maybe<Array<Maybe<Place>>>;
  pointHistories?: Maybe<Array<Maybe<PointHistory>>>;
  policy?: Maybe<Policy>;
  popularPosts?: Maybe<Array<Maybe<Post>>>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Maybe<Post>>>;
  productMapping?: Maybe<Scalars['Boolean']>;
  pushNotification?: Maybe<PushNotification>;
  pushNotifications?: Maybe<Array<Maybe<PushNotification>>>;
  recruitment?: Maybe<Recruitment>;
  recruitments?: Maybe<Array<Maybe<Recruitment>>>;
  refund?: Maybe<Refund>;
  refunds?: Maybe<Array<Maybe<Refund>>>;
  roomSchedules?: Maybe<Array<Maybe<RoomSchedule>>>;
  season?: Maybe<Season>;
  seasons?: Maybe<Array<Maybe<Season>>>;
  spaceRentals?: Maybe<Array<Maybe<SpaceRental>>>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  tempBookApplication?: Maybe<TempBookApplication>;
  user?: Maybe<User>;
  userByEmail?: Maybe<User>;
  usersByBatching?: Maybe<Array<Maybe<User>>>;
  validSeasons?: Maybe<Array<Maybe<VaildSeason>>>;
  video?: Maybe<Video>;
  wallet?: Maybe<Wallet>;
  wishClubs?: Maybe<Array<Maybe<WishClub>>>;
};

export type QueryBannersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BannersWhereInput>;
};

export type QueryBenefitCompaniesArgs = {
  options?: InputMaybe<BenefitCompaniesOptions>;
};

export type QueryBenefitCompanyArgs = {
  id: Scalars['String'];
};

export type QueryBookreviewArgs = {
  id: Scalars['String'];
};

export type QueryBookreviewByUserIdAndMeetingIdArgs = {
  meetingID: Scalars['String'];
  userID: Scalars['String'];
};

export type QueryBookreviewCommentsArgs = {
  bookreviewID: Scalars['String'];
};

export type QueryBookreviewsTempArgs = {
  options?: InputMaybe<BookreviewsOptions>;
};

export type QueryCanExtendClubArgs = {
  clubID: Scalars['String'];
  userID: Scalars['String'];
};

export type QueryCategoryArgs = {
  id: Scalars['String'];
};

export type QueryCheckAvailablePhoneNumberArgs = {
  countryCode: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type QueryClubArgs = {
  id: Scalars['String'];
};

export type QueryClubApplicationArgs = {
  id: Scalars['String'];
};

export type QueryClubApplicationsArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  order?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['String']>>>>>;
  where: ClubApplicationsWhereInput;
};

export type QueryClubGroupArgs = {
  id: Scalars['String'];
};

export type QueryClubGroupsArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  where: ClubGroupsWhereInput;
};

export type QueryClubHistoriesArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  where: ClubHistoriesWhereInput;
};

export type QueryClubHistoryArgs = {
  id: Scalars['String'];
};

export type QueryClubPostCommentArgs = {
  id: Scalars['String'];
};

export type QueryClubPostCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubPostCommentsWhereInput>;
};

export type QueryClubReviewArgs = {
  id: Scalars['String'];
};

export type QueryClubReviewsArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  order?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['String']>>>>>;
  where: ClubReviewsWhereInput;
};

export type QueryClubRoleArgs = {
  id: Scalars['String'];
};

export type QueryClubRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubRolesWhereInput>;
};

export type QueryClubWithTagDatasArgs = {
  options?: InputMaybe<ClubWithTagDatasInput>;
};

export type QueryClubsArgs = {
  containsFullClub?: InputMaybe<Scalars['Boolean']>;
  isTopAllMostFullClubs?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  mostFullClubConditionPercent?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  randomSeed?: InputMaybe<Scalars['Float']>;
  searchByLeaderName?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ClubsWhereInput>;
};

export type QueryClubsCountArgs = {
  containsFullClub?: InputMaybe<Scalars['Boolean']>;
  mostFullClubConditionPercent?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubsWhereInput>;
};

export type QueryClubsWithTagArgs = {
  containsFullClub?: InputMaybe<Scalars['Boolean']>;
  isTopAllMostFullClubs?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  mostFullClubConditionPercent?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubsWithTagWhereInput>;
};

export type QueryCouponsArgs = {
  options: CouponsOptions;
};

export type QueryDeviceArgs = {
  id: Scalars['String'];
};

export type QueryDevicesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DevicesWhereInput>;
};

export type QueryDisplayOrderArgs = {
  id: Scalars['String'];
};

export type QueryDisplayOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DisplayOrdersWhereInput>;
};

export type QueryEventArgs = {
  id: Scalars['String'];
};

export type QueryEventApplicationArgs = {
  id: Scalars['String'];
};

export type QueryEventApplicationsArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  where: EventApplicationsWhereInput;
};

export type QueryEventRoleArgs = {
  id: Scalars['String'];
};

export type QueryEventRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventRolesWhereInput>;
};

export type QueryEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventsWhereInput>;
};

export type QueryExtraNoticeArgs = {
  id: Scalars['String'];
};

export type QueryFaqArgs = {
  id: Scalars['String'];
};

export type QueryFaqsArgs = {
  category?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<FaqsWhereInput>;
};

export type QueryFindEmailArgs = {
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type QueryGetAppleIdArgs = {
  accessToken?: InputMaybe<Scalars['String']>;
};

export type QueryHasExperienceEventArgs = {
  eventID?: InputMaybe<Scalars['String']>;
  userID: Scalars['String'];
};

export type QueryHasExperiencedSeasonArgs = {
  userID: Scalars['String'];
};

export type QueryHasIssueableCouponArgs = {
  benefitCompanyID: Scalars['String'];
  userID: Scalars['String'];
};

export type QueryHasMembershipArgs = {
  checkDate?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seasons?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  serviceID?: InputMaybe<Scalars['String']>;
  userID: Scalars['String'];
};

export type QueryHasMembershipByClubIdArgs = {
  clubID: Scalars['String'];
  userID: Scalars['String'];
};

export type QueryHasPaidClubApplicationArgs = {
  clubGroupID?: InputMaybe<Scalars['String']>;
  userID: Scalars['String'];
};

export type QueryHasTicketArgs = {
  serviceID?: InputMaybe<Scalars['String']>;
  userID: Scalars['String'];
};

export type QueryInactiveUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InactiveUsersWhereInput>;
};

export type QueryIsAppliableEventArgs = {
  eventID: Scalars['String'];
  userID: Scalars['String'];
};

export type QueryIsAppliablePartnerArgs = {
  userID: Scalars['String'];
};

export type QueryIsAttendedArgs = {
  meetingID: Scalars['String'];
  userID: Scalars['String'];
};

export type QueryIsKtMembershipArgs = {
  clubID: Scalars['String'];
  userID: Scalars['String'];
};

export type QueryIsLastMeetingOverArgs = {
  seasonID: Scalars['String'];
  userID: Scalars['String'];
};

export type QueryIsNewbieArgs = {
  userID: Scalars['String'];
};

export type QueryIsVaildPinNumberArgs = {
  pinNumber: Scalars['String'];
  price: Scalars['Int'];
};

export type QueryIssuedCouponsArgs = {
  benefitCompanyID: Scalars['String'];
  userID: Scalars['String'];
};

export type QueryLeaderArgs = {
  id?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['String']>;
};

export type QueryLeadersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeadersWhereInput>;
};

export type QueryMainManualPostsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryMainPostsArgs = {
  excludeClosedPost?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type QueryMeetingArgs = {
  clubID: Scalars['String'];
  order: Scalars['Int'];
};

export type QueryMeetingByIdArgs = {
  id: Scalars['String'];
};

export type QueryMeetingsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['String']>>>>>;
  where?: InputMaybe<MeetingsWhereInput>;
};

export type QueryMemberCountArgs = {
  clubID: Scalars['String'];
};

export type QueryMemberInfoByClubArgs = {
  id: Scalars['String'];
};

export type QueryMemberInfoBySeasonIdArgs = {
  seasonID: Scalars['String'];
};

export type QueryNextSeasonClubArgs = {
  prevClubID: Scalars['String'];
};

export type QueryNoticeArgs = {
  id: Scalars['String'];
};

export type QueryOutgoingVoucherArgs = {
  userId: Scalars['String'];
};

export type QueryPartnerApplicationArgs = {
  id: Scalars['String'];
};

export type QueryPartnerApplicationsArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  where: PartnerApplicationsWhereInput;
};

export type QueryPinNumbersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PinNumbersWhereInput>;
};

export type QueryPlaceArgs = {
  id: Scalars['String'];
};

export type QueryPointHistoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PointHistoriesWhereInput>;
};

export type QueryPolicyArgs = {
  id: Scalars['String'];
};

export type QueryPopularPostsArgs = {
  excludeClosedPost?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type QueryPostArgs = {
  id: Scalars['String'];
};

export type QueryPostsArgs = {
  where?: InputMaybe<PostsWhereInput>;
};

export type QueryProductMappingArgs = {
  clubID: Scalars['String'];
  meetingIDs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryPushNotificationArgs = {
  id: Scalars['String'];
};

export type QueryPushNotificationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PushNotificationsWhereInput>;
};

export type QueryRecruitmentArgs = {
  id: Scalars['String'];
};

export type QueryRecruitmentsArgs = {
  where?: InputMaybe<RecruitmentWhereInput>;
};

export type QueryRefundArgs = {
  id: Scalars['String'];
};

export type QueryRefundsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<RefundWhereInput>;
};

export type QueryRoomSchedulesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoomSchedulesWhereInput>;
};

export type QuerySeasonArgs = {
  id: Scalars['String'];
};

export type QuerySeasonsArgs = {
  where?: InputMaybe<SeasonsWhereInput>;
};

export type QuerySpaceRentalsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SpaceRentalWhereInput>;
};

export type QueryTagArgs = {
  id: Scalars['String'];
};

export type QueryTagsArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  where: TagsWhereInput;
};

export type QueryTempBookApplicationArgs = {
  clubApplicationID: Scalars['String'];
};

export type QueryUserArgs = {
  id: Scalars['String'];
};

export type QueryUserByEmailArgs = {
  email: Scalars['String'];
};

export type QueryUsersByBatchingArgs = {
  ids: Array<InputMaybe<Scalars['String']>>;
};

export type QueryVideoArgs = {
  id: Scalars['String'];
};

export type QueryWalletArgs = {
  userID: Scalars['String'];
};

export type QueryWishClubsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WishClubsWhereInput>;
};

export type Recruitment = {
  __typename?: 'Recruitment';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['String'];
  isClosed: Scalars['Boolean'];
  thumbnailUrl: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type RecruitmentWhereInput = {
  isClosed?: InputMaybe<Scalars['Boolean']>;
};

export type Refund = {
  __typename?: 'Refund';
  clubApplication?: Maybe<ClubApplication>;
  clubApplicationID: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  exchangeableUsedPoint?: Maybe<Scalars['Int']>;
  gateway?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  method?: Maybe<Scalars['String']>;
  noExchangeableUsedPoint?: Maybe<Scalars['Int']>;
  outgoingCoupon: Scalars['Boolean'];
  price?: Maybe<Scalars['Int']>;
  reason: Scalars['String'];
  refundedAt: Scalars['String'];
  refundedBy: Scalars['String'];
  total: Scalars['Int'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type RefundEventInput = {
  eventRoleID: Scalars['String'];
  exchangeablePoint?: InputMaybe<Scalars['Int']>;
  isRemainMebership?: InputMaybe<Scalars['Boolean']>;
  noExchangeablePoint?: InputMaybe<Scalars['Int']>;
  reason?: InputMaybe<Scalars['String']>;
  refundAccount?: InputMaybe<Account>;
  refundPrice?: InputMaybe<Scalars['Int']>;
};

export type RefundEventPayload = {
  __typename?: 'RefundEventPayload';
  eventApplication?: Maybe<EventApplication>;
};

export type RefundWhereInput = {
  clubApplicationID?: InputMaybe<Scalars['String']>;
  gateway?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  outgoingCoupon?: InputMaybe<Scalars['Boolean']>;
  reason?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['String']>;
};

export type ReservationInformation = {
  __typename?: 'ReservationInformation';
  activities?: Maybe<Array<Maybe<Scalars['String']>>>;
  readings?: Maybe<Array<Maybe<Scalars['String']>>>;
  relationships?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Room = {
  __typename?: 'Room';
  agit?: Maybe<Agit>;
  agitID: Scalars['String'];
  id: Scalars['String'];
  maxMemberCount: Scalars['Int'];
  name: Scalars['String'];
  openTimetable: Array<Maybe<TypeOpenTimetable>>;
};

export type RoomSchedule = {
  __typename?: 'RoomSchedule';
  b2bMeeting?: Maybe<B2bMeeting>;
  b2bMeetingID?: Maybe<Scalars['String']>;
  b2bSpaceRental?: Maybe<B2bSpaceRental>;
  b2bSpaceRentalID?: Maybe<Scalars['String']>;
  endedAt: Scalars['String'];
  id: Scalars['String'];
  meeting?: Maybe<Meeting>;
  meetingID?: Maybe<Scalars['String']>;
  room?: Maybe<Room>;
  roomID: Scalars['String'];
  spaceRental?: Maybe<SpaceRental>;
  spaceRentalID?: Maybe<Scalars['String']>;
  startedAt: Scalars['String'];
  type: Scalars['String'];
};

export type RoomSchedulesWhereInput = {
  agitID?: InputMaybe<Scalars['String']>;
  period?: InputMaybe<InputPeriod>;
};

export type Season = {
  __typename?: 'Season';
  allOpenStartedAt?: Maybe<Scalars['String']>;
  assigningRank: Scalars['Int'];
  createdAt: Scalars['String'];
  endedAt: Scalars['String'];
  extentionOpenStartedAt?: Maybe<Scalars['String']>;
  firstRefundStartedAt?: Maybe<Scalars['String']>;
  fourthRefundStartedAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isPeriodToAskExistingPartner: Scalars['Boolean'];
  isPeriodToShowMembers: Scalars['Boolean'];
  isTopAllMostFullClubs: Scalars['Boolean'];
  memberOpenStartedAt?: Maybe<Scalars['String']>;
  mostFullClubConditionPercent: Scalars['Int'];
  newPartnerApplicationUrl?: Maybe<Scalars['String']>;
  nextSeason?: Maybe<Scalars['String']>;
  nextSeasonData?: Maybe<Season>;
  openEndedAt?: Maybe<Scalars['String']>;
  openStatus: Scalars['String'];
  refundEndedAt?: Maybe<Scalars['String']>;
  secondRefundStartedAt?: Maybe<Scalars['String']>;
  startedAt: Scalars['String'];
  thirdRefundStartedAt?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type SeasonsWhereInput = {
  dateToComfirmValidSeason?: InputMaybe<Scalars['String']>;
  isPeriodToAskExistingPartner?: InputMaybe<Scalars['Boolean']>;
  openStatus?: InputMaybe<Scalars['String']>;
};

export type SendPushNotificationsInput = {
  code?: InputMaybe<Scalars['String']>;
  payload?: InputMaybe<PushNotificationPayload>;
  userID: Scalars['String'];
};

export type SpaceRental = {
  __typename?: 'SpaceRental';
  createdAt: Scalars['String'];
  endedAt: Scalars['String'];
  id: Scalars['String'];
  isAccepted?: Maybe<Scalars['Boolean']>;
  memberCount: Scalars['Int'];
  place?: Maybe<Place>;
  placeID: Scalars['String'];
  reason: Scalars['String'];
  request?: Maybe<Scalars['String']>;
  roomScheduleIDs: Array<Maybe<Scalars['String']>>;
  roomSchedules?: Maybe<Array<Maybe<RoomSchedule>>>;
  smsNotice?: Maybe<Scalars['String']>;
  startedAt: Scalars['String'];
  updatedAt: Scalars['String'];
  user?: Maybe<User>;
  userID: Scalars['String'];
};

export type SpaceRentalWhereInput = {
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  period?: InputMaybe<InputPeriod>;
  placeID?: InputMaybe<Scalars['String']>;
  placeIDs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startedDate?: InputMaybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  clubGroupId?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isPublic: Scalars['Boolean'];
  name: Scalars['String'];
  options: Array<Maybe<Scalars['String']>>;
  seasonID: Scalars['String'];
  subName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type TagsWhereInput = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seasonID?: InputMaybe<Scalars['String']>;
};

export type TempBookApplication = {
  __typename?: 'TempBookApplication';
  addressFirstLine?: Maybe<Scalars['String']>;
  addressSecondLine?: Maybe<Scalars['String']>;
  addressZipCode?: Maybe<Scalars['String']>;
  clubApplicationID: Scalars['String'];
  exchangeableUsedPoint: Scalars['Int'];
  id: Scalars['String'];
  noExchangeableUsedPoint: Scalars['Int'];
  productOptionID: Scalars['String'];
  receiverName?: Maybe<Scalars['String']>;
  receiverPhoneNumber?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  unitPrice: Scalars['Int'];
};

export type TempCommunityTicket = {
  __typename?: 'TempCommunityTicket';
  cardName?: Maybe<Scalars['String']>;
  clubApplicationID: Scalars['String'];
  clubID: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isRefunded: Scalars['Boolean'];
  updatedAt?: Maybe<Scalars['String']>;
  userID: Scalars['String'];
};

export type Ticket = {
  __typename?: 'Ticket';
  serviceId?: Maybe<Scalars['String']>;
};

export type ToggleLikeOnBookreviewPayload = {
  __typename?: 'ToggleLikeOnBookreviewPayload';
  bookreview?: Maybe<Bookreview>;
};

export type TypeInformation = {
  __typename?: 'TypeInformation';
  clubID?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  isClosed?: Maybe<Scalars['Boolean']>;
  isClosedInApp?: Maybe<Scalars['Boolean']>;
  isClosedInAppHome?: Maybe<Scalars['Boolean']>;
  isClosedNoticeInCS?: Maybe<Scalars['Boolean']>;
  isClosedNoticeInHome?: Maybe<Scalars['Boolean']>;
  tabs?: Maybe<Array<Maybe<TypeTab>>>;
  title?: Maybe<Scalars['String']>;
};

export type TypeTab = {
  __typename?: 'TypeTab';
  content?: Maybe<Scalars['String']>;
  isClosed?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  seoText?: Maybe<Scalars['String']>;
};

export type UcmTestResult = {
  __typename?: 'UcmTestResult';
  answers?: Maybe<Array<Maybe<Scalars['String']>>>;
  finishedAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  tagID?: Maybe<Scalars['String']>;
  userID?: Maybe<Scalars['String']>;
};

export type UpdateBookreviewCommentInput = {
  content: Scalars['String'];
  id: Scalars['String'];
};

export type UpdateBookreviewCommentPayout = {
  __typename?: 'UpdateBookreviewCommentPayout';
  bookreviewComment?: Maybe<BookreviewComment>;
};

export type UpdateBookreviewInput = {
  content?: InputMaybe<Scalars['String']>;
  fileUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  isPublic?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateBookreviewPayload = {
  __typename?: 'UpdateBookreviewPayload';
  bookreview?: Maybe<Bookreview>;
};

export type UpdateClubApplicationInput = {
  afterClubApplicationID?: InputMaybe<Scalars['String']>;
  beforeClubApplicationID?: InputMaybe<Scalars['String']>;
  cardName?: InputMaybe<Scalars['String']>;
  clubID?: InputMaybe<Scalars['String']>;
  clubRoleID?: InputMaybe<Scalars['String']>;
  companionCount?: InputMaybe<Scalars['Int']>;
  confirmedAt?: InputMaybe<Scalars['String']>;
  failReason?: InputMaybe<Scalars['String']>;
  fee?: InputMaybe<Scalars['Int']>;
  iamportUID?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  membershipClosedAt?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  refundAccountNumber?: InputMaybe<Scalars['String']>;
  refundApplicatedAt?: InputMaybe<Scalars['String']>;
  refundBankCode?: InputMaybe<Scalars['String']>;
  refundBankName?: InputMaybe<Scalars['String']>;
  refundHolder?: InputMaybe<Scalars['String']>;
  refundPrice?: InputMaybe<Scalars['Int']>;
  refundReason?: InputMaybe<Scalars['String']>;
  refundScore?: InputMaybe<Scalars['Int']>;
  refundedAt?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['String']>;
  seasonID?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  tossCancelRedirectUrl?: InputMaybe<Scalars['String']>;
  tossPayToken?: InputMaybe<Scalars['String']>;
  tossRedirectUrl?: InputMaybe<Scalars['String']>;
  tossRefundNo?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['String']>;
  vbankAccountNumber?: InputMaybe<Scalars['String']>;
  vbankBankCode?: InputMaybe<Scalars['String']>;
  vbankBankName?: InputMaybe<Scalars['String']>;
  vbankExpiredAt?: InputMaybe<Scalars['String']>;
  vbankHolder?: InputMaybe<Scalars['String']>;
};

export type UpdateClubApplicationPayload = {
  __typename?: 'UpdateClubApplicationPayload';
  clubApplication?: Maybe<ClubApplication>;
};

export type UpdateClubReviewInput = {
  clubGroupID?: InputMaybe<Scalars['String']>;
  clubHistoryID?: InputMaybe<Scalars['String']>;
  clubID?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  dummyLikeCount?: InputMaybe<Scalars['Int']>;
  id: Scalars['String'];
  imageUrl?: InputMaybe<Scalars['String']>;
  isClosed?: InputMaybe<Scalars['Boolean']>;
  score?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['String']>;
};

export type UpdateClubReviewPayload = {
  __typename?: 'UpdateClubReviewPayload';
  clubReview?: Maybe<ClubReview>;
};

export type UpdateDeviceInput = {
  id: Scalars['String'];
  isAgreedToActivityPush?: InputMaybe<Scalars['Boolean']>;
  isAgreedToClubPush?: InputMaybe<Scalars['Boolean']>;
  isAgreedToMarketingPush?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['String']>;
};

export type UpdateEventApplicationInput = {
  id: Scalars['String'];
  status?: InputMaybe<Scalars['String']>;
};

export type UpdateEventApplicationPayload = {
  __typename?: 'UpdateEventApplicationPayload';
  eventApplication?: Maybe<EventApplication>;
};

export type UpdatePartnerApplicationInput = {
  ID?: InputMaybe<Scalars['String']>;
  assignedClubID?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  rank?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Int']>;
  season?: InputMaybe<Scalars['String']>;
  seasonID?: InputMaybe<Scalars['String']>;
  selectedClubIDs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  selectedClubsReason?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  userID?: InputMaybe<Scalars['String']>;
};

export type UpdatePartnerApplicationPayload = {
  __typename?: 'UpdatePartnerApplicationPayload';
  partnerApplication?: Maybe<PartnerApplication>;
};

export type UpdatePushNotificationInput = {
  body?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['String']>;
  deviceID?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  status?: InputMaybe<Scalars['String']>;
  templateCode?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  ads?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  appleID?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  facebook?: InputMaybe<Scalars['String']>;
  facebookID?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  instagram?: InputMaybe<Scalars['String']>;
  interests?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isAgreedToAllMarketing?: InputMaybe<Scalars['Boolean']>;
  isAgreedToMarketingSms?: InputMaybe<Scalars['Boolean']>;
  isPublicAge?: InputMaybe<Scalars['Boolean']>;
  isPublicBookreview?: InputMaybe<Scalars['Boolean']>;
  isPublicClubActivity?: InputMaybe<Scalars['Boolean']>;
  isPublicGender?: InputMaybe<Scalars['Boolean']>;
  isPublicProfile?: InputMaybe<Scalars['Boolean']>;
  kakaoID?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  marketingAgreedAt?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  profileImageUrl?: InputMaybe<Scalars['String']>;
  readingVolume?: InputMaybe<Scalars['Int']>;
  recommender?: InputMaybe<Scalars['String']>;
  route?: InputMaybe<Scalars['String']>;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  ads?: Maybe<Array<Maybe<Scalars['String']>>>;
  appleID?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  facebookID?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  hasAuthenticatedPhoneNumber?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  instagram?: Maybe<Scalars['String']>;
  interests?: Maybe<Array<Maybe<Scalars['String']>>>;
  isAgreedToAllMarketing?: Maybe<Scalars['Boolean']>;
  isAgreedToMarketingSms?: Maybe<Scalars['Boolean']>;
  isBlocked?: Maybe<Scalars['Boolean']>;
  isInactivated: Scalars['Boolean'];
  isPublicAge?: Maybe<Scalars['Boolean']>;
  isPublicBookreview?: Maybe<Scalars['Boolean']>;
  isPublicClubActivity?: Maybe<Scalars['Boolean']>;
  isPublicGender?: Maybe<Scalars['Boolean']>;
  isPublicProfile?: Maybe<Scalars['Boolean']>;
  kakaoID?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  marketingAgreedAt?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  noExchangeablePoint?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['Int']>;
  profileImageUrl?: Maybe<Scalars['String']>;
  readingVolume?: Maybe<Scalars['Int']>;
  recentLoginedAt?: Maybe<Scalars['String']>;
  recommender?: Maybe<Scalars['String']>;
  route?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type VaildSeason = {
  __typename?: 'VaildSeason';
  seasonID?: Maybe<Scalars['String']>;
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['String'];
  link: Scalars['String'];
  props: Scalars['JSON'];
};

export type ViewContentInput = {
  contentID?: InputMaybe<Scalars['String']>;
  contentName?: InputMaybe<Scalars['String']>;
  eventID?: InputMaybe<Scalars['String']>;
  eventSourceUrl?: InputMaybe<Scalars['String']>;
  fbc?: InputMaybe<Scalars['String']>;
  fbp?: InputMaybe<Scalars['String']>;
  pixelIDs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['Int']>;
};

export type Wallet = {
  __typename?: 'Wallet';
  id: Scalars['String'];
  tickets?: Maybe<Array<Maybe<Ticket>>>;
  userId: Scalars['String'];
};

export type WishClub = {
  __typename?: 'WishClub';
  club: Club;
  clubID: Scalars['String'];
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  isReceivedSms: Scalars['Boolean'];
  season: Scalars['String'];
  seasonID?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
  userID: Scalars['String'];
};

export type WishClubsWhereInput = {
  clubID?: InputMaybe<Scalars['String']>;
  isAppliablePeriod?: InputMaybe<Scalars['Boolean']>;
  isClosed?: InputMaybe<Scalars['Boolean']>;
  isFullClub?: InputMaybe<Scalars['Boolean']>;
  isReceivedSms?: InputMaybe<Scalars['Boolean']>;
  season?: InputMaybe<Scalars['String']>;
  seasonID?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['String']>;
};

export type InfoDatasOfMainpagePayload = {
  __typename?: 'infoDatasOfMainpagePayload';
  countMeetings: Scalars['Int'];
  countOfPostingBookreview: Scalars['Int'];
  countOfReadingContents: Scalars['Int'];
  countUsers: Scalars['Int'];
  duringYearOfTrevari: Scalars['Int'];
};

export type InputPeriod = {
  endedAt?: InputMaybe<Scalars['String']>;
  startedAt?: InputMaybe<Scalars['String']>;
};

export type TimetableRow = {
  __typename?: 'timetableRow';
  startTime: Scalars['String'];
  task: Scalars['String'];
};

export type TypeOpenTimetable = {
  __typename?: 'typeOpenTimetable';
  day?: Maybe<Scalars['Int']>;
  periods?: Maybe<Array<Maybe<TypePeriod>>>;
};

export type TypePeriod = {
  __typename?: 'typePeriod';
  endedAt?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['String']>;
};

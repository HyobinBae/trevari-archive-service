import { Club, ClubsWithTag, Event, Meeting, Place, Tag } from 'types/__generate__/user-backend-api';

export interface IClub extends Club {
  isBookmark: boolean;
  meetings: Meeting[];
  Place: Place
  meetingDatas: Meeting[]
}

export interface IEvent extends Event {
  Place: Place
}

export interface ICuration extends ClubsWithTag {
  clubs: IClub[];
  tag: Tag;
}

export interface ICustomTag extends Tag {
  id: string;
  name: string;
}

export interface INewCuration {
  id: string
  title: string
  head: string
  body: string
  description: string
  coverUrl: string
  isDisplay:boolean
  order:number
  lists : {
    clubLists: IClub[]
    eventLists: IEvent[]
    subscriptionClubLists: ISubscriptionClub[]
  }
  createdAt: string
  isBookmark: boolean
}

export interface ISubscriptionClub {
  id: string;
  title: string;
  leaderName: string;
  clubMonthlyPrice: number;
  liveSchedule: ISubscriptionLiveSchedule;
  regularBillingSchedule: ISubscriptionRegularBillingSchedule;
  content: ISubscriptionContent;
  openedAt: Date;
  closedAt?: Date;
  startedDateAt?: Date;
  endedDateAt?: Date;
  currentOrderDate?: string;
  nextOrderDate?: string;
  liveDate?: string;
}

export interface ISubscriptionLiveSchedule {
  weekOfLiveSchedule: number;
  dayOfLiveSchedule: number;
  startTimeOfLiveSchedule: string;
  endTimeOfLiveSchedule: string;
}

export interface ISubscriptionRegularBillingSchedule {
  weekOfSchedule: number;
  dayOfSchedule: number;
  timeOfSchedule: string;
}

export interface ISubscriptionContent {
  landingPageImageUrl: string;
  detailPageTitleImageUrl: string;
  detailPageImageUrls: string[];
  place: string;
  enterLiveLink: string;
  archiveLink: string;
  notice: string;
}
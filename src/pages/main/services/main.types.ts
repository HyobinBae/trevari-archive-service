import { Club, ClubsWithTag, Event, Meeting, Place, Tag } from 'types/__generate__/user-backend-api';

export interface IClub extends Club {
  isBookmark: boolean;
  meetings: Meeting[];
  Place: Place
  meetingDatas: Meeting[]
  typename: string;
}

export interface IEvent extends Event {
  Place: Place
  typename: string;
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
  }
  createdAt: string
  isBookmark: boolean
}


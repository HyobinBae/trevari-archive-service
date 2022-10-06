import { Club, ClubsWithTag, Meeting, Tag } from 'types/__generate__/user-backend-api';

export interface IClub extends Club {
  isBookmark: boolean;
  meetings: Meeting[];
}

export interface ICuration extends ClubsWithTag {
  clubs: IClub[];
  tag: Tag;
}

export interface ICustomTag extends Tag {
  id: string;
  name: string;
}

import { Bookreview } from 'types/__generate__/user-backend-api';

export interface LikeUser {
  id: string;
  profileImageUrl: string;
  name: string;
  email: string;
  role: string;
}
export interface IBookreviews {
  count: number;
  bookreviews: Bookreview[];
}

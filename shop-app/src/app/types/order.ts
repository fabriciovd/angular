import { Item } from './item';
import { User } from './user';

export interface Order {
  likes: string[];
  _id: string;
  text: string;
  userId: User;
  themeId: Item;
  created_at: string;
  updatedAt: string;
  __v: number;
}
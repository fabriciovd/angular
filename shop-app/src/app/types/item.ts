import { Order } from './order';
import { User } from './user';

export interface Item {
  subscribers: string[];
  posts: Order[];
  _id: string;
  themeName: string;
  userId: User;
  created_at: string;
  updatedAt: string;
  __v: number;
}
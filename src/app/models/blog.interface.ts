import { User } from './user.interface';

export interface Blog {
  _id?: string;
  title: string;
  author: User;
  createdAt: Date;
  image: string;
  tags: string[];
  description: string;
  content: string;
  pages: BlogPage[];
}

export interface BlogPage {
  _id?: string;
  title: string;
}

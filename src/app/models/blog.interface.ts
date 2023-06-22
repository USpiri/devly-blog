export interface Blog {
  _id?: string;
  title: string;
  author: string;
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

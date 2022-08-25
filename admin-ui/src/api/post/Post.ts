import { User } from "../user/User";
import { Category } from "../category/Category";

export type Post = {
  author?: User | null;
  category?: Category | null;
  content: string;
  createdAt: Date;
  id: string;
  publishedOn: Date;
  title: string;
  updatedAt: Date;
};

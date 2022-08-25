import { Post } from "../post/Post";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  posts?: Array<Post>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};

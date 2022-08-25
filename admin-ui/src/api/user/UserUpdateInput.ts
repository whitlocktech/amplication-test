import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  posts?: PostUpdateManyWithoutUsersInput;
  roles?: Array<string>;
  username?: string;
};

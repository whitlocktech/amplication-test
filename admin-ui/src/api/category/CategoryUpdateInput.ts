import { PostUpdateManyWithoutCategoriesInput } from "./PostUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  posts?: PostUpdateManyWithoutCategoriesInput;
};

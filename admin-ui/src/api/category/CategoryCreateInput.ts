import { PostCreateNestedManyWithoutCategoriesInput } from "./PostCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  posts?: PostCreateNestedManyWithoutCategoriesInput;
};

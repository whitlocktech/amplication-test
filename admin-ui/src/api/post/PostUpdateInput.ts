import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type PostUpdateInput = {
  author?: UserWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
  content?: string;
  publishedOn?: Date;
  title?: string;
};

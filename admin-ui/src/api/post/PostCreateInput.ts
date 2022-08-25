import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type PostCreateInput = {
  author?: UserWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
  content: string;
  publishedOn: Date;
  title: string;
};

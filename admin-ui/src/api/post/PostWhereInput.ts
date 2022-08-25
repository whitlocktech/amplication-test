import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type PostWhereInput = {
  author?: UserWhereUniqueInput;
  category?: CategoryWhereUniqueInput;
  content?: StringFilter;
  id?: StringFilter;
  publishedOn?: DateTimeFilter;
  title?: StringFilter;
};

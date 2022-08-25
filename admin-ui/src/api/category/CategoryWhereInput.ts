import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  posts?: PostListRelationFilter;
};

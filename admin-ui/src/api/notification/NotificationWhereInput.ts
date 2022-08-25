import { StringFilter } from "../../util/StringFilter";

export type NotificationWhereInput = {
  content?: StringFilter;
  id?: StringFilter;
  title?: StringFilter;
};

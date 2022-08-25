import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { CategoryTitle } from "../category/CategoryTitle";

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="Author">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="Content" source="content" />
        <DateInput label="Published On" source="publishedOn" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};

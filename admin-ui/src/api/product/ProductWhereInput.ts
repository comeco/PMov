import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MovementListRelationFilter } from "../movement/MovementListRelationFilter";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  movements?: MovementListRelationFilter;
  name?: StringFilter;
};

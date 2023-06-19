import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type MovementWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  productId?: ProductWhereUniqueInput;
};

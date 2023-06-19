import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type MovementUpdateInput = {
  date?: Date | null;
  productId?: ProductWhereUniqueInput;
};

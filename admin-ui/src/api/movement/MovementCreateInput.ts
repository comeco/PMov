import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type MovementCreateInput = {
  date?: Date | null;
  productId: ProductWhereUniqueInput;
};

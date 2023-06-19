import { MovementUpdateManyWithoutProductsInput } from "./MovementUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  movements?: MovementUpdateManyWithoutProductsInput;
  name?: string;
};

import { MovementCreateNestedManyWithoutProductsInput } from "./MovementCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  movements?: MovementCreateNestedManyWithoutProductsInput;
  name: string;
};

import { MovementWhereInput } from "./MovementWhereInput";
import { MovementOrderByInput } from "./MovementOrderByInput";

export type MovementFindManyArgs = {
  where?: MovementWhereInput;
  orderBy?: Array<MovementOrderByInput>;
  skip?: number;
  take?: number;
};

import { Movement } from "../movement/Movement";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  movements?: Array<Movement>;
  name: string;
  updatedAt: Date;
};

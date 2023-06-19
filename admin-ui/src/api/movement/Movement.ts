import { Product } from "../product/Product";

export type Movement = {
  createdAt: Date;
  date: Date | null;
  id: string;
  productId?: Product;
  updatedAt: Date;
};

import type { Product } from "@/types/ProductType";

export type CartItem = {
  product: Product;
  quantity: Number;
};

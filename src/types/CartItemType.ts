import type { Product } from "@/types/ProductType";

export type CartItem = {
  productId: Product;
  quantity: Number;
};

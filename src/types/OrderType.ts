import { CartItem } from "@/types/CartItemType.ts";

export type Cart = {
  products: CartItem[];
  userId: Number;
  id: Number;
};

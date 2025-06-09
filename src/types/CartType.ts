import { CartItem } from "@/types/CartItemType.ts";

export type Cart = {
  items: CartItem[];
  totalPrice: Number;
};

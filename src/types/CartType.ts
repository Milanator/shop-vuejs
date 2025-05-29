import { CartItem } from "./CartItem";

export type Cart = {
  items: CartItem[];
  totalPrice: Number;
};

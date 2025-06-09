import { defineStore } from "pinia";
import { getLocalStorage, setLocalStorage } from "@/utils";
import type { Product } from "@/types/ProductType";
import type { CartItem } from "@/types/CartItem";
import type { Cart } from "@/types/Cart";

export const useCartStore = defineStore("shop/cart", () => {
  const LS_KEY = "cart";

  const getTotalPrice = (cart: Cart) =>
    cart.items.reduce(
      (sum: Number, item: CartItem) =>
        +sum + +item.product.price * +item.quantity,
      0
    );

  const addToCart = (product: Product) => {
    const cart = getLocalStorage(LS_KEY) || { items: [], totalPrice: 0 };

    // find product
    const itemIndex = cart.items.findIndex(
      (item: CartItem) => item.product.id === product.id
    );

    if (itemIndex > -1) {
      // existing product in cart
      cart.items[itemIndex].quantity++;
    } else {
      // product isnt in cart
      cart.items.push({ product, quantity: 1 });
    }

    // total price sum
    cart.totalPrice = getTotalPrice(cart);

    setLocalStorage(LS_KEY, cart);
  };

  return {
    addToCart,
  };
});

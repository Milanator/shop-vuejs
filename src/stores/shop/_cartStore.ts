import { defineStore } from "pinia";
import { getLocalStorage, setLocalStorage } from "@/utils";
import type { Product } from "@/types/ProductType.ts";
import type { CartItem } from "@/types/CartItemType.ts";
import type { Cart } from "@/types/CartType.ts";
import { ref } from "vue";

export const useCartStore = defineStore("shop/cart", () => {
  const cart = ref<Cart | undefined>(undefined);

  const LS_KEY = "cart";

  const getTotalPrice = (cart: Cart) =>
    cart.items.reduce(
      (sum: Number, item: CartItem) =>
        +sum + +item.product.price * +item.quantity,
      0
    );

  const updateCart = (cartContent: Cart) => {
    // total price sum
    cartContent.totalPrice = getTotalPrice(cartContent);

    // store to localstorage
    setLocalStorage(LS_KEY, cartContent);

    // update ref
    setCart();
  };

  const setCart = () => {
    cart.value = getLocalStorage(LS_KEY) || undefined;
  };

  const addToCart = (product: Product) => {
    const cartContent = getLocalStorage(LS_KEY) || { items: [], totalPrice: 0 };

    // find product
    const itemIndex = cartContent.items.findIndex(
      (item: CartItem) => item.product._id === product._id
    );

    if (itemIndex > -1) {
      // existing product in cart
      cartContent.items[itemIndex].quantity++;
    } else {
      // product isnt in cart
      cartContent.items.push({ product, quantity: 1 });
    }

    updateCart(cartContent);
  };

  const deleteProductFromCart = (product: Product) => {
    const cartContent = getLocalStorage(LS_KEY);

    cartContent.items = cartContent.items.filter(
      (item: CartItem) => item.product._id !== product._id
    );

    updateCart(cartContent);
  };

  return {
    addToCart,
    deleteProductFromCart,
    setCart,
    cart,
  };
});

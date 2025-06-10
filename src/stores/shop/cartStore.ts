import { defineStore } from "pinia";
import axios from "@/plugins/axios";
import type { Product } from "@/types/ProductType.ts";
import type { Cart } from "@/types/CartType.ts";
import { ref } from "vue";

export const useCartStore = defineStore("shop/cart", () => {
  const cart = ref<Cart | undefined>(undefined);
  const loaded = ref<Boolean>(false);
  const errors = ref<string | undefined>(undefined);

  const setCart = () => {
    errors.value = undefined;

    try {
      axios.get(`/cart`).then((response: object) => {
        cart.value = response.data.data;

        loaded.value = true;
      });
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
    }
  };

  const addToCart = async (product: Product) => {
    errors.value = undefined;

    try {
      return axios
        .post(`/cart`, { product: product.id })
        .then((response: object) => {
          console.log(response.data);
        });
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
    } finally {
      loaded.value = true;
    }
  };

  const deleteProductFromCart = async (product: Product) => {
    errors.value = undefined;

    try {
      return axios.delete(`/cart/${product.id}`).then((response: object) => {
        console.log(response.data);
      });
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
    } finally {
      loaded.value = true;
    }
  };

  return {
    addToCart,
    deleteProductFromCart,
    setCart,
    cart,
    loaded,
  };
});

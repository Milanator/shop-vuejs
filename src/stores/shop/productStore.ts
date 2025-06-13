import axios from "@/plugins/axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Product } from "@/types/ProductType";

export const useProductStore = defineStore("shop/product", () => {
  const product = ref<Product | object>({});
  const products = ref<Product[]>([]);
  const loaded = ref<Boolean>(false);
  const errors = ref<string | undefined>(undefined);

  const setProducts = async () => {
    errors.value = undefined;

    try {
      axios.get("/product").then((response: object) => {
        products.value = response.data.data;

        loaded.value = true;
      });
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
    } finally {
      loaded.value = false;
    }
  };

  const getProduct = async (id: string | undefined = undefined) => {
    errors.value = undefined;

    try {
      if (id) {
        axios.get(`/product/${id}`).then((response: object) => {
          product.value = response.data.data;
        });
      }
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
    } finally {
      loaded.value = true;
    }
  };

  return {
    product,
    products,
    loaded,
    errors,
    getProduct,
    setProducts,
  };
});

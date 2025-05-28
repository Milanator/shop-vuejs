import axios from "@/plugins/axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Product } from "@/types/ProductType";

export const useProductStore = defineStore("product", () => {
  const products = ref<Product[]>([]);
  const loaded = ref<Boolean>(false);
  const errors = ref<string | undefined>(undefined);

  const fetchProducts = async () => {
    errors.value = undefined;

    try {
      axios.get("/product").then((response: object) => {
        products.value = response.data;

        loaded.value = true;
      });
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
    } finally {
      loaded.value = false;
    }
  };

  return {
    products,
    loaded,
    errors,
    fetchProducts,
  };
});

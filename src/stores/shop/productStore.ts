import axios from "@/plugins/axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Product } from "@/types/ProductType";

export const useProductStore = defineStore("shop/product", () => {
  const product = ref<Product | object>({});
  const products = ref<Product[]>([]);
  const pagination = ref(undefined);
  const loaded = ref<Boolean>(false);
  const errors = ref<string | undefined>(undefined);

  const setProducts = async (url: string | undefined) => {
    errors.value = undefined;

    try {
      axios.get(url || "/product").then((response: object) => {
        products.value = response.data.data.items;
        pagination.value = response.data.data.pagination;

        loaded.value = true;
      });
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
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
    pagination,
    products,
    loaded,
    errors,
    getProduct,
    setProducts,
  };
});

import axios from "@/plugins/axios";
import { getFormData } from "@/utils";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("product", () => {
  const loaded = ref<Boolean>(false);
  const errors = ref<string | undefined>(undefined);

  const storeProduct = async (id = null) => {
    errors.value = undefined;

    try {
      const url = id ? `/product/${id}` : `/product`;
      const method = id ? "PUT" : "POST";
      const data = getFormData("form", id);

      axios({ url, method, data }).then((response: object) => {
        console.log(response);
        loaded.value = true;
      });
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
    } finally {
      loaded.value = false;
    }
  };

  return {
    storeProduct,
  };
});

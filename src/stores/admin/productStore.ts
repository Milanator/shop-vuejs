import axios from "@/plugins/axios";
import { getFormData } from "@/utils";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("admin/product", () => {
  const loaded = ref<Boolean>(false);
  const errors = ref<string | undefined>(undefined);

  const modifyProduct = async (id: string | undefined = undefined) => {
    errors.value = undefined;

    try {
      const url = id ? `/product/${id}` : `/product`;
      const method = id ? "PUT" : "POST";
      const data = getFormData("form", id);

      axios({ url, method, data }).then((response: object) => {
        console.log(response);
      });
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
    } finally {
      loaded.value = true;
    }
  };

  const deleteProduct = async (id: string) => {
    errors.value = undefined;

    try {
      axios.delete(`/product/${id}`).then((response: object) => {
        console.log(response);
      });
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
    } finally {
      loaded.value = true;
    }
  };

  return {
    modifyProduct,
    deleteProduct
  };
});

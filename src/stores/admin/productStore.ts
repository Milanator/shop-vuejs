import axios from "@/plugins/axios";
import { getFormData } from "@/utils.ts";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useAppStore } from "./../appStore";

export const useProductStore = defineStore("admin/product", () => {
  const loaded = ref<Boolean>(false);
  const errors = ref<string | undefined>(undefined);

  const appStore = useAppStore();

  const modifyProduct = async (id: string | undefined = undefined) => {
    errors.value = undefined;

    const url = id ? `/product/${id}` : `/product`;
    const method = id ? "PUT" : "POST";
    const data = getFormData("form", id);

    return axios({ url, method, data })
      .then((response: object) => {
        console.log(response);

        loaded.value = true;
      })
      .catch((exception) =>
        appStore.setDangerFlashMessage(exception.response.data.message)
      );
  };

  const deleteProduct = async (id: string) =>
    axios
      .delete(`/product/${id}`)
      .then((response: object) => {
        console.log(response);
      })
      .catch((exception) =>
        appStore.setDangerFlashMessage(exception.response.data.message)
      );

  return {
    modifyProduct,
    deleteProduct,
  };
});

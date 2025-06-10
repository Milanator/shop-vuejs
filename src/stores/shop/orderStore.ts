import { defineStore } from "pinia";
import axios from "@/plugins/axios";
import { ref } from "vue";

export const useOrderStore = defineStore("shop/order", () => {
  const order = ref<object>(undefined);
  const loaded = ref<Boolean>(false);
  const errors = ref<string | undefined>(undefined);

  const storeOrder = async () => {
    errors.value = undefined;

    try {
      return axios.get(`/order`).then((response: object) => {
        loaded.value = true;
      });
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
    }
  };

  return {
    order,
    storeOrder,
  };
});

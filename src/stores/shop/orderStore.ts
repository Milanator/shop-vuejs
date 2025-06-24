import { defineStore } from "pinia";
import axios from "@/plugins/axios";
import { ref } from "vue";
import type { Order } from "@/types/OrderType";

export const useOrderStore = defineStore("shop/order", () => {
  const orders = ref<Order[] | undefined>(undefined);
  const loaded = ref<Boolean>(false);
  const errors = ref<string | undefined>(undefined);

  const setOrders = async () => {
    errors.value = undefined;

    try {
      return axios.get(`/order`).then((response: object) => {
        orders.value = response.data.data;

        loaded.value = true;
      });
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
    }
  };

  return {
    loaded,
    orders,
    setOrders,
  };
});

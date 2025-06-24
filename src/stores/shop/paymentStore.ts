import { defineStore } from "pinia";
import axios from "@/plugins/axios";
import { ref } from "vue";

export const usePaymentStore = defineStore("shop/payment", () => {
  const errors = ref<string | undefined>(undefined);

  const makePayment = async () => {
    try {
      return axios
        .post("/payment/checkout", {
          success_url: import.meta.env.VITE_CLIENT_URL + "/order/success",
          cancel_url: import.meta.env.VITE_CLIENT_URL + "/order/cancel",
          lineItems: [
            {
              price_data: {
                currency: "eur",
                product_data: {
                  name: "Produkt 1",
                },
                unit_amount: 1500,
              },
              quantity: 1,
            },
          ],
        })
        .then((response) => {
          location.href = response.data.data.url;
        });
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
    }
  };

  return {
    makePayment,
    errors,
  };
});

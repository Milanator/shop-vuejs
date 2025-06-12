import axios from "@/plugins/axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("admin/auth", () => {
  const loaded = ref<Boolean>(false);
  const errors = ref<string | undefined>(undefined);
  const email = ref<String>(undefined);
  const password = ref<String>(undefined);

  const login = async (id: string) => {
    errors.value = undefined;

    try {
      axios
        .post(`/auth/login`, {
          email: email.value,
          password: password.value,
        })
        .then((response: object) => {
          console.log(response);

          loaded.value = true;
        });
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
    }
  };

  return {
    email,
    password,
    login,
  };
});

import axios from "@/plugins/axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("admin/auth", () => {
  const loaded = ref<Boolean>(false);
  const errors = ref<string | undefined>(undefined);
  const email = ref<String>(undefined);
  const password = ref<String>(undefined);
  const user = ref<object | undefined>(undefined);

  const setAuthUser = async () => {
    errors.value = undefined;

    try {
      axios.get(`/auth/user`).then((response: object) => {
        console.log(response);
        user.value = response.data.data;

        loaded.value = true;
      });
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
    }
  };

  const login = async () => {
    errors.value = undefined;

    try {
      axios
        .post(`/auth/login`, {
          email: email.value,
          password: password.value,
        })
        .then((response: object) => {
          console.log(response);
          user.value = response.data.data;

          loaded.value = true;
        });
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
    }
  };

  const logout = async () => {
    errors.value = undefined;

    try {
      axios.post(`/auth/logout`).then((response: object) => {
        user.value = undefined;

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
    logout,
    setAuthUser,
    user,
  };
});

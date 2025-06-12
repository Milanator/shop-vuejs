import axios from "@/plugins/axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("admin/auth", () => {
  const loaded = ref<Boolean>(false);
  const errors = ref<string | undefined>(undefined);
  const email = ref<String>(undefined);
  const password = ref<String>(undefined);
  const password_confirmation = ref<String>(undefined);
  const user = ref<object | undefined>(undefined);

  const router = useRouter();

  const clearErrors = () => (errors.value = undefined);

  const userCallback = (data: object | undefined) => {
    console.log(data);

    user.value = data;

    loaded.value = true;
  };

  const setAuthUser = async () => {
    clearErrors();

    try {
      axios
        .get(`/auth/user`)
        .then((response: object) => userCallback(response.data.data));
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
    }
  };

  const login = async () => {
    clearErrors();

    try {
      axios
        .post(`/auth/login`, {
          email: email.value,
          password: password.value,
        })
        .then((response: object) => {
          userCallback(response.data.data);

          router.push({ name: "AdminProductIndex" });
        });
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
    }
  };

  const logout = async () => {
    clearErrors();

    try {
      axios.post(`/auth/logout`).then((response: object) => {
        userCallback(undefined);

        router.push({ name: "Login" });
      });
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
    }
  };

  const register = () => {
    clearErrors();

    try {
      axios
        .post(`/auth/register`, {
          email: email.value,
          password: password.value,
          password_confirmation: password_confirmation.value,
        })
        .then((response: object) => {
          userCallback(response.data.data);

          router.push({ name: "Login" });
        });
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
    }
  };

  return {
    email,
    password_confirmation,
    password,
    login,
    logout,
    register,
    setAuthUser,
    user,
  };
});

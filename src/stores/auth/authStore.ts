import axios from "@/plugins/axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAppStore } from "../appStore";

export const useAuthStore = defineStore("auth", () => {
  const loaded = ref<Boolean>(false);
  const errors = ref<string | undefined>(undefined);
  const email = ref<String>(undefined);
  const password = ref<String>(undefined);
  const password_confirmation = ref<String>(undefined);
  const user = ref<object | undefined>(undefined);
  const isAuth = ref<Boolean>(false);

  const LS_KEY = "authUser";

  const router = useRouter();

  const appStore = useAppStore();

  const clearErrors = () => (errors.value = undefined);

  const userCallback = (data: object | undefined) => {
    console.log(data);

    localStorage.setItem(LS_KEY, data ? JSON.stringify(data) : "");

    isAuth.value = !!data;

    user.value = data;

    loaded.value = true;
  };

  const getLocalAuthUser = () => {
    const data = localStorage.getItem(LS_KEY);

    return data ? JSON.parse(data) : undefined;
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

          appStore.setSuccessFlashMessage("Prihlásený");

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

        appStore.setSuccessFlashMessage("Odhlásený");

        router.push({ name: "Login" });
      });
    } catch (err: any) {
      errors.value = err.message || "Neznáma chyba";
    }
  };

  const register = (): Promise<void> => {
    clearErrors();

    return axios
      .post(`/auth/register`, {
        email: email.value,
        password: password.value,
        password_confirmation: password_confirmation.value,
      })
      .then((response: object) => {
        userCallback(undefined);

        appStore.setSuccessFlashMessage("Registrácia prebehla úspešne.");

        router.push({ name: "Login" });
      })
      .catch((exception) => {
        errors.value = exception.message || "Neznáma chyba";
      });
  };

  const resetPasswordRequest = (): Promise<void> => {
    clearErrors();

    return axios
      .post(`/auth/reset-password/request`, {
        email: email.value,
      })
      .then((response: object) => {
        userCallback(undefined);

        appStore.setSuccessFlashMessage(
          "Na email Vám prišiel link pre zresetovanie hesla."
        );

        router.push({ name: "Login" });
      })
      .catch((exception) => {
        errors.value = exception.message || "Neznáma chyba";
      });
  };

  const resetPasswordNew = (): Promise<void> => {
    clearErrors();

    return axios
      .post(`/auth/reset-password/new`, {
        password: password.value,
        password_confirmation: password_confirmation.value,
      })
      .then((response: object) => {
        userCallback(undefined);

        appStore.setSuccessFlashMessage("Reset hesla prebehol úspešne.");

        router.push({ name: "Login" });
      })
      .catch((exception) => {
        errors.value = exception.message || "Neznáma chyba";
      });
  };

  return {
    isAuth,
    email,
    password_confirmation,
    password,
    login,
    logout,
    register,
    resetPasswordRequest,
    resetPasswordNew,
    setAuthUser,
    getLocalAuthUser,
    user,
  };
});

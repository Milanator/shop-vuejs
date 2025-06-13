import axios from "@/plugins/axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAppStore } from "./../appStore";
import { getLocalStorage, getQueryParam, setLocalStorage } from "@/utils.ts";

export const useAuthStore = defineStore("auth", () => {
  const loaded = ref<Boolean>(false);
  const email = ref<String>(undefined);
  const password = ref<String>(undefined);
  const password_confirmation = ref<String>(undefined);
  const user = ref<object | undefined>(undefined);
  const isAuth = ref<Boolean>(false);

  const LS_KEY = "authUser";

  const router = useRouter();

  const appStore = useAppStore();

  const clearErrors = () => appStore.forgetFlashMessages();

  const userCallback = (data: object | undefined) => {
    console.log(data);

    setLocalStorage(LS_KEY, data || "");

    isAuth.value = !!data;

    user.value = data;

    loaded.value = true;
  };

  const getLocalAuthUser = () => getLocalStorage(LS_KEY) || undefined;

  const setAuthUser = async () => {
    clearErrors();

    return axios
      .get(`/auth/user`)
      .then((response: object) => userCallback(response.data.data))
      .catch((exception) => {
        appStore.setDangerFlashMessage(exception.response.data.message);
      });
  };

  const login = async (): Promise<void> => {
    clearErrors();

    return axios
      .post(`/auth/login`, {
        email: email.value,
        password: password.value,
      })
      .then((response: object) => {
        userCallback(response.data.data);

        appStore.setSuccessFlashMessage("Prihlásený");

        router.push({ name: "AdminProductIndex" });
      })
      .catch((exception) => {
        appStore.setDangerFlashMessage(exception.response.data.message);
      });
  };

  const logout = async (): Promise<void> => {
    clearErrors();

    return axios
      .post(`/auth/logout`)
      .then((response: object) => {
        userCallback(undefined);

        appStore.setSuccessFlashMessage("Odhlásený");

        router.push({ name: "Login" });
      })
      .catch((exception) => {
        appStore.setDangerFlashMessage(exception.response.data.message);
      });
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
        appStore.setDangerFlashMessage(exception.response.data.message);
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
        appStore.setDangerFlashMessage(exception.response.data.message);
      });
  };

  const resetPasswordNew = (): Promise<void> => {
    clearErrors();

    return axios
      .post(`/auth/reset-password/new`, {
        password: password.value,
        password_confirmation: password_confirmation.value,
        token: getQueryParam(location.href, "token"),
      })
      .then((response: object) => {
        userCallback(undefined);

        appStore.setSuccessFlashMessage("Reset hesla prebehol úspešne.");

        router.push({ name: "Login" });
      })
      .catch((exception) => {
        appStore.setDangerFlashMessage(exception.response.data.message);
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

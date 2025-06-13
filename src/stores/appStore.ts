import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  const flashMessages = ref<object[]>([]);

  const setSuccessFlashMessage = (text: String) =>
    flashMessages.value.push({ text, type: "success" });

  const setDangerFlashMessage = (text: String) =>
    flashMessages.value.push({ text, type: "danger" });

  const forgetFlashMessages = () => (flashMessages.value = []);

  return {
    flashMessages,
    setSuccessFlashMessage,
    setDangerFlashMessage,
    forgetFlashMessages,
  };
});
